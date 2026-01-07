import React, { PropsWithChildren, useMemo } from 'react'
import { NextPage } from 'next'
import { useContactsRepository } from '~/src/api/contacts/ContactsRepository'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import { Loading } from '~/components/Loading/Loading'
import { ContactCardPerson } from '~/components/Contact/ContactCard'
import { ContactCardsWrapper } from '~/components/Contact/ContactCardsWrapper'
import { useAuth } from '~/src/api/auth/context/AuthContext'

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const TabText: React.FC<PropsWithChildren> = ({ children }) => (
  <Typography
    variant={'h3'}
    sx={{
      fontSize: {
        xs: '1rem', md: '1.5rem'
      }
    }}>
    {children}
  </Typography>
)

export const Contacts: NextPage = () => {
  const contactsRepository = useContactsRepository()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const { data: contactData, isLoading: isContactsLoading } = useQuery('contacts', contactsRepository.fetchContactsData)
  const { data: troopContactData, isLoading: isTroopContactsLoading } = useQuery('troop-contacts', () => contactsRepository.fetchTroopContactCards())

  const contacts = useMemo(() => contactData?.contact?.data?.attributes?.contactCards, [contactData])
  const troopContacts = useMemo(() => troopContactData?.troopContact?.data?.attributes?.troop, [troopContactData])

  const authContext = useAuth()
  const isUserLoading = authContext?.auth?.isLoading
  const user = authContext?.auth?.user ?? null

  if (isContactsLoading || isTroopContactsLoading || isUserLoading) {
    return <Loading />
  }

  const convertToContacCardsProps = (originalContacts: typeof contacts, mainContacts: boolean): ContactCardPerson[] => {
    return originalContacts?.map((original, index) => ({
      ...original,
      photo: {
        url: original?.photo?.data?.attributes?.url ?? null as string | null
      },
      phone: (user || mainContacts || index < 2) ? (original?.phone ?? null as string | null) : (null as string | null)
    } as ContactCardPerson)) ?? []
  }

  return (
    <Container maxWidth={'lg'} disableGutters>
      <Typography pt={{ xs: 2, md: 7 }} variant={'h1'} fontSize={'2rem'}>Kontakty</Typography>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label={<TabText>Hlavní</TabText>} {...a11yProps(0)} />
            {
              troopContacts?.map(troopContact => {
                if (!troopContact) return
                return <Tab key={troopContact.id} label={<TabText>{troopContact.name}</TabText>} {...a11yProps(troopContact.id)} />
              })
            }
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {contacts && <ContactCardsWrapper contactCards={convertToContacCardsProps(contacts, true)} /> }
        </TabPanel>
        {
          troopContacts && troopContacts.map(troopContact => {
            if (!troopContact) return
            return (
              <TabPanel value={value} index={troopContact.id} key={troopContact.id}>
                <ContactCardsWrapper contactCards={convertToContacCardsProps(troopContact.contactCards, false)} />
              </TabPanel>
            )
          })
        }
      </Box>
    </Container>
  )
}

export default Contacts

export const getStaticProps = async () => {
  const contactsRepository = useContactsRepository()
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery('contacts', contactsRepository.fetchContactsData)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 120, // In seconds
  }
}


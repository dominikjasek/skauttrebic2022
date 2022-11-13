import React from 'react'
import { NextPage } from 'next'
import { useContactsRepository } from '~/src/api/contacts/ContactsRepository'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { Box, Container, Stack, Typography } from '@mui/material'
import { Loading } from '~/components/Loading/Loading'
import { ContactCard, ContactCardPerson } from '~/components/Contact/ContactCard'

export const Contacts: NextPage = () => {
  const contactsRepository = useContactsRepository()
  const { data, isLoading } = useQuery('contacts', contactsRepository.fetchContactsData)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container maxWidth={'lg'}>
      <Typography pt={{ xs: 2, md: 7 }} variant={'h1'} fontSize={'2rem'}>Kontakty</Typography>
      <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
        {
          data?.contact?.data?.attributes?.contactCards &&
            data.contact.data.attributes.contactCards.map((contact, i) =>
              <Box
                key={i}
                minWidth={345}
                sx={{ m: 1 }}
              >
                {
                  contact &&
                    <ContactCard person={{
                      ...contact,
                      photo: {
                        url: contact!.photo!.data!.attributes!.url as string
                      }
                    } as ContactCardPerson} />
                }
              </Box>
            )
        }
      </Stack>
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


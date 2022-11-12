import React from 'react'
import { NextPage } from 'next'
import { useContactsRepository } from '~/src/api/contacts/ContactsRepository'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { Box, Container, Stack } from '@mui/material'
import { Loading } from '~/components/Loading/Loading'
import { ContactCard, ContactCardPerson } from '~/components/Contact/ContactCard'

export const Contacts: NextPage = (props) => {
  const contactsRepository = useContactsRepository()
  const { data, isLoading } = useQuery('contacts', contactsRepository.fetchContactsData)

  console.log('data', data?.contact?.data)

  if (isLoading) {
    return <Loading />
  }

  return (
    <Container maxWidth={'lg'}>
      <Stack>
        {
          data?.contact?.data?.attributes?.contactCards &&
            data.contact.data.attributes.contactCards.map(contact =>
              <Box>
                <ContactCard person={contact as ContactCardPerson} />
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


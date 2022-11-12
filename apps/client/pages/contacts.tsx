import React from 'react'
import { NextPage } from 'next'
import { useContactsRepository } from '~/src/api/contacts/ContactsRepository'
import { dehydrate, QueryClient, useQuery } from 'react-query'

export const Contacts: NextPage = (props) => {
  const contactsRepository = useContactsRepository()
  const { data, isLoading } = useQuery('contacts', contactsRepository.fetchContactsData)

  console.log('data', data)

  return (
    <div>contacts</div>
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


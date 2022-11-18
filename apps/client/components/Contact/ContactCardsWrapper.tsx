import React from 'react'
import { ContactCard, ContactCardPerson } from '~/components/Contact/ContactCard'
import { Box, Stack } from '@mui/material'

interface ContactCardsWrapperProps {
    contactCards: ContactCardPerson[]
}

export const ContactCardsWrapper: React.FC<ContactCardsWrapperProps> = ({ contactCards }) => {
  return (
    <Stack direction={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
      {
        contactCards &&
              contactCards.map((contact, i) =>
                <Box
                  key={i}
                  minWidth={345}
                  sx={{ m: 1 }}
                >
                  { contact && <ContactCard person={contact} /> }
                </Box>
              )
      }
    </Stack>
  )
}

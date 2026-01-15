import React from 'react'
import { ContactCard, ContactCardPerson } from '~/components/Contact/ContactCard'
import { Box, Stack } from '@mui/material'

interface ContactCardsWrapperProps {
    contactCards: ContactCardPerson[]
}

export const ContactCardsWrapper: React.FC<ContactCardsWrapperProps> = ({ contactCards }) => {
  return (
    <Stack direction={'row'}
      sx={{
        flexWrap: 'wrap',
        justifyContent: { xs: 'center', sm: 'space-evenly' }
      }}
    >
      {
        contactCards &&
              contactCards.map((contact, i) =>
                <Box
                  key={i}
                  sx={{
                    my: 1,
                    mx: { xs: 0, sm: 1 },
                    // Full width on mobile (xs), fixed width on small-tablets and up (sm)
                    width: { xs: '100%', sm: 345 },
                    maxWidth: '100%'
                  }}
                >
                  { contact && <ContactCard person={contact} /> }
                </Box>
              )
      }
    </Stack>
  )
}

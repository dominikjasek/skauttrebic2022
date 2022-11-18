import React from 'react'
import { TroopEntity } from '~/src/api/gql/graphql'
import {
  Accordion, AccordionDetails, AccordionSummary,
  Box,
  Checkbox,
  Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useScreen } from '~/src/utility/use-screen'

interface PostsFilterProps {
    troops: TroopEntity[]
    selectedTroopIds: number[]
    onTroopsChanged: (selectedTroopIds: number[]) => void
}

export const PostsFilter: React.FC<PostsFilterProps> = ({ troops, selectedTroopIds, onTroopsChanged }) => {
  const { isMobileScreen } = useScreen()

  return (
    <Box
      sx={{
        mr: { xs: 0, md: 2 },
        mb: 2
      }}
    >

      <Accordion
        defaultExpanded={!isMobileScreen}
        sx={{
          boxShadow: 1,
          '&:hover': {
            boxShadow: 3
          }
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ display: 'flex', alignItems: 'center', ml: 1, mr: 2 }} variant={'h5'}>Filtr</Typography>

        </AccordionSummary>
        <AccordionDetails>
          {troops.map(troop => {
            const color = troop.attributes?.color ?? 'primary'
            return (
              <Box key={troop.id}>
                <Typography>
                  <Checkbox onChange={(_e, newValue) => {
                    if (newValue) {
                      onTroopsChanged([...selectedTroopIds, troop.id])
                    } else (
                      onTroopsChanged([...selectedTroopIds].filter(v => v !== troop.id))
                    )
                  }}
                  checked={selectedTroopIds.includes(troop.id)}
                  sx={{ color, '&.Mui-checked': { color } }}
                  />
                  <Typography component={'span'} sx={{ verticalAlign: 'middle' }}>{troop.attributes?.name}</Typography>
                </Typography>
              </Box>
            )}
          )}
        </AccordionDetails>
      </Accordion>
    </Box>

  )
}

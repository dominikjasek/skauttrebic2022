import React, { useState } from 'react'
import { TroopEntity } from '~/src/api/gql/graphql'
import { Box, Card, Checkbox, Collapse, IconButton, IconButtonProps, Stack, styled, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { useScreen } from '~/src/utility/use-screen'

interface PostsFilterProps {
    troops: TroopEntity[]
    selectedTroopIds: number[]
    onTroopsChanged: (selectedTroopIds: number[]) => void
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const PostsFilter: React.FC<PostsFilterProps> = ({ troops, selectedTroopIds, onTroopsChanged }) => {
  const { isMobileScreen } = useScreen()
  console.log('isMobileScreen', isMobileScreen)

  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ p: 2, mr: { xs: 0, md: 2 }, mb: 2 }}>
      <Stack direction={'row'}>
        <Typography sx={{ display: 'flex', alignItems: 'center', ml: 1, mr: 2 }} variant={'h5'}>Filtr</Typography>
        {isMobileScreen && <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>}

      </Stack>
      <Collapse in={expanded || !isMobileScreen} timeout="auto" unmountOnExit>
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
      </Collapse>

    </Card>
  )
}

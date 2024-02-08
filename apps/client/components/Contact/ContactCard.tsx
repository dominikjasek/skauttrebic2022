import {
  Card,
  CardContent,
  CardMedia,
  Collapse, IconButton, IconButtonProps,
  Stack,
  styled,
  Typography
} from '@mui/material'
import React, { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface ContactCardPerson {
    id: string
    name: string
    email: string
    about: string
    nickname: string
    phone: string
    role: string
    photo: {
        url: string | null
    }
}

interface ContactCardProps {
    person: ContactCardPerson
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const ContactCard: React.FC<ContactCardProps> = ({ person }) => {
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      {
        person.photo.url &&
          <CardMedia
            component="img"
            height="300"
            image={person.photo.url}
          />
      }
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography variant="h5" component="div">
          {person.name} { person.nickname ? `(${person.nickname})` : ''}
        </Typography>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Stack sx={{ mt: 1 }} color="text.secondary">
            <Stack direction={'row'} gap={2}>
              <PersonIcon />
              <Typography>{person.role}</Typography>
            </Stack>
            <Stack direction={'row'} gap={2}>
              <LocalPhoneIcon />
              <Typography>{person.phone}</Typography>
            </Stack>
            <Stack direction={'row'} gap={2}>
              <EmailIcon />
              <Typography>{person.email}</Typography>
            </Stack>
          </Stack>
          {
            person.about &&
            <Stack justifyContent={'center'} alignItems={'center'}>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </Stack>
          }
        </Stack>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ paddingBottom: 0 }}>
            <Typography dangerouslySetInnerHTML={{ __html: person.about }}>
            </Typography>
          </CardContent>
        </Collapse>
      </CardContent>
    </Card>
  )
}

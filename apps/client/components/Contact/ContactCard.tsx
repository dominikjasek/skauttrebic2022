import React from 'react'

export interface ContactCardPerson {
    id: string
    name: string
    email: string
    about: string
    nickname: string
    phone: string
    role: string
}

interface ContactCardProps {
    person: ContactCardPerson
}

export const ContactCard: React.FC<ContactCardProps> = ({ person }) => {
  return (
    <div>{person.name}</div>
  )
}

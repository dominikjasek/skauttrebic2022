const Routes = {
  home: '/',
  confirmRegistration: '/potvrzeni-registrace',
  forgotPassword: '/obnoveni-hesla',
  login: '/prihlasit-se',
  posts: '/aktuality',
  post: '/aktuality/:postId*',
  clubRoom: '/klubovna',
  photos: '/fotografie',
  contacts: '/kontakty',
  profile: '/profil',
  unsubscribe: '/odhlasit-odber',
  totem: '/trebicskytotem',
  leader: '/vedouci',
  memberRegistration: '/registrace-clenu',
  calendarCentre: '/kalendar-stredisko',
  calendarClubroom: '/kalendar-klubovna',
  error403: '/403'
}

const routes = [
  {
    source: Routes.home,
    destination: '/'
  },
  {
    source: Routes.confirmRegistration,
    destination: '/auth/confirmRegistration'
  },
  {
    source: Routes.forgotPassword,
    destination: '/auth/forgotPassword'
  },
  {
    source: Routes.login,
    destination: '/auth/login'
  },
  {
    source: Routes.posts,
    destination: '/posts'
  },
  {
    source: Routes.post,
    destination: '/posts/:postId*'
  },
  {
    source: Routes.clubRoom,
    destination: '/clubroom'
  },
  {
    source: Routes.photos,
    destination: '/photos',
  },
  {
    source: Routes.contacts,
    destination: '/contacts'
  },
  {
    source: Routes.profile,
    destination: '/profile'
  },
  {
    source: Routes.unsubscribe,
    destination: '/unsubscribe'
  },
  {
    source: Routes.totem,
    destination: '/totem'
  },
  {
    source: Routes.leader,
    destination: '/leader'
  },
  {
    source: Routes.memberRegistration,
    destination: '/memberRegistration'
  },
  {
    source: Routes.error403,
    destination: '/403'
  },
  {
    source: Routes.calendarCentre,
    destination: '/calendarCentre'
  },
  {
    source: Routes.calendarClubroom,
    destination: '/calendarClubroom'
  }
]

module.exports = { routes, Routes }

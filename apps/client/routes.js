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
  totem: '/trebicskytotem'
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
  }
]

module.exports = { routes, Routes }

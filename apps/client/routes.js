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
  }
]

module.exports = { routes, Routes }

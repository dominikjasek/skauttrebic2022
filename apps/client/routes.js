const Routes = {
  home: '/',
  confirmRegistration: '/potvrzeni-registrace',
  login: '/prihlasit-se',
  posts: '/aktuality',
  clubRoom: '/klubovna',
  photos: '/fotografie',
  contact: '/kontakt',
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
    source: Routes.login,
    destination: '/auth/login'
  },
  {
    source: Routes.posts,
    destination: '/posts'
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
    source: Routes.contact,
    destination: '/contact'
  }
]

// eslint-disable-next-line no-undef
module.exports = { routes, Routes }

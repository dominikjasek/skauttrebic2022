const Routes = {
  home: '/',
  confirmRegistration: '/potvrzeni-registrace',
  login: '/prihlasit-se',
  posts: '/aktuality',
  post: '/aktuality/:postId*',
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
    source: Routes.contact,
    destination: '/contact'
  }
]

module.exports = { routes, Routes }

import Homepage from '~/pages/index'

Vue.use(Router)

export async function createRouter() {

  return new Router({
    // scrollBehavior(to, from, savedPosition) {
    //   const defaultPosition = false
    //   const scrollTopPosition = { x: 0, y: 0 }
    //   let position = defaultPosition
    //   if (savedPosition) {
    //     position = savedPosition
    //   }
    //   else if (to.hash && document.querySelector(to.hash)) {
    //     position = { selector: to.hash }
    //   }
    //   position = scrollTopPosition

    //   return new Promise((resolve) => {
    //     resolve(position)
    //   })
    // },
    mode: 'history',
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: Homepage
        }
    ]
  })
}
import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Ranking from '@/views/Report/Ranking'
import SerieList from '@/views/Serie/SerieList'
import GameList from '@/views/Game/GameList'
import PlayerList from '@/views/Player/PlayerList'
import UserList from '@/views/User/UserList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        }
      ]
    },
    {
      path: '/',
      redirect: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/',
      redirect: '/serie/list',
      name: 'SerieList',
      component: SerieList
    },
    {
      path: '/',
      redirect: '/game/list',
      name: 'GameList',
      component: GameList
    },
    {
      path: '/',
      redirect: '/player/list',
      name: 'PlayerList',
      component: PlayerList
    },
    {
      path: '/',
      redirect: '/user/list',
      name: 'UserList',
      component: UserList
    }
  ]
})

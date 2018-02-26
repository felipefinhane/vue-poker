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
import PlayerForm from '@/views/Player/PlayerForm'
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
      path: '/ranking',
      redirect: '/ranking',
      name: 'Ranking',
      component: Full,
      children: [
        {
          path: '/ranking',
          name: 'Ranking',
          component: Ranking
        }
      ]
    },
    {
      path: '/serie',
      redirect: '/serie/list',
      name: 'Campeonato',
      component: Full,
      children: [
        {
          path: '/serie/list',
          name: 'Listagem',
          component: SerieList
        },
        {
          path: '/serie/list',
          name: 'Listagem',
          component: SerieList
        }
      ]
    },
    {
      path: '/game',
      redirect: '/game/list',
      name: 'Partida',
      component: Full,
      children: [
        {
          path: '/game/list',
          name: 'Listagem',
          component: GameList
        }
      ]
    },
    {
      path: '/player',
      redirect: '/player/list',
      name: 'Participantes',
      component: Full,
      children: [
        {
          path: '/player/list',
          name: 'Listagem',
          component: PlayerList
        },
        {
          path: '/player/new',
          name: 'Novo',
          component: PlayerForm
        }
      ]
    },
    {
      path: '/user',
      redirect: '/user/list',
      name: 'Usuario',
      component: Full,
      children: [
        {
          path: '/user/list',
          name: 'Listagem',
          component: UserList
        }
      ]
    }
  ]
})

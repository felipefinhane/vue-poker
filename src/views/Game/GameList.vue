<template>
  <b-card :header="caption">
    <button type="button" class="btn btn-primary btn-sm" href="#/player/new">Nova Partida</button>
    <b-table :hover="hover" :striped="striped" :bordered="bordered" :small="small" :fixed="fixed" responsive="sm" :items="items" :fields="fields" :current-page="currentPage" :per-page="perPage">
      <template slot="status" slot-scope="data">
        <b-badge :variant="getBadge(data.item.status)">{{data.item.status}}</b-badge>
      </template>
    </b-table>
    <nav>
      <b-pagination :total-rows="getRowCount(items)" :per-page="perPage" v-model="currentPage" prev-text="Prev" next-text="Next" hide-goto-end-buttons/>
    </nav>
  </b-card>
</template>

<script>
  export default {
    name: 'GameList',
    props: {
      caption: {
        type: String,
        default: 'Partidas'
      },
      hover: {
        type: Boolean,
        default: false
      },
      striped: {
        type: Boolean,
        default: false
      },
      bordered: {
        type: Boolean,
        default: false
      },
      small: {
        type: Boolean,
        default: false
      },
      fixed: {
        type: Boolean,
        default: false
      }
    },
    data: () => {
      return {
        items: [
          {serie: 'Poker Dos amigos 2018/1', date: '2018/02/22', players: '9', winner: 'Pato 01', status: 'Active'},
          {serie: 'Poker Dos amigos 2018/1', date: '2018/02/16', players: '7', winner: 'Pato 02', status: 'Done'},
          {serie: 'Poker Dos amigos 2018/1', date: '2018/02/09', players: '8', winner: 'Pato 03', status: 'Done'},
          {serie: 'Poker Dos amigos 2018/1', date: '2018/02/01', players: '6', winner: 'Pato 02', status: 'Done'},
          {serie: 'Poker Dos amigos 2017/2', date: '2017/12/16', players: '11', winner: 'Pato 05', status: 'Done'}
        ],
        fields: [
          {key: 'serie', label: 'Campeonato'},
          {key: 'date', label: 'Data'},
          {key: 'players', label: 'Participantes'},
          {key: 'winner', label: 'Vencedor'},
          {key: 'status'}
        ],
        currentPage: 1,
        perPage: 10,
        totalRows: 0
      }
    },
    methods: {
      getBadge (status) {
        return status === 'Active' ? 'success'
          : status === 'Inactive' ? 'secondary'
            : status === 'Pending' ? 'warning'
              : status === 'Banned' ? 'danger' : 'primary'
      },
      getRowCount (items) {
        return items.length
      }
    }
  }
</script>

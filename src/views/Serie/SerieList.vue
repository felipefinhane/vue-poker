<template>
  <b-card :header="caption">
    <button type="button" class="btn btn-primary btn-sm" href="#/player/new">Novo Campeonato</button>
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
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   */
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  export default {
    name: 'SerieList',
    props: {
      caption: {
        type: String,
        default: 'Campeonatos'
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
        items: shuffleArray([
          {serie: 'Poker Dos amigos 2018/1', data_inicio: '2018/02/01', data_fim: '2018/06/20', status: 'Active'},
          {serie: 'Poker Dos amigos 2017/2', data_inicio: '2017/08/01', data_fim: '2017/12/15', status: 'Done'},
          {serie: 'Poker Dos amigos 2017/1', data_inicio: '2017/01/26', data_fim: '2017/06/20', status: 'Done'}
        ]),
        fields: [
          {key: 'serie', label: 'Campeonato'},
          {key: 'data_inicio', label: 'Data Início'},
          {key: 'data_fim', label: 'Data Fim'},
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

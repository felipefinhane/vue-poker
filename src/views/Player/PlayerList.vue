<template>
  <b-card :header="caption">
    <button type="button" class="btn btn-primary btn-sm" href="/player/new">Novo Participante</button>
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
    name: 'PlayerList',
    props: {
      caption: {
        type: String,
        default: 'Participantes'
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
          {name: 'Samppa Nori', email: 'email@email.com', registered: '2012/01/01', status: 'Active'},
          {name: 'Estavan Lykos', email: 'email@email.com', registered: '2012/02/01', status: 'Banned'},
          {name: 'Chetan Mohamed', email: 'email@email.com', registered: '2012/02/01', status: 'Inactive'},
          {name: 'Derick Maximinus', email: 'email@email.com', registered: '2012/03/01', status: 'Pending'},
          {name: 'Friderik Dávid', email: 'email@email.com', registered: '2012/01/21', status: 'Active'},
          {name: 'Yiorgos Avraamu', email: 'email@email.com', registered: '2012/01/01', status: 'Active'},
          {name: 'Avram Tarasios', email: 'email@email.com', registered: '2012/02/01', status: 'Banned'},
          {name: 'Quintin Ed', email: 'email@email.com', registered: '2012/02/01', status: 'Inactive'},
          {name: 'Enéas Kwadwo', email: 'email@email.com', registered: '2012/03/01', status: 'Pending'},
          {name: 'Agapetus Tadeáš', email: 'email@email.com', registered: '2012/01/21', status: 'Active'},
          {name: 'Carwyn Fachtna', email: 'email@email.com', registered: '2012/01/01', status: 'Active'},
          {name: 'Nehemiah Tatius', email: 'email@email.com', registered: '2012/02/01', status: 'Banned'},
          {name: 'Ebbe Gemariah', email: 'email@email.com', registered: '2012/02/01', status: 'Inactive'},
          {name: 'Eustorgios Amulius', email: 'email@email.com', registered: '2012/03/01', status: 'Pending'},
          {name: 'Leopold Gáspár', email: 'email@email.com', registered: '2012/01/21', status: 'Active'},
          {name: 'Pompeius René', email: 'email@email.com', registered: '2012/01/01', status: 'Active'},
          {name: 'Paĉjo Jadon', email: 'email@email.com', registered: '2012/02/01', status: 'Banned'},
          {name: 'Micheal Mercurius', email: 'email@email.com', registered: '2012/02/01', status: 'Inactive'},
          {name: 'Ganesha Dubhghall', email: 'email@email.com', registered: '2012/03/01', status: 'Pending'},
          {name: 'Hiroto Šimun', email: 'email@email.com', registered: '2012/01/21', status: 'Active'},
          {name: 'Vishnu Serghei', email: 'email@email.com', registered: '2012/01/01', status: 'Active'},
          {name: 'Zbyněk Phoibos', email: 'email@email.com', registered: '2012/02/01', status: 'Banned'},
          {name: 'Einar Randall', email: 'email@email.com', registered: '2012/02/01', status: 'Inactive'},
          {name: 'Félix Troels', email: 'email@email.com', registered: '2012/03/21', status: 'Active'},
          {name: 'Aulus Agmundr', email: 'email@email.com', registered: '2012/01/01', status: 'Pending'}
        ]),
        fields: [
          {key: 'name', label: 'Nome'},
          {key: 'email'},
          {key: 'registered', label: 'Registro'},
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

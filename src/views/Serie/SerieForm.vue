<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>Cadastro de Campeonato</strong>
          </div>
          <b-form-group
            description="Por favor, coloque o nome do Campeonato."
            label="Campeonato"
            label-for="serie"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="serie" type="text" placeholder="Campeonato"></b-form-input>
          </b-form-group>
          <b-form-group
            description="Por favor, coloque data de início"
            label="Data Início"
            label-for="init-date"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="init-date" type="date" placeholder="Data Início"></b-form-input>
          </b-form-group>
          <b-form-group
            description="Por favor, coloque a data final."
            label="Data Fim"
            label-for="end-date"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="end-date" type="date" placeholder="Data Fim"></b-form-input>
          </b-form-group>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Salvar</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Cancelar</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'SerieForm',
  data () {
    return {
      selected: [] // Must be an array reference!
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>

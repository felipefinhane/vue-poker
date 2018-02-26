<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="12">
        <b-card>
          <div slot="header">
            <strong>Cadastro de Participantes</strong>
          </div>
          <b-form-group
            description="Por favor, coloque o nome do participante."
            label="Nome"
            label-for="name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="name" type="text" placeholder="Nome"></b-form-input>
          </b-form-group>
          <b-form-group
            description="Por favor, coloque o email"
            label="Email"
            label-for="email"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="email" type="email" placeholder="Email"></b-form-input>
          </b-form-group>
          <b-form-group
            label="Usuario"
            label-for="username"
            :label-cols="3"
            :horizontal="true">
            <b-form-input plaintext id="username" type="text" value="Email"></b-form-input>
          </b-form-group>
          <b-form-group
            description="Por favor, coloque a senha"
            label="Senha"
            label-for="password"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="password" type="password" placeholder="Senha"></b-form-input>
          </b-form-group>
          <b-form-group
            description="Por favor, coloque o telefone"
            label="Telefone"
            label-for="phone"
            :label-cols="3"
            :horizontal="true">
            <b-form-input id="phone" type="phone" placeholder="Número do telefone"></b-form-input>
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
  name: 'PlayerForm',
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

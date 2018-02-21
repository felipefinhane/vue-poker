<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <div slot="header">
            <i class="fa fa-edit"></i> Cadastro de Participante
            <div class="card-actions">
              <a href="#" class="btn btn-setting"><i class="icon-settings"></i></a>
              <b-btn class="btn btn-minimize" v-b-toggle.collapse1><i class="icon-arrow-up"></i></b-btn>
              <a href="#" class="btn btn-close"><i class="icon-close"></i></a>
            </div>
          </div>
          <b-collapse id="collapse1" visible>
            <b-card-body>
              <b-form-group label="Prepended text" label-for="elementsEmail" description="Here's some help text">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input id="elementsEmail" type="email"></b-form-input>
                </b-input-group>
              </b-form-group>
              <b-form-group label="Appended text" label-for="elementsAppend" description="Here's some help text">
                <b-input-group>
                  <b-form-input id="elementsAppend" type="text"></b-form-input>
                  <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-form-group label="Append and prepend" label-for="elementsPrependAppend" description="Here's some help text">
                <b-input-group>
                  <b-input-group-prepend>
                    <b-input-group-text>$</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input id="elementsPrependAppend" type="text"></b-form-input>
                  <b-input-group-append><b-input-group-text>.00</b-input-group-text></b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-form-group label="Append with button" label-for="elementsAppendButton" description="Here's some help text">
                <b-input-group>
                  <b-form-input id="elementsAppendButton" type="text"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="primary">Go!</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <b-form-group label="Two-buttons append" label-for="elementsTwoButtons">
                <b-input-group>
                  <b-form-input id="elementsTwoButtons" type="text"></b-form-input>
                  <b-input-group-append>
                    <b-button variant="primary">Search</b-button>
                    <b-button variant="danger">Options</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
              <div class="form-actions">
                <b-button type="submit" variant="primary">Save changes</b-button>
                <b-button type="button" variant="secondary">Cancel</b-button>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'forms',
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

<template>
  <div>
    <b-container>
      <b-form @submit.prevent="submit" @reset="reset">
        <b-row>
          <b-col md="12">
            <b-form-group label="Username:" label-for="username">
              <b-form-input id="username" type="text" v-model="form.username" required placeholder="Enter a username"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <b-form-group label="Password:" label-for="password">
              <b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter a password"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

      </b-form>
    </b-container>
    <div>
      <p>JWT: {{ jwt }}</p>
      <p>Username: {{ jwtSubject }}</p>
      <p>Role: {{ jwtRole }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  
  computed: {
    ...mapGetters([
      'jwt',
      'jwtSubject',
      'jwtRole'
    ])
  },

  methods: {
    ...mapActions([
      'login'
    ]),

    submit() {
      this.$store.dispatch('login', this.form)
      //.then(() => this.$router.push('/'))
      // eslint-disable-next-line
      .catch(err => console.log(err))
    },

    reset() {
      this.form.username = '';
      this.form.password = '';
    }
  }
}
</script>
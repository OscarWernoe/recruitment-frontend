<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row>
          <b-col md="12">
            <b-form-group label="Username:" label-for="username">
              <b-form-input id="username" type="text" v-model="signInForm.username" required placeholder="Enter a username"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <b-form-group label="Password:" label-for="password">
              <b-form-input id="password" type="password" v-model="signInForm.password" required placeholder="Enter a password"></b-form-input>
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
      /**
       * An object that holds the user data needed to represent the sign in form.
       * */
      signInForm: {
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

    /**
     * Called when the user clicks the submit button of the form.
     *
     * @event click
     * @param e - the event.
     * */
    onSubmit(e) {
      e.preventDefault();
      this.$store.dispatch('login', this.signInForm)
      //.then(() => this.$router.push('/'))
      // eslint-disable-next-line
      .catch(err => console.log(err))
    },

    /**
     * Called when the user clicks the reset button. Clears all input fields and their corresponding variables.
     * 
     * @event click
     * @param e - the event.
     * */
    onReset(e) {
      e.preventDefault();
      this.signInForm.username = '';
      this.signInForm.password = '';
    }
  }
}
</script>
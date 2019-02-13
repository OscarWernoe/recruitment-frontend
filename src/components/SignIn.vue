<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-row>
          <b-form-group label="Username:" label-for="username">
            <b-form-input id="username" type="text" v-model="signInForm.username" required placeholder="Enter a username"></b-form-input>
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group label="Password:" label-for="password">
            <b-form-input id="password" type="password" v-model="signInForm.password" required placeholder="Enter a password"></b-form-input>
          </b-form-group>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>

      </b-form>
    </b-container>
  </div>
</template>

<script>
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
    methods: {
      /**
       * Called when the user clicks the submit button of the form.
       * Issues a post request with the supplied user input.
       *
       * @public
       * @event click
       * @param e - the event.
       * */
      onSubmit(e) {
        e.preventDefault();
        this.$http.post("http://localhost:8080/session", this.signInForm).then(
          response => {
            // eslint-disable-next-line
            console.log(response);
          },
          error => {
            // eslint-disable-next-line
            console.log(error);
          }
        );
      },
      /**
       * Called when the user clicks the reset button. Clears all input fields and their corresponding variables.
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
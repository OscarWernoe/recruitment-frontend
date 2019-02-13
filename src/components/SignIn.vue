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
        signInForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
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
      onReset(e) {
        e.preventDefault();
        this.signInForm.username = '';
        this.signInForm.password = '';
      }
    }
  }
</script>
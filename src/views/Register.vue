<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset">
        
        <b-row class="p-1">
          <b-col md="2"><label for="name">First Name:</label></b-col>
          <b-col md="10">
            <b-form-input id="name" type="text" v-model="applicant.name" required placeholder="Enter your first name"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="p-1">
          <b-col md="2"><label for="surname">Last Name:</label></b-col>
          <b-col md="10">
            <b-form-input id="surname" type="text" v-model="applicant.surname" required placeholder="Enter your last name"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="p-1">
          <b-col md="2"><label for="email">Email:</label></b-col>
          <b-col md="10">
            <b-form-input id="email" type="email" v-model="applicant.email" required placeholder="Enter your email"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="p-1">
          <b-col md="2"><label for="ssn">SSN:</label></b-col>
          <b-col md="10">
            <b-form-input id="ssn" type="text" v-model="applicant.ssn" required placeholder="Enter your SSN"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="p-1">
          <b-col md="2"><label for="username">Username:</label></b-col>
          <b-col md="10">
            <b-form-input id="username" type="text" v-model="applicant.username" required placeholder="Enter a username"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="p-1">
          <b-col md="2"><label for="password">Password:</label></b-col>
          <b-col md="10">
            <b-form-input id="password" type="password" v-model="applicant.password" required placeholder="Enter a password"></b-form-input>
          </b-col>
        </b-row>
        
        <b-row class="p-1">
          <b-col md="12">
            <b-button class="m-1" type="submit" variant="primary">Submit</b-button>
            <b-button class="m-1" type="reset" variant="danger">Reset</b-button>
          </b-col>
        </b-row>

      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /**
       * An object that represents an applicant.
       * */
      applicant: {
        name: "",
        surname: "",
        email: "",
        ssn: "",
        username: "",
        password: ""
      }
    };
  },
  methods: {
    /**
     * Called when the user clicks the submit button of the form.
     * 
     * @event click
     * @param e - the event.
     * */
    onSubmit(e) {
      e.preventDefault();
      this.$store.dispatch('register', this.applicant)
      .then(() => this.$router.push('/'))
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
      this.applicant.name = '';
      this.applicant.surname = '';
      this.applicant.email = '';
      this.applicant.ssn = '';
      this.applicant.username = '';
      this.applicant.password = '';
    }
  }
};
</script>
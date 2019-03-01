<template>
  <div>
    <b-container>
      <b-form @submit="submit" @reset="reset">
        
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
    <div>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      applicant: {
        name: '',
        surname: '',
        email: '',
        ssn: '',
        username: '',
        password: ''
      },

      message: ''
    };
  },

  methods: {
    submit(e) {
      e.preventDefault();
      axios({url: 'http://localhost:8080/users', data: this.applicant, method: 'POST'})
      .then((response) => {
        if(response.data.success) {
          this.$router.push('/login')
        } else {
          this.message = response.data.message
        }
      })
      // eslint-disable-next-line
      .catch(err => console.log(err))
    },

    reset() {
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
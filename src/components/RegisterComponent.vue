<template>
  <div>
    <b-container fluid>
      <b-form @submit="onSubmit" @reset="onReset">
        
        <b-row>
          <b-form-group label="First Name:" label-for="name">
            <b-form-input id="name" type="text" v-model="applicant.name" required placeholder="Enter your first name"></b-form-input>
          </b-form-group>
        </b-row>
        
        <b-row>
          <b-form-group label="Last Name:" label-for="surname">
            <b-form-input id="surname" type="text" v-model="applicant.surname" required placeholder="Enter your last name"></b-form-input>
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group label="Email:" label-for="email">
            <b-form-input id="email" type="email" v-model="applicant.email" required placeholder="Enter your email"></b-form-input>
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group label="Social Security Number:" label-for="ssn">
            <b-form-input id="ssn" type="text" v-model="applicant.ssn" required placeholder="Enter your social security number"></b-form-input>
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group label="Username:" label-for="username">
            <b-form-input id="username" type="text" v-model="applicant.username" required placeholder="Enter a username"></b-form-input>
          </b-form-group>
        </b-row>

        <b-row>
          <b-form-group label="Password:" label-for="password">
            <b-form-input id="password" type="password" v-model="applicant.password" required placeholder="Enter a password"></b-form-input>
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
      applicant: {
        name: "",
        surname: "",
        email: "",
        ssn: "",
        username: "",
        password: ""
      },
      responses: []
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      this.$http.post("/accounts", this.applicant).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
};
</script>
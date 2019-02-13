<template>
  <div>
    <b-container>
      <b-form @submit="onSubmit" @reset="onReset">
        
        <b-row>
          <b-col md="12">
            <b-form-group label="First Name:" label-for="name">
              <b-form-input id="name" type="text" v-model="applicant.name" required placeholder="Enter your first name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        
        <b-row>
          <b-col md="12">
            <b-form-group label="Last Name:" label-for="surname">
              <b-form-input id="surname" type="text" v-model="applicant.surname" required placeholder="Enter your last name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <b-form-group label="Email:" label-for="email">
              <b-form-input id="email" type="email" v-model="applicant.email" required placeholder="Enter your email"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <b-form-group label="Social Security Number:" label-for="ssn">
              <b-form-input id="ssn" type="text" v-model="applicant.ssn" required placeholder="Enter your SSN"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <b-form-group label="Username:" label-for="username">
              <b-form-input id="username" type="text" v-model="applicant.username" required placeholder="Enter a username"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col md="12">
            <b-form-group label="Password:" label-for="password">
              <b-form-input id="password" type="password" v-model="applicant.password" required placeholder="Enter a password"></b-form-input>
            </b-form-group>
          </b-col>
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
     * Issues a post request with the supplied user input, all the data needed to create a new applicant.
     * @event click
     * @param e - the event.
     * */
    onSubmit(e) {
      e.preventDefault();
      //fixme: URL is hardcoded from the root.
      this.$http.post("http://localhost:8080/users", this.applicant).then(
        response => {
          // eslint-disable-next-line
          console.log(response);
        },
        error => {
          // eslint-disable-next-line
          console.log(error);
        }
      );
    }
  }
};
</script>
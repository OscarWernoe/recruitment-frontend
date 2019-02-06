<template>
  <div id="app">
    <h1>Recruitment Register</h1>
    <div class="form-cont">
      <label>First name</label>
      <input type="text" v-model="applicant.name">
    </div>

    <div class="form-cont">
      <label>Last name</label>
      <input type="text" v-model="applicant.surname">
    </div>

    <div class="form-cont">
      <label>Email</label>
      <input type="text" v-model="applicant.email">
    </div>

    <div class="form-cont">
      <label>Social security number</label>
      <input type="text" v-model="applicant.ssn">
    </div>

    <div class="form-cont">
      <label>Username</label>
      <input type="text" v-model="applicant.username">
    </div>

    <div class="form-cont">
      <label>Password</label>
      <input type="text" v-model="applicant.password">
    </div>

    <button @click="createAccount">Submit</button>
    <button @click="getPine">Get Pine</button>
    <br><br>
    <ul>
      <li v-for="r in responses">{{ r }}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        applicant: {
          // these fields not to be the same as in the defined DTO
          name: '',
          surname: '',
          email: '',
          ssn: '',
          username: '',
          password: '',
        },
        responses: []
      }
    },
    methods: {
      submit() {
        // What is the link?
        this.$http.post('link', this.applicant)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      },
      getPine() {
        // this.$http.get('https://jsonplaceholder.typicode.com/');
        this.$http.get('http://localhost:8080/echo')
        // this.$http.get('http://apifaketory.com/api/user?limit=1')
          .then(response => {
            return response.json();
          }).then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.responses = resultArray;
        });
      },
      createAccount() {
        this.$http.post('http://localhost:8080/accounts', this.applicant)
          .then(response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .form-cont {
    display: block;
  }
</style>

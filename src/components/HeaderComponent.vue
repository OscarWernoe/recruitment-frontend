<template>
  <b-navbar toggleable="md" type="dark" variant="info" fixed="top">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand to="/">Recruitment</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      
      <b-navbar-nav>
        <b-nav-item to="/register" v-if="!isLoggedIn">Register</b-nav-item>
        <b-nav-item to="/login" v-if="!isLoggedIn">Sign in</b-nav-item>
        <b-nav-item v-if="isLoggedIn"><a @click="logout">Sign out</a></b-nav-item>
      </b-navbar-nav>
    
    </b-collapse>

  </b-navbar>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function() { return this.$store.getters.isLoggedIn }
  },
  methods: {
    logout: function() {
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>

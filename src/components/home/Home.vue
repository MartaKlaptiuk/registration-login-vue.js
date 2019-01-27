<template src="./home.html"></template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      authUser: null,
      displayName: null
    };
  },
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user;
      if (user) {
        this.displayName = user.displayName;
      }
    });
  }
};
</script>


<style lang="scss" src="./home.scss" scoped>
</style>

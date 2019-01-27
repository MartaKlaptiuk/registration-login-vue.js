<template src="./login.html"></template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      show: true,
      isActive: true,
      user: {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
        emailLogin: "",
        passwordLogin: ""
      },
      error: false
    };
  },
  methods: {
    updateAnnouncement(value) {
      this.newText = value;
    },
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          this.authUser = user;
          this.$router.replace("home");
        })
        .catch(error => alert("🤕 " + error.message));
    },
    loginUser: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.user.emailLogin,
          this.user.passwordLogin
        )
        .then(user => {
          this.authUser = user;
          this.$router.replace("home");
        })
        .catch(error => alert("🤕 " + error.message));
    },
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .catch(error => alert("🤕 " + error.message))
        .then(user => {
          this.authUser = user;
          this.$router.replace("home");
        });
    }
  },
  created() {
    this.$cookie.set("token", true, { expires: "1h" });
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    }
  }
};
</script>


<style lang="scss" src="./login.scss" scoped>
</style>

<template>
  <div>
    <v-btn depressed color="primary" @click="login"> Login </v-btn>
    <v-btn depressed color="error" @click="logout"> Logout </v-btn>
  </div>
</template>

<script>
import { auth } from '~/plugins/firebaseConfig.js'
import firebase from 'firebase/app'

export default {
  methods: {
    login() {
      const provider = new firebase.auth.GoogleAuthProvider()

      auth.signInWithPopup(provider).then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          const credential = result.credential

          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = credential.accessToken
          console.log('token = ' + token)
          // The signed-in user info.
          const user = result.user
          // ...

          //เปลี่ยนหน้าไป inspire
          this.$router.replace('/inspire')
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
        })
    },
    logout() {
      auth.signOut().then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.')
          this.$router.replace('/')
        })
        .catch((error) => {
          // An error happened.
          console.log('An error happened.')
        })
    },
  },
}
</script>
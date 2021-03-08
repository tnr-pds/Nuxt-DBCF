<template>
  <v-row>
    <v-col class="text-center">
      <img :src="photoUrl" alt="Vuetify.js" class="mb-5" />
      <blockquote class="blockquote">
        &#8220;No Think So Bigger More Limi.&#8221;
        <footer>
          <small>
            <em>&mdash;{{ name }} {{ email }}</em>
            <v-btn depressed color="error" @click="logout"> Logout </v-btn>
          </small>
        </footer>
      </blockquote>
    </v-col>
  </v-row>
</template>

<script>
import { auth } from '~/plugins/firebaseConfig.js'

export default {
  data() {
    return {
      name: '',
      email: '',
      photoUrl: '',
    }
  },
  beforeCreate() {
    auth.onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        //ให้แสดง ชื่อ รูป e-mail
        this.name = user.displayName
        this.email = user.email
        this.photoUrl = user.photoURL
      } else {
        // No user is signed in.
        //กลับไปหน้า login
        this.$router.replace('/login')
      }
    })
  },
  methods:{
    logout() {
      auth.signOut().then(() => {
          // Sign-out successful.
          console.log('Sign-out successful.')
          this.$router.replace('/index') //ทำไป index ไม่ได้ 
        })
        .catch((error) => {
          // An error happened.
          console.log('An error happened.')
        })
    },
  },
  
  
}
</script>

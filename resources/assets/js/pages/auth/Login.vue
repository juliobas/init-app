<template>
    <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 class="text-xs-center" mt-5>
            <h1>Iniciar</h1>
          </v-flex>
          <v-flex xs12 sm6 offset-sm3 mt-3>
            <form autocomplete="off" @submit.prevent="login">
              <v-layout column>
                <v-flex>
                  <v-text-field
                    name="email"
                    label="Correo"
                    id="email"
                    type="email"
                    required
                    v-model="email"></v-text-field>
                </v-flex>
                <v-flex>
                  <v-text-field
                    name="password"
                    label="Contraseña"
                    id="password"
                    type="password"
                    required
                    v-model="password"></v-text-field>
                </v-flex>
                <v-flex class="text-xs-center" mt-5>
                  <v-btn color="primary" type="submit">Iniciar</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-flex>
        </v-layout>
      </v-container>
    
</template>
<script>
  export default {
    data(){
      return {
        email: null,
        password: null,
        error: false
      }
    },
    methods: {
      login(){
        var app = this
        this.$auth.login({
            params: {
              email: app.email,
              password: app.password
            }, 
            success: function () {},
            error: function () {},
            rememberMe: true,
            redirect: '/dashboard',
            fetchUser: true,
        });       
      },
    }
  } 
</script>
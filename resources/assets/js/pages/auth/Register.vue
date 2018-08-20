<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-flex xs12 class="text-xs-center" mt-5>
                <h1>Registro</h1>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3 mt-3>
                <div v-if="success">
                    <p>Registro Completado. Puedes Ahora <router-link :to="{name:'login'}">Entrar.</router-link></p>
                </div>
                <form autocomplete="off" @submit.prevent="register" v-if="!success">
                    <v-layout column>
                        <v-flex>
                            <v-text-field
                                name="name"
                                label="Nombre"
                                id="name"
                                type="text"
                                required
                                v-model="name"></v-text-field>
                        </v-flex>
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
                        <!-- <v-flex>
                            <v-text-field
                                name="confirmPassword"
                                label="Confirm Password"
                                id="confirmPassword"
                                type="password"
                                required
                                ></v-text-field>
                        </v-flex> -->
                        <v-flex class="text-xs-center" mt-5>
                            <v-btn color="primary" type="submit">Registrar</v-btn>
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
                name: '',
                email: '',
                password: '',
                error: false,
                errors: {},
                success: false
            };
        },
        methods: {
            register(){
                var app = this
                this.$auth.register({
                    data: {
                        name: app.name,
                        email: app.email,
                        password: app.password
                    }, 
                    success: function () {
                        app.success = true
                    },
                    error: function (resp) {
                        app.error = true;
                        app.errors = resp.response.data.errors;
                    },
                    redirect: null
                });                
            }
        }
    }
</script>
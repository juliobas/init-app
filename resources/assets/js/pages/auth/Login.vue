<template>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h1>Iniciar</h1>
                </div>
                <div class="panel-body">
                    <div>
                        <div class="alert alert-danger" v-if="error">
                            <p>Hubo Un error, No se pudo Iniciar con Esas Credenciales.</p>
                        </div>
                        <form autocomplete="off" @submit.prevent="login" method="post">
                            <div class="form-group">
                                <label for="email">Correo</label>
                                <input type="email" id="email" class="form-control" placeholder="user@example.com" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="password">Contraseña</label>
                                <input type="password" id="password" class="form-control" v-model="password" required>
                            </div>
                            <button type="submit" class="btn btn-default">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
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
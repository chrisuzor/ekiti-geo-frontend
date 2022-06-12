<template>
<div class="auth-wrapper">
      <div class="auth-inner">
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <div class="form-group">
            <label>Email</label>
            <input type="username" class="form-control" v-model="username" placeholder="Username" />
        </div>

        <div class="form-group">
            <label>Password </label>
            <input type="password" class="form-control" v-model="password" placeholder="Password"/>
        </div>
<hr>
        <button class="btn btn-primary btn-block">Login </button>
    </form>
    </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async handleSubmit(){
            const response = await axios.post('login/', {
                username: this.username,
                password: this.password
            });

            localStorage.setItem('token', response.data.access)
            localStorage.setItem('username', response.data.username)
            this.$store.dispatch('username', response.data.username)
            this.$router.push('/');
        }
    }
}
</script>

<template>
 
   <div classmax-w-4xl mx-auto sm=":px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Login</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
    <form class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        
        <div class="mb-6">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
            <input v-model="username" type="tel" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input v-model="password" type="number" style="-webkit-text-security:disc;" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required="">
        </div> 
        
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Remember Me</label>
        </div>
        
        <button type="button" v-on:click="login" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Login</button>
        <button type="button" v-on:click="fbLogin" class="text-white bg-blue-900 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-800 dark:hover:bg-blue-800 dark:focus:ring-blue-900">Login with Facebook</button>
    
        <div class="flex items-start mt-6">
            
          <nuxt-link to="/register" class="ml-2 text-xl font-medium text-blue-900 dark:text-blue-400 w-full sm:w-auto text-center">Create Account</nuxt-link>
        </div>
      </form>
    </div>
</div>

</template>

<script>
import swal from 'sweetalert2';
// import Navbar from '../components/Navbar.vue';
window.Swal = swal;

export default {

    middleware: 'guest',
    data() {
    return {
      username: '',
      password: '',
      remember: false,
      error: null
    }
  },

  methods: {
    async login() {

      
      
        await this.$auth.loginWith('laravelSanctum', {
          data: {
          username: this.username,
          password: this.password
          }
           
        }).then(res => {

         // console.log(res);

          let user = res.data.user // getting user (yours can be different)
          this.$auth.$storage.setUniversal('user', user, true) // setting user in Vuex, cookies and localstorage

          user = this.$auth.$storage.getUniversal('user') // getting user (you can use it anywhere in your app)
          //console.log(user) // checking user;

         
          // if(res.status != 200){
          //   Swal.fire("Failed!", res.status, "error");
          // }
        this.$router.push('/')
          
  }).catch(e => {
        //this.errorMessage = error.message;
         Swal.fire("Login Failed!", "Username or Password Incorrect", "error");
         console.log(e);
        //this.error = e.response.data.message
      }
    )},
   async fbLogin() {

    await this.$auth.loginWith('facebook').then(res => {

          
          user = this.$auth.$storage.getUniversal('user') // getting user (you can use it anywhere in your app)
          console.log(user) // checking user;

          this.$axios.post(process.env.baseUrl+'/api/verify', {
            email: user.email
          }).then(r => {
            let user = r.data.user // getting user (yours can be different)
            if(user){
              this.$auth.$storage.setUniversal('user', user, true) // setting user in Vuex, cookies and localstorage

              user = this.$auth.$storage.getUniversal('user')
            }
           
          })

        
      }).catch(e => {
        //this.errorMessage = error.message;
         //Swal.fire("Login Failed!", "Username or Password Incorrect", "error");
        console.log(e);
        //this.error = e.response.data.message
      }
    )
  
  },

     
    
  }
    

}
</script>
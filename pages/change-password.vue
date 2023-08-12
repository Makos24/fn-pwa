<template>
 
   <div classmax-w-4xl mx-auto sm=":px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Update Password</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <form class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <p>Please enter your new password.</p>

        <div class="mb-6">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input v-model="password" type="number" id="pwd" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div> 

        <div class="mb-6">
            <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm Password</label>
            <input v-model="password_confirmation" type="number" id="pwdc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            <p class="text-red-500 text-xs italic" v-if="passwordMismatch">Passwords do not match.</p>

          </div> 
        
        <button type="button" :disabled="passwordMismatch" v-on:click="updatePassword" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Submit</button>
        <button type="button" v-on:click="cancel" class="text-white bg-gray-400 hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-800 dark:hover:bg-gray-800 dark:focus:ring-gray-900">Cancel</button>
    
        
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
      password: '',
      password_confirmation: '',
      error: null
    }
  },

  created() {
    if (this.$route.params && this.$route.params.phone) {
      this.phone = this.$route.params.phone
    }
  },
  computed: {
    passwordMismatch() {
      return this.password == "" && this.password !== this.password_confirmation;
    }
  },

  methods: {
    async updatePassword() {
      await this.$axios.post(process.env.baseUrl+'/api/update-password', {
          password: this.password,
          phone: this.phone,
          type: 2,
        }).then( response => {
            //console.log(response.data);
            if(response.data.status == true){
              Swal.fire("Password changed!", response.data.message, "success");
               this.$router.push('/');
               
            }
            
        }).catch(error => {
            if(error.response.status===422){
                Swal.fire("Update Failed!", "Please provide a valid phone number and try again", "error");
                this.errors = error?.response?.data?.errors;
                
                console.log(error)
            }
            //this.errors = error?.response?.data?.errors;
        })},
   
        cancel(){
          this.$router.push('/');

        }
    
  },

    

}
</script>
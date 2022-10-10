<template>
 
 <div class="max-w-4xl mx-auto sm:px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Update Profile</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <form v-on:submit.prevent="register" class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input v-model="user.fname" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>
            <div>
                <label for="middle_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Middle name</label>
                <input v-model="user.mname" type="text" id="middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" >
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input v-model="user.lname" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="community" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Community Name</label>
                <input v-model="user.community" type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>  
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input v-on:blur="validatePhone" v-model="user.phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                <p class="text-red-500 text-xs italic" v-show="errors.phone">{{errors.phone}}</p>            
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
                
            <div>
                <label for="states" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">State</label>
                <select v-on:change="loadLga" v-model="user.state" id="states" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Select State</option>
                <option v-for="state in states" v-bind:value="state.SN">{{state.Name}}</option>
                </select>            
                </div>
            <div>
                <label for="lgas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">LGA</label>
                <select v-on:change="loadWard" v-model="user.lga" id="lgas" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Select LGA</option>
                <option v-for="lga in lgas" v-bind:value="lga.SN">{{lga.Name}}</option>
                </select>  
            </div>
             <div>
                <label for="wards" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ward</label>
                <select v-on:change="loadSettlements" v-model="user.ward" id="wards" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option>Select Ward</option>
               <option v-for="ward in wards" v-bind:value="ward.SN">{{ward.Name}}</option>
                </select>  
            </div>
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
                
            <div>
                <label for="settlement" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Settlement</label>
                <select v-on:change="loadPhc" v-model="user.settlement" id="settlement" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="settlement in settlements" v-bind:value="settlement.SN">{{settlement.Settlement}}</option>
                </select>  
            </div>
             <div>
                <label for="phc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">PHC</label>
                <select v-model="user.phc" id="phc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option v-for="phc in phcs" v-bind:value="phc.SN">{{phc.Name}}</option>
                </select>  
            </div>
        </div>


        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
            <input v-model="user.email" type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
            <input v-model="user.password" type="pin" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div> 
        <div class="mb-6">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password</label>
            <input v-model="user.password_confirmation" type="pin" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div> 
        

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</div>

</template>


<script>
    
import { mapGetters } from 'vuex'


import states from '~/static/states.json'
    import lgas from '~/static/lga.json'
    import wards from '~/static/ward.json'
    import settlements from '~/static/settlements.json'
    import phcs from '~/static/phc.json'
    import swal from 'sweetalert2';
    window.Swal = swal;

    export default {
      middleware: 'auth',
         data() {
            return {
            user : {},
            states : [],
            lgas : [],
            wards : [],
            settlements : [],
            phcs : [],
            fname: '',
            mname: '',
            lname: '',
            community: '',
            settlement : '',
            phc : '',
            phone: '',
            state: '',
            lga: '',
            ward: '',
            email: this.user.email,
            password: '',
            password_confirmation: '',
            error: null,
            errors: {},
            }
        },

  methods: {
    async register() {
      try {
        const res = await this.$axios.post(process.env.baseUrl+'/api/register', {
          fname: this.fname,
          mname: this.mname,
          lname: this.lname,
          community: this.community,
          phone: this.phone,
          state: this.state,
          lga: this.lga,
          ward: this.ward,
          phc_id: this.phc,
          registrar_id: this.phc,
          email: this.email,
          password: this.password
        });

         //console.log(res);

          //Swal.fire("Login Failed!", "Username or Password Incorrect", "error");
      }

       

         catch (error) {
               if(error.response.status===422){
                   this.errors = error?.response?.data?.errors;
               console.log(this.errors);

               }

           }

        try {
        await this.$auth.loginWith('laravelSanctum', {
          data: {
          username: this.email,
          password: this.password
          },
        })

        this.$router.push('/')
      } catch (e) {
        this.error = e.response.data.message
      }
    },
    loadLga(){
        if(this.state != ''){
            this.lgas = lgas.filter(lga => lga.StateID == this.state)
        }
    },
    loadWard(){
        if(this.lga != ''){
            this.wards = wards.filter(ward => ward.LGAID == this.lga)
        }
    },
    loadSettlements(){
        if(this.ward != ''){
            this.settlements = settlements.filter(settlement => settlement.WardID == this.ward)
        }
    },
    loadPhc(){
        if(this.settlement != ''){
            this.phcs = phcs.filter(phc => phc.WardID == this.ward)
        }
    },
     validatePhone(phone){
        //console.log(this.user.phone1);

        //const rule = /^[0]\d{10}$/;
        const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
        if(phone.target.value.match(rule)){
            this.errors.phone = '';
        }else{
            this.errors.phone = 'Please enter a valid phone number';
        }

        
    },
    },
    mounted()
    {
            this.states = states;
            this.loadLga();
            this.loadWard();
            //this.loadSettlements();
            //this.loadPhc();
            this.user = this.$auth.user;
            this.emai = this.user.email;
    },
    computed: {
    ...mapGetters(['loggedInUser'])
  }
                        
                
}
</script>
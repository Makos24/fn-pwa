<template>
 
   <div class="max-w-4xl mx-auto sm:px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Create Chips Account</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <form v-on:submit.prevent="register" class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        
        <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First name</label>
                <input v-model="chip.first_name" type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>
            <div>
                <label for="middle_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Middle name</label>
                <input v-model="chip.middle_name" type="text" id="middle_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" >
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last name</label>
                <input v-model="chip.surname" type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="community" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Community Name</label>
                <input v-model="chip.community" type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            </div>  
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                <input v-on:blur="validatePhone" v-model="chip.phone" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                <p class="text-red-500 text-xs italic" v-if="errors.phone">{{errors.phone.join(" ")}}</p>            
            </div>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-3">
                
            <div>
                <label for="states" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">State</label>
                <select v-on:change="loadLga" v-model="chip.state" id="states" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option>Select State</option>
                <option v-for="state in states" v-bind:value="state.SN">{{state.Name}}</option>
                </select>            
                </div>
            <div>
                <label for="lgas" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">LGA</label>
                <select v-on:change="loadWard" v-model="chip.lga" id="lgas" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option>Select LGA</option>
                <option v-for="lga in lgas" v-bind:value="lga.SN">{{lga.Name}}</option>
                </select>  
            </div>
             <div>
                <label for="wards" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ward</label>
                <select v-on:change="loadSettlements" v-model="chip.ward" id="wards" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option>Select Ward</option>
               <option v-for="ward in wards" v-bind:value="ward.SN">{{ward.Name}}</option>
                </select>  
            </div>
        </div>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
                
            <div>
                <label for="settlement" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Settlement</label>
                <select v-on:change="loadPhc" v-model="chip.settlement" id="settlement" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option v-for="settlement in settlements" v-bind:value="settlement.SN">{{settlement.Settlement}}</option>
                <option value="0">Other</option>
                </select>  
            </div>
            <div v-if="chip.settlement == 0" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Specify Settlement <span class="text-red-500">*</span>
          </label>
          <input v-model="chip.settlement_other" class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="errors.settlement_other">{{errors.settlement_other}}</p>
        </div>
             
        </div>

    <div class="flex flex-wrap -mx-3 mb-2">
        <div>
                <label for="phc" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assigned PHC</label>
                <select v-model="chip.phc" id="phc" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                <option v-for="phc in phcs" v-bind:value="phc.SN">{{phc.Name}}</option>
                <option value="0">Other</option>
                </select>
            </div>
        <div v-if="chip.phc == 0" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Specify Assigned PHC <span class="text-red-500">*</span>
          </label>
          <input v-model="chip.phc_other" class="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="errors.phc_other">{{errors.phc_other}}</p>
        </div>
        
      </div>


        <div class="mb-6">
            <label for="residential_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Residential Address</label>
            <textarea v-model="chip.residential_address" type="text" id="residential_address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required=""></textarea>
            <p class="text-red-500 text-xs italic" v-if="errors.residential_address">{{errors.residential_address.join(" ")}}</p>
        </div> 

        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password (4 Digit PIN)</label>
            <input v-model="chip.password" type="number" style="-webkit-text-security:disc;" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            <p class="text-red-500 text-xs italic" v-if="errors.password">{{errors.password.join(" ")}}</p>
        </div> 
        <div class="mb-6">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Confirm password (4 digit PIN)</label>
            <input v-model="chip.password_confirmation" type="number" style="-webkit-text-security:disc;" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
        </div> 
        <div class="mb-6">
            <label for="code" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verification Code</label>
            <input v-model="chip.code" type="code" id="code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
            <p class="text-red-500 text-xs italic" v-if="errors.code">{{errors.code.join(" ")}}</p>     
        </div>
        

        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="remember" type="checkbox" v-model="chip.accept" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
            </div>
            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Do you accept Albarka's terms and conditions for data collection and upload?</label>
        </div>

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>
</div>

</template>

<script>

    import states from '~/static/states.json'
    import lgas from '~/static/lga.json'
    import wards from '~/static/ward.json'
    import settlements from '~/static/settlements.json'
    import phcs from '~/static/phc.json'
    import swal from 'sweetalert2';
    window.Swal = swal;

    export default {
         data() {
            return {
            states : [],
            lgas : [],
            wards : [],
            settlements : [],
            phcs : [],
            chip : {},
            first_name: '',
            middle_name: '',
            surname: '',
            community: '',
            settlement : '',
            phc : '',
            phone: '',
            state: '',
            lga: '',
            ward: '',
            email: '',
            password: '',
            password_confirmation: '',
            residential_address: '',
            code: '',
            error: null,
            errors: {},
            }
        },
mounted() {
    this.$axios.$get(process.env.baseUrl+"/sanctum/csrf-cookie");
  },

  methods: {
    async register() {
      await this.$axios.post(process.env.baseUrl+'/api/register', {
          first_name: this.chip.first_name,
          middle_name: this.chip.middle_name,
          surname: this.chip.surname,
          community: this.chip.community,
          phone: this.chip.phone,
          state: this.chip.state,
          lga: this.chip.lga,
          ward: this.chip.ward,
          settlement: this.chip.settlement,
          settlement_other: this.chip.settlement_other,
          phc_id: this.chip.phc,
          phc_other: this.chip.phc_other,
          registrar_id: this.chip.phc,
          email: this.chip.email,
          password: this.chip.password,
          password_confirmation: this.chip.password_confirmation,
          code: this.chip.code,
          residential_address: this.chip.residential_address
        }).then( response => {
            //console.log(response.data);
            if(response.data.msg == "Registration successful"){

                    this.$auth.loginWith('laravelSanctum', {
                        data: {
                        username: this.chip.phone,
                        password: this.chip.password
                    },
                    }).then( res => {
                        let user = res.data.user // getting user (yours can be different)
                        this.$auth.$storage.setUniversal('user', user, true) // setting user in Vuex, cookies and localstorage
                        user = this.$auth.$storage.getUniversal('user')

                        this.$router.push('/')
                    }).catch(e => {
                        this.error = e.response.data.message

                    })
            }
            
        }).catch(error => {
            if(error.response.status===422){
                Swal.fire("Registration Failed!", "Please review errors and try again", "error");
                this.errors = error?.response?.data?.errors;
                
                console.log(error)
            }
            //this.errors = error?.response?.data?.errors;
        })

         //console.log(res);

          //Swal.fire("Login Failed!", "Username or Password Incorrect", "error");
    },
    
    loadLga(){
        if(this.chip.state != ''){
            this.lgas = lgas.filter(lga => lga.StateID == this.chip.state)
        }
    },
    loadWard(){
        if(this.chip.lga != ''){
            this.wards = wards.filter(ward => ward.LGAID == this.chip.lga)
        }
    },
    loadSettlements(){
        if(this.chip.ward != ''){
            this.settlements = settlements.filter(settlement => settlement.WardID == this.chip.ward)
        }
    },
    loadPhc(){
        if(this.chip.settlement != ''){
            this.phcs = phcs.filter(phc => phc.WardID == this.chip.ward)
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
            
    }
                        
        
        
    }
</script>
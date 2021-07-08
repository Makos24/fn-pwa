<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Preregistration Form
          </h1>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        

<form class="w-full" v-on:submit.prevent="addUser()" method="POST">

    <div class="flex flex-wrap -mx-3 mb-2">
   <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select v-on:change="loadLga" v-model="user.state" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
          <option v-for="state in states" v-bind:value="state.StateID">{{state.Name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        LGA
      </label>
      <div class="relative">
        <select v-on:change="loadWard" v-model="user.lga" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-lga" required>
          <option v-for="lga in lgas" v-bind:value="lga.LGAID">{{lga.Name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Ward
      </label>
      <div class="relative">
        <select v-on:change="loadSettlements" v-model="user.ward" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-ward" required>
          <option v-for="ward in wards" v-bind:value="ward.WardID">{{ward.Name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>


  <div class="flex flex-wrap -mx-3 mb-2">
   <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Settlement
      </label>
      <div class="relative">
        <select v-on:change="loadPhc" v-model="user.settlement" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-settlement" required>
          <option v-for="settlement in settlements" v-bind:value="settlement.SettlementID">{{settlement.Settlement}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Catchment Health Facilty
      </label>
      <div class="relative">
        <select v-model="user.phc" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state5" required>
          <option v-for="phc in phcs" v-bind:value="phc.FacID">{{phc.Name}}</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Parent Name
      </label>
      <input v-model="user.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Parent Phone
      </label>
      <input v-on:blur="validatePhone" v-model="user.phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" required>
        <p class="text-red-500 text-xs italic" v-show="errors.phone">{{errors.phone}}</p>
    </div>
    
  </div>

<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Expected Date of Delivery (EDD)
      </label>
      <input v-model="user.edd" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-edd" type="date" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.edd">{{errors.edd}}</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Phone number One
      </label>
      <input v-on:blur="validatePhone1" v-model="user.phone1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password1" type="number" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.phone1">{{errors.phone1}}</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Phone number Two
      </label>
      <input v-on:blur="validatePhone2" v-model="user.phone2" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password2" type="number" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.phone2">{{errors.phone2}}</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Phone number Three
      </label>
      <input v-on:blur="validatePhone3" v-model="user.phone3" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password3" type="number" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.phone3">{{errors.phone3}}</p>
    </div>
  </div>
  

<div class="flex items-center justify-between mt-8">
      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Cancel
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Register
      </button>
    </div>


</form>

      </div>
    </div>
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

   
                  
                  //name: Prereg,
                  //props: ["user"],
                  data() {
                    return {
                      loading: true,
                      user: {},
                      states : [],
                      lgas : [],
                      wards : [],
                      settlements : [],
                      phcs : [],
                      previous: {},
                      errors: {},
                      isSuccess: false
                    };
                  },
                  methods: {
                  addUser() {
                      if(this.errors.phone == '' && this.errors.phone1 == '' && this.errors.phone2 == ''
                      && this.errors.phone3 == ''){
                          this.$emit('add-user-event', this.user);
                        this.previous = this.user;
                        localStorage.setItem('previous',JSON.stringify(this.previous))
                        this.user = {};
                        this.user.state = this.previous.state;
                        this.user.lga = this.previous.lga;
                        this.user.ward = this.previous.ward;
                        this.user.settlement = this.previous.settlement;
                        this.user.phc = this.previous.phc;
                        Swal.fire(
                            'Data Saved!',
                            '',
                            'success'
                            )
                      }else{
                          Swal.fire(
                            'Failed!',
                            'Please correct any errors in the form',
                            'error'
                            )
                      }
                        
                  },
                  loadLga(){
                      if(this.user.state != ''){
                           this.lgas = lgas.filter(lga => lga.StateID == this.user.state)
                      }
                  },
                  loadWard(){
                      if(this.user.lga != ''){
                           this.wards = wards.filter(ward => ward.LGAID == this.user.lga)
                      }
                  },
                  loadSettlements(){
                      if(this.user.ward != ''){
                           this.settlements = settlements.filter(settlement => settlement.WardID == this.user.ward)
                      }
                  },
                  loadPhc(){
                      if(this.user.settlement != ''){
                           this.phcs = phcs.filter(phc => phc.WardID == this.user.ward)
                      }
                  },
                  validatePhone(phone){
                      
                      const rule = /^[0]\d{10}$/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone = '';
                      }else{
                          this.errors.phone = 'Please enter a valid phone number';
                      }
                  },
                  validatePhone1(phone){
                      
                      const rule = /^[0]\d{10}$/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone1 = '';
                      }else{
                          this.errors.phone1 = 'Please enter a valid phone number';
                      }
                  },
                  validatePhone2(phone){
                      
                      const rule = /^[0]\d{10}$/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone2 = '';
                      }else{
                          this.errors.phone2 = 'Please enter a valid phone number';
                      }
                  },
                  validatePhone3(phone){
                      
                      const rule = /^[0]\d{10}$/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone3 = '';
                      }else{
                          this.errors.phone3 = 'Please enter a valid phone number';
                      }
                  }  
                  },
                  mounted(){
                      this.states = states;
                //       if (localStorage.getItem("previous")){
                //            if(this.user.state != ''){
                //            this.lgas = lgas.filter(lga => lga.StateID == this.user.state)
                //             }
                //             if(this.user.lga != ''){
                //            this.wards = wards.filter(ward => ward.LGAID == this.user.lga)
                        
                //         }
                //         if(this.user.ward != ''){
                //            this.settlements = settlements.filter(settlement => settlement.WardID == this.user.ward)
                //       }
                          
                //           if(this.user.settlement != ''){
                //            this.phcs = phcs.filter(phc => phc.WardID == this.user.ward)
                //       }
                //         this.previous = JSON.parse(localStorage.getItem("previous"))
                //         this.user.state = this.previous.state;
                //         this.user.lga = this.previous.lga;
                //         this.user.ward = this.previous.ward;
                //         this.user.settlement = this.previous.settlement;
                //         this.user.phc = this.previous.phc;
                // }
                  } 
                  } 
                  
                

</script>

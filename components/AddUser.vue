<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Preregistration Form
          </h1>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        
       
	<!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" v-on:click="myFunction()">Get Current Location</button>
<div class="mb-4" v-if="lon">
 <p>Lat = {{lat}} Lon ={{lon}}</p>
 <a class="font-bold" :href="link">See Location on Map</a>
	<p>{{error}}</p>
</div> -->
<form class="w-full" v-on:submit.prevent="addUser()" method="POST">

    <div class="flex flex-wrap -mx-3 mb-2">
   <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select v-on:change="loadLga" v-model="user.state" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
          <option v-for="state in states" v-bind:value="state.SN">{{state.Name}}</option>
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
          <option v-for="lga in lgas" v-bind:value="lga.SN">{{lga.Name}}</option>
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
          <option v-for="ward in wards" v-bind:value="ward.SN">{{ward.Name}}</option>
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
          <option v-for="settlement in settlements" v-bind:value="settlement.SN">{{settlement.Settlement}}</option>
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
          <option v-for="phc in phcs" v-bind:value="phc.SN">{{phc.Name}}</option>
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
        Father's Name
      </label>
      <input v-model="user.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
      
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Parent's Phone
      </label>
      <input v-on:blur="validatePhone" v-model="user.phone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
        <p class="text-red-500 text-xs italic" v-show="errors.phone">{{errors.phone}}</p>
    </div>
    
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        Mother's Name
      </label>
      <input v-on:blur="validateMother" v-model="user.mother" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="text" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.mother">{{errors.mother}}</p>
    </div>
    
  </div>

<div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Expected Date of Delivery (EDD)
      </label>
      <client-only>
      <date-picker v-model="user.edd" :input-attr="{required: 'true'}" :disabled-date="disabledBeforeTodayAndAfter9Months" input-class="py-2.5 block w-full bg-gray-200 focus:bg-white leading-tight" value-type="YYYY-MM-DD" format="DD/MM/YYYY"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required></date-picker>
      </client-only>
      <p class="text-red-500 text-xs italic" v-show="errors.edd">{{errors.edd}}</p>
    </div>
  </div>

  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Contact's Phone number One
      </label>
      <input v-on:blur="validatePhone1" v-model="user.phone1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password1" type="tel" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.phone1">{{errors.phone1}}</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Contact's Phone number Two
      </label>
      <input v-on:blur="validatePhone2" v-model="user.phone2" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password2" type="tel" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.phone2">{{errors.phone2}}</p>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Contact's Phone number Three
      </label>
      <input v-on:blur="validatePhone3" v-model="user.phone3" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password3" type="tel" placeholder="" required>
      <p class="text-red-500 text-xs italic" v-show="errors.phone3">{{errors.phone3}}</p>
    </div>
  </div>
  

<div class="flex items-center justify-between mt-8">
      <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Cancel
      </button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Save
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
                      isSuccess: false,
                      lat:'',
	                    lon:'',
                      error:'',
                      link:''
                  //     disabledDates: {
                  //   customPredictor: function(date) {

                  //       var CurrentDate = new Date();
                  //       var CurrentDate2 = new Date();
                  //       var maxDate = CurrentDate2.setMonth(CurrentDate2.getMonth() + 9);

                  //     // disables the date if it is a multiple of 5
                  //     if(date.getTime() <= CurrentDate.getTime() || date.getTime() > maxDate){
                  //       return true
                  //     }
                  //   }
                  // }
                    };
                  },
                  methods: {
                  addUser() {

                      if(!this.testDupes()){
                        Swal.fire(
                            'Failed!',
                            'Please do not repeat phone numbers, make sure every number is different',
                            'error'
                            );

                            return false;
                      }

                      if(this.errors.phone == '' && this.errors.phone1 == '' && this.errors.phone2 == ''
                      && this.errors.phone3 == '' && this.errors.mother == ''){
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
                            'Data Saved to Device!',
                            'Parent record has been saved to local storage, please click the submit button to upload',
                            'success'
                            )
                      }else{
                          Swal.fire(
                            'Failed!',
                            'Please correct any errors on the form',
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
                      //console.log(this.user.phone1);

                      //const rule = /^[0]\d{10}$/;
                      const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone = '';
                      }else{
                          this.errors.phone = 'Please enter a valid phone number';
                      }

                      
                  },
                  validatePhone1(phone){
                      
                      //'(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)'
                      //const rule = /^[0]\d{10}$/;
                      const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone1 = '';
                      }else{
                          this.errors.phone1 = 'Please enter a valid phone number';
                      }

                      var numbers = [this.user.phone, this.user.phone1, this.user.phone2, this.user.phone3];
                      numbers = numbers.filter(val => val != undefined);
                      var numFlds = numbers.length;

                      for (var x=0; x<numFlds; x++) {
                          for (var y=x+1; y<numFlds; y++) {
                            if (numbers[x] == numbers[y]) {
                              //alert('There was a match');
                              this.errors.phone1 = 'Please do not repeat a phone number';
                            }else{
                              this.errors.phone1 = '';
                            }
                          }

                      
                    }

                  },
                  validatePhone2(phone){
                      
                      //const rule = /^[0]\d{10}$/;
                      const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone2 = '';
                      }else{
                          this.errors.phone2 = 'Please enter a valid phone number';
                      }

                      var numbers = [this.user.phone, this.user.phone1, this.user.phone2, this.user.phone3];
                      numbers = numbers.filter(val => val != undefined);
                      var numFlds = numbers.length;

                      for (var x=0; x<numFlds; x++) {
                          for (var y=x+1; y<numFlds; y++) {
                            if (numbers[x] == numbers[y]) {
                              //alert('There was a match');
                              this.errors.phone2 = 'Please do not repeat a phone number';
                            }else{
                              this.errors.phone2 = '';
                            }
                          }

                      
                    }
                  },
                  validatePhone3(phone){
                      
                      //const rule = /^[0]\d{10}$/;
                      const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
                      if(phone.target.value.match(rule)){
                          this.errors.phone3 = '';
                      }else{
                          this.errors.phone3 = 'Please enter a valid phone number';
                      }

                      var numbers = [this.user.phone, this.user.phone1, this.user.phone2, this.user.phone3];
                      numbers = numbers.filter(val => val != undefined);
                      var numFlds = numbers.length;

                      for (var x=0; x<numFlds; x++) {
                          for (var y=x+1; y<numFlds; y++) {
                            if (numbers[x] == numbers[y]) {
                              //alert('There was a match');
                              this.errors.phone3 = 'Please do not repeat a phone number';
                            }else{
                              this.errors.phone3 = '';
                            }
                          }

                      
                    }
                  },
                  validateMother(mother){
                    //  const rule = /^[a-zA-Z\-\']+$/;
                     const rule = /^([A-z\'])*[^\s]$/;
                      if(mother.target.value.match(rule)){
                          this.errors.mother = '';
                      }else{
                          this.errors.mother = 'Please enter only Mothers first name';
                      }
                  },
                  disabledBeforeTodayAndAfter9Months(date) {
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);

                      return date < today || date > new Date(today.getTime() + 252 * 24 * 3600 * 1000);
                    },
                  testDupes() {
                    var numbers = [this.user.phone, this.user.phone1, this.user.phone2, this.user.phone3];
                    numbers = numbers.filter(val => val != undefined);
                    //console.log(numbers);
                    var numFlds = numbers.length;
                    for (var x=0; x<numFlds; x++) {
                      for (var y=x+1; y<numFlds; y++) {
                        if (numbers[x] == numbers[y]) {
                          //alert('There was a match');
                          return false;
                        }
                      }
                    }
                    //alert('No matches');
                    return true;
                  },
                  myFunction() {		
                    if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(this.showPosition);
                    }else{
                    this.error = "Geolocation is not supported."; 
                      
                    }
    },
	showPosition(position) {	
		this.lat = position.coords.latitude;
		this.lon = position.coords.longitude;
    this.link = "https://www.google.com/maps/search/?api=1&query="+this.lat+","+this.lon
	}
                    
                  },
                   
                  mounted(){
                      this.states = states;
                      if (localStorage.getItem("previous")){
                          this.previous = JSON.parse(localStorage.getItem("previous"))
                        this.user.state = this.previous.state;
                        this.user.lga = this.previous.lga;
                        this.user.ward = this.previous.ward;
                        this.user.settlement = this.previous.settlement;
                        this.user.phc = this.previous.phc;
                        this.loadLga();
                        this.loadWard();
                        this.loadSettlements();
                        this.loadPhc();
                        }
                        
                  } 
                  } 
 
 
                

</script>

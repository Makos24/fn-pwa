<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Birth Reporting Form
          </h1>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        
       
	<!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" v-on:click="myFunction()">Get Current Location</button>
<div class="mb-4" v-if="lon">
 <p>Lat = {{lat}} Lon ={{lon}}</p>
 <a class="font-bold" :href="link">See Location on Map</a>
	<p>{{error}}</p>
</div> -->
<form class="w-full" v-on:submit.prevent="addBirth" method="POST">
    
      <h1>Particulars of Child</h1>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Name of Child
          </label>
          <input v-model="user.name" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
        </div>
        </div>
<div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Gender
          </label>
          <div class="relative">
            <select v-model="user.gender" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option>Select</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>         
        </div>

<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
           Date of Birth
          </label>
          <input v-model="user.dob" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="" required>
        </div>

      </div>



      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Place of Occurrence
          </label>
          <div class="relative">
            <select v-model="user.place" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option>Select</option>
              <option value="1">Maternity Home</option>
              <option value="2">Hospital</option>
              <option value="3">At Home</option>
              <option value="4">Traditional Doctor's Place</option>
              <option value="5">Others</option>
              
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>         
        </div>
        <div class="w-full md:w-1/2 px-3" v-if="user.place != undefined && user.place == 5">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Others Specify
          </label>
          <input v-model="user.other_place" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="">
            <p class="text-red-500 text-xs italic" v-show="errors.other_place">{{errors.other_place}}</p>
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Type of Birth
          </label>
          <div class="relative">
            <select v-model="user.type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option>Select</option>
              <option value="1">Single</option>
              <option value="2">Multiple</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>         
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Birth Order
          </label>
          <input v-model="user.order" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.order">{{errors.order}}</p>
        </div>
        
      </div>


<div class="flex items-center justify-between mt-8">
      
      
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">
        Save
      </button>
    </div>


</form>

      </div>
    </div>
  </div>
</template>



<script>

 import swal from 'sweetalert2';
window.Swal = swal;
export default {  
                  //name: Prereg,
                  //props: ["user"],
                  data() {
                    return {
                      loading: true,
                      user: {},
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
                    
                  addBirth() {


                      if(this.user.name == undefined || this.user.gender == undefined || this.user.place == undefined
                      || this.user.type == undefined || this.user.order == undefined || this.user.dob == undefined){
                           Swal.fire(
                            'Failed!',
                            'Please complete all required fields',
                            'error'
                            )
                      }else{

                        this.$emit('add-birth-event', this.user);
                         this.user = {};
                        Swal.fire(
                            'Data Saved to Device!',
                            'Parent record has been saved to local storage, please click the submit button to upload',
                            'success'
                            )
                         
                      }
                        
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
                        
                  } 
                  } 
 
 
                

</script>

<template>
  <transition name="fade">
    <div class="z-40 fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto">
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet'>
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 class="flex justify-center pt-8 sm:pt-0 text-2xl leading-7 font-bold mt-4">
        Particulars of Child/Children
          </h1>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        
       
	<!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" v-on:click="myFunction()">Get Current Location</button>
<div class="mb-4" v-if="lon">
 <p>Lat = {{lat}} Lon ={{lon}}</p>
 <a class="font-bold" :href="link">See Location on Map</a>
	<p>{{error}}</p>
</div> -->
<form v-on:submit="addBirth" class="w-full" method="POST">
    

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Type of Birth <small>single or multiple</small>
          </label>
          <div class="relative">
            <select v-model="birth.type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Single</option>
              <option value="2">Multiple</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>         
        </div>
        <div v-if="birth.type == 2" class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Number of Children
          </label>
          <input v-model="birth.no" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.no">{{errors.no}}</p>
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Village/Town of Birth <small>(where the birth occured)</small>
          </label>
          <input v-model="birth.location" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.no">{{errors.no}}</p>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Type of Location of Birth <small>(Village/Town)</small>
          </label>
          <div class="relative">
            <select v-model="birth.location_type" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Village</option>
              <option value="2">Town</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>         
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Birth Order <small>(Position of child/children)</small>
          </label>
          <input v-model="birth.order" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.no">{{errors.no}}</p>
        </div>
        
        
      </div>

      <span v-if="birth.type == 1">
      <div class="w-full px-3 mb-6 md:mb-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Child First Name
          </label>
          <input v-model="birth.fname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
        </div>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Child Middle Name
          </label>
          <input v-model="birth.mname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" >
        </div>
        </div>
        <div class="w-full px-3 mb-6 md:mb-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Child Last Name
          </label>
          <input v-model="birth.lname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
        </div>
        </div>
<div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Gender
          </label>
          <div class="relative">
            <select v-model="birth.gender" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
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
          <input v-model="birth.dob" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="" required>
        </div>

      </div>



    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Place of Occurrence
          </label>
          <div class="relative">
            <select v-model="birth.place" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
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
        <div class="w-full md:w-1/2 px-3" v-if="birth.place != undefined && birth.place == 5">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Others Specify
          </label>
          <input v-model="birth.place_other" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="">
            <p class="text-red-500 text-xs italic" v-show="errors.other_place">{{errors.other_place}}</p>
        </div>
        
      </div>
      </span>


  <span v-if="birth.type == 2 && birth.no != undefined" >
    <div class="flex flex-wrap -mx-3 mb-6">

<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
           Date of Birth
          </label>
          <input v-model="birth.dob" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" placeholder="" required>
        </div>

      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Place of Occurrence
          </label>
          <div class="relative">
            <select v-model="birth.place" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
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
        <div class="w-full md:w-1/2 px-3" v-if="birth.place != undefined && birth.place == 5">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Others Specify
          </label>
          <input v-model="birth.place_other" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="">
            <p class="text-red-500 text-xs italic" v-show="errors.other_place">{{errors.other_place}}</p>
        </div>
        
      </div>

      <h1 class="font-bold text-l font-underline mb-3">Details of Children</h1>

    <span v-for="n in (birth.no*1)" v-bind:key="n">
      <div class="w-full px-3 mb-6 md:mb-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Child First Name {{n}}
          </label>
          <input v-model="fname[n]" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
        </div>
        </div>

        <div class="w-full px-3 mb-6 md:mb-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Child Middle Name {{n}}
          </label>
          <input v-model="mname[n]" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" >
        </div>
        </div>

        <div class="w-full px-3 mb-6 md:mb-0">
        <div class="flex flex-wrap -mx-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Child Last Name {{n}}
          </label>
          <input v-model="lname[n]" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
        </div>
        </div>
<div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
           Gender of Child {{n}}
          </label>
          <div class="relative">
            <select v-model="gender[n]" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>         
        </div>
        </div>

<hr class="m-2"/>
    </span>
  </span>      


      


<div class="flex items-center justify-between mt-8">
      
  <button v-on:click="close" type="button" id="cls" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline">
        Cancel
      </button>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">
        Save
      </button>
    </div>


</form>

      </div>
    </div>
  </div>
  
</div>
        
         
      </transition>
</template>



<script>

 import swal from 'sweetalert2';
window.Swal = swal;
export default {  
                  //name: Prereg,
                  //props: ["birth"],
                  props: ['edd'],
                  data() {
                    return {
                      loading: true,
                      birth: {},
                      fname : [],
                      mname : [],
                      lname : [],
                      gender : [],
                      previous: {},
                      errors: {},
                      isSuccess: false,
                      lat:'',
	                    lon:'',
                      error:'',
                      link:''
                    };
                  },
                  methods: {
                    
                  addBirth() {

                    this.birth.edd = this.edd;

                    if(this.birth.type != undefined && this.birth.type == 1){

                      if(this.birth.fname == undefined || this.birth.lname == undefined || this.birth.gender == undefined || this.birth.place == undefined
                      || this.birth.type == undefined || this.birth.order == undefined || this.birth.dob == undefined){
                          this.fail();
                      }else{

                        this.$emit('add-birth-event', this.birth);
                         this.birth = {};
                          this.pass();

                          this.close();
                         
                      }

                    }else{

                      if(this.birth.place == undefined || this.birth.type == undefined || this.birth.dob == undefined){
                        this.fail();
                      }else{



                        for(let i = 1; i <= (this.birth.no*1); i++){

                          let birth = {};
                          birth.type = this.birth.type;
                          birth.place = this.birth.place;
                          birth.place_other = this.birth.place_other;
                          birth.dob = this.birth.dob;
                          birth.edd = this.birth.edd;
                          birth.fname = this.fname[i];
                          birth.mname = this.mname[i];
                          birth.lname = this.lname[i];
                          birth.gender = this.gender[i];
                          //let o = i;
                          birth.order = this.birth.order;
                          birth.no = this.birth.no;
                          birth.location = this.birth.location;
                          birth.location_type = this.birth.location_type;

                        this.$emit('add-birth-event', birth);
                         

                        }

                        this.birth = {};
                        this.gender = [];
                        this.fname = [];
                        this.mname = [];
                        this.lname = [];

                            this.pass();

                            this.close();
                         
                      }

                    }
                      
                        
                  },
                  close() {
                    this.$emit('close');
                 },
                 fail(){
                  Swal.fire(
                            'Failed!',
                            'Please complete all required fields',
                            'error'
                            )
                 },
                 pass(){
                  Swal.fire(
                            'Data Saved to Device!',
                            'Parent record has been saved to local storage, please click the submit button to upload',
                            'success'
                            )
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


<style scoped>
    
.loader{  /* Loader Div Class */
    position: absolute;
    top:0px;
    right:0px;
    width:100%;
    height:100%;
    background-color:#eceaea;
    background-image: url('/pwa/loader.gif');
    background-size: 100px;
    background-repeat:no-repeat;
    background-position:center;
    z-index:10000000;
    opacity: 0.4;
    filter: alpha(opacity=40);
}

.fade-enter,
.fade-leave-to {
opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 500ms ease-out;
}
</style>

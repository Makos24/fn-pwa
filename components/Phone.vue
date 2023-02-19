<template>
 
    <div classmax-w-4xl mx-auto sm=":px-6 lg:px-8"> 
     <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
         Update Registration</h1>
     <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
     <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
     <form class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

        <div class="flex items-start mb-3">
            <label for="phone" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Please select ID to Identify family?</label>
        </div>
         

        <div class="flex flex-wrap mb-6">

       
<div class="w-full md:w-full px-3 mb-6 md:mb-0">
    <input id="hphone" type="radio" @click="hphone = 1" v-model="hphone" value="1" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
    <label for="yes" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Phone Number</label>
</div>

<div class="w-full md:w-full px-3 mb-6 md:mb-0">
    <input id="hphone" type="radio" @click="hphone = 0" v-model="hphone" value="0" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
    <label for="no" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Family Code</label>
</div>


</div>

         <div v-if="hphone == 1" class="mb-6">
             <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
             <input v-on:blur="validatePhone" v-model="data.phone" type="tel" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
             <p class="text-red-500 text-xs italic" v-show="errors.phone">{{errors.phone}}</p>
        </div> 

        <div v-if="hphone == 0" class="mb-6">
             <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Family Code</label>
             <input v-model="data.phone" type="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
             <p class="text-red-500 text-xs italic" v-show="errors.code">{{errors.code}}</p>
        </div> 
         
         
         <button type="button" v-on:click="addPhone" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-3">Save</button>
         
       </form>
     </div>
 </div>
 
 </template>

  
  <script>
  
   import swal from 'sweetalert2';
  window.Swal = swal;
  export default {  
                    
                    data() {
                      return {
                        loading: true,
                        data: {},
                        
                        errors: {},
                        isSuccess: false,
                        error:'',
                        link:'',
                        hphone:1
                      };
                    },
                    methods: {
                      
                    addPhone() {

                        

                        if(this.data.phone == '' || this.data.phone == null){
                            Swal.fire(
                            'Error!',
                            'Please provide a valid phone number or family code',
                            'error'
                            )
                          }else{

                            this.data.chips_id = JSON.parse(localStorage.getItem("auth.user")).id;
  
                            this.$emit('add-phone-event', this.data);
                            this.data = {};
                           Swal.fire(
                              'Data Saved to Device!',
                              'Phone number has been saved to local storage, please click the submit button to upload',
                              'success'
                              )
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
  
  
  </style>
  
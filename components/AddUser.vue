<template>
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <h1 v-if="step == 1" class="flex justify-center pt-8 sm:pt-0 text-2xl leading-5 font-bold mt-4">
        Form B1 - Particulars of Mother
          </h1>

          <h1 v-if="step == 2" class="flex justify-center pt-8 sm:pt-0 text-2xl leading-5 font-bold mt-4">
            Form B1 - Particulars of Father
          </h1>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        
       
	<!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" v-on:click="myFunction()">Get Current Location</button>
<div class="mb-4" v-if="lon">
 <p>Lat = {{lat}} Lon ={{lon}}</p>
 <a class="font-bold" :href="link">See Location on Map</a>
	<p>{{error}}</p>
</div> -->
<form class="w-full" v-on:submit.prevent="addUser()" method="POST">

    <section v-if="step == 1">

      <div class="flex items-start mb-3">
            <label for="phone" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Do you or your husband have a mobile phone?</label>
        </div>

      <div class="flex flex-wrap mb-6">

       
        <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <input id="hphone" type="radio" @click="hasPhone" v-model="hphone" value="1" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
            <label for="yes" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Yes</label>
        </div>

        <div class="w-full md:w-full px-3 mb-6 md:mb-0">
            <input id="hphone" type="radio" @click="hasPhone" v-model="hphone" value="0" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
            <label for="no" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">No</label>
        </div>
       
        
      </div>
      
     
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name  <span class="text-red-500">*</span>
          </label>
          <input v-model="muser.mfname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mfname.required">Mother's first name is required</p>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Middle Name  <span class="text-red-500"></span>
          </label>
          <input v-model="muser.mmname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="">
          
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Surname  <span class="text-red-500">*</span>
          </label>
          <input v-model="muser.msname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.msname.required">Mother's Surname is required</p>

        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div v-if="hphone == 1" class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Phone Number<span class="text-red-500">*</span>
          </label>
          <input v-on:blur="validatemPhone" v-model="muser.mphone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.mphone">{{errors.mphone}}</p>
            <!-- <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mphone.required">Mother's phone number is required</p>
            <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mphone.mobile">Please provide a valid phone number</p>
   -->
        </div>
        <div v-if="hphone == 0" class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Family Code<span class="text-red-500">*</span>
          </label>
          <input v-model="muser.mphone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 uppercase" style="font-family: 'Inconsolata';" id="grid-last-name" type="tel" readonly placeholder="" required>
            <p class="text-red-500 text-xs italic">Please copy code and keep safe</p>
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            National ID<span class="text-red-500"></span>
          </label>
          <input v-on:blur="validateNin" v-model="muser.mnin" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.mnin">{{errors.mnin}}</p>
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Address<span class="text-red-500">*</span> <small>Place of residence</small>
          </label>
          <textarea v-model="muser.maddress" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required></textarea>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.maddress.required">Mother's Address is required</p>

        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Date of Birth <span class="text-red-500">*</span>
          </label>
          <input v-model="muser.mdob" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="date" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mdob.required">Mother's Date of Birth is required</p>

        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Marital Status <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.mstatus" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Married</option>
              <option value="2">Single</option>
              <option value="3">Widowed</option>
              <option value="4">Divorced</option>
              <option value="5">Separated</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mstatus.required">Mother's marital status is required</p>

        </div>
        
   </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Nationality <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.mnationality" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Nigerian</option>
              <option value="2">Non Nigerian</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mnationality.required">Mother's Nationality is required</p>

        </div>
  </div>

      <div v-if="muser.mnationality == 1" class="flex flex-wrap -mx-3 mb-6" >
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            State of Origin <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.mstate" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option v-for="state in states" v-bind:value="state.SN">{{state.Name}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Ethnic Origin <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.methnicity" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option v-for="tribe in tribes" v-bind:value="tribe.code">{{tribe.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6" >
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Literacy <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.mliteracy" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
               <option value="">Select</option>
              <option value="1">Literate</option>
              <option value="2">Illiterate</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.mliteracy.required">Mother's literacy is required</p>

        </div>

  <div v-if="muser.mliteracy == 1" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Level of Education <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.meducation" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option v-for="educ in education" v-bind:value="educ.code">{{educ.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
  </div>


  <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Occupation Category<span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.moccupation_cat" @change="loadOccupation1" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option v-for="ocu in occupation_categories" v-bind:value="ocu.id">{{ocu.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.moccupation_cat.required">Mother's Occupation category is required</p>

        </div>


        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Occupation <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.moccupation" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option v-for="ocu in occupations" v-bind:value="ocu.id">{{ocu.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.moccupation.required">Mother's Occupation is required</p>

        </div>
      </div>


      <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            State of Residence <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-on:change="loadLga" v-model="muser.state" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option v-for="state in states" v-bind:value="state.SN">{{state.Name}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.state.required">Mother's state of residence is required</p>
        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            LGA of Residence <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-on:change="loadWard" v-model="muser.lga" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-lga" required>
              <option v-for="lga in lgas" v-bind:value="lga.SN">{{lga.Name}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.lga.required">Mother's LGA of residence is required</p>

        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Ward of Residence <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-on:change="loadSettlements" v-model="muser.ward" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-ward" required>
              <option v-for="ward in wards" v-bind:value="ward.SN">{{ward.Name}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.ward.required">Mother's Ward of residence is required</p>

        </div>
      </div>


      <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Settlement <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-on:change="loadPhc" v-model="muser.settlement" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-settlement" required>
              <option v-for="settlement in settlements" v-bind:value="settlement.SN">{{settlement.Settlement}}</option>
              <option value="0">Other</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.settlement.required">Mother's settlement is required</p>

        </div>
        <div v-if="muser.settlement == 0" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Specify Settlement <span class="text-red-500">*</span>
          </label>
          <input v-model="muser.settlement_other" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="errors.settlement_other">{{errors.settlement_other}}</p>
        </div>
        
        
      </div>


      <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Catchment Health Facilty <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="muser.phc" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state5" required>
              <option v-for="phc in phcs" v-bind:value="phc.SN">{{phc.Name}}</option>
              <option value="0">Other</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.muser.phc.required">Mother's Catchment Health Facilty is required</p>

        </div>
        <div v-if="muser.phc == 0" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Specify Catchment Health Facilty <span class="text-red-500">*</span>
          </label>
          <input v-model="muser.phc_other" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="errors.phc_other">{{errors.phc_other}}</p>
        </div>
        
      </div>

      <!-- <div class="flex flex-wrap -mx-3 mb-2">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Village/ Town <span class="text-red-500">*</span>
          </label>
          <input v-model="muser.village" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password1" type="text" placeholder="" required>
        </div>
        
      </div> -->
      

    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Expected Date of Delivery (EDD) <span class="text-red-500">*</span>
          </label>
          <client-only>
          <date-picker v-model="muser.edd" :input-attr="{required: 'true'}" :disabled-date="disabledBeforeTodayAndAfter9Months" input-class="py-2.5 block w-full bg-gray-200 focus:bg-white leading-tight" value-type="YYYY-MM-DD" format="DD/MM/YYYY"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required></date-picker>
          </client-only>
          <p class="text-red-500 text-xs italic" v-show="errors.edd">{{errors.edd}}</p>
        </div>
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Contact's Phone number One <span class="text-red-500">*</span>
          </label>
          <input v-on:blur="validatePhone1" v-model="muser.phone1" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password1" type="tel" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="errors.phone1">{{errors.phone1}}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Contact's Phone number Two <span class="text-red-500">*</span>
          </label>
          <input v-on:blur="validatePhone2" v-model="muser.phone2" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password2" type="tel" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="errors.phone2">{{errors.phone2}}</p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Contact's Phone number Three
          </label>
          <input v-on:blur="validatePhone3" v-model="muser.phone3" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password3" type="tel" placeholder="" >
          <p class="text-red-500 text-xs italic" v-show="errors.phone3">{{errors.phone3}}</p>
        </div>
      </div>
    </section>
    <section v-if="step == 2">

    

    <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            First Name  <span class="text-red-500">*</span>
          </label>
          <input v-model="fuser.ffname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.ffname.required">Father's first name is required</p>

        </div>
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Middle Name  <span class="text-red-500"></span>
          </label>
          <input v-model="fuser.fmname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" >
          
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Surname  <span class="text-red-500">*</span>
          </label>
          <input v-model="fuser.fsname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.fsname.required">Father's surname is required</p>

        </div>
        
      </div>


      <div class="flex flex-wrap -mx-3 mb-6">
        <div v-if="hphone == 1" class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Phone Number <span class="text-red-500">*</span>
          </label>
          <input v-on:blur="validatefPhone" v-model="fuser.fphone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.fphone">{{errors.fphone}}</p>
        </div>

        <div v-if="hphone == 0" class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Family Code<span class="text-red-500">*</span>
          </label>
          <input v-model="fuser.fphone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 uppercase" style="font-family: 'Inconsolata';" id="grid-last-name" type="tel" readonly placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.phone">{{errors.fphone}}</p>
        </div>

        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            National ID <span class="text-red-500"></span>
          </label>
          <input v-on:blur="validateNin" v-model="fuser.fnin" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="">
            <p class="text-red-500 text-xs italic" v-show="errors.fnin">{{errors.fnin}}</p>
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="flex items-start mb-6">
            <div class="flex items-center h-5">
            <input id="same_address" type="checkbox" v-model="checked" @click="sameAddress" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" >
            </div>
            <label for="same_address" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400">Is address same as Mother?</label>
        </div>
        <div v-show="!checked" class="w-full md:w-full px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Address <span class="text-red-500">*</span> <small>Place of residence</small>
          </label>
          <textarea v-model="fuser.faddress" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder=""></textarea>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.faddress.required">Father's address is required</p>

        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Date of Birth <span class="text-red-500">*</span>
          </label>
          <input v-model="fuser.fdob" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-mother" type="date" placeholder="" required>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.fdob.required">Father's Date of birth is required</p>

        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Marital Status <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.fstatus" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Married</option>
              <option value="2">Single</option>
              <option value="3">Widowed</option>
              <option value="4">Divorced</option>
              <option value="5">Separated</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.fstatus.required">Father's marital status is required</p>

        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nationality <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.fnationality" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="fgrid-state" required>
              <option value="">Select</option>
              <option value="1">Nigerian</option>
              <option value="2">Non Nigerian</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.fnationality.required">Father's Nationality is required</p>

        </div>
  </div>

      <div v-if="fuser.fnationality == 1" class="flex flex-wrap -mx-3 mb-6" >
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            State of Origin <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.fstate" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required>
              <option v-for="state in states" v-bind:value="state.SN">{{state.Name}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Ethnic Origin <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.fethnicity" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  required>
              <option v-for="tribe in tribes" v-bind:value="tribe.code">{{tribe.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
      </div>


      <div class="flex flex-wrap -mx-3 mb-6" >
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Literacy <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.fliteracy" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
               <option value="">Select</option>
              <option value="1">Literate</option>
              <option value="2">Illiterate</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.fliteracy.required">Father's literacy is required</p>

        </div>

        <div v-if="fuser.fliteracy == 1" class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
            Level of Education <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.feducation" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option v-for="educ in education" v-bind:value="educ.code">{{educ.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
        
      </div>


      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Occupation Category<span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.foccupation_cat" @change="loadOccupation2" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option v-for="ocu in occupation_categories" v-bind:value="ocu.id">{{ocu.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.foccupation_cat.required">Father's occupation category is required</p>

        </div>


        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Occupation <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="fuser.foccupation" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option v-for="ocu in occupations" v-bind:value="ocu.id">{{ocu.title}}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          <p class="text-red-500 text-xs italic" v-show="next && !$v.fuser.foccupation.required">Father's occupation is required</p>

        </div>
      </div>

    </section>
    <section v-if="step == 3">
      <h1>Step 3</h1>
      <h1>Particulars of Informant</h1>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Full Name <span class="text-red-500">*</span> <small>Surname first</small>
          </label>
          <input v-model="user.iname" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required>
          
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            Phone Number <span class="text-red-500">*</span>
          </label>
          <input v-on:blur="validatePhone" v-model="user.iphone" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.phone">{{errors.phone}}</p>
        </div>
        
      </div>

      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
            Address <span class="text-red-500">*</span> <small>Place of residence</small>
          </label>
          <textarea v-model="user.iaddress" class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" required></textarea>
          
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
            National ID <span class="text-red-500"></span>
          </label>
          <input v-on:blur="validateNin" v-model="user.inin" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="tel" placeholder="" required>
            <p class="text-red-500 text-xs italic" v-show="errors.inin">{{errors.inin}}</p>
        </div>
        
      </div>


      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
            Relationship to Child <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select v-model="user.relationship" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" required>
              <option value="">Select</option>
              <option value="1">Father</option>
              <option value="2">Mother</option>
              <option value="3">Brother</option>
              <option value="4">Sister</option>
              <option value="5">Father's Fatther</option>
              <option value="6">Father's Mother</option>
              <option value="7">Mother's Father</option>
              <option value="8">Mother's Mother</option>
              <option value="9">Father's Brother</option>
              <option value="10">Father's Sister</option>
              <option value="11">Mother's Brother</option>
              <option value="12">Mother's Sister</option>
              <option value="13">Others</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
        </div>
      </div>
    
    </section>
    


    
  

<div class="flex items-center justify-between mt-8">
      
      <button v-if="step != 1" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline" type="submit" @click.prevent="prevStep">
        Previous
      </button>
      <button v-if="step != totalsteps" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline" type="submit" @click.prevent="nextStep">
        Next
      </button>
      <button v-if="step == totalsteps" :disabled="!btnDisabled" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline" type="submit">
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
 import tribes from '~/static/tribes.json'
 import education from '~/static/education.json'
 import occupation_categories from '~/static/occupation_category.json'
 import occupations from '~/static/occupation.json'
//  import centres from '~/static/occupation.json'
 import swal from 'sweetalert2';

 import { required, email, sameAs, minLength } from 'vuelidate/lib/validators';
 import { helpers } from 'vuelidate/lib/validators'

const mobile = helpers.regex(/(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/);

window.Swal = swal;
export default {  
                  data() {
                    return {
                      step : 1,
                      totalsteps: 2,
                      loading: true,
                      auth_user:'',
                      last_id:'',
                      muser: {
                        hphone:'',
                        mfname: '',
                        mmname: '',
                        msname: '',
                        mphone: '',
                        mnin: '',
                        maddress: '',
                        mstatus: '',
                        mdob: '',
                        mnationality: '',
                        mstate: '',
                        state: '',
                        lga: '',
                        ward: '',
                        settlement: '',
                        settlement_other: '',
                        phc: '',
                        phc_other: '',
                        methnicity: '',
                        mliteracy: '',
                        meducation: '',
                        moccupation_cat: '',
                        moccupation: '',
                        chips_id : '',
                        edd: '',
                        phone1: '',
                        phone2: '',
                        phone3: '',
                      },
                      fuser: {
                        ffname: '',
                        fmname: '',
                        fsname: '',
                        fphone: '',
                        fnin: '',
                        faddress: '',
                        fstatus: '',
                        fdob: '',
                        fnationality: '',
                        fstate: '',
                        fethnicity: '',
                        fliteracy: '',
                        feducation: '',
                        foccupation_cat: '',
                        foccupation: '',
              
                      },
                      next: false,
                      states : [],
                      lgas : [],
                      wards : [],
                      settlements : [],
                      phcs : [],
                      tribes : [],
                      education : [],
                      occupation_categories : [],
                      occupations : [],
                      centres : [],
                      previous: {},
                      errors: {},
                      isSuccess: false,
                      lat:'',
	                    lon:'',
                      error:'',
                      checked:false,
                      hphone:1,
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
                  validations: {
                    muser: {
                        mfname: {required},
                        //hphone: {required},
                        msname: {required},
                        mphone: {required},
                        //mnin: {required},
                        maddress: {required},
                        mstatus: {required},
                        mdob: {required},
                        mnationality: {required},
                        mstate: {required},
                        state: {required},
                        lga: {required},
                        ward: {required},
                        settlement: {required},
                        //settlement_other: {required},
                        phc: {required},
                        //phc_other: {required},
                        methnicity: {required},
                        mliteracy: {required},
                        //meducation: {required},
                        moccupation_cat: {required},
                        moccupation: {required},
                        edd: {required},
                        //phone1: {required}
                    },
                    fuser: {
                        ffname: {required},
                        //mmname: {required},
                        fsname: {required},
                        fphone: {required},
                        //mnin: {required},
                        faddress: {required},
                        fstatus: {required},
                        fdob: {required},
                        fnationality: {required},
                        fstate: {required},
                        fethnicity: {required},
                        fliteracy: {required},
                        //feducation: {required},
                        foccupation_cat: {required},
                        foccupation: {required}
                    }
                },     
                computed: {
                  btnDisabled() {
                    return !this.$v.$invalid;
                  }
                }, 
                  methods: {
                    nextStep(){

//console.log(this.user);
                        if(this.step == 1){
                          this.next = true;

                          if(this.errors.mphone != ''){
                            Swal.fire(
                            'Error!',
                            'Please provide a valid phone number for mother',
                            'error'
                            )
                          }

                          if(this.$v.muser.$invalid){

                            Swal.fire(
                            'Error!',
                            'Please review errors and complete all required fields',
                            'error'
                            )
                          }else{

                              this.step++;
                              this.next = false;
                          }
                          
                        }else if(this.step == 2){

                          if(this.errors.fphone != ''){
                            Swal.fire(
                            'Error!',
                            'Please provide a valid phone number for father',
                            'error'
                            )
                          }

                            if(!this.$v.fuser.$invalid){

                            Swal.fire(
                            'Error!',
                            'Please complete all required fields',
                            'error'
                            )

                            //return false;
                          }else{
                              this.step++;
                          }

                        }else if(this.step == 3){
                          if(this.user.iname == undefined || this.user.iphone == undefined || this.user.iaddress == undefined || this.user.inin == undefined || 
                            this.user.relationship == undefined){

                            Swal.fire(
                            'Error!',
                            'Please complete all required fields 3',
                            'error'
                            )

                            //return false;
                          }else{
                              this.step++;
                          }
                        }

                      
                    },
                     prevStep(){
                      this.step--;
                    },
                  addUser() {

                    this.muser.hphone = this.hphone;
                    this.muser.chips_id = this.$auth.user.id;

                    let user = {...this.muser, ...this.fuser};

                      // if(!this.testDupes()){
                      //   Swal.fire(
                      //       'Failed!',
                      //       'Please do not repeat phone numbers, make sure every number is different',
                      //       'error'
                      //       );

                      //       return false;
                      // }


                      if(!this.$v.$invalid){

                        this.$emit('add-user-event', user);

                        // this.last_id = this.last_id + 1;
                        this.last_id = localStorage.getItem("last_id");
                        
                        this.previous = user;
                        localStorage.setItem('previous',JSON.stringify(this.previous))
                        this.muser = {};
                        this.fuser = {};
                        this.muser.state = this.previous.state;
                        this.muser.lga = this.previous.lga;
                        this.muser.ward = this.previous.ward;
                        this.muser.settlement = this.previous.settlement;
                        this.muser.phc = this.previous.phc;
                        Swal.fire(
                            'Data Saved to Device!',
                            'Parent record has been saved to local storage, please click the submit button to upload',
                            'success'
                            )
                            this.$forceUpdate();
                            this.$nuxt.refresh();
                            this.step = 1;

                      }else{
                          Swal.fire(
                            'Failed!',
                            'Please review errors and complete all required fields',
                            'error'
                            )
                      }
                        
                  },
                  loadLga(){
                      if(this.muser.state != ''){
                           this.lgas = lgas.filter(lga => lga.StateID == this.muser.state)
                      }
                  },
                  loadWard(){
                      if(this.muser.lga != ''){
                           this.wards = wards.filter(ward => ward.LGAID == this.muser.lga)
                      }
                  },
                  loadSettlements(){
                      if(this.muser.ward != ''){
                           this.settlements = settlements.filter(settlement => settlement.WardID == this.muser.ward)
                      }
                  },
                  loadPhc(){
                      if(this.muser.settlement != ''){
                           this.phcs = phcs.filter(phc => phc.WardID == this.muser.ward)
                      }
                  },
                  loadOccupation1(){
                      if(this.muser.moccupation_categories != ''){
                           this.occupations = occupations.filter(ocu => ocu.occupation_group_id == this.muser.moccupation_cat)
                      }
                  },
                  loadOccupation2(){
                      if(this.fuser.foccupation_categories != ''){
                           this.occupations = occupations.filter(ocu => ocu.occupation_group_id == this.fuser.foccupation_cat)
                      }
                  },
                  validateNin(){

                  },
                  validatemPhone(phone){
                      //console.log(this.user.phone1);

                      //const rule = /^[0]\d{10}$/;
                      const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
                      if(phone.target.value.match(rule)){
                          this.errors.mphone = '';
                      }else{
                          this.errors.mphone = 'Please enter a valid phone number';
                      }

                      
                  },
                  validatefPhone(fphone){
                      //console.log(this.user.phone1);

                      //const rule = /^[0]\d{10}$/;
                      const rule = /(^[0]\d{10}$)|(^[\+]?[234]\d{12}$)/;
                      if(fphone.target.value.match(rule)){
                          this.errors.fphone = '';
                      }else{
                          this.errors.fphone = 'Please enter a valid phone number';
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

                      var numbers = [this.muser.mphone, this.muser.phone1, this.muser.phone2, this.muser.phone3];
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

                      var numbers = [this.muser.mphone, this.muser.phone1, this.muser.phone2, this.muser.phone3];
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

                      var numbers = [this.muser.mphone, this.muser.phone1, this.muser.phone2, this.muser.phone3];
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
                    var numbers = [this.muser.mphone, this.muser.phone1, this.muser.phone2, this.muser.phone3];
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
                  sameAddress(){
                    console.log(this.checked)
                    if(this.checked != true){
                      this.fuser.faddress = this.muser.maddress;
                    }else{
                      this.fuser.faddress = '';
                    }
                  },
                  hasPhone(){
                    
                    if(this.hphone == "1"){
                      
                      const date = new Date();
                      
                      let user = this.add_zero(this.auth_user.id, 6);
                      let last_id = this.add_zero(this.last_id, 5);
                      let fcode = parseInt("" + user + last_id);
                      let code = fcode.toString(32);

                      this.muser.mphone = code;
                      this.fuser.fphone = code;

                      this.errors.mphone = '';
                      this.errors.fphone = '';

                      localStorage.setItem('last_id', parseInt(this.last_id) + 1);

                    }else{
                      this.muser.mphone = '';
                      this.fuser.fphone = '';
                    }
                    
                  },
                  add_zero(number, length) {
                      var num = '' + number;
                      while (num.length < length) {
                          num = '0' + num;
                      }
                      return num;
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
          this.tribes = tribes;
          this.education = education;
          this.occupation_categories = occupation_categories;
          this.occupations = occupations;
          this.muser.mdob = "2000-01-01";
          this.fuser.fdob = "2000-01-01";
          this.muser.mstate = 15;
          this.muser.methnicity = "08";
          this.fuser.fnationality = 1;
          this.fuser.fstate = 15;
          this.fuser.fethnicity = "08";

          //this.step = 2;

          this.auth_user = this.$auth.user;
          

          if (localStorage.getItem("previous")){
              this.previous = JSON.parse(localStorage.getItem("previous"))
              this.muser.state = this.previous.state;
              this.muser.lga = this.previous.lga;
              this.muser.ward = this.previous.ward;
              this.muser.settlement = this.previous.settlement;
              this.muser.phc = this.previous.phc;
            
              this.loadLga();
              this.loadWard();
              this.loadSettlements();
              this.loadPhc();
            }
            if(localStorage.getItem("last_id")){
              this.last_id = localStorage.getItem("last_id");
              if(this.auth_user.last_id > this.last_id){
                  this.last_id = this.auth_user.last_id + 1;
              }
            }else{
              this.last_id = this.auth_user.last_id + 1;
              localStorage.setItem('last_id', parseInt(this.last_id));
            } 
            
      } 
                  
    } 
 
 
                

</script>

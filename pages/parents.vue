<template>

<div classmax-w-4xl mx-auto sm=":px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Registered Parents</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="bg-white overflow-hidden shadow max-w-4xl mx-auto sm:px-6 lg:px-8">

    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">

      
        
        <div class="mb-6">
            <input type="text" v-model="search" placeholder="Search using name or Phone"
              class="w-full px-2 py-3 border rounded outline-none border-grey-600" />    
        </div> 

        <div class="mb-6">
        
            <ul class="list-reset">
            <li v-for="parent in filteredList" class="relative flex items-center justify-between px-2 py-6 border-b">
              <div>
                <h3 class="pt-8 sm:pt-0 text-2xl leading-7 font-bold mt-4">{{parent.phone}}</h3>
                <p  class="inline-block mt-1 text-gray-700">{{parent.father}}</p>
                <p  class="inline-block mt-1 text-gray-400 text-sm">({{parent.mother}})</p>
              </div>
              <button @click="onToggle"  class="absolute right-0 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Report Birth
              </button>
            </li>
            </ul>
            
        </div> 
        
        
    </div>
    </div>
    <div v-if="isModalVisible">
        <div
          @click="onToggle"
          class="absolute bg-black opacity-70 inset-0 z-0"
        ></div>
        <div
          class="w-full max-w-lg p-3 relative mx-auto my-auto rounded-xl shadow-lg bg-white"
        >
          <div>
            <div class="flex-col justify-between w-full">
  <AddBirth v-on:add-birth-event="addBirthRecord" />
  </div>
            <div class="p-3 mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-md hover:shadow-lg hover:bg-gray-100"
              >
                Save
              </button>
              <button
                @click="onToggle"
                class="mb-2 md:mb-0 bg-purple-500 border border-purple-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-md hover:shadow-lg hover:bg-purple-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

</div>
    

    </template>
    
    <script>
    import swal from 'sweetalert2';
    //import AddBirth from '../components/AddBirth.vue';
    
    // import Navbar from '../components/Navbar.vue';
    window.Swal = swal;
    export default {
        //middleware: "auth",
        //name: Prereg,
        //props: ["user"],
        data() {
            return {
                loading: true,
                loadings: false,
                visible: false,
                search:'',
                parents: [],
                births: [],
                isSuccess: false,
                isOpen: false
            };
        },
        methods: {
            addBirthRecord(newBirth) {
            //console.log(newBirth)
            this.births = [...this.births, newBirth];
        },
            sidebarToggle() {
                this.visible = !this.visible;
            },
            report() {
                this.$router.push('/birthreport')
            },
            onToggle() {
      this.isOpen = !this.isOpen;
    }     
        },
        computed: {
            filteredList() {
                return this.parents.filter((parent) =>
                parent.phone.includes(this.search) || parent.mphone.includes(this.search)
                );
            },
            isModalVisible() {
      return this.isOpen;
    }
        },
        watch: {
            births: {
                handler() {
                    localStorage.setItem("births", JSON.stringify(this.births));
                },
                deep: true
            }
        },
        mounted() {
            
            if (localStorage.getItem("edds")) {
                this.parents = JSON.parse(localStorage.getItem("edds"));
            }
        },
       
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
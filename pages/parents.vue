<template>

<div classmax-w-4xl mx-auto sm=":px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Registered Parents</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">

    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">


        
        <div class="mb-6">
            <input type="text" v-model="search" placeholder="Search using name or Phone"
              class="w-full px-2 py-3 border rounded outline-none border-grey-600" />    
        </div> 
        <div class="mb-6">
        
            <ul class="list-reset">
            <li v-for="parent in filteredList" class="relative flex items-center justify-between px-2 py-6 border-b">
              <div>
                <h3 class="pt-8 sm:pt-0 text-2xl leading-7 font-bold mt-4">{{parent.fphone}}</h3>
                <p  class="inline-block mt-1 text-gray-600">{{parent.ffname}}</p>
              </div>
              <nuxt-link :to="{ path: 'birthreport', query: {p: parent.fphone, b: parent.fname}} class="absolute right-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                
              </nuxt-link>
            </li>
            </ul>
            
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
        middleware: "auth",
        //name: Prereg,
        //props: ["user"],
        data() {
            return {
                loading: true,
                loadings: false,
                visible: false,
                search:'',
                parents: [],
                isSuccess: false
            };
        },
        methods: {
            sidebarToggle() {
                this.visible = !this.visible;
            },
            report() {
                this.$router.push('/birthreport')
            },
            
           
        },
        computed: {
            filteredList() {
                return this.parents.filter((parent) =>
                parent.fphone.includes(this.search) || parent.mphone.includes(this.search)
                );
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
            
            if (localStorage.getItem("users")) {
                this.parents = JSON.parse(localStorage.getItem("users"));
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
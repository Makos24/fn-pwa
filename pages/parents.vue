<template>

<div class="max-w-4xl mx-auto sm:px-6 lg:px-8"> 
    <div  v-show="births.length">
  
  <p class=" mb-4 font-bold text-1xl">You currently have {{births.length}} Records stored locally, please click on submit to upload</p>

<button v-on:click="uploadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Submit Captured Data
  </button>
</div>
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
            <li v-for="parent in filteredList" v-bind:key="parent.edd_id" class="relative flex items-center justify-between px-2 py-6 border-b">
              <div>
                <h3 class="pt-8 sm:pt-0 text-xl leading-7 font-bold mt-4">{{parent.phone}}</h3>
                <p  class="inline-block mt-1 text-gray-700">{{parent.father}}</p>
                <p  class="inline-block mt-1 text-gray-400 text-sm">({{parent.mother}})</p>
              </div>
              <button  v-if="parent.status == '1'" class="absolute right-0 flex items-center bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Birth Reported
              </button>
              <button v-else @click="onToggle(parent)"  class="absolute right-0 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Report Birth
              </button>
             
            </li>
            </ul>
            
        </div> 
        
        
    </div>
    </div>
    
            <AddBirth v-on:add-birth-event="addBirthRecord" v-show="isModalVisible" @close="onToggle" :edd="selected.edd" />
         

</div>
    

    </template>
    
    <script>
    import swal from 'sweetalert2';
    import AddBirth from '../components/AddBirth.vue';
    
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
                selected:{},
                parents: [],
                births: [],
                isSuccess: false,
                isOpen: false
            };
        },
        methods: {
            uploadData() {
            if (localStorage.getItem("births")) {
                this.loadings = true;
                this.births = JSON.parse(localStorage.getItem("births"));
                
               
                fetch(process.env.baseUrl+"/api/upload-births", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.births)
                })
                .then(response => {
                    this.loadings = false;
                    return response.json();
                }).then(data => {
                    if(data.msg == "Upload successful.") {
                        Swal.fire("Data Uploaded", "Upload successful.", "success");
                        this.births = [];
                        // console.log(data.data)
                        // if(data.data.length > 0){
                        //     localStorage.setItem("edds", JSON.stringify(data.data));
                        // }
                        
                    }
                    
                })
                .catch(error => {
                    this.loadings = false;
                    this.errorMessage = error.message;
                    Swal.fire("Failed!", error.message, "error");
                    console.log(error);
                });
            }
        },
            addBirthRecord(newBirth) {
            //console.log(newBirth)
            this.births = [...this.births, newBirth];

            let objIndex = this.parents.findIndex(obj=> obj.edd_id === newBirth.edd);
            
            //update the item
            this.parents[objIndex].status = 1;
        },
            sidebarToggle() {
                this.visible = !this.visible;
            },
            onToggle(p) {
                if(p != undefined){
                    this.selected.edd = p.edd_id;
                }
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
            },
            parents: {
                handler() {
                    localStorage.setItem("edds", JSON.stringify(this.parents));
                },
                deep: true
            }
        },
        mounted() {
            
            if (localStorage.getItem("edds")) {
                this.parents = JSON.parse(localStorage.getItem("edds"));
            }
            if (localStorage.getItem("births")) {
            this.births = JSON.parse(localStorage.getItem("births"));
        }
        },
        components: { AddBirth }
       
    } 
                      
                    
    
    </script>
    
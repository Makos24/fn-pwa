<template>

    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8"> 

<div  v-show="reports.length">
  
  <p class=" mb-4 font-bold text-1xl">You currently have {{reports.length}} Records stored locally, please click on submit to upload</p>

<button v-on:click="uploadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Submit Captured Data
  </button>
</div>
        
        <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
            Reported Births</h1>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
        <div class="bg-white overflow-hidden shadow max-w-4xl mx-auto sm:px-6 lg:px-8">
    
        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
    
          
            
            <div class="mb-6">
                <input type="text" v-model="search" placeholder="Search using name or Phone"
                  class="w-full px-2 py-3 border rounded outline-none border-grey-600" />    
            </div> 
    
            <div class="mb-6">
        
                <ul class="list-reset">
                <li v-for="child in filteredList" v-bind:key="child.child_id" class="relative flex items-center justify-between px-2 py-6 border-b">
                  <div>
                    <h3 class="pt-8 sm:pt-0 text-xl leading-7 font-bold mt-4">{{child.name}}</h3>
                    <p  class="mt-1 text-gray-700">{{child.fphone}}</p>
                    <p  class="mt-1 text-gray-400 text-sm">({{child.dob}})</p>
                    <p  class="mt-1 text-gray-400 text-sm">({{child.cgender}})</p>
                  </div>
                  <div class="max-w-xs flex flex-col mt-8">
                  <button  v-if="child.status == '1'"  class="mb-2 py-2 px-3 inline-flex justify-center items-center gap-2 bg-gray-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Certificate Issued
                  </button>
                  <button v-else @click="addBirthRecord(child)" class="py-2 px-3 inline-flex justify-center items-center gap-2 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Certificate Issued?
                  </button>
                </div>
                 
                </li>
                </ul>
                
            </div> 
            
            
        </div>
        </div>
    
                
    
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
                    selected1:{},
                    children: [],
                    reports: [],
                    isSuccess: false,
                    isOpen: false,
                    isOpen1: false,
                };
            },
            
            methods: {
                uploadData() {
                if (localStorage.getItem("reports")) {
                    this.loadings = true;
                    this.reports = JSON.parse(localStorage.getItem("reports"));
                    
                   
                    fetch(process.env.baseUrl+"/api/upload-reports", {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(this.reports)
                    })
                    .then(response => {
                        this.loadings = false;
                        return response.json();
                    }).then(data => {
                        if(data.msg == "Upload successful.") {
                            Swal.fire("Data Uploaded", "Upload successful.", "success");
                            this.reports = [];
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

                Swal.fire({
                title: 'Has Birth Certificate been Issued to this child?',
                icon: 'info',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result['isConfirmed']){
                    
                    newBirth.data = new Date().getTime() / 1000;
                this.reports = [...this.reports, newBirth];
    
                let objIndex = this.children.findIndex(obj=> obj.child_id === newBirth.child_id);
                
                //update the item
                this.children[objIndex].status = 1;

                }
            })

                
            },
                sidebarToggle() {
                    this.visible = !this.visible;
                },
                onToggle(p) {
                    if(p != undefined){
                        this.selected.child_id = p.child_id;
                    }
                    this.isOpen = !this.isOpen;
                },
                onToggle1(p) {
                    if(p != undefined){
                        this.selected1 = p;
                    }
                    this.isOpen1 = !this.isOpen1;
                },
                showDetail(p){
                    localStorage.setItem("child", JSON.stringify(p));
                    this.$router.push('/formb1')
                }     
            },
            computed: {
                filteredList() {
                    if(this.children){
                        return this.children.filter((child) =>
                    child.name.includes(this.search) || child.fphone.includes(this.search) || child.mphone.includes(this.search)
                    );
                    }
                    return false;
                },
                isModalVisible() {
                 return this.isOpen;
                },
                isDetailModalVisible() {
                 return this.isOpen1;
                }
            },
            watch: {
            reports: {
                handler() {
                    localStorage.setItem("reports", JSON.stringify(this.reports));
                },
                deep: true
            },
            children: {
                handler() {
                    localStorage.setItem("children", JSON.stringify(this.children));
                },
                deep: true
            }
        },
            mounted(){
                if (localStorage.getItem("children")) {
                this.children = JSON.parse(localStorage.getItem("children"));
                }

                if (localStorage.getItem("reports")) {
                this.reports = JSON.parse(localStorage.getItem("reports"));
                }

            }
            
           
           
           
        } 
                          
                        
        
        </script>
        
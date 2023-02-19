<template>

    <div>
      <div class="loader" v-if="loadings"></div>
    <div  v-show="phones.length">
      <!-- <button  v-on:click="sidebarToggle" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sidebar
      </button> -->
    
      <!-- <table>
        <tr>
          <th>Father</th>
          <th>Phone</th>
          <th>Mother</th>
          <th>EDD</th>
          <th>Contact 1</th>
          <th>Contact 2</th>
          <th>Contact 3</th>
        </tr>
    
        <tr v-for="user in phones">
            <td>{{user.name}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.mother}}</td>
            <td>{{user.edd}}</td>
            <td>{{user.phone1}}</td>
            <td>{{user.phone2}}</td>
            <td>{{user.phone3}}</td>
        </tr>
    
      </table> -->
      
          <p class=" mb-4 font-bold text-1xl">You currently have {{phones.length}} Records stored locally, please click on submit to upload</p>
      
        <button v-on:click="uploadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Submit Captured Data
          </button>
      </div>
    <div class="flex mt-8">
      
    <div v-show="visible" class="flex-col justify-between w-1/4 text-center">
      <p class=" mb-4 font-bold text-2xl">{{phones.length}} Records</p>
         
          
    </div>
    
      <div class="flex-col justify-between w-full">
      <Phone v-on:add-phone-event="addPhoneRecord" />
      </div>
      
    </div>
    
    </div>
    
    </template>
    
    <script>
    import swal from 'sweetalert2';
    import { mapGetters } from 'vuex'
import Phone from '../components/Phone.vue';
    
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
            add_reload: 0,
            phones: [],
            edds: [],
            isSuccess: false
        };
    },
    methods: {
        addPhoneRecord(newPhone) {
            //console.log(newPhone)
            this.phones = [...this.phones, newPhone];
        },
        sidebarToggle() {
            this.visible = !this.visible;
        },
        uploadData() {
            if (localStorage.getItem("phones")) {
                this.loadings = true;
                this.phones = JSON.parse(localStorage.getItem("phones"));
                fetch(process.env.baseUrl + "/api/upload-phones", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.phones)
                })
                    .then(response => {
                    this.loadings = false;
                    return response.json();
                }).then(data => {
                    if (data.msg == "Upload successful.") {
                       
                        Swal.fire("Data Uploaded", "Upload successful.", "success");
                        this.phones = [];
                        //console.log(data.data)
                        if (data.edd.length > 0) {
                            this.edds = this.edds.concat(data.edd);

                            let foo = new Map();
                            for(const tag of this.edds) {
                            foo.set(tag.edd_id, tag);
                            }
                            let final = [...foo.values()]
                            this.edds = final;

                        
                        }
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
    },
    mounted() {
        if (localStorage.getItem("phones")) {
            this.phones = JSON.parse(localStorage.getItem("phones"));
        }
        if (localStorage.getItem("edds")) {
            this.edds = JSON.parse(localStorage.getItem("edds"));
        }
        // if(this.$auth.user && !this.$auth.user.first_name){
        //     this.$router.push('/updateprofile')
        // }
    },
    computed: {
        ...mapGetters(["loggedInUser"])
    },
    watch: {
        phones: {
            handler() {
                localStorage.setItem("phones", JSON.stringify(this.phones));
            },
            deep: true
        },
        edds: {
            handler() {
                localStorage.setItem("edds", JSON.stringify(this.edds));
            },
            deep: true
        }
    },
    components: { Phone }
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
        background-image: url('/pwa2/loader.gif');
        background-size: 100px;
        background-repeat:no-repeat;
        background-position:center;
        z-index:10000000;
        opacity: 0.4;
        filter: alpha(opacity=40);
    }
    </style>
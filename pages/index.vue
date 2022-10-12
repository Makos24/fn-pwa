<template>

<div>
  <div class="loader" v-if="loadings"></div>
<div  v-show="users.length">
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

    <tr v-for="user in users">
        <td>{{user.name}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.mother}}</td>
        <td>{{user.edd}}</td>
        <td>{{user.phone1}}</td>
        <td>{{user.phone2}}</td>
        <td>{{user.phone3}}</td>
    </tr>

  </table> -->
  
      <p class=" mb-4 font-bold text-1xl">You currently have {{users.length}} Records stored locally, please click on submit to upload</p>
  
    <button v-on:click="uploadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit Captured Data
      </button>
  </div>
<div class="flex mt-8">
  
<div v-show="visible" class="flex-col justify-between w-1/4 text-center">
  <p class=" mb-4 font-bold text-2xl">{{users.length}} Records</p>
     
      
</div>

  <div class="flex-col justify-between w-full">
  <AddUser v-on:add-user-event="addUserRecord" />
  </div>
  
</div>

</div>

</template>

<script>
import swal from 'sweetalert2';
import { mapGetters } from 'vuex'

// import Navbar from '../components/Navbar.vue';
window.Swal = swal;
export default {
    middleware: 'auth',
    //name: Prereg,
    //props: ["user"],
    data() {
        return {
            loading: true,
            loadings: false,
            visible: false,
            users: [],
            isSuccess: false
        };
    },
    methods: {
        addUserRecord(newUser) {
            //console.log(newUser)
            this.users = [...this.users, newUser];
        },
        sidebarToggle() {
            this.visible = !this.visible;
        },
        async uploadData() {
            if (localStorage.getItem("users")) {
                this.loadings = true;
                this.users = JSON.parse(localStorage.getItem("users"));
                var formdata = new FormData();
                formdata.append("data", this.users);
                // let res = await this.$axios.post("http://35.178.125.50/twilio/api/index.php", this.users)
                // .catch(error => {
                //   console.log(error);
                // })
                // return res;
                // 
                // var optionAxios = {
                //       headers: {
                //           'Content-Type': 'application/json'
                //       }
                //       //http://35.178.125.50/twilio
                //http://127.0.0.1:8000/api/upload-pwa
                //   }https://avigohealth.com/twilio/api/
                //await this.$axios.post("https://avigohealth.com/twilio/api/", this.users, optionAxios)
                await fetch(process.env.baseUrl+"/api/upload-pwa", {
                    method: "POST",
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.users)
                })
                
                // await this.$axios.post(process.env.baseUrl+"/api/upload-pwa",
                //     JSON.stringify(this.users)
                // )
                .then(response => {
                    this.loadings = false;
                    //if (response.msg == "Upload successful.") {
                    if(response.ok) {
                        Swal.fire("Data Uploaded", "Upload successful.", "success");
                       
                    }
                    console.log(response.json());
                    // if(response.data.message == "Upload successful."){
                    // }
                }).catch(error => {
                    this.loadings = false;
                    this.errorMessage = error.message;
                    Swal.fire("Failed!", error.message, "error");
                    console.log(error);
                });
            }
        },
    },
    mounted() {
        if (localStorage.getItem("users")) {
            this.users = JSON.parse(localStorage.getItem("users"));
        }
        
        // if(this.$auth.user && !this.$auth.user.first_name){
        //     this.$router.push('/updateprofile')
        // }
    },
    computed: {

    ...mapGetters(['loggedInUser'])

  },
    watch: {
        users: {
            handler() {
                localStorage.setItem("users", JSON.stringify(this.users));
            },
            deep: true
        }
    },
   
    // components: { Navbar }
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
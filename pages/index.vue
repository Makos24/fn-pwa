<template>
<div>
  <div class="loader" v-if="loadings"></div>
<div  v-show="users.length">
  <!-- <button  v-on:click="sidebarToggle" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sidebar
  </button> -->
  
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
window.Swal = swal;
export default {  
                  
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
                    this.users = [...this.users, newUser]
                  },
                  sidebarToggle(){
                    this.visible = !this.visible
                  },
                  async uploadData() {
                    if (localStorage.getItem("users")){
                      this.loadings = true;
                      this.users = JSON.parse(localStorage.getItem("users"))
                    // let res = await this.$axios.post("http://35.178.125.50/twilio/api/index.php", this.users)
                    // .catch(error => {
                    //   console.log(error);
                    // })
                    // return res;
                    // 

                      var optionAxios = {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                            //http://35.178.125.50/twilio
                        }

                    this.$axios.post("https://avigohealth.com/twilio/api/", this.users, optionAxios)
                          .then(response => {
                            this.loadings = false;
                            console.log(response.data.message);
                            if(response.data.message == "Upload successful."){

                            Swal.fire(
                            'Data Uploaded',
                            response.data.message,
                            'success'
                            )

                            this.users = [];
            
                            }
                          })
                          .catch(error => {
                            this.loadings = false;
                            this.errorMessage = error.message;
                             Swal.fire(
                            'Failed!',
                            error.message,
                            'error'
                            )
                            //console.error("There was an error!", error);
                          });
                    }
                  },
                  
                  },
                  watch: {
                  users: {
                    handler() {
                      localStorage.setItem('users',JSON.stringify(this.users))
                    },
                    deep: true
                  }
                },
                mounted() {
                if (localStorage.getItem("users")){
                  this.users = JSON.parse(localStorage.getItem("users"))
                }
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
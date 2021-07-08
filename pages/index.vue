<template>
<div>
<div>
  <button  v-on:click="sidebarToggle" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sidebar
  </button>
  </div>
<div class="flex mt-8">
  
<div v-show="visible" class="flex-col justify-between w-1/4 text-center">
  <p class=" mb-4 font-bold text-2xl">{{users.length}} Records</p>
     
      <button v-show="users.length" v-on:click="uploadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Upload
      </button>
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
                      this.users = JSON.parse(localStorage.getItem("users"))
                    // let res = await this.$axios.post("http://35.178.125.50/twilio/api/index.php", this.users)
                    // .catch(error => {
                    //   console.log(error);
                    // })
                    // return res;
                    // 

var optionAxios = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            //http://35.178.125.50/twilio
        }

                    this.$axios.post("/api/index.php", this.users, optionAxios)
                          .then(response => {
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

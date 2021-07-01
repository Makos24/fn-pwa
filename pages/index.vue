<template>
<div>
  <AddUser v-on:add-user-event="addUserRecord" />

<p v-bind:key="user.id" v-for="user in users">{{user.name}}</p>
  <table>

  </table>

  <div class="flex items-center justify-between mt-8">
     
      <button v-show="users.length" v-on:click="uploadUsers" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Upload
      </button>
    </div>
</div>



</template>

<script>
export default {  
                  
                  //name: Prereg,
                  //props: ["user"],
                  data() {
                    return {
                      loading: true,
                      users: [],
                      isSuccess: false
                    };
                  },
                  methods: {
                  addUserRecord(newUser) {
                    console.log(newUser)
                    this.users = [...this.users, newUser]
                  },
                  uploadUsers(){
                      if (localStorage.getItem("users")){
                      this.users = JSON.parse(localStorage.getItem("users"))
                        this.users.forEach(user => {
                          axios.post("https://reqres.in/invalid-url", user)
                          .then(response => alert(response))
                          .catch(error => {
                            this.errorMessage = error.message;
                            console.error("There was an error!", error);
                          });
                        });
                    }
                  } 
                  
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

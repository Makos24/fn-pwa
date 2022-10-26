<template>

<div>
  <div class="loader" v-if="loadings"></div>
<div  v-show="births.length">
  
      <p class=" mb-4 font-bold text-1xl">You currently have {{births.length}} Records stored locally, please click on submit to upload</p>
  
    <button v-on:click="uploadData" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit Captured Data
      </button>
  </div>
<div class="flex mt-8">
  
<div v-show="visible" class="flex-col justify-between w-1/4 text-center">
  <p class=" mb-4 font-bold text-2xl">{{births.length}} Records</p>
     
      
</div>

  <div class="flex-col justify-between w-full">
  <AddBirth v-on:add-birth-event="addBirthRecord" />
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
            births: [],
            isSuccess: false
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
        uploadData() {
            if (localStorage.getItem("births")) {
                this.loadings = true;
                this.births = JSON.parse(localStorage.getItem("births"));
                var formdata = new FormData();
                formdata.append("data", this.births);
                // let res = await this.$axios.post("http://35.178.125.50/twilio/api/index.php", this.births)
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
                //await this.$axios.post("https://avigohealth.com/twilio/api/", this.births, optionAxios)
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
                    if (response.ok) {
                        Swal.fire("Data Uploaded", "Upload successful.", "success");
                        this.births = [];
                    }
                    console.log(response.json());
                    // if(response.data.message == "Upload successful."){
                    // }
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
    watch: {
        births: {
            handler() {
                localStorage.setItem("births", JSON.stringify(this.births));
            },
            deep: true
        }
    },
    mounted() {
        if (localStorage.getItem("births")) {
            this.births = JSON.parse(localStorage.getItem("births"));
        }
    },
    components: { AddBirth }
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
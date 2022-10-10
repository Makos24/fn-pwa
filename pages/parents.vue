<template>

    <div>
      <div class="loader" v-if="loadings"></div>
    <div  v-show="parents.length">
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
    
        <tr v-for="user in births">
            <td>{{user.name}}</td>
            <td>{{user.phone}}</td>
            <td>{{user.mother}}</td>
            <td>{{user.edd}}</td>
            <td>{{user.phone1}}</td>
            <td>{{user.phone2}}</td>
            <td>{{user.phone3}}</td>
        </tr>
    
      </table> -->
      
          
      
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
                parents: [],
                isSuccess: false
            };
        },
        methods: {
            sidebarToggle() {
                this.visible = !this.visible;
            },
            async fetch() {
                this.parents = await this.$http.$get("/births");
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
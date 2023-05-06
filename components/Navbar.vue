<template>
  <div>
    <div class="bg-gray-100">
      <nav
        class="
          container
          px-6
          py-8
          mx-auto
          md:flex md:justify-between md:items-center
        "
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="
              text-xl
              font-bold
              text-gray-800
              md:text-2xl
              hover:text-blue-400
            "
            >Albarka
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="
                text-gray-800
                hover:text-gray-400
                focus:outline-none focus:text-gray-400
              "
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>


        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="
            flex-col
            mt-8
            space-y-4
            md:flex
            md:space-y-0
            md:flex-row
            md:items-center
            md:space-x-10
            md:mt-0
          "
        >
        <template v-if="isAuthenticated">
          <nuxt-link to="/" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Form B1
          </nuxt-link>
          <nuxt-link to="/parents" class="text-sm font-bold text-gray-800 hover:text-blue-400">
           Registrations
          </nuxt-link>
          <nuxt-link to="/phonenumbers" class="text-sm font-bold text-gray-800 hover:text-blue-400">
           Registration Update
          </nuxt-link>
          <nuxt-link to="/births" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Reported Births
          </nuxt-link>
          <a href="#" @click="logout" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Logout
          </a>
          </template>
        
        <template v-else>
          <nuxt-link to="/login" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Login
          </nuxt-link>
          <nuxt-link to="/register" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Register
          </nuxt-link>
          <!-- <nuxt-link to="/" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Form B1
          </nuxt-link>
          <nuxt-link to="/" class="text-sm font-bold text-gray-800 hover:text-blue-400">
            Birth Report
          </nuxt-link> -->
    </template>
          

        </ul>
        
      </nav>
    </div>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      
      showMenu: false,
      showDrop: false,
      //user: this.$auth.user.data,
    };
  },
  
methods: {
    async logout() {
      await this.$auth.logout();

      this.$router.push('/login');
    },
  },

  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
};
</script>


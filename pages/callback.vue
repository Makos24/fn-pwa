<template>
 
   <div class="max-w-4xl mx-auto sm:px-6 lg:px-8"> 
    <h1 class="flex justify-center pt-8 sm:pt-0 text-4xl leading-7 font-bold mt-4">
        Profile</h1>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css" rel="stylesheet">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="loader"></div>
        <p>Please wait while we're logging you in...</p>
    
    </div>
</div>

</template>


<script>
export default {
    middleware: ['guest'],
    data() {
        return {
            token: this.$auth.getToken('facebook')
        }
    },
    mounted() {
        
    }
}
</script>

<style scoped>
.container {
    text-align: center;
}
.loader {
    margin: 20px auto;
    border: 8px solid #f3f3f3;
    border-radius: 50%;
    border-top: 8px solid #3B5998;
    border-bottom: 8px solid #3B5998;
    width: 60px;
    height: 60px;
    -webkit-animation: spin 1.2s linear infinite;
    animation: spin 1.2s linear infinite;
}

</style>
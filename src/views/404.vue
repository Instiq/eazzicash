<template>
  <div class="body">
      <!-- <div class="container">
          <p class="text-center h3 mt-5">404 NOT FOUND !</p>
          <p class="text-center">  <router-link to="/"><button class="btn btn-primary">Go Home</button> </router-link>  </p>
      </div> -->
      <div id="message">
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
       <router-link to="/"><button class="btn btn-primary">Go Home</button> </router-link>
    </div>
  </div>
</template>

<script>
export default {
name:'404'
}
</script>

<style scoped>
 body { background: #ECEFF1; color: rgba(0,0,0,0.87); font-family: Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; }
      #message { background: white; max-width: 360px; margin: 100px auto 16px; padding: 32px 24px 16px; border-radius: 3px; }
      #message h3 { color: #888; font-weight: normal; font-size: 16px; margin: 16px 0 12px; }
      #message h2 { color: #ffa100; font-weight: bold; font-size: 16px; margin: 0 0 8px; }
      #message h1 { font-size: 22px; font-weight: 300; color: rgba(0,0,0,0.6); margin: 0 0 16px;}
      #message p { line-height: 140%; margin: 16px 0 24px; font-size: 14px; }
       #message a { display: block; text-align: center; text-transform: uppercase; text-decoration: none; color: white; padding: 16px; border-radius: 4px; } 
      #message { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); }
      #load { color: rgba(0,0,0,0.4); text-align: center; font-size: 13px; }
      @media (max-width: 600px) {
        body, #message { margin-top: 0; background: white; box-shadow: none; }
        body { border-top: 16px solid #ffa100; }
      }

</style>
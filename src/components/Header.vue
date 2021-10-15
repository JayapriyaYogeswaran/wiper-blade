<template>
    <div>
         <nav class="main-header navbar-expand-md navbar-light navbar-white">
    <div class="container">
     
        <!-- Left navbar links -->
        <div class="row">
            <div class="col-auto">
                <!-- <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button> -->
                  <ul class="navbar-nav navbar-collapse order-3 p-2" >
          <li class="nav-item">
            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
          </li>
        </ul>
            </div>
            <div class="col p-2">
     <h2 class="text-center">LOGO</h2>

            </div>
            <div class="col-auto">
                   <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto p-2">
        <li class="nav-item dropdown">
          <router-link class="nav-link"  to="summary">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">{{count}}</span>
          </router-link>
     
        </li>
 
      </ul>
            </div>
        </div>
      
      
        

      <!-- Right navbar links -->
   
    </div>
  </nav>
    </div>
</template>
<script>
export default {
    name : 'Header',
    data () {
      return {
        count : null
      }
    },
        mounted () {
        this.count = this.$store.state.cart.length
    }
}
</script>
<style>

</style>
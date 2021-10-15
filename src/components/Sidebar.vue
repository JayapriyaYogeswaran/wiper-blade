<template>
    <div>
          <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a class="brand-link">
     <a href="/"> <span  class="brand-text font-weight-light">Logo</span></a>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
 
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
     
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              <i class="nav-icon far fa-image"></i>
              <p>
                Home
              </p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="summary" class="nav-link">
              <i class="nav-icon fas fa-columns"></i>
              <p>
                Summary
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
    </div>
</template>
<script>
export default {
    name : 'Sidebar',
    
}
</script>
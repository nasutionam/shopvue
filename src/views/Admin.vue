<template>
  <div class="admin">
    <div class="page-wrapper default-theme sidebar-bg bg1 toggled">
        <nav id="sidebar" class="sidebar-wrapper">
            <div class="sidebar-content">
                <!-- sidebar-brand  -->
                <div class="sidebar-item sidebar-brand">
                    <router-link to="/admin">Shop-Vue</router-link>
                </div>
                <!-- sidebar-header  -->
                <div class="sidebar-item sidebar-header d-flex flex-nowrap">
                    <div class="user-pic">
                        <img class="img-responsive img-rounded" src="img/user.jpg" alt="User picture">
                    </div>
                    <div class="user-info">
                        <span class="user-name">Nasution    
                        </span>
                        <span class="user-role">Administrator</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                    </div>
                </div>
                <!-- sidebar-search  -->
                <div class="sidebar-item sidebar-search">
                    <div>
                        <div class="input-group">
                            <input type="text" class="form-control search-menu" placeholder="Search...">
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- sidebar-menu  -->
                <div class=" sidebar-item sidebar-menu">
                    <ul class="text-left">
                        <li class="header-menu">
                            <span>Menu</span>
                        </li>
                        <li>
                            <router-link to="/admin/overview">
                                <span class="menu-text">Overview</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/admin/products">
                                <span class="menu-text">Products</span>
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <span class="menu-text">Orders</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="menu-text">Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <!-- sidebar-menu  -->
            </div>
            
        </nav>
        <!-- page-content  -->
        <main class="page-content pt-2">
            <div id="overlay" class="overlay"></div>
            
                    <router-view />
                    
                
        </main>
        <!-- page-content" -->
    </div>
    <!-- page-wrapper -->
  </div>
</template>

<script>
// @ is an alias to /src
//import Hero from "@/components/Hero.vue";

export default {
  name: "admin",
 

};
</script>

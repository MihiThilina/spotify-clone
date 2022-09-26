<script  setup>

</script>


<template>


  <div style="height: 45rem; width:16.1rem; ">
    <va-sidebar textColor="dark" style="background-color:#030303;">
      <va-sidebar-item >
        <va-sidebar-item-content> 
          
          <img class="mainimg" style="width:4vw;" src="../../src/img/spotify-256.png" alt="">
          <va-sidebar-item-title style="color:white; font-weight:bold; font-size: 30px;">Spotify</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item active style="position:absolute; top:130px; background-color:#323231;">
        <va-sidebar-item-content>
          <va-icon name="Home" />
          <va-sidebar-item-title>Home</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:190px">
        <va-sidebar-item-content>
          <va-icon name="Search" />
          <va-sidebar-item-title>Search</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:250px">
        <va-sidebar-item-content>
          <va-icon name="Libary" />
          <va-sidebar-item-title>Your libray</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </va-sidebar>

  </div>
</template>



<style>


</style>
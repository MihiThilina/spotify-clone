<script  setup>

</script>


<template>


  <div style="height: 45rem; width:16.1rem; ">
    <va-sidebar textColor="dark" style="background-color:#030303;">
      <va-sidebar-item  style="position:absolute; top:10px">
        <va-sidebar-item-content> 
          
          <img class="mainimg" style="width:4vw;" src="../../src/img/spotify-256.png" alt="">
          <va-sidebar-item-title style="color:white; font-weight:bold; font-size: 30px;">Spotify</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item active style="position:absolute; top:130px; background-color:#323231;">
        <va-sidebar-item-content>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g id="original-icon" fill="#ffffff"><path d="M86,3.61469c-0.7482,0 -1.49345,0.23731 -2.12985,0.71891l-79.12,61.75203c-1.4792,1.1696 -1.75413,3.33062 -0.58453,4.84422c1.1696,1.4792 3.33062,1.75413 4.84422,0.58453l4.75016,-3.70875v90.43437c0,1.892 1.548,3.44 3.44,3.44h48.16v-61.92h41.28v61.92h48.16c1.892,0 3.44,-1.548 3.44,-3.44v-90.43437l4.75015,3.70875c0.6536,0.4816 1.37305,0.72563 2.12985,0.72563c1.032,0 2.02638,-0.45015 2.71437,-1.31015c1.1696,-1.5136 0.89467,-3.67462 -0.58453,-4.84422l-79.12,-61.75203c-0.6364,-0.4816 -1.38165,-0.71891 -2.12985,-0.71891zM120.4,17.2v3.61469l20.64,16.09813v-19.71281z"></path></g></g></svg>
          <va-sidebar-item-title style="color: white; position: relative; left: 10px;">Home</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:190px">
        <va-sidebar-item-content>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 172 172" style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M73.45833,21.5c-28.63214,0 -51.95833,23.32621 -51.95833,51.95833c0,28.63212 23.32619,51.95833 51.95833,51.95833c12.38529,0 23.77079,-4.37509 32.71191,-11.64583l35.15446,35.15446c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-35.15446,-35.15446c7.27074,-8.94112 11.64583,-20.32663 11.64583,-32.71191c0,-28.63212 -23.32619,-51.95833 -51.95833,-51.95833zM73.45833,32.25c22.82242,0 41.20833,18.38593 41.20833,41.20833c0,11.11769 -4.38529,21.16215 -11.49886,28.56169c-0.43849,0.32229 -0.8255,0.7093 -1.14779,1.14779c-7.39953,7.11357 -17.44399,11.49886 -28.56169,11.49886c-22.82242,0 -41.20833,-18.38593 -41.20833,-41.20833c0,-22.8224 18.38591,-41.20833 41.20833,-41.20833z"></path></g></g></svg>    
          <va-sidebar-item-title style="color: white; position: relative; left: 10px;">Search</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:250px">
        <va-sidebar-item-content>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAACBUlEQVRIia2Wv2tUQRSFv7uRqAkYNOAvDKhgk8IUIiqYwhhBsLEQsbQSe/8CwQiCvX+DltoIWREUtUgRYgTJimhnYaIYUdyIfBaZXWdf3otr1guPOXNm5p6Z+84bHlSEelNt2hlNdapqzT9FSrajwA2rPxI+qF5R76nz6uWyPLGOgBGxZlwVeAsMAPX0vAPuAzsj4me3JzDDjZxXz5XMn1HHi3ytKzU4VLGJA+po6k4DZzYqUIzJ1J4Aridcz/iOXZS5ZaVQog6svkp4j7qo9qmb1S/qUFGgyi3rCSyqe1N/Xj2a8EP1fJ6rBvRHxKecjIilv5ToMXC6pDSPMr4tkO+8QXeRv9DpTGDti16vFFVY3a9+UEMdVJdTG4kfKT1BtxER74HvwGhEfANmgZMRIavla7tpozaFztLUC/hPmTZSotReUB8kfFydTXif+lGt9SqwPfm+P30HS+ruNLagjkEPJYqIz8ACcCwifgFPgFNpuO2mosCbinxVfG7LO8DSGj4/fh7d8OqE+rxkzrZk3a29CrTvH3WXerF1F6nP1Ilaa1GKRjFZGd+KiGgCL4A54DVwCRhMw6vW7eUEqX9Nvav2FfhxdeZ/CIypCyXzRtTlTcCKOpzfoOpwqy3hm4VcL4Eh9TCwhVX3TAJHgFuoU5b/njyt4G+U7Paq+lWdU2+rZ9UBgN/BN2yyzoxN0QAAAABJRU5ErkJggg==">      
          <va-sidebar-item-title style="color: white; position: relative; left: 10px;">Your libray</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:320px">
        <va-sidebar-item-content>
          <va-sidebar-item-title style="color: white; position: relative; left:; font-weight: bold;">PLAYLISTS</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:360px">
        <va-sidebar-item-content>
          <div style="border-radius:2px; width:2vw; background-color:#b7b7b7; height:4vh;">
              <h1 style="text-align:center; position: relative; font-size: 24px;">+</h1>
          </div>
          <va-sidebar-item-title style="color: white; position: relative; left: 10px;">Create Playlist</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:410px">
        <va-sidebar-item-content>
          <div style="border-radius:2px; width:2vw; background-image: linear-gradient(to right top, #5c50be, #877ad0, #afa5e1, #d7d1f0, #ffffff); height:4vh;">
            <img style="width:1vw; position: relative; left:7px; top: 6px;" src="../../src/img/heart.png" alt="">
          </div>
          <va-sidebar-item-title style="color: white; position: relative; left: 10px;">Like Songs</va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:450px; left: -1px;">
        <va-sidebar-item-content>
              <div style="border: 1.3px solid #323231; background-color:#323231; width:14vw;">

              </div>
        </va-sidebar-item-content>
      </va-sidebar-item>

      <va-sidebar-item style="position:absolute; top:480px; height: 30vh;">
        <va-sidebar-item-content>
             <h4 style="color:white; font-style: normal; font-weight: 300;">Life is really strange</h4>
        </va-sidebar-item-content>
        <va-sidebar-item-content style="position: relative; top:-20px;">
             <h4 style="color:white; font-style: normal; font-weight: 300;">This is Kid Cudi</h4>
        </va-sidebar-item-content>
        <va-sidebar-item-content style="position: relative; top:-40px;">
             <h4 style="color:white; font-style: normal; font-weight: 300;">Lava Lamp</h4>
        </va-sidebar-item-content>
        <va-sidebar-item-content style="position: relative; top:-60px;">
             <h4 style="color:white; font-style: normal; font-weight: 300;">Mix Diario 3</h4>
        </va-sidebar-item-content>
        <va-sidebar-item-content style="position: relative; top:-80px;">
             <h4 style="color:white; font-style: normal; font-weight: 300;">Pop Punk</h4>
        </va-sidebar-item-content>
       
      </va-sidebar-item>

      
    </va-sidebar>
      

  </div>
</template>



<style>


</style>
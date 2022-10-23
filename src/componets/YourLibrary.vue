<script></script>

<template>
  <main>
    <div class="avatar">
      <va-avatar
        style="position: absolute; left: 90px; top: 5px"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFI3NGHwjy_hA/profile-displayphoto-shrink_800_800/0/1635346771654?e=1669852800&v=beta&t=KaglBbGpZ-Vw7ChvwP-BJryVFUw4DEYij6YcmFuGsVM"
      />
      <va-dropdown style="position: relative; left: 150px; top: 10px;">
        <template #anchor>
          <va-button style="width:9vw; background-color:#323231; color:white;"> Thilina </va-button>
        </template>

        <va-dropdown-content> ! </va-dropdown-content>
      </va-dropdown>
    </div>

    <div class="LibaryArea">
      <div class="navBar">
        <ul>
          <li class="active"><span>Playlists</span></li>
          <li><span>Artiets</span> </li>
          <li><span>Albums</span></li>
        </ul>
      </div>


      <h1 class="Topic">Playlists</h1>
        
        <div class="cards">
           <div>
           <span class="content">
           <h1>Like Songs</h1>
           <h6>0 like songs</h6>
           </span>
           </div> 

           <div>
              <section class="rectangle">
              
              </section>
              <span class="playlistContent">
                <h1>My Playlist #1</h1>
                <h6>By Thilina Bandara</h6>
              </span>
           </div> 


           
        </div>
    </div>
  </main>
</template>

<style></style>

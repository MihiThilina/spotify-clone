<script></script>

<template>
  <main>
    <div class="avatar">
      <va-avatar
        style="position: absolute; left: 90px; top: 5px"
        src="https://media-exp1.licdn.com/dms/image/C4D03AQFI3NGHwjy_hA/profile-displayphoto-shrink_800_800/0/1635346771654?e=1669852800&v=beta&t=KaglBbGpZ-Vw7ChvwP-BJryVFUw4DEYij6YcmFuGsVM"
      />
      <va-dropdown style="position: relative; left: 150px; top: 10px">
        <template #anchor>
          <va-button
            style="width: 9vw; background-color: #323231; color: white"
          >
            Thilina
          </va-button>
        </template>

        <va-dropdown-content> ! </va-dropdown-content>
      </va-dropdown>
    </div>

    <div class="LibaryArea">
      <div class="navBar">
        <ul>
          <li class="active"><span>Playlists</span></li>
          <li><span>Artiets</span></li>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="94"
              height="144"
              viewBox="0 0 172 172"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#b7b7b7">
                  <path
                    d="M141.09375,14.33333l-78.83333,10.75c-7.16667,0.72787 -12.09375,7.16667 -12.09375,14.33333v73.68229c-3.30338,-0.58789 -6.88672,-0.58789 -10.75,0.22396c-13.60547,3.58333 -25.08333,15.5931 -25.08333,27.77083c0,12.17774 11.47787,19.48438 25.08333,15.90104c13.60547,-3.58333 25.08333,-15.81706 25.08333,-27.99479v-61.58854l78.83333,-10.52604v48.59896c-3.30338,-0.58789 -6.88672,-0.33594 -10.75,0.67188c-13.60547,3.58333 -25.08333,15.5931 -25.08333,27.77083c0,12.17774 11.47787,19.48438 25.08333,15.90104c13.60547,-3.58333 25.08333,-15.81706 25.08333,-27.99479v-93.16667c0,-8.5944 -7.97851,-15.06119 -16.57292,-14.33333z"
                  ></path>
                </g>
              </g>
            </svg>
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

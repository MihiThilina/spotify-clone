<script setup>
</script>


<template>
  <div
    class="main"
    style="
     background-color: #111111;
      position: absolute;
      width: 83vw;
      left: 258px;
      height: 100vh;
      top: 0;
    "
  >
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

    <h2
      style="
        position: absolute;
        left: 40px;
        font-size: 20px;
        color: white;
        top: 100px;
      "
    >
      Recent Played
    </h2>

    <h2
      style="
        position: absolute;
        right: 60px;
        font-size: 15px;
        color: white;
        top: 107px;
      "
    >
      SEE ALL
    </h2>

    <div class="resultCards">
      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b273419b726151ff531d23b05e1f"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Tonta</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Rkm&Ken-Y Natti Natasha</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>

      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b27388001b7590b469b401df06e9"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Buena Vida</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Natti Natasha, Daddy Yankee</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b2738c684d7745b7b5b76f1706c6"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Honey Boo</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >CNCO, Natti Natasha</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b273b1717c201d31ad8e43dedc55"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Enec</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Ozuna</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b2738b80442d2c6736a5a6ad3cdb"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Que Va</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Alex Sensation, Ozuna</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b27390b5a90a5eaba144a0bbc062"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Vacia Sin Mi</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Ozuna</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b2737463aeddb4c4afcdb5825581"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Santo </va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Christina Aguilera, Ozuna</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
    </div>
    <h2
      style="
        position: absolute;
        left: 40px;
        font-size: 20px;
        color: white;
        top: 370px;
      "
    >
      Your heavy rotalion
    </h2>

    <h2
      style="
        position: absolute;
        right: 60px;
        font-size: 15px;
        color: white;
        top: 373px;
      "
    >
      SEE ALL
    </h2>

    <div class="resultCards2">
      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d00001e028cce3c807c4a560c09a86e9a"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Ozuna</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                ></va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>

      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d00001e02af20c7288d0cfbbd419b411d"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Jaleo </va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Nicky Jam, Steve Aoki</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d0000b273d5d5b791ab4a9f26904166f9"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Dark Love</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                > Tower Beatz </va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://soundsandcolours.com/static/2018/12/cardi-b-j-balvin-bad-bunny-i-like-it-2018-billboard-1500.jpg"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                > I Like It</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Cardi-bj & balvin bad-bunny</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d00001e02ac96988e0118f6ed48d7f64f"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Danena Thuru Ma</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Dinesh Gamage</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh; background-color: #292929;">
              <va-image
                src="https://wallpapercave.com/uwp/uwp1706120.jpeg"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Mad Love</va-card-title
              >
              <va-card-title
                style="
                color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Sean Paul,Backy G</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
      <div class="cards2">
        <div class="row">
          <div class="flex md6 lg12">
            <va-card style="height: 27vh;background-color: #292929;">
              <va-image
                src="https://i.scdn.co/image/ab67616d00001e02ff16b23d53ff793a64ec2138"
                style="height: 17vh"
              />
              <va-card-title
                style="
                color: #efedef;
                  position: relative;
                  top: -10px;
                  font-weight: 900;
                  font-size: 14px;
                "
                >Criminal</va-card-title
              >
              <va-card-title
                style="
                  color: #828282;
                  position: relative;
                  top: -25px;
                  font-weight: 100;
                  font-size: 10px;
                "
                >Natti Natasha,Ozuna</va-card-title
              >
            </va-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style>
</style>
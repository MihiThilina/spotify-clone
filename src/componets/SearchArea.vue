<script>
import axios from "axios";

export default {
  methods: {
    keyPressed(event) {
      // console.log("presssd")
      var key = event.target.value;
      console.log(key);

      axios
        .get("https://api.spotify.com/v1/search?q=" + key + "&type=track")
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>

<template>
 

</template>

<style></style>

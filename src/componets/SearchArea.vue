<script>
export default {
  methods: {
    keyPressed(event){
        // console.log("presssd")
        var key = event.target.value;
        console.log(key)
    }
    
  },
};
</script>

<template>
  <div class="form-group row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Search Music</label>
    <div class="col-sm-10">
      <input
        type="text"
        class="form-control"
        id="staticEmail"
        placeholder="Type here"
        @input="keyPressed"
      />
    </div>
  </div>
</template>

<style></style>

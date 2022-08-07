<template>
  <div>
    <h2>{{ passenger.first_name }} {{ passenger.last_name }}</h2>
    <h3>{{ passenger.gender }}</h3>
    <p>
      {{ passenger.ip_address }} on {{ passenger.Source }} @
      {{ passenger.Destination }}
    </p>
    <p>{{ passenger.travelDate }}</p>
  </div>
  <button @click="detail">Update Data</button>
</template>

<script>
export default {
  props: ["passenger", "id"],
  inject: ["GStore"],
  methods: {
    detail() {
      this.$router.push({
        name: "home",
      });
      this.GStore.flashMessage = "You are successfully update data";
      setTimeout(() => {
        this.GStore.flashMessage = "";
      }, 5000);
    },
  },
};
</script>

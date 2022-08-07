<template>
  <div v-if="GStore.passenger">
    <div id="nav">
      <router-link :to="{ name: 'EventDetail' }"> Details</router-link>
      |
      <router-link :to="{ name: 'airline' }"> Airline</router-link>
    </div>
    <router-view :passenger="GStore.passenger" :airline="GStore.airline" />
  </div>
</template>

<script>
// import EventService from "@/services/EventService.js";
export default {
  // props: ["id"],
  // data() {
  //   return {
  //     passenger: null,
  //     airline: null,
  //   };
  // },
  // created() {
  //   EventService.getPassenger(this.id)
  //     .then((response) => {
  //       this.passenger = response.data;
  //       // console.log(this.passenger);
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       if (error.response && error.response.status == 404) {
  //         this.$router.push({
  //           name: "404Resource",
  //           params: { resource: "passenger" },
  //         });
  //       } else {
  //         this.$router.push({ name: "NetworkError" });
  //       }
  //     });
  //   EventService.getAirline(this.id)
  //     .then((response) => {
  //       this.airline = response.data;
  //     })
  //     .catch((error) => {
  //       // console.log(error);
  //       if (error.response && error.response.status == 404) {
  //         this.$router.push({
  //           name: "404Resource",
  //           params: { resource: "airline" },
  //         });
  //       } else {
  //         this.$router.push({ name: "NetworkError" });
  //       }
  //     });
  // },
  inject: ["GStore"],
};
</script>

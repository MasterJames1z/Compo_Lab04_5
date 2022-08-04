<template>
  <div v-if="passenger">
    <h1>{{ passenger.first_name }} on {{ passenger.last_name }}</h1>
    <p>{{ passenger.email }}</p>
  </div>
</template>

<script>
import EventService from "../services/EventService";
export default {
  props: ["id"],
  data() {
    return {
      passenger: null,
    };
  },
  created() {
    EventService.getPassenger(this.id)
      .then((response) => {
        this.passenger = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

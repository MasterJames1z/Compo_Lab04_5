<template>
  <div>
    <h1>Airline ID: {{ airline.id }}</h1>
    <p>{{ airline.AirlineName }}</p>
    <p>{{ airline.address }}</p>
  </div>
</template>

<script>
export default {
  props: ["airline"],
};
</script>

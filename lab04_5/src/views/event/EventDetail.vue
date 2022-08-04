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
</template>

<script>
export default {
  props: ["passenger"],
};
</script>

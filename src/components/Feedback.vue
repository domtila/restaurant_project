<template>
<div class="text-center">
  <v-rating
    v-model="rating"
    :item-labels="labels"
  >
    <template v-slot:item-label="props">
      <span
        :class="`text-${colors[props.index]}`"
        class="font-weight-black text-caption"
      >
        {{ props.label }}
      </span>
    </template>
  </v-rating>
</div>
  <h1>FeedBack</h1>


</template>

<script >
export default {
    data: () => ({
      rating: 4,
      colors: ['red', 'orange', 'grey', 'cyan', 'green'],
      labels: ['bad', 'so so', 'ok', 'good', 'great'],
    }),
  }


</script>

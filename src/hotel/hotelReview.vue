<template>
 
<figure class="review-item">
  <blockquote class="review-text">
    {{ text }}
  </blockquote>
  <figcaption class="review-person">
    <img :src="person.photo" :alt="person.name" class="review-person-photo">
    <div class="review-person-info">
      <p class="review-person-name">
        {{ person.name }}
      </p>
      <p class="review-date">
        {{ date.toLocaleString() }}
      </p>
    </div>
    <div class="review-score">
      {{ score }}
    </div>
  </figcaption>
</figure>
 
</template>

<script>
export default {
  props:{
    text: String,
    person: Object,
    date: Date,
    score: Number 
  }
}
</script>
<style lang="scss">
@import 'hotelReview';
</style>

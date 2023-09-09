<template>
  <div class="card mb-4">
    <img :src="props.data.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ props.data.title }}</h5>
      <p class="card-text">
        {{ truncatedContent }}
      </p>
      <NuxtLink :to="`/posts/${props.data.id}`" class="btn btn-primary"
        >Show more</NuxtLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);

const truncatedContent = computed(() => {
  const content = props.data.content;
  if (content.length <= 250) {
    return content;
  } else {
    return content.slice(0, 250) + "...";
  }
});
</script>

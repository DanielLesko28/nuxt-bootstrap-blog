<template>
  <div>
    <NuxtLink to="/">
      <div class="btn btn-primary mx-2">Back</div>
    </NuxtLink>
    <div class="container text-center">
      <img :src="props?.data?.image" />
      <p>{{ dateOfCreation.toLocaleString() }}</p>
      <h1 class="my-8">{{ props?.data?.title }}</h1>
      <p>{{ props?.data?.content }}</p>
    </div>
    <div class="container">
      <Comments />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);

const dateOfCreation = new Date(props?.data?.createdAt);

console.log("props", props.data);
console.log("dateOfCreation", dateOfCreation);
</script>

<template>
  <div>
    <div v-if="props.data">
      <NuxtLink to="/">
        <div class="btn btn-primary mx-2">Back</div>
      </NuxtLink>
      <div class="container text-center">
        <img :src="props?.data?.image" />
        <p>{{ formattedDate }}</p>
        <h1 class="my-8">{{ props?.data?.title }}</h1>
        <p>{{ props?.data?.content }}</p>
      </div>
      <div class="container"></div>
      <Comments />
    </div>
    <div v-else class="container text-center">
      <Spinner />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);

const dateOfCreation = ref(null);
const formattedDate = ref(null);

watch(
  () => props?.data?.createdAt,
  (newVal) => {
    if (isValidDate(newVal)) {
      dateOfCreation.value = new Date(newVal);
      formattedDate.value = formatDate(dateOfCreation.value);
    } else {
      dateOfCreation.value = null;
      formattedDate.value = "Invalid Date";
    }
  }
);

function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date) && dateString.trim() !== "";
}

function formatDate(date) {
  if (!date) {
    return "No good date";
  }
  return date.toLocaleDateString();
}
</script>

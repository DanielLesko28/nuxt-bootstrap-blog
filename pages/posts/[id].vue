<template>
  <div class="my-4">
    <SinglePost :data="post" />
  </div>
</template>

<script setup>
import axios from "axios";
const { params } = useRoute();

const post = ref(null);

const fetchPost = async (id) => {
  try {
    const response = await axios.get(
      `https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts/${id}`
    );
    post.value = response.data;
    console.log("single post", post.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  fetchPost(params.id);
});
</script>

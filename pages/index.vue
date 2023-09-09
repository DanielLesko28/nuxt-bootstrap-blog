<template>
  <div class="mx-auto mt-4">
    <div class="container text-center">
      <div class="row row-cols-1 row-cols-md-4">
        <div v-for="post in posts" :key="post.id" class="col">
          <PostCard :data="post" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const posts = ref(null);

const fetchPosts = async () => {
  try {
    const response = await axios.get(
      "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts"
    );

    posts.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

fetchPosts();
</script>

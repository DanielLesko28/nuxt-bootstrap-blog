<template>
  <div class="mt-6">
    <h1>Comments</h1>
    <div class="row">
      <div v-for="comment in comments" :key="comment.id" class="col-md-6">
        <CommentCard :data="comment" />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const comments = ref(null);

const fetchComments = async () => {
  try {
    const response = await axios.get(
      "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments"
    );
    comments.value = response.data;
  } catch (error) {
    console.log(error);
  }
};

fetchComments();
</script>

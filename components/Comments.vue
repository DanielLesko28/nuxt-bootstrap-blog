<template>
  <div>Comments</div>
</template>

<script setup>
import axios from "axios";

const fetchComments = async () => {
  const response = await axios.get(
    "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/comments"
  );
};
</script>

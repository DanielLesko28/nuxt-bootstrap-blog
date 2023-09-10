import { defineStore } from "pinia";
import axios from "axios";

export const usePostStore = defineStore("posts", {
  state: () => {
    posts: [];
  },
  getters: {
    getPosts(state) {
      return state.posts;
    },
  },
  actions: {
    async fetchPosts() {
      try {
        const response = await axios.get(
          "https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts"
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});

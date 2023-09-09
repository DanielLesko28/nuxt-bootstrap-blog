<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="props.data.avatar"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ props.data.name }}</h5>
          <p class="card-text">
            {{ props.data.comment }}
          </p>
          <p class="card-text">
            <small class="text-muted">{{ formattedDate }}</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["data"]);

const createdAtDate = new Date(props.data.createdAt);

const formattedDate = createdAtDate.toLocaleString();
</script>

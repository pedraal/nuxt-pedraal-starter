<script setup lang="ts">
import { AuthModalContent } from "#components";

const modal = useModal();

function openModal() {
  modal.open(AuthModalContent, { baseMode: "login" });
}
</script>

<template>
  <div>
    <h1 class="text-primary">Welcome to the homepage</h1>
    <UButton @click="openModal">Open modal</UButton>
  </div>
</template>

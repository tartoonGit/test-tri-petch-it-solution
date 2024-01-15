<script setup lang="ts">
import Athletes from "./components/Athletes.vue";
import Players from "./components/Players.vue";
</script>

<template>
  <div class="overflow-hidden">
    <Athletes class="pt-[20px] tablet:pt-[50px] desktop:pt-[100px]" />
    <Players class="pt-[20px] tablet:pt-[50px] desktop:pt-[100px]" />
  </div>
</template>

<style scoped></style>

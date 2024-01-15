<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <svg
    v-if="width >= 1280"
    width="268"
    height="309"
    viewBox="0 0 268 309"
    fill="none"
  >
    <path
      d="M3.13281 306.957L265.648 2.83984"
      stroke="#936EEA"
      stroke-width="6"
    />
  </svg>
  <svg
    v-else-if="width >= 740"
    width="183"
    height="211"
    viewBox="0 0 183 211"
    fill="none"
  >
    <path d="M2 209.117L180.877 1.8927" stroke="#936EEA" stroke-width="5" />
  </svg>
  <svg v-else width="110" height="127" viewBox="0 0 110 127" fill="none">
    <path d="M2 125.117L108.346 1.91797" stroke="#936EEA" stroke-width="3" />
  </svg>
</template>

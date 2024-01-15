<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
</script>

<template>
  <svg
    v-if="width >= 740"
    width="271"
    height="316"
    viewBox="0 0 271 316"
    fill="none"
  >
    <path d="M2.89062 313.16L268.516 2" stroke="#936EEA" stroke-width="6" />
  </svg>
  <svg v-else width="80" height="93" viewBox="0 0 80 93" fill="none">
    <path
      d="M1.89062 91.1601L78.5816 1.32233"
      stroke="#936EEA"
      stroke-width="3"
    />
  </svg>
</template>

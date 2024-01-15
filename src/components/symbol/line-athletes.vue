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
    width="223"
    height="238"
    viewBox="0 0 223 238"
    fill="none"
  >
    <path
      d="M2.53711 235.699L220.234 1.98235"
      stroke="#936EEA"
      stroke-width="5"
    />
  </svg>
  <svg v-else width="182" height="201" viewBox="0 0 182 201" fill="none">
    <path
      d="M1.35938 199.145L180.252 1.91016"
      stroke="#936EEA"
      stroke-width="3"
    />
  </svg>
</template>

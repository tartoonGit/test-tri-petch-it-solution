<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
interface propsType {
  bgColor?: string;
  dark?: boolean;
  title: string;
  content: string;
  index: number;
  direction: "left" | "right";
}
const props = defineProps<propsType>();

const bgColorComputed = computed(() => {
  return props.bgColor ? `${props.bgColor}` : "#ffffff";
});
const darkMode = computed(() => {
  return props.dark ? true : false;
});
const padding = computed(() => {
  if (width.value > 1650) {
    return "320px";
  } else if(width.value >= 1380) {
    return `${320 - (1650 - width.value)}px`;
  } else {
    return "30px"
  }
});
</script>

<template>
  <div
    class=" tablet:py-[30px]  desktop:py-[60px] grid tablet:grid-cols-7 "
    :style="{ backgroundColor: bgColorComputed }"
    :class="props.direction === 'left' ? '':'desktop:grid-cols-2'"
  >
    <div
      :class="props.direction === 'left' ? 'tablet:col-start-1 tablet:col-span-4 desktop:col-start-1 desktop:col-span-6' :'tablet:col-span-4 tablet:col-start-4 desktop:col-start-2 desktop:col-span-1'"
      :style="props.direction === 'left' ? { paddingLeft: padding } : {}"
    >
      <div class="text-[#C2C2C2] text-[36px] flex items-center">
        <span
          class="text-[#000000] text-lg pr-2.5 before:block before:absolute before:h-[5px] before:w-[22px] before:rounded-3xl before:bottom-[-4px] relative inline-block"
          :class="darkMode ? 'before:bg-[#ffffff]' : 'before:bg-[#603EBE]'"
          >0{{ props.index }}</span
        >{{ props.title }}
      </div>
      <div
        class="text-desktop pt-5 desktop:text-[20px] tablet:text-[18px] desktop:w-full desktop:max-w-[717px]"
        :class="darkMode && 'text-[#ffffff]'"
      >
        {{ props.content }}
      </div>
    </div>
  </div>
</template>

<style scoped></style>

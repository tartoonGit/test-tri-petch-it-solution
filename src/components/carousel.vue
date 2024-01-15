<script setup lang="ts">
import { ref, computed } from "vue";

interface propsType {
  title: string;
  content: string;
}
const props = defineProps<{ data: propsType[] }>();

const activeIndex = ref(0);

const slideWidth = 100;
const sliderStyle = computed(() => {
  return {
    transform: `translateX(-${activeIndex.value * slideWidth}%)`,
    transition: "transform 0.3s ease-in-out",
  };
});

const setCurrentSlide = (index: number) => {
  activeIndex.value = index;
};
</script>

<template>
  <div class="flex overflow-hidden relative">
    <div
      :style="sliderStyle"
      class="flex-shrink-0 w-full"
      v-for="(item, index) in props.data"
      :key="index"
      :class="{ active: activeIndex === index }"
    >
      <div class="bg-[#F5F4F9] py-[60px] px-[20px] min-h-full">
        <div class="text-[#C2C2C2] text-[28px]">
          <span
            class="text-[#000000] bottom-[9px] text-sm pr-[10px] before:block before:absolute before:h-[4px] before:w-[18px] before:rounded-3xl before:bottom-[-2px] relative inline-block before:bg-[#603EBE]"
            >0{{ index + 1 }}</span
          >{{ item.title }}
        </div>
        <div class="pt-[10px]">{{ item.content }}</div>
      </div>
    </div>
    <div class="absolute space-x-2 bottom-[25px] left-[50%] translate-x-[-50%]">
      <button
        v-for="i in props.data.length"
        :key="i"
        class="w-[10px] h-[10px] rounded-full"
        :class="activeIndex === i - 1 ? 'bg-[#5C3CAF]':'bg-[#D8D8D8]'"
        @click="setCurrentSlide(i - 1)"
      />
    </div>
  </div>
</template>

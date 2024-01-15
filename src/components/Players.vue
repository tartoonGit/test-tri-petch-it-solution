<script setup lang="ts">
import List from "./list.vue";
import LinePlayer from "./symbol/line-player.vue";
import LinePlayer2 from "./symbol/line-player2.vue";
import Plus from "./symbol/plus.vue";
import Carousel from "./carousel.vue";
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";

const { width } = useWindowSize();
const listData = [
  {
    title: "CONNECTION",
    content:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  },
  {
    title: "COLLABORATION",
    content:
      "Work with recruiter to increase your chances of findingtalented athlete.",
    bgColor: "#F5F4F9",
  },
  {
    title: "GROWTH",
    content: "Save your time, recruit proper athlets for your team.",
    bgColor: "#5E3DB3",
    dark: true,
  },
];
const padding = computed(() => {
  if (width.value > 1650) {
    return "320px";
  } else if (width.value >= 1380) {
    return `${320 - (1650 - width.value)}px`;
  } else {
    return "30px";
  }
});
</script>

<template>
  <div class="relative">
    <div
      class="text-[50px] tablet:text-[90px] pl-5 tablet:p-0 text-[#E7E7E7] grid tablet:grid-cols-7 desktop:grid-cols-2"
    >
      <span
        class="tablet:col-start-1 tablet:col-span-7 desktop:col-start-1 desktop:col-span-1"
        :style="{ paddingLeft: padding }"
        >PLAYERS</span
      >
    </div>
    <div
      class="relative top-[15px] tablet:top-[calc(20px-135px)] desktop:top-[calc(10px-135px-100px)] z-10"
    >
      <div
        class="absolute left-[50%] tablet:left-[90%] desktop:left-[70%] translate-x-[-50%] w-[302px] tablet:w-[691px] desktop:max-w-[991px] desktop:w-full"
      >
        <img
          class="relative min-w-[200px] min-h-[249px] w-full h-auto z-20"
          src="/basketball.png"
        />
        <LinePlayer
          class="absolute left-[49px] top-[109px] tablet:left-[159px] tablet:top-[264px] desktop:left-[185px] desktop:top-[458px] z-0"
        />
        <LinePlayer2
          v-if="width > 1280 || width < 740"
          class="absolute left-[197px] top-[23px] desktop:left-[661px] desktop:top-[81px] z-0"
        />
        <Plus
          class="absolute left-[71px] top-[8px] tablet:left-[202px] tablet:top-[72px] desktop:top-[131px] desktop:left-[294px] z-0"
        />
        <Plus
          v-if="width > 1280 || width < 740"
          class="absolute top-[149px] left-[266px] tablet:left-[520px] tablet:top-[282px] desktop:top-[401px] desktop:left-[774px] z-0"
        />
        <Plus
          class="absolute top-[1px] left-[49px] tablet:left-[224px] tablet:top-[89px] desktop:top-[148px] desktop:left-[316px] z-0 opacity-30"
        />
      </div>
    </div>
    <div v-if="width < 740" class="pt-[220px] relative z-0">
      <Carousel :data="listData" />
    </div>
    <div v-else>
      <List
        v-for="(item, index) in listData"
        direction="left"
        :key="index"
        :bgColor="item.bgColor"
        :dark="item.dark"
        :title="item.title"
        :content="item.content"
        :index="index + 1"
      />
    </div>
  </div>
</template>

<style scoped></style>

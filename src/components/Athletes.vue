<script setup lang="ts">
import List from "./list.vue";
import LineAthletes from "./symbol/line-athletes.vue";
import Plus from "./symbol/plus.vue";
import Carousel from "./carousel.vue"
import { useWindowSize } from "@vueuse/core";

const { width } = useWindowSize();
const listData = [
  {
    title: "CONNECTION",
    content:
      "Connect with coaches directly, you can ping coaches to view profile.",
  },
  {
    title: "COLLABORATION",
    content:
      "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    bgColor: "#F5F4F9",
  },
  {
    title: "GROWTH",
    content:
      "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    bgColor: "#5E3DB3",
    dark: true,
  },
];
</script>

<template>
  <div class="relative">
    <div
      class="text-[50px] tablet:text-[90px] pl-5 tablet:p-0 text-[#E7E7E7] grid tablet:grid-cols-7 desktop:grid-cols-2"
    >
      <span
        class="tablet:col-start-4 tablet:col-span-4 desktop:col-start-2 desktop:col-span-1"
        >Athletes</span
      >
    </div>
    <div
      class="relative top-[15px] tablet:top-[calc(20px-135px)] desktop:top-[calc(-50px-135px)] z-10 "
    >
      <div
        class="absolute left-[50%] tablet:left-[15%] desktop:left-[25%] translate-x-[-50%] w-[200px] tablet:w-[518px] desktop:max-w-[678px] desktop:w-auto"
      >
        <img
          class="relative min-w-[200px] min-h-[281px] desktop:max-w-[678px] w-auto z-20"
          src="/american-football.png"
        />
        <LineAthletes
          v-if="width < 1280"
          class="absolute top-[13px] tablet:left-[197.5px] tablet:top-[19px] z-0"
        />
        <Plus
          v-if="width < 1280"
          class="absolute top-[20px] left-[4px] tablet:left-[220.5px] tablet:top-[-10px] z-0"
        />
        <Plus
          v-if="width < 1280"
          class="absolute top-[11px] left-[-18px] tablet:left-[197.5px] tablet:top-[-20px] z-0 opacity-30"
        />
      </div>
    </div>
    <div v-if="width < 740" class="pt-[251px] relative z-0">
      <Carousel :data="listData" />
    </div>
    <div v-else>
      <List
        v-for="(item, index) in listData"
        direction="right"
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

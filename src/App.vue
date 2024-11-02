<template>
  <div class="wrapper">
    <!-- <Responsible /> -->
    <!-- <Attribution /> -->
    <BasicSearch />
  </div>
</template>

<script setup>
import Responsible from "@/components/Responsible/index.vue";
import Attribution from "@/components/Attribution/index.vue";
import BasicSearch from "@/components/BasicSearch/index.vue";
</script>

<style>
.wrapper {
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>

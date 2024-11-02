<!-- 问题归属组件 -->
<template>
  <div class="attribution-container">
    <el-select
      :model-value="attributionValue"
      :placehoder="attributionPlacehoder"
      :size="attributionSize"
      :style="{ width: attributionWidth }"
      @change="attributionChange"
    >
      <el-option
        v-for="data of attributionData"
        :key="data.value"
        :label="data.label"
        :value="data.value"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup>
// import { ref, isReactive } from "vue";
// const options = ref([
//   {
//     value: "value1",
//     label: "value1",
//   },
//   {
//     value: "value2",
//     label: "value2",
//   },
//   {
//     value: "value3",
//     label: "value3",
//   },
//   {
//     value: "value4",
//     label: "value4",
//   },
//   {
//     value: "value5",
//     label: "value5",
//   },
// ]);

// props是浅层响应式
const props = defineProps({
  attributionValue: {
    type: String,
    default: "",
  },
  attributionSize: {
    type: String,
    default: "small",
  },
  attributionPlacehoder: {
    type: String,
    default: "请输入",
  },
  attributionWidth: {
    type: String,
    default: "200px",
  },
  attributionData: {
    type: Array,
    default: [],
  },
});

const attributionChange = (value) => {
  console.log("select: =>", value);
};
</script>

<style></style>

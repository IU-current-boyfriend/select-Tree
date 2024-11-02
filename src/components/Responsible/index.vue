<template>
  <!-- 责任人组件 -->
  <div class="responsible-container">
    <el-text class="mx-1" size="small" :style="{ marginRight: '10px' }"
      >责任人:</el-text
    >
    <el-cascader
      :model-value="responsible"
      :options="responsibleData"
      :props="cascaderProps"
      :size="size"
      @change="responsibleChange"
    ></el-cascader>
  </div>
</template>

<script setup>
// import { ref } from "vue";
// 使用该组件的方式，它是一个级联选择器，内部展示的数据呢？由外界传递进来

// const options = ref([
//   {
//     value: "guide",
//     label: "Guide",
//     children: [
//       {
//         value: "disciplines",
//         label: "Disciplines",
//         children: [
//           {
//             value: "consistency",
//             label: "Consistency",
//           },
//           {
//             value: "feedback",
//             label: "Feedback",
//           },
//           {
//             value: "efficiency",
//             label: "Efficiency",
//           },
//           {
//             value: "controllability",
//             label: "Controllability",
//           },
//         ],
//       },
//       {
//         value: "navigation",
//         label: "Navigation",
//         children: [
//           {
//             value: "side nav",
//             label: "Side Navigation",
//           },
//           {
//             value: "top nav",
//             label: "Top Navigation",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "component",
//     label: "Component",
//     children: [
//       {
//         value: "basic",
//         label: "Basic",
//         children: [
//           {
//             value: "layout",
//             label: "Layout",
//           },
//           {
//             value: "color",
//             label: "Color",
//           },
//           {
//             value: "typography",
//             label: "Typography",
//           },
//           {
//             value: "icon",
//             label: "Icon",
//           },
//           {
//             value: "button",
//             label: "Button",
//           },
//         ],
//       },
//       {
//         value: "form",
//         label: "Form",
//         children: [
//           {
//             value: "radio",
//             label: "Radio",
//           },
//           {
//             value: "checkbox",
//             label: "Checkbox",
//           },
//           {
//             value: "input",
//             label: "Input",
//           },
//           {
//             value: "input-number",
//             label: "InputNumber",
//           },
//           {
//             value: "select",
//             label: "Select",
//           },
//           {
//             value: "cascader",
//             label: "Cascader",
//           },
//           {
//             value: "switch",
//             label: "Switch",
//           },
//           {
//             value: "slider",
//             label: "Slider",
//           },
//           {
//             value: "time-picker",
//             label: "TimePicker",
//           },
//           {
//             value: "date-picker",
//             label: "DatePicker",
//           },
//           {
//             value: "datetime-picker",
//             label: "DateTimePicker",
//           },
//           {
//             value: "upload",
//             label: "Upload",
//           },
//           {
//             value: "rate",
//             label: "Rate",
//           },
//           {
//             value: "form",
//             label: "Form",
//           },
//         ],
//       },
//       {
//         value: "data",
//         label: "Data",
//         children: [
//           {
//             value: "table",
//             label: "Table",
//           },
//           {
//             value: "tag",
//             label: "Tag",
//           },
//           {
//             value: "progress",
//             label: "Progress",
//           },
//           {
//             value: "tree",
//             label: "Tree",
//           },
//           {
//             value: "pagination",
//             label: "Pagination",
//           },
//           {
//             value: "badge",
//             label: "Badge",
//           },
//         ],
//       },
//       {
//         value: "notice",
//         label: "Notice",
//         children: [
//           {
//             value: "alert",
//             label: "Alert",
//           },
//           {
//             value: "loading",
//             label: "Loading",
//           },
//           {
//             value: "message",
//             label: "Message",
//           },
//           {
//             value: "message-box",
//             label: "MessageBox",
//           },
//           {
//             value: "notification",
//             label: "Notification",
//           },
//         ],
//       },
//       {
//         value: "navigation",
//         label: "Navigation",
//         children: [
//           {
//             value: "menu",
//             label: "Menu",
//           },
//           {
//             value: "tabs",
//             label: "Tabs",
//           },
//           {
//             value: "breadcrumb",
//             label: "Breadcrumb",
//           },
//           {
//             value: "dropdown",
//             label: "Dropdown",
//           },
//           {
//             value: "steps",
//             label: "Steps",
//           },
//         ],
//       },
//       {
//         value: "others",
//         label: "Others",
//         children: [
//           {
//             value: "dialog",
//             label: "Dialog",
//           },
//           {
//             value: "tooltip",
//             label: "Tooltip",
//           },
//           {
//             value: "popover",
//             label: "Popover",
//           },
//           {
//             value: "card",
//             label: "Card",
//           },
//           {
//             value: "carousel",
//             label: "Carousel",
//           },
//           {
//             value: "collapse",
//             label: "Collapse",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: "resource",
//     label: "Resource",
//     children: [
//       {
//         value: "axure",
//         label: "Axure Components",
//       },
//       {
//         value: "sketch",
//         label: "Sketch Templates",
//       },
//       {
//         value: "docs",
//         label: "Design Documentation",
//       },
//     ],
//   },
// ]);

// 责任人组件需要用到的外界props属性
defineProps({
  responsible: {
    type: Array,
    default: [],
  },
  responsibleData: {
    type: Array,
    default: [],
  },
  cascaderProps: {
    type: Object,
    default: () => ({
      expandTrigger: "hover",
    }),
  },
  size: {
    type: String,
    default: "small",
  },
});

const responsibleChange = (value) => {
  console.log("责任人发生改变:=>", value);
};
</script>

<style></style>

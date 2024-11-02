<template>
  <div class="tree-container">
    <el-tree
      ref="treeRef"
      size="large"
      :data="treeData"
      show-checkbox
      default-expand-all
      node-key="id"
      highlight-current
      :props="defaultProps"
      @check="handleTreeCheck"
      :filter-node-method="filterTreeNodeMethod"
    ></el-tree>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 树形组件
const treeRef = ref();

defineProps({
  treeData: {
    type: Object,
    default: () => ({}),
  },
});

defineExpose({
  filter: (val) => {
    treeRef?.value.filter(val);
  },
  removeNode: (idx) => {
    treeRef?.value.setChecked(idx, false, true);
  },
});

const emits = defineEmits(["update:checkedNodes", "update:filterTree"]);

const defaultProps = {
  children: "children",
  label: "label",
};

const handleTreeCheck = (nodes, { checkedNodes, checkedKeys }) => {
  emits("update:checkedNodes", { checkedNodes, checkedKeys });
};

const filterTreeNodeMethod = (value, data) => {
  if (!value) return true;
  return data.label.includes(value);
};
</script>

<style></style>

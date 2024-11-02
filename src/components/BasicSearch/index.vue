<!-- 对比查询组件  思路的封装：select + tree -->
<template>
  <div class="basic-search-container">
    <!-- select-component -->
    <el-select
      :model-value="labels"
      placeholder="请选择..."
      size="large"
      filterable
      multiple
      :filter-method="selectFilterMethod"
      @remove-tag="removeTag"
    >
      <template #empty>
        <TreeComponent
          ref="treeRef"
          :treeData="treeData"
          @update:checkedNodes="handleCheckedNodes"
        />
      </template>
    </el-select>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import TreeComponent from "./cpns/tree.vue";

const treeData = ref([
  {
    id: 1,
    label: "Level one 1",
    children: [
      {
        id: 4,
        label: "Level two 1-1",
        children: [
          {
            id: 10,
            label: "Level three 1-1-1",
          },
          {
            id: 11,
            label: "Level three 1-1-2",
          },
        ],
      },
      {
        id: 5,
        label: "Level two 1-2",
        children: [
          {
            id: 12,
            label: "Level three 1-1-3",
          },
          {
            id: 13,
            label: "Level three 1-1-4",
            children: [
              {
                id: 14,
                label: "Level four 1-1-4-1",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Level one 2",
    children: [
      {
        id: 6,
        label: "Level two 2-1",
      },
      {
        id: 7,
        label: "Level two 2-2",
      },
    ],
  },
  {
    id: 3,
    label: "Level one 3",
    children: [
      {
        id: 8,
        label: "Level two 3-1",
      },
      {
        id: 9,
        label: "Level two 3-2",
      },
    ],
  },
]);

const labels = ref([]);

const treeKey = ref("");

const treeRef = ref();

const filterable = (nodes) => {
  // 判断是否存在树枝🌿
  const isExistBranchTree = (nodes) =>
    nodes.some((s) => s.children && s.children.length > 0);

  const existBranchTree = isExistBranchTree(nodes);

  // 存在树枝、过滤树枝和树叶
  if (existBranchTree) return filterNonBranchTreeAndLeaf(nodes);

  function filterNonBranchTreeAndLeaf(nodes) {
    let branchTree = nodes.reduce((p, n) => {
      if (n.children && n.children.length > 0) p.push(n);
      return p;
    }, []);

    let leafTree = nodes.reduce((p, n) => {
      if (!n.children) p.push(n);
      return p;
    }, []);

    // 先去除树枝🌿
    filterBranchTree();

    // 再去除树叶🍂
    filterLeafTree();

    function filterBranchTree() {
      branchTree = branchTree.filter((b) => {
        // 这个b属于branchTree的某个元素中，就要去除
        return !branchTree.some((c) => isOtherPartDeep(b, c.children));
      });
    }

    function filterLeafTree() {
      leafTree = leafTree.filter((l) => {
        return !branchTree.some((c) => isOtherPartDeep(l, c.children));
      });
    }

    // 需要一个方法，去判断一个元素是否是属于别人子集
    function isOtherPartDeep(n, c) {
      return c?.some((s) => {
        if (s === n) return true;
        if (s.children && s.children.length > 0) {
          return isOtherPartDeep(n, s.children);
        }
      });
    }

    return [...branchTree, ...leafTree];
  }

  return nodes;
};

const selectFilterMethod = (value) => (treeKey.value = value);

watch(
  () => treeKey.value,
  (n) => {
    treeRef.value.filter(n);
  }
);

const handleCheckedNodes = ({ checkedNodes, checkedKeys }) => {
  labels.value = filterable(checkedNodes, checkedKeys);
};

const removeTag = (tagValue) => {
  // 设置tree组件状态
  treeRef.value.removeNode(tagValue.id);
  // 删除labels
  deleteLabels(tagValue.id);
};

const deleteLabels = (id) => {
  labels.value = labels.value.filter((l) => l.id !== id);
};
</script>

<style></style>

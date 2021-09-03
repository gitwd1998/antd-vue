<template>
  <div>
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta :description="item.content">
          <a slot="title">{{ item.title }}</a>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card :title="item.title">{{ item.content }}</a-card>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
import { List, Card } from "ant-design-vue";
const data = [
  { title: "Ant Design Title 1", content: "Ant Design Content 1" },
  { title: "Ant Design Title 2", content: "Ant Design Content 1" },
  { title: "Ant Design Title 3", content: "Ant Design Content 1" },
  { title: "Ant Design Title 4", content: "Ant Design Content 1" },
];
export default {
  components: {
    aList: List,
    aListItem: List.Item,
    aListItemMeta: List.Item.Meta,
    aCard: Card,
  },
  data() {
    return {
      data,
    };
  },
};
</script>
<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      @change="handlePaging"
    >
      <span slot="index" slot-scope="t, v, i">{{ i }}</span>
      <div slot="skill" slot-scope="skill">
        <a-tag v-for="(v, i) in skill" :key="i">{{ v.toUpperCase() }}</a-tag>
      </div>
      <div slot="handle" slot-scope="t, v, i">
        <a @click="handleCheck(t, v, i)">查看</a>
        <a-divider type="vertical" />
        <a @click="handleChange(t, v, i)">修改</a>
        <a-divider type="vertical" />
        <a @click="handleDelete(t, v, i)">删除</a>
      </div>
    </a-table>
  </div>
</template>
<script>
import { Table, Tag, Divider } from "ant-design-vue";
const columns = [
  { title: "编号", dataIndex: "index", scopedSlots: { customRender: "index" } },
  { title: "姓名", dataIndex: "name", scopedSlots: { customRender: "name" } },
  { title: "性别", dataIndex: "sex" },
  { title: "年龄", dataIndex: "age" },
  { title: "技能", dataIndex: "skill", scopedSlots: { customRender: "skill" } },
  {
    title: "操作",
    dataIndex: "handle",
    scopedSlots: { customRender: "handle" },
  },
];

const data = [
  {
    key: "1",
    name: "张三",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "2",
    name: "李四",
    sex: "女",
    age: 42,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "3",
    name: "王五",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "4",
    name: "张三",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "5",
    name: "李四",
    sex: "女",
    age: 42,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "6",
    name: "王五",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "7",
    name: "张三",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "8",
    name: "李四",
    sex: "女",
    age: 42,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "9",
    name: "王五",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "10",
    name: "张三",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "11",
    name: "李四",
    sex: "女",
    age: 42,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "12",
    name: "王五",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "13",
    name: "张三",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "14",
    name: "李四",
    sex: "女",
    age: 42,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "15",
    name: "王五",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "16",
    name: "张三",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "17",
    name: "李四",
    sex: "女",
    age: 42,
    skill: ["HTML", "CSS", "JS"],
  },
  {
    key: "18",
    name: "王五",
    sex: "男",
    age: 32,
    skill: ["HTML", "CSS", "JS"],
  },
];

export default {
  components: { aTable: Table, aTag: Tag, aDivider: Divider },
  data() {
    return {
      data,
      columns,
    };
  },
  methods: {
    handleCheck(text, v, i) {
      console.log("查看: ", v, i);
    },
    handleChange(text, v, i) {
      console.log("修改: ", v, i);
    },
    handleDelete(text, v, i) {
      console.log("删除: ", v, i);
    },
    handlePaging(a, b, c, d) {
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
    },
  },
};
</script>
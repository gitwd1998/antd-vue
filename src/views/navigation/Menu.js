import nav from "@/assets/json/nav.json";
const recursion = {
  functional: true,
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  render(h, context) {
    return (<ul>
      {context.props.list.map(v => v.item?.length ? <li>{v.name}<recursion list={v.item} /></li> : <li>{v.name}</li>)}
    </ul>)
  }
}
export default {
  components: {
    recursion
  },
  render() {
    return (<ul>
      {nav.map(v => v.item?.length ? <li>{v.name}<recursion list={v.item} /></li> : <li>{v.name}</li>)}
    </ul>);
  },
};

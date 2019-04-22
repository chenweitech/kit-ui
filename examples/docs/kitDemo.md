<script>
export default {
  data () {
    return {
      msg: "Hello World"
    }
  }
}
</script>
## Kit-Demo
以Demo组件为例
:::demo

``` html
<template>
  <p>msg: {{ msg }}</p>
  <kit-demo v-model="msg" />
</template>
<script>
export default {
  data () {
    return {
      msg: "Hello World"
    }
  }
}
</script>
```
:::
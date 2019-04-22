<template>
  <input :value="data" @input="e => $emit('change', e.target.value)" />
</template>

<script>
export default {
  name: "KitDemo",
  model: {
    prop: "data",
    event: "change"
  },
  props: {
    data: {
      type: String
    }
  }
};
</script>

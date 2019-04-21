<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  name: "KitDemo",
  props: {
    msg: {
      type: String,
      default: "Kit Demo"
    }
  }
};
</script>

<style></style>

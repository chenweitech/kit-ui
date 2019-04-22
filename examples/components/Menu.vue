<template lang="html">
  <div class="menu-model">
    <el-menu
      router
      :unique-opened="false"
      :default-active="defaultActive"
      :collapse="false"
    >
      <el-submenu index="1">
        <span slot="title">开发指南</span>
        <el-menu-item-group>
          <el-menu-item index="/guide/install">安装</el-menu-item>
          <el-menu-item index="/guide/quickStart">快速上手</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <span slot="title">组件</span>
        <el-menu-item-group>
          <span slot="title">基础组件</span>
          <el-menu-item index="/guide/components/kitDemo">
            Demo 组件
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: "/guide/install"
    };
  },
  created() {
    const path = this.$route.fullPath;
    this.defaultActive = path == "/" ? "/guide/install" : path;
  }
};
</script>

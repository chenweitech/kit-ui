<template lang="html">
  <div class="menu-model">
    <el-menu router :unique-opened="true" :default-active="defaultActive">
      <el-submenu index="1">
        <template slot="title">
          <span>开发指南</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/guide/install">安装</el-menu-item>
          <el-menu-item index="/guide/quickStart">快速上手</el-menu-item>
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

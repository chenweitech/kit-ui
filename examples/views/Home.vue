<template>
  <div class="home-page">
    <el-container>
      <el-header class="header-bar" height="60">
        <HeaderBar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Menu />
        </el-aside>
        <el-main class="home-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HeaderBar from "@/components/HeaderBar.vue";
import Menu from "@/components/Menu.vue";

export default {
  name: "Home",
  components: {
    HeaderBar,
    Menu
  }
};
</script>

<style lang="scss">
@import "~highlight.js/styles/color-brewer.css";
.home-page {
  .header-bar {
    border-bottom: 1px solid #dcdfe6;
  }
  .home-main {
    .hljs {
      line-height: 1.8;
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
      font-size: 12px;
      padding: 18px 24px;
      background-color: #fafafa;
      border: 1px solid #eaeefb;
      margin-bottom: 25px;
      border-radius: 4px;
      -webkit-font-smoothing: auto;
    }
    h2,
    h3,
    h4,
    h5 {
      font-weight: normal;
      color: #333;
    }
    h3 {
      font-size: 22px;
      margin: 50px 0 20px;
    }
    h4 {
      margin: 20px 0;
      font-size: 18px;
    }
    p {
      line-height: 1.5;
      margin: 10px 0;
      font-weight: normal;
      font-size: 14px;
      color: #5e6d82;
    }
    a {
      color: #409eff;
      text-decoration: none;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;
      th {
        white-space: nowrap;
        text-align: left;
        color: #666;
        font-weight: 400;
      }
      th,
      td {
        border-bottom: 1px solid #d8d8d8;
        padding: 15px;
        max-width: 250px;
      }
      td {
        color: #333;
      }
    }
    .demo-material {
      padding-top: 30px;
    }
    .tip {
      padding: 8px 16px;
      background-color: #ecf8ff;
      border-radius: 4px;
      border-left: 5px solid #50bfff;
      margin: 20px 0;
    }
  }
}
</style>

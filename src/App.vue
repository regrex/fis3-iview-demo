<template>
  <div id="app">
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
      <Row type="flex">
        <i-col :span="spanLeft" class="layout-menu-left">
          <Menu active-name="1" theme="dark" width="auto">
            <div class="layout-logo-left">
              <Icon type="ios-paw"></Icon>
              <span class="logo-text">FEED垂类高优库</span>
            </div>
            <Submenu name="1" style="margin-top: 4px;">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                来源配置
              </template>
              <Menu-item name="1-1">
                <router-link to="/Baijiahao">百家号</router-link>
              </Menu-item>
              <Menu-item name="1-2">
                <router-link to="/BeforePost">文章先验</router-link>
              </Menu-item>
              <Menu-item name="1-3">
                <router-link to="/AfterPost">文章后验</router-link>
              </Menu-item>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                资源管理
              </template>
              <Menu-item name="2-1">选项 1</Menu-item>
              <Menu-item name="2-2">选项 2</Menu-item>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                入库审核
              </template>
              <Menu-item name="3-1">选项 1</Menu-item>
              <Menu-item name="3-2">选项 2</Menu-item>
            </Submenu>
          </Menu>
        </i-col>
        <i-col :span="spanRight">
          <div class="layout-header">
            <i-button type="text" @click="toggleClick">
              <Icon type="navicon" size="32"></Icon>
            </i-button>
          </div>
<!--           <div class="layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb-item href="#">来源配置</Breadcrumb-item>
              <Breadcrumb-item href="#">百家号</Breadcrumb-item>
              <Breadcrumb-item>规则列表</Breadcrumb-item>
            </Breadcrumb>
          </div> -->
          <div class="layout-content">
            <div class="layout-content-main">
              <router-view></router-view>
            </div>
          </div>
          <div class="layout-copy">
            2017 &copy; Feed FE
          </div>
        </i-col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      spanLeft: 5,
      spanRight: 19
    }
  },
  computed: {
    iconSize () {
      return this.spanLeft === 5 ? 14 : 24;
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 5) {
        this.spanLeft = 1;
        this.spanRight = 23;
      } else {
        this.spanLeft = 5;
        this.spanRight = 19;
      }
    }
  }
}
</script>
<style scoped>
.layout {
  background: #f5f7f9;
  position: relative;
  overflow: hidden;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-menu-left {
  background: #464c5b;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left {
  color: #c1c3c9;
  width: 100%;
  padding: 14px 0;
  box-sizing: border-box;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-logo-left i {
  font-size: 32px;
  vertical-align: bottom;
}
.layout-logo-left .logo-text {
  font-size: 22px;
  line-height: 32px;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-hide-text .layout-text {
  display: none;
}
.layout-hide-text .logo-text {
  display: none;
}
.layout-hide-text .ivu-menu-item {
  padding: 14px;
}
.ivu-menu-item a {
  color: #fff;
}
.ivu-col {
  transition: width .2s ease-in-out;
}
</style>

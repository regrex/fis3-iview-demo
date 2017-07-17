<template lang="html">
  <div class="component-a">
    Component A
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="ghost">Ghost</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">信息按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="error">错误按钮</Button>
  </div>
</template>

<script lang="js">
  module.exports = {
    created() {
      console.log('component a created !');
    },
    methods: {
      //
    }
  }
</script>

<style lang="less" scoped>
body {
  a {
    color: inherit;
  }
}
.component-a {
  line-height: 50px;
  text-align: center;
  color: #fff;
  background: rgb(227, 99, 61);
}
</style>

<template>
  <div class="baijiahao">
    <Row class="search-wrap">
      <Col span="18">
        <Button type="primary" icon="ios-plus-empty"><router-link to="/NewRule">新建规则任务</router-link></Button>
      </Col>
      <Col span="6">
        <Button type="primary" icon="ios-upload-outline">导入规则excel</Button>
      </Col>
    </Row>
    <Table :columns="columns1" :data="data1"></Table>
    <div class="page-wrap">
      <Page :total="total" :current="1" @on-change="changePage"></Page>
    </div>
  </div>
</template>

<script>
// import TableRow from './TableRow.vue';
export default {
  name: 'article',
  // components: {
  //   TableRow
  // },
  data () {
    return {
      value11: '',
      value12: '',
      value13: '',
      select1: 'http',
      select2: 'com',
      select3: 'day',
      columns1: [
        {
          type: 'selection',
          width: 60,
          align: 'center'
        },
        // {
        //   type: 'expand',
        //   width: 50,
        //   render: (h, params) => {
        //     return h(TableRow, {
        //       props: {
        //         row: params.row
        //       }
        //     })
        //   }
        // },
        {
          title: 'mthid',
          key: 'mthid'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '一级分类',
          key: 'firstClass'
        },
        {
          title: '二级分类',
          key: 'secondClass'
        },
        {
          title: '权重',
          key: 'weight'
        },
        {
          title: '任务状态',
          key: 'status'
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 200,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '修改'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '删除'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '查看高优库')
            ]);
          }
        }
      ],
      data1: [
        {
          mthid: '王小明',
          type: '头部号',
          firstClass: '科技',
          secondClass: '互联网技术',
          weight: 1,
          status: '已保存'
        },
        {
          mthid: 'asdfad',
          type: '推荐号',
          firstClass: '科技',
          secondClass: 'IT',
          weight: 1,
          status: '运行中'
        },
        {
          mthid: '阿三',
          type: '审核号',
          firstClass: '生活',
          secondClass: '家具家居',
          weight: 1,
          status: '运行完成'
        },
        {
          mthid: '在西兰花上的',
          type: '头部号',
          firstClass: '摄影',
          secondClass: '摄影技巧',
          weight: 1,
          status: '运行失败'
        },
        {
          mthid: '王小明',
          type: '头部号',
          firstClass: '科技',
          secondClass: '互联网技术',
          weight: 1,
          status: '已发布'
        },
        {
          mthid: '王阿斯顿发',
          type: '头部号',
          firstClass: '科技',
          secondClass: '互联网技术',
          weight: 1,
          status: '已删除'
        },
        {
          mthid: '小sad发生时',
          type: '头部号',
          firstClass: '科技',
          secondClass: '互联网技术',
          weight: 1,
          status: '已保存'
        }
      ],
      total: 7
    }
  },
  methods: {
    changePage() {
      console.log('1');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-wrap {
  float: right;
  margin: 16px 0;
}
.search-wrap {
  margin-bottom: 16px;
}
</style>

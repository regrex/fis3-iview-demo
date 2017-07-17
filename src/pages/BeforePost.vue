<template>
  <div class="article">
    <Tabs value="name1">
      <TabPane label="待审核" name="name1"></TabPane>
      <TabPane label="已通过" name="name2"></TabPane>
      <TabPane label="已拒绝" name="name3"></TabPane>
    </Tabs>
    <Row class="search-wrap">
      <Col span="11">
        <Input v-model="value13">
          <Select v-model="select3" slot="prepend" style="width: 80px">
            <Option value="day">标题</Option>
            <Option value="month">百家号名称</Option>
          </Select>
          <Button slot="append" icon="ios-search"></Button>
        </Input>
      </Col>
      <Col span="5">
        <Date-picker type="daterange" placement="bottom-end" placeholder="选择日期" style="width: 200px"></Date-picker>
      </Col>
      <Col span="8">
        <Button type="primary" icon="ios-download-outline">下载</Button>
      </Col>
    </Row>
    <Table :columns="columns1" :data="data1"></Table>
    <div class="page-wrap">
      <Page :total="total" :current="1" @on-change="changePage"></Page>
    </div>
  </div>
</template>

<script>
import TableRow from './TableRow.vue';
export default {
  name: 'article',
  components: {
    TableRow
  },
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
        {
          type: 'expand',
          width: 50,
          render: (h, params) => {
            return h(TableRow, {
              props: {
                row: params.row
              }
            })
          }
        },
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居',
          job: '数据工程师',
          interest: '羽毛球',
          birthday: '1991-05-14',
          book: '乔布斯传',
          movie: '致命魔术',
          music: 'I Cry'
        },
        {
          name: '王小asdf明',
          age: 28,
          address: '北京市朝阳区芍药居',
          job: '数据asdf工程师',
          interest: '羽毛球',
          birthday: '1991-05-14',
          book: '乔布斯传',
          movie: '致命魔术',
          music: 'I Cry'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗',
          job: '数据科学家',
          interest: '排球',
          birthday: '1989-03-18',
          book: '我的奋斗',
          movie: '罗马假日',
          music: 'My Heart Will Go On'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道',
          job: '数据产品经理',
          interest: '网球',
          birthday: '1992-01-31',
          book: '赢',
          movie: '乔布斯',
          music: 'Don’t Cry'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道',
          job: '数据分析师',
          interest: '桌球，跑步',
          birthday: '1988-7-25',
          book: '红楼梦',
          movie: '倩女幽魂',
          music: '演员'
        }
      ],
      total: 5
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

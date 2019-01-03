<template>
  <div class="hello">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-popup v-model="show">内容<van-icon name="success" /></van-popup>
    <div class="van-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div>
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h1 @click="alertMessage1">{{ msg }}</h1>
    <h2 @click="show=true">{{ mssages1 }}</h2>
    <h3 @click="geturldatas">{{ mssages2 }}</h3>
    <p>{{ message }}</p>
    <input v-model="message">

      <ul>
        <li v-for="todo in todos" :key="todo.index">
          {{ todo.text }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: '我是首页关联的页面helloworld',
      mssages1: '文本内容文字1',
      mssages2: '点我会执行axios.get动作',
      message: '请输入...',
      todos: [
      ],
      show: false
    }
  },
  methods: {
    alertMessage1: function () {
      alert('标签被点击')
    },
    geturldatas: function () {
      this.$axios.get('http://apijson.cn:8080/get/%7B%22%5B%5D%22:%7B%22count%22:3,%22User%22:%7B%22@column%22:%22id,name%22%7D%7D%7D').then((response) => {
        console.log(response.data.msg)
        console.log(response.data.code)
        console.log(response.data)
        this.todos.push({
          text: response.data
        })
      }).catch((response) => {
        console.log(response)
      })
    },
    onClickLeft: function () {
      console.log('返回')
    },
    onClickRight: function () {
      console.log('按钮')
    }
  },
  mounted: function () {
    this.geturldatas()
    console.log('页面加载完毕执行代码')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

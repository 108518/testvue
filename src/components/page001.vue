<template>
  <div id="appdiv">
    <h1 @click="seen = !seen">点击显示隐藏标签</h1>
    <h2 @click="addNewTodo">点击增加列表项目</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.index">
            {{ todo.text }}
        </li>
      </ul>

    <transition name="bounce">
      <h1 v-if="seen" @click="seen=false">现在你看到我了</h1>
    </transition>
    <p><a :href="url">点击链接跳转网站</a></p>
<h1 v-if="showorno">Yes</h1>
<h1 v-else>No</h1>
  </div>
</template>

<script>
export default {
  name: 'page001',
  data () {
    return {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ],
      seen: false,
      url: 'http://www.lfq.cn/',
      showorno: false
    }
  },
  methods: {
    alertMessage1: function () {
      alert('页面加载/标签被点击')
    },
    addNewTodo: function () {
      this.todos.push({
        text: '按钮点击增加的内容' + new Date().toLocaleString()
      })
    }
  },
  mounted: function () {
    this.alertMessage1()
    console.log('页面加载完毕执行代码')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>

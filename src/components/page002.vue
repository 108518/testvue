<template>
  <div id="appdiv">
    <h1 @click="alertMessage1"> {{ page001message }} </h1>
    <br>
    <span>多行message是:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="请在此输入多行文本"></textarea>
  </div>
</template>

<script>
export default {
  name: 'page001',
  data () {
    return {
      page001message: '我是page002' + '页面加载于 ' + new Date().toLocaleString(),
      message: ''
    }
  },
  methods: {
    alertMessage1: function () {
      alert('页面加载/标签被点击')
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
</style>

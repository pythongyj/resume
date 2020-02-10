<template>
  <div class="home" v-title data-title="简历">
    <div class="container">
      <div class="center">
        <div class="title">
          <h2>{{title}}</h2>
          414652f8672ed787e3aef692c08119900e9e4872
          <h2>看看可以了不</h2>
          <h1>我就测试一下</h1>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      title: '3年web前端工程师 葛运杰'
    }
  }
}
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    height: 100vh;
    background-color: #008c8c;
    .container{
      width: 1200px;
      height: 90vh;
      background-color: #fff;
      margin: 0 auto;
      .center{
        width: 1080px;
        background-color: aqua;
        margin: 0 auto;
        border-bottom: 3px solid #666;
        .title{
          width: 100%;
          overflow: hidden;
          h2{
            font-size: 28px;
            color: #333;
            font-family: '微软雅黑';
            margin: 20px 0;
          }
        }
      }
    }
  }
</style>

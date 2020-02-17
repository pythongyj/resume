<template>
  <div class="home" v-title data-title="简历">
    <div class="container">
      <el-card class="center">
        <div class="title">
          <h2>{{title}}</h2>
        </div>
        <!-- 个人简介 -->
        <el-card>
          <el-row>
            <div class="infos">
              <i class="el-icon-check"></i>
              <span style="display:inline-block;margin-left: 10px;">个人简介</span>
            </div>
            <!-- <el-tag>个人简介</el-tag> -->
          </el-row>
          <el-row style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="14">
              <span>姓名：{{userinfo.name}}</span>
            </el-col>
            <el-col :span="10">
              <span>性别：{{userinfo.gender}}</span>
            </el-col>
          </el-row>
          <el-row style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="14">
              <span>年龄：{{userinfo.age}}</span>
            </el-col>
            <el-col :span="10">
              <span>手机号：{{userinfo.phone}}</span>
            </el-col>
          </el-row>
          <el-row style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="14">
              <span>邮箱：{{userinfo.email}}</span>
            </el-col>
            <el-col :span="10">
              <span>工作经验：{{userinfo.exp}}</span>
            </el-col>
          </el-row>
          <el-row style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="14">
              <span>毕业学院：{{userinfo.school}}</span>
            </el-col>
            <el-col :span="10">
              <span>专业：{{userinfo.major}}</span>
            </el-col>
          </el-row>
        </el-card>
        <!-- 求职意向 -->
        <el-card style="margin-top:10px">
          <div class="infos">
            <i class="el-icon-check"></i>
            <span style="display:inline-block;margin-left: 10px;"> 求职意向</span>
          </div>
          <el-row v-for="(item,index) in JobIntension" :key="index" style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="24">
              <span>{{item}}</span>
            </el-col>
          </el-row>
        </el-card>
        <!-- 专业技能 -->
        <el-card style="margin-top:10px">
          <div class="infos">
            <i class="el-icon-check"></i>
            <span style="display:inline-block;margin-left: 10px;"> 专业技能</span>
          </div>
          <ul>
            <li v-for="(item,index) in expertise" :key="index">
              <el-row style="margin-left: 30px;margin-bottom: 20px">
                <el-col :span="24">
                  <span>{{item}}</span>
                </el-col>
              </el-row>
            </li>
          </ul>
        </el-card>
        <!-- 工作经验 -->
          <el-card style="margin-top:10px">
          <div class="infos">
            <i class="el-icon-check"></i>
            <span style="display:inline-block;margin-left: 10px;"> 工作经验</span>
          </div>
          <el-row v-for="(item,index) in jobExp" :key="index" style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="24">
              <span>{{item}}</span>
            </el-col>
          </el-row>
          <el-row v-for="(i,ix) in duty" :key="ix" style="margin-left: 70px;margin-bottom: 20px">
            <el-col :span="24">
              <span >{{i}}</span>
            </el-col>
          </el-row>
        </el-card>
        <!-- 项目经验 -->
         <el-card style="margin-top:10px">
           <div class="infos">
            <i class="el-icon-check"></i>
            <span style="display:inline-block;margin-left: 10px;"> 项目经验</span>
          </div>
           <el-card v-for="(item,index) in projectExp" :key="index" style="margin-top:10px">
              <el-row style="margin-left: 30px;margin-bottom: 20px">
                <el-col :span="24">
                  <span >{{item.title}}</span>
                </el-col>
              </el-row>
              <el-collapse  style="margin-left: 30px;margin-right: 30px;margin-bottom: 20px" v-model="activeNames">
                <el-collapse-item title="项目名称" name="0">
                  <div style="margin-left: 30px">{{item.name}}</div>
                </el-collapse-item>
                 <el-collapse-item title="项目时间" name="1">
                  <div style="margin-left: 30px">{{ item.time }}</div>
                </el-collapse-item>
                <el-collapse-item title="项目描述" name="2">
                  <div style="margin-left: 30px">{{item.desc}}</div>
                </el-collapse-item>
                <el-collapse-item title="职责描述" name="3">
                  <div style="margin-left: 30px" v-for="(list,listIndex) in item.duty" :key="listIndex">{{ listIndex+1}}、{{ list }}</div>
                </el-collapse-item>
                <el-collapse-item title="技术栈" name="4">
                  <div style="font-weight: 800;margin-left: 30px;">{{ item.stackDual }}</div>
                </el-collapse-item>
              </el-collapse>
           </el-card>
        </el-card>
        <!-- 个人评价 -->
        <el-card style="margin-top:10px">
          <div class="infos">
            <i class="el-icon-check"></i>
            <span style="display:inline-block;margin-left: 10px;"> 个人评价</span>
          </div>
          <el-row v-for="(item,index) in evaluate" :key="index" style="margin-left: 30px;margin-bottom: 20px">
            <el-col :span="24">
              <span>{{item}}</span>
            </el-col>
          </el-row>
        </el-card>
      </el-card>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      // activeNames: ['1'],
      title: '3年web前端工程师 葛运杰',
      userinfo: {
        name: '葛运杰',
        gender: '男',
        age: '24',
        phone: '13781533261',
        email: 'g1329712473@163.com',
        exp: '三年（17/08-19-12）',
        school: '河南经贸职业学院(13/09-17/06)',
        major: '计算机科学与技术(专科)'
      },
      JobIntension: {
        jobs: '职位：前端开发工程师',
        nature: '工作性质：全职',
        caty: '求职地区：杭州',
        money: '期望薪资：面议',
        state: '状态：离职，随时到岗'
      },
      expertise: ['1、精通HTML/HTML5、CSS/CSS3，精通页面架构和布局，精通HTML的文档对象模型（DOM）', '2、熟练掌握主流浏览器以及平台的性能和兼容性', '3、精通Ajax，axios实现跨域技术对后台进行数据请求', '4、熟练掌握多种移动端布局方案，能够使用媒体查询对自适应页面进行设计布局', '5、熟练掌握前端库，如bootstrap、JQuery、Echars、Data.js、moment.js、Iconfont等', '6、熟练掌握LESS、SASS预编译技术', '7、精通vue.js主流开发框架 以及EmelemtUi和Vant 的vue组件库', '8、精通git工具对版本进行管理,使用webpack对代码进行压缩打包', '9、了解后端Nodejs技术和Java语言,可以与后端人员进行简单业务交流', '10、精通ES6语法，可以进行项目开发'],
      jobExp: {
        time: '工作时间：2017年07月 至 2019年09月',
        name: '公司名称：上海马顺科技有限公司',
        zhiwei: '职位：web前端工程师',
        zhize: '主要职责'
      },
      duty: ['1、配合项目经理及UI设计师，精确还原设计稿', '2、对页面进行分析，并且选出最佳的布局方式', '3、解决浏览器兼容性问题，配合其他人员完成项目开发', '4、优化项目性能,以便后续的项目迭代更新', '5、与后台人员配合进行前后端交互', '6、不断优化产品和网站的用户体验，提升兼容性，友好性和易用性'],
      projectExp: {
        projectExpOne: {
          title: '项目一',
          name: '木材通 PC后台管理端',
          desc: '项目描述：PC后台管理  是公司内部使用的一套系统，主要用于管理不同的用户的交易审核以及交易记录，用户的权限，木材的价格，各个木材圈子的文章的审核与管理等等。',
          time: '时间：2017/07 – 2018/11',
          duty: ['基于vue与element-ui组件库进行开发', '通过使用vue-cli脚手架快速搭建项目', '使用element-ui组件快速搭建页面', '使用vue-router进行路由管理、实现页面的跳转', '使用vuex进行数据管理', '使用axios库封装Api接口、实现与后台进行数据交互', '使用echarts.js进行数据可视化开发', '对常用组件进行封装复用', '使用git进行代码的管理以及迭代', '与后端人员合作完成项目的开发', '使用webpack工具管理代码,压缩优化代码,提高代码可重用性', '根据产品经理的需求对产品进行版本更新'],
          stackDual: '技术栈：vue-cli、vue、vue-router、vuex、axios、day.js、element-ui、echarts.js等'
        },
        projectExpTwo: {
          title: '项目二',
          name: '木材通 网页版 ',
          desc: '面向所有对木材有兴趣的用户。主要用于木材圈子内的文章的展示、用户的交易信息的查询等 ',
          time: '2017/07 – 2018/11 ',
          duty: ['基于vue与bootstrap组件库进行开发', '通过vue-cli脚手架快速搭建', '通过bootstrap进行响应式页面布局、配合UI设计师和项目经理精确还原设计稿', '通过vue-router进行路由管理、实现页面跳转', '通过axios库封装Api接口、实现与后台进行数据交互', '通过git进行代码管理以及版本迭代', '.解决浏览器兼容问题，配合其他人员完成项目的开发'],
          stackDual: '技术栈：vue、vue-router、vue-cli、axios、bootstrap等'
        },
        projectExpThree: {
          title: '项目三',
          name: '木材通 移动端',
          desc: '面向所有对木材有需求以及收购、加工木材的用户。主要用于客户对各种木材以及木材市场的了解，以及对于木材的交易等等。',
          time: '2017/07 – 2018/11',
          duty: ['基于vue与vant组件库进行开发', '使用vue-cli脚手架快速搭建项目', '使用vant组件库 根据UI设计师 给的设计稿进行精确还原', '使用axios库封装api接口、实现与后台进行数据交互', '使用vuax进行数据的管理', '对重复的代码进行封装，降低代码耦合度', '使用async、await等ES6语法，提高代码的可读性', '使用webpack工具管理代码,压缩优化代码,提高代码可重用性', '使用git进行代码的管理以及迭代', '配合项目经理、后端以及其他人员完成项目的开发'],
          stackDual: '技术栈：vue、vue-router、vue-cli、vuex、axios、vant、webpack等'
        },
        projectExpFore: {
          title: '项目四',
          name: '木材通 小程序端',
          desc: '',
          time: '',
          duty: [],
          stackDual: ''
        },
        projectExpFive: {
          title: '项目五',
          name: '中泰鉴定平台  外包项目',
          desc: '主要服务于房屋等需要鉴定的人群，主要向用户展示房屋鉴定标准 ，鉴定规范，房屋的安全鉴定，工程验收，危房检测，房屋结构类别鉴定等等业务范围的介绍展示，展示最新、最全面的鉴定标准等',
          time: '2019/07 – 2019/11',
          duty: ['使用Bootstrap，进行项目基础结构的搭建', '引用iconont.css实现相关的图标', '使用jQuery实现页面动态以及交互效果', 'jQuery中的ajax获取后台数据，实现数据渲染', '使用vuax进行数据的管理', '对重复的代码进行封装，降低代码耦合度', '使用async、await等ES6语法，提高代码的可读性', '使用webpack工具管理代码,压缩优化代码,提高代码可重用性', '持续优化用户体验，添加新功能，保证兼容性，和执行效率', '配合项目经理、后端以及其他人员完成项目的开发'],
          stackDual: '技术栈：html5 css3 Bootstrap 、 iconont 、 jQuery 、ES6 、 webpack等'
        }
      },
      evaluate: ['1、有较强的团队精神，容易很好地融入团队', '2、积极向上，乐观，对新技术感兴趣，自主学习能力强', '3、经常浏览GitHub或其他技术社区了解新的技术，关注整个行业技术更新变化', '4、在工作中遇到难点时会积极与同事交流，合作解决困难', '5、爱好旅游，羽毛球，电竞']
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 110%;
  .container {
    font-size: 18px;
    width: 1200px;
    height: 90%;
    margin: 0 auto;
    .center {
      text-align: left;
      width: 1080px;
      // background-color: aqua;
      margin: 0 auto;
      .infos {
        margin: 0px 0 10px 0;
        font-size: 24px;
        font-weight: 800;
        color: brown;
        display: inline-block;
        width: 100%;
      }
      el-row{
        margin-bottom: 20px;
      }
      .title {
        border-bottom: 3px solid #666;
        width: 100%;
        overflow: hidden;
        text-align: center;
        margin-bottom: 10px;
        h2 {
          font-size: 28px;
          color: #333;
          font-family: "微软雅黑";
          margin: 20px 0;
        }
      }
    }
  }
}
ul{
  list-style: none;
}
</style>

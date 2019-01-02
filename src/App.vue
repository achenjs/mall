<template>
  <div id="app">
      <div class="ddy_new_banner">
          <div class="g-wrap">
              <a href="/" class="home">多多印首页</a>
              <div class="info">
                  <ul>
                      <li>
                          Hi~ 欢迎您
                          <!--请<a class="login" href="/login.html" rel="nofollow">[ 登录 ]</a>-->
                          <!--<a class="login" href="/reg.html" rel="nofollow">[ 免费注册 ]</a>-->
                      </li>
                      <!--<li class="split">|</li>-->
                      <!--<li>-->
                      <!--<a target="_blank" rel="nofollow" href="/member/buy.html">我的订单</a>-->
                      <!--</li>-->
                      <!--<li class="split">|</li>-->
                      <!--<li>-->
                      <!--<a target="_blank" rel="nofollow" href="/association.html">社区</a>-->
                      <!--</li>-->
                      <!--<li class="split">|</li>-->
                      <!--<li class="li1">-->
                      <!--<a target="_blank" rel="nofollow" href="/help.html">帮助中心</a>-->
                      <!--</li>-->
                  </ul>
              </div>
          </div>
      </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>

#app {
  font-family: "微软雅黑",PingFang SC, Microsoft YaHei UI, Microsoft YaHei, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
    .ddy_new_banner{
    height: 38px;
    background-color: #d21633;
    color: #fff;
    line-height: 38px;
    font-size: 12px;
    .g-wrap {
        margin: 0 auto;
        width: 1190px;
        position: relative;
        .home {
            display: inline-block;
            height: 38px;
            line-height: 38px;
            color: #fff;
            padding-left: 20px;
            background: url(//cdn2.duoduoyin.com/static/ddy-common/images/common/home_d24a2dc.png) 0 13px no-repeat;
        }
        .info {
            float: right;
            ul {
                position: relative;
                li {
                    padding: 0 5px;
                    display: inline-block;
                }
                .split {
                    font-weight: 100;
                }
            }
        }

    }
}

}
</style>

<style lang="scss" scoped>
    .swiper-container {
        width: 794px;
        height: 580px;
        margin: 20px auto;
    }

    .header {
        height: 123px;
        font-size: 12px;
        .toolbar {
            padding-top: 35px;
            .logo {
                position: absolute;
                width: 186px;
                height: 161px;
                background: #fff;
                top: -38px;
                left: 0;
                text-align: center;
                font-size: 14px;
                color: #7c7c7c;
                padding-top: 40px;
                -moz-box-sizing: border-box;
                box-sizing: border-box;
                box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.12);
            }
            .search {
                padding-left: 235px;
                width: 485px;
                float: left;
                position: relative;
                .search-tip {
                    display: none;
                    position: absolute;
                    left: 0;
                    top: 37px;
                    width: 424px;
                    z-index: 100;
                    background: #fff;
                    border: 1px solid #e5e5e5;
                    border-radius: 2px;
                    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
                    padding: 5px 0;
                }
                .search-widget {
                    display: inline-block;
                    text-align: left;
                    position: relative;
                    .wrap input {
                        width: 435px;
                        height: 37px;
                        line-height: 37px;
                        padding-left: 10px;
                        color: #868686;
                        font-size: 14px;
                        border: none;
                        -moz-box-sizing: border-box;
                        box-sizing: border-box;
                    }
                    span {
                        float: right;
                        width: 50px;
                        height: 37px;
                        cursor: pointer;
                        background: url(//cdn2.duoduoyin.com/static/ddy-common/images/icon/ico-search_af086d1.png) 50% 50% no-repeat #ea3524;
                    }
                    .recommand li:nth-child(1), .search-widget ul.recommand li:nth-child(2) {
                        color: #ea3524;
                    }
                    .recommand li {
                        color: #adadad;
                        line-height: 26px;
                        display: inline-block;
                        margin-right: 8px;
                    }
                }
            }
            .right {
                float: right;
                .cart {
                    padding: 0 40px;
                    position: relative;
                }
                .box {
                    display: inline-block;
                    padding: 0 12px;
                    height: 37px;
                    line-height: 37px;
                    background: #fff;
                    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.12);
                    font-size: 14px;
                    color: #ea3524;
                    margin-left: 7px;
                }
            }
        }
    }

    .ind-main1 {
        height: 623px;
        position: relative;
        .main-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            .top-nav {
                position: absolute;
                left: 186px;
                width: 744px;
                height: 41px;

                li {
                    display: inline-block;
                    *display: inline;
                    position: relative;
                    zoom: 1;
                    padding-left: 49px;
                    cursor: pointer;

                    a {
                        line-height: 40px;
                        font-size: 16px;
                        color: #292929;
                        font-weight: 700;
                    }
                    .line {
                        position: absolute;
                        color: #a6a7a6;
                        right: -28px;
                        font-weight: 100;
                        font-size: 14px;
                        top: 10px;
                    }
                    .scene-box {
                         display: none;
                        position: absolute;
                        top: 40px;
                        background: #fff;
                        left: -4px;
                        z-index: 10;
                        width: 280px;
                        ul {
                            border-bottom: 1px solid #d3d3d3;
                            border-left: 1px solid #d3d3d3;
                            border-right: 1px solid #d3d3d3;
                            li {
                                background: #fff;
                                display: block;
                                height: 70px;
                                border-bottom: 1px dashed #e7e7e7;
                                padding: 0;
                                i {
                                    float: left;
                                    width: 40px;
                                    height: 40px;
                                    background: url(//cdn2.duoduoyin.com/static/ddy-common/images/index/scene-log_fee25ca.png) 0 0 no-repeat transparent;
                                    margin: 16px 15px 0 25px;
                                }
                                .tag1 {
                                    background-position: 0 0;
                                }
                                .tag2 {
                                    background-position: 0 -40px;
                                }
                                .tag3 {
                                    background-position: 0 -80px;
                                }
                                .tag5 {
                                    background-position: 0 -160px;
                                }
                                p {
                                    line-height: 26px;
                                    font-size: 12px;
                                    color: #a0a2a2;
                                }
                                a {
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    right: 0;
                                    bottom: 0;
                                }
                                .tag4 {
                                    background-position: 0 -120px;
                                }
                                .t1 {
                                    font-size: 16px;
                                    color: #3c3c3c;
                                    padding-top: 11px;
                                }
                            }
                            .last {
                                border: 0;
                            }
                        }
                    }
                    .diysort {
                        width: 318px;
                        border: 1px solid #d3d3d3;
                        border-top: 0;
                        position: absolute;
                        zoom: 1;
                        top: 41px;
                        left: 25px;
                        z-index: 10;
                        background-color: #fff;
                         display: none;
                        .diytop {
                            height: 45px;
                            border-bottom: 1px dashed #e7e7e7;
                            font-size: 16px;
                            color: #848484;
                            padding-left: 22px;
                            line-height: 45px;
                        }
                        .info {
                            border-bottom: 1px dashed #e7e7e7;
                            padding-bottom: 15px;
                            .dtest{
                                padding-left: 74px;
                                padding-top: 15px;
                                dt {
                                    font-size: 14px;
                                    color: #656565;
                                }
                                dd {
                                    font-size: 12px;
                                    color: #a0a0a0;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                }
                            }
                            .dl1 {
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/common/tbz_yd1_287eabb.jpg) 22px 17px no-repeat transparent;
                            }
                            .dl2{
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/common/tbz_yd1_287eabb.jpg) 22px 17px no-repeat transparent;
                            }
                            .dl3{
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/common/tbz_yd1_287eabb.jpg) 22px 17px no-repeat transparent;
                            }
                        }
                        .listw {
                            padding-top: 10px;
                            padding-bottom: 10px;
                            .txt {
                                font-size: 14px;
                                color: #848484;
                                padding-left: 22px;
                                line-height: 24px;
                            }
                            .ul2 {
                                padding-left: 22px;
                                padding-top: 5px;
                                overflow: hidden;
                                .li2 {
                                    line-height: 30px;
                                    height: 30px;
                                    width: 88px;
                                    float: left;
                                    display: inline;
                                    padding-left: 10px;
                                    background: url(//cdn2.duoduoyin.com/static/ddy-common/images/common/dot1_c394a82.png) 0 50% no-repeat transparent;
                                    overflow: hidden;
                                    a {
                                        color: #393939;
                                        font-size: 12px;
                                        line-height: 20px;
                                        padding: 0;
                                        font-weight: 400;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        .swiper-container {
            padding-top: 41px;
        }
    }
</style>
<template>
    <div class="home">
        <div class="header">
            <div class="g-wrap toolbar">
                <div class="logo">
                    <img src="//cdn2.duoduoyin.com/static/ddy-common/images/common/logo_a0465e3.png" width="109">
                    <p>设计变简单 印刷更轻松</p>
                </div>
                <div class="search">
                    <div class="search-widget s1">
                        <div class="wrap">
                            <input type="text" placeholder="请输入关键字" id="search" maxlength="10">
                            <span></span>
                        </div>
                        <ul class="recommand">
                            <li>
                                <a href="/search/k-JUU1JTkwJThEJUU3JTg5JTg3.html">名片</a>
                            </li>
                            <li>
                                <a href="/search/k-JUU1JUFFJUEzJUU0JUJDJUEwJUU1JThEJTk1.html">宣传单</a>
                            </li>
                            <li>
                                <a href="/search/k-JUU1JUFFJUEzJUU0JUJDJUEwJUU3JTk0JUJCJUU1JTg2JThD.html">宣传画册</a>
                            </li>
                            <li>
                                <a href="/search/k-JUU0JUI4JThEJUU1JUI5JUIyJUU4JTgzJUI2.html">不干胶</a>
                            </li>
                            <li>
                                <a href="/search/k-JUU2JTg5JThCJUU2JThGJTkwJUU4JUEyJThC.html">手提袋</a>
                            </li>
                            <li>
                                <a href="/search/k-JUU2JTk2JTg3JUU1JThDJTk2JUU4JUExJUFC.html">文化衫</a>
                            </li>
                        </ul>
                        <div class="search-tip j-searchTip">
                            <p>热门搜索</p>
                            <ul class="hot">
                                <li><a href="/search/k-JUU1JTkwJThEJUU3JTg5JTg3.html">名片</a></li>
                                <li><a href="/search/k-JUU1JTkwJThEJUU3JTg5JTg3JUU4JUFFJUJFJUU4JUFFJUEx.html">名片设计</a>
                                </li>
                                <li><a href="/search/k-JUU1JUFFJUEzJUU0JUJDJUEwJUU1JThEJTk1.html">宣传单</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="box cart">
                        <a target="_blank" rel="nofollow" class="shop" href="/goodsCart.html">
                            <i></i>购物车
                            <span class="num">
                            </span>
                        </a>
                    </div>
                    <div class="box tel">
                        <i></i>
                        <span>4000&nbsp;556&nbsp;956&nbsp;&nbsp;</span>
                    </div>
                    <div class="box service">
                        <a href="http://q.url.cn/s/hyuBVnm?_type=wpa" target="_blank" class="qq" rel="nofollow">
                            <i></i>联系客服</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="ind-main1 g-wrap">
            <div class="main-content">
                <listMenu></listMenu>
                <ul class="top-nav">
                    <li>
                        <a href="/classify.html" target="_blank">全部印品</a>
                    </li>
                    <li>
                        <a href="/actorDesign.html" rel="nofollow" target="_blank">
                            <span class="tag new" style="left:75px;"></span>优享设计</a>
                    </li>
                    <li class="sceneli" @mouseenter="enterStyle('scene-box')" @mouseleave='leaveStyle("scene-box")'>
                        <a  href="javascript:;" target="_blank" rel="nofollow">场景服务<i class="more"></i>
                        </a>
                        <div class="scene-box">
                            <ul>
                                <li>
                                    <i class="tag tag1"></i>
                                    <p class="t1">展会物料</p>
                                    <p>一站式解决，拎包参展</p>
                                    <a target="_blank" href="/activity/exhibition.html"></a>
                                </li>
                                <li>
                                    <i class="tag tag2"></i>
                                    <p class="t1">日常办公</p>
                                    <p>您身边的办公物料服务管家</p>
                                    <a target="_blank" href="/activity/business.html"></a>
                                </li>
                                <li>
                                    <i class="tag tag3"></i>
                                    <p class="t1">地推必备</p>
                                    <p>让地推效果更棒</p>
                                    <a target="_blank" href="/activity/spread.html"></a>
                                </li>
                                <li>
                                    <i class="tag tag4"></i>
                                    <p class="t1">门店宣传</p>
                                    <p>让客户过目不忘</p>
                                    <a target="_blank" href="/activity/store.html"></a>
                                </li>
                                <li class="last">
                                    <i class="tag tag5"></i>
                                    <p class="t1">餐饮印品</p>
                                    <p>塑造餐饮品牌 诱惑吃货味蕾</p>
                                    <a target="_blank" href="/activity/foodBeverage.html"></a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="/activity/qingsheji.html" class=" a1" target="_blank">
                            <span class="tag new"  style="left:75px;"></span>创意文具
                        </a>
                        <span class="line">|</span>
                    </li>
                    <li class="diyli" @mouseenter="enterStyle('diysort')" @mouseleave='leaveStyle("diysort")'>
                        <a  href="http://www.tubangzhu.com/" class=" a1" target="_blank" rel="nofollow">图帮主</a>
                        <div class="diysort">
                            <div class="diytop">你的设计你做主！</div>
                            <div class="info">
                                <dl class="dl1 dtest">
                                    <dt>精美款式</dt>
                                    <dd>资深设计团队呕血打造，定期更新</dd>
                                </dl>
                                <dl class="dl2 dtest">
                                    <dt>轻松编辑</dt>
                                    <dd>随意替换文字与LOGO，自定义色彩风格</dd>
                                </dl>
                                <dl class="dl3 dtest">
                                    <dt>300分辨率</dt>
                                    <dd>按印刷标准生成高清图片</dd>
                                </dl>
                            </div>
                            <div class="listw">
                                <div class="txt">最受欢迎模板：</div>
                                <ul class="ul2 f-clearfix">
                                    <li class="li2">
                                        <a target="_blank"
                                           href="http://www.tubangzhu.com/template/pr-mingpian.html">名片</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank"
                                           href="http://www.tubangzhu.com/template/pr-xuanchuandan.html">宣传单</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank"
                                           href="http://www.tubangzhu.com/template/pr-guahua.html">企业挂画</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank" href="http://www.tubangzhu.com/template/pr-huace.html">画册</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank"
                                           href="http://www.tubangzhu.com/template/pr-zhanjia.html">展架</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank"
                                           href="http://www.tubangzhu.com/template/pr-buganjiaotie.html">不干胶贴</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank"
                                           href="http://www.tubangzhu.com/template/pr-bianqian.html">便签</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank" href="http://www.tubangzhu.com/template/pr-daijinquan.html">代金券</a>
                                    </li>
                                    <li class="li2">
                                        <a target="_blank" href="http://www.tubangzhu.com/template/pr-shoutidai.html">手提袋</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div v-for="item in arrItem" class="swiper-slide">
                        <img :src="item.imgUrl">
                    </div>

                </div>
                <!-- 如果需要分页器 -->
                <div class="swiper-pagination"></div>
            </div>

        </div>

    </div>

</template>

<script>
    import Swiper from 'swiper';
    import listMenu from '../components/listmenu'

    export default {
        name: "home",
        components: {
            listMenu
        },
        data() {
            return {
                arrItem: [
                    {
                        name: 'swiperSlide5',
                        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'
                    },
                    {
                        name: 'swiperSlide1',
                        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'
                    },
                    {
                        name: 'swiperSlide51',
                        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'
                    },
                    {
                        name: 'swiperSlide1111115',
                        imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'
                    }
                ]
            }
        },
        mounted() {
            new Swiper('.swiper-container', {
                autoplay: true,
                loop: true,
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
            })
        },
        methods:{
            enterStyle(className){
                console.log(className)
                $('.'+className).css({'display':'block'})
            },
            leaveStyle(className){
                $('.'+className).css({'display':'none'})
            }

        }
    }
</script>


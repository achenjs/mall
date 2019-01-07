<style lang="scss" scoped>

    .headerdetail {
        height: 123px;
        font-size: 12px;
        .toolbar {
            position: relative;
            .logo {
                margin: 0;
                float: left;
                padding-top: 21px;
            }
            .search {
                padding-bottom: 15px;
                margin-left: 115px;
                padding-top: 35px;
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
                padding: 35px 0 24px;
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
        position: relative;
        .content{
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
        }
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
                        font-size: 18px;
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
    }
    .kx-goods {
        margin-top: 40px;
        padding-top: 20px;
        border-top: 2px solid #d21633;
        background: #fff;
        .f-clearfix, .clearfix {
            display: block;
            zoom: 1;
        }
        .goodsTop{
            .topLeft {
                position: relative;
                zoom: 1;
                width: 330px;
                height: 393px;
                overflow: hidden;
                float: left;
                display: inline;
                .orderBanner {
                    width: 330px;
                    height: 393px;
                    position: relative;
                    zoom: 1;
                    overflow: hidden;
                    z-index: 1;
                    .previewBox {
                        width: 330px;
                        height: 393px;
                        top: 0;
                        left: 0;
                        z-index: 4;
                        display: none;
                    }
                    .fPic {
                        position: absolute;
                        left: 0;
                        top: 0;
                        .fcon {
                            position: relative;
                            width: 100%;
                            float: left;
                            display: none;
                            background: #fff;
                            img {
                                width: 330px;
                                height: 330px;
                                display: block;
                            }
                        }
                    }
                }
            }
            .topRight {
                width: 837px;
                float: right;
                display: inline;
                font-size: 12px;
                .orderBox {
                    width: 835px;
                    border: 1px solid #e7e7e7;
                    background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/vline_56f140f.png) 0 0 repeat-y;
                    background-color: #f5f5f5;
                    .topRightL {
                        padding: 10px 20px 20px;
                        background-color: #fff;
                        .orderTitle {
                            font-size: 20px;
                            color: #000;

                        }
                        .orderTime {
                            font-size: 14px;
                            color: #ff4d4d;
                            margin-top: 0;
                        }
                        .orderPrice {
                            margin-top: 10px;
                            margin-left: -20px;
                            margin-right: -20px;
                            padding-left: 20px;
                            padding-right: 20px;
                            height: 37px;
                            background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/pricebg_6f1e797.png) 0 0 repeat-x;
                            padding-top: 8px;
                            .fh {
                                font-size: 14px;
                                color: #d81b20;
                                float: left;
                                display: inline;
                                margin-top: 6px;
                            }
                            .price {
                                margin-right: 8px;
                                float: left;
                                display: inline;
                                font-size: 25px;
                                color: #d81b20;
                                font-weight: 700;
                            }
                            .f-f14 {
                                font-size: 14px;
                            }
                            .iconPrice {
                                font-size: 12px;
                                color: #4f4f4f;
                                font-weight: 400;
                                float: left;
                                display: inline;
                                margin-top: 10px;
                            }
                            .free {
                                float: left;
                                display: inline;
                                margin-top: 5px;
                                height: 21px;
                                line-height: 21px;
                                padding: 0 7px;
                                background-color: #ed1b23;
                                color: #fff;
                            }
                            .pin {
                                background-position: -91px 0;
                            }
                            .pin,.piao {
                                float: left;
                                display: inline;
                                margin-top: 5px;
                                height: 21px;
                                line-height: 20px;
                                margin-left: 6px;
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/piao_874d171.png) 0 0 no-repeat;
                                padding-left: 23px;
                                i {
                                    display: block;
                                    width: 49px;
                                    height: 19px;
                                    border: 1px solid #f39800;
                                    border-left: 0;
                                    padding: 0 6px;
                                    background-color: #fff;
                                }
                            }
                        }
                        .orderInfo {
                            height: 39px;
                            border-bottom: 1px solid #e7e7e7;
                            position: relative;
                            zoom: 1;
                            z-index: 5;
                            line-height: 39px;
                            color: #949494;
                            margin-left: -20px;
                            margin-right: -20px;
                            padding-left: 20px;
                            padding-right: 20px;
                            .infol {
                                float: left;
                                display: inline;
                                height: 40px;
                                .num {
                                    color: #d81b20;
                                    font-weight: 700;
                                }
                                .split {
                                    color: #d1d1d1;
                                    padding: 0 38px;
                                }
                            }
                        }
                        .u-space {
                            clear: both;
                            width: 100%;
                            height: 0;
                            overflow: hidden;
                            font-size: 0;
                            line-height: 0;
                            padding: 0;
                        }
                        .orderAttr{
                            .xuan3 {
                                width: 16px;
                                height: 16px;
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/sel_ed70079.png) 0 0 no-repeat;
                                position: absolute;
                                z-index: 3;
                                top: -6px;
                                right: -6px;
                                display: none;
                            }
                            .specBox {
                                margin-top: 9px;
                                .s-name {
                                    width: 60px;
                                    color: #878787;
                                    float: left;
                                    display: inline;
                                    line-height: 30px;
                                    margin-bottom: 6px;
                                }
                                .list {
                                    margin-top: 9px;
                                    .on:hover{
                                        .sp {
                                            width: auto;
                                            height: 29px;
                                            position: relative;
                                            color: #fff;
                                            text-decoration: none;
                                            background: #d10000;
                                        }
                                    }
                                    .s-option {
                                        width: auto;
                                        line-height: 29px;
                                        margin-right: 8px;
                                        float: left;
                                        position: relative;
                                        cursor: pointer;
                                        .xuan3 {
                                            width: 16px;
                                            height: 16px;
                                            background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/sel_ed70079.png) 0 0 no-repeat;
                                            position: absolute;
                                            z-index: 3;
                                            top: -6px;
                                            right: -6px;
                                            display: none;
                                        }

                                        .sp {
                                            color: #584a58;
                                            background: #ededed;
                                            display: inline-block;
                                            height: 29px;
                                            line-height: 29px;
                                            padding: 0 7px;
                                            margin-bottom: 5px;
                                        }
                                    }
                                    .on {
                                        position: relative;
                                        .sp{
                                            width: auto;
                                            height: 29px;
                                            position: relative;
                                            color: #fff;
                                            text-decoration: none;
                                            background: #d10000;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                .topRightB {
                    padding: 15px 20px;
                    border: 1px solid #e7e7e7;
                    border-top: 0;
                    background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/botbg_fcfa356.png) 0 0 repeat-x;
                    .text {
                        float: left;
                        display: inline;
                        width: 60px;
                        height: 66px;
                        line-height: 66px;
                    }
                    .other {
                        float: left;
                        display: inline;
                        .hasPrint {
                            float: left;
                            display: inline;
                            width: 166px;
                            margin-right: 12px;
                            margin-top: 15px;
                            cursor: pointer;
                            position: relative;
                            zoom: 1;
                            .btn {
                                background-position: 0 0;
                                width: 116px;
                                height: 35px;
                                line-height: 35px;
                                border: 1px solid #ddd;
                                padding-left: 48px;
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/btn1_d52d84f.png) 0 0 no-repeat;
                                font-size: 16px;
                            }
                            .uploadMask {
                                width: 164px;
                                height: 35px;
                                background: #fff url(//cdn2.duoduoyin.com/static/ddy-common/images/loading2_b256d80.gif) no-repeat center center;
                                filter: alpha(opacity=50);
                                -moz-opacity: .5;
                                opacity: .5;
                                position: absolute;
                                left: 0;
                                top: 0;
                                zoom: 1;
                                z-index: 1;
                                text-align: center;
                                line-height: 35px;
                                font-size: 10px;
                                color: #000;
                                display: none;
                            }
                            .upFileUl {
                                border: 1px solid #e7e7e7;
                                width: 115px;
                                display: none;
                                padding-left: 49px;
                                margin-top: -1px;
                                padding-top: 5px;
                                padding-bottom: 5px;
                            }
                        }
                        .tbz-pic {
                            float: left;
                            display: inline;
                            width: 194px;
                            margin-right: 12px;
                            margin-top: 15px;
                            cursor: pointer;
                            position: relative;
                            zoom: 1;
                            .btn {
                                width: 146px;
                                height: 35px;
                                line-height: 35px;
                                border: 1px solid #ddd;
                                padding-left: 48px;
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/btn2_494a97b.png) 0 0 no-repeat;
                                font-size: 16px;
                            }
                            .upFileUl {
                                border: 1px solid #e7e7e7;
                                width: 140px;
                                display: none;
                                padding-left: 40px;
                                padding-right: 14px;
                                margin-top: -1px;
                                padding-top: 5px;
                                padding-bottom: 5px;
                            }
                        }
                        .o3 {
                            float: right;
                            display: inline;
                            height: 37px;
                            line-height: 37px;
                            margin-top: 15px;
                            .btn {
                                padding-left: 33px;
                                background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/red_pen_icon_3ef7a8c.png) no-repeat left center;
                                a {
                                    color: #d10000;
                                }
                            }
                        }
                    }
                }
                .orderBtn {
                    margin-top: 20px;
                    padding-left: 81px;
                    font-size: 0;
                    .order  {
                        display: inline-block;
                        *display: inline;
                        *zoom: 1;
                        margin-right: 12px;
                        width: 100px;
                        height: 44px;
                        background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/order_fbc90ad.png) 40px 12px no-repeat #d10000;
                        padding-left: 66px;
                        font-size: 16px;
                        color: #fff;
                        line-height: 44px;
                    }
                    .addcart{
                        display: inline-block;
                        margin-right: 12px;
                        height: 44px;
                        width: 107px;
                        padding-left: 59px;
                        background: url(//cdn2.duoduoyin.com/static/ddy-common/images/goods/cart_7e7ad25.png) 26px 12px no-repeat #f39800;
                        font-size: 16px;
                        color: #fff;
                        line-height: 44px;
                    }
                }
            }
        }
        .goodsBot{
            margin-top: 50px;
             .botLeft {
                width: 330px;
                float: left;
                display: inline;
            }
            .botRight{
                width: 835px;
                float: right;
                display: inline;
                border: 1px solid #e7e7e7;
                border-top: 1px solid #ed193a;
                .tabs {
                    .tabTitle {
                        border-bottom: 1px solid #e7e7e7;
                        background-color: #f5f5f5;
                        li {
                            height: 40px;
                            line-height: 40px;
                            border-top: 1px solid #fff;
                            float: left;
                            display: inline;
                            font-size: 14px;
                            color: #383838;
                            padding: 0 20px;
                            cursor: pointer;
                        }
                        .hover {
                            height: 41px;
                            border-top: 1px solid #ed193a;
                            border-left: 1px solid #e7e7e7;
                            border-right: 1px solid #e7e7e7;
                            margin-bottom: -1px;
                            margin-left: -1px;
                            background-color: #fff;
                            color: #ed193a;
                        }
                    }
                    .tabBox {
                        text-align: center;
                        .xq_box {
                            width: 835px;
                            text-align: left;
                            .d_img {
                                text-align: center;
                            }
                            .prd_msg {
                                height: 505px;
                                font-family: "microsoft yahei";
                                font-size: 0;
                                .prd_img {
                                    width: 384px;
                                    display: inline-block;
                                    vertical-align: middle;
                                    img {
                                        width: 384px;
                                        height: 495px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

    }
    .f-clearfix:after, .clearfix:after {
        content: '\200B';
        display: block;
        height: 0;
        overflow: hidden;
        clear: both;
        visibility: hidden;
    }
    .f-posr {
        position: relative;
        zoom: 1;
    }
    .f-left {
        float: left;
        display: inline;
    }
</style>
<template>
    <div class="home">
        <div class="headerdetail">
            <div class="g-wrap toolbar">
                <div class="logo">
                    <img src="//cdn2.duoduoyin.com/static/ddy-common/images/common/logo_a0465e3.png" width="109">
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
        <div class="ind-main1">
            <div class="main-content">
                <div class="g-wrap">
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
            </div>
        </div>
        <div class="kx-goods" id="j-yunpanList">
            <div class="g-wrap">
                <div class="goodsTop f-clearfix">
                    <div class="topLeft">
                        <div class="orderBanner j-orderBanner f-posr" id="orderBanner">
                            <div id="j-previewDiv" class="f-posa previewBox" style="display: none;"></div>
                            <div id="D1pic1" class="fPic">
                                <div class="fcon" style="display: block;"><a href="javascript:;"><img src="//image.duoduoyin.com/uploads/goods/20181119/181119053428283a40c479.jpg" style="opacity: 0.99; width: 330px; height: 330px;"></a></div>
                                <div class="fcon" style="display: none;"><a href="javascript:;"><img src="//image.duoduoyin.com/uploads/goods/20181120/18112010591937887558ec.jpg" style="opacity: 1; width: 330px; height: 330px;"></a></div>
                                <div class="fcon" style="display: none;"><a href="javascript:;"><img src="//image.duoduoyin.com/uploads/goods/20181120/1811201059233788b2a7d4.jpg" style="opacity: 1; width: 330px; height: 330px;"></a></div>
                            </div><div class="fbg">
                            <div class="D1fBt" id="D1fBt"><a href="javascript:void(0)" hidefocus="true" class="current"><img src="//image.duoduoyin.com/uploads/goods/20181119/181119053428283a40c479.jpg"></a>
                                <a href="javascript:void(0)" hidefocus="true" class=""><img src="//image.duoduoyin.com/uploads/goods/20181120/18112010591937887558ec.jpg"></a>
                                <a href="javascript:void(0)" hidefocus="true" class=""><img src="//image.duoduoyin.com/uploads/goods/20181120/1811201059233788b2a7d4.jpg"></a>
                            </div>
                        </div>
                            <span class="prev j-prev" style="left: -31px;"></span>
                            <span class="next j-next" style="right: -31px;"></span>
                        </div>
                    </div>
                    <div class="topRight">
                        <form action="/main/goodsHandle.html" method="post" id="j-goods">
                            <input type="hidden" name="action" value="addBuy">
                            <input type="hidden" name="id" value="323">
                            <input type="hidden" name="mgId" value="">
                            <input type="hidden" name="selPrintIds" value="">
                            <div class="orderBox f-clearfix">
                                <div class="topRightL j-order">
                                    <div class="orderTitle">梵高经典艺术台历</div>
                                    <div class="orderTime">该印品当日16:00前下单，预计01月17日出货</div>
                                    <div class="orderPrice">
                                        <span class="fh">￥</span><span class="price" id="j-price">1200.00</span>
                                        <span class="iconPrice f-f14">&nbsp;单价：</span><span id="j-singlePrice" class="iconPrice f-f14" style="color:#d81b20;">￥6.00</span><span class="iconPrice f-f14" style="margin-right:20px;">元/本</span>
                                        <span class="free">包邮</span>
                                        <span class="piao"><i>正规发票</i></span>
                                        <span class="pin"><i>品质保证</i></span>
                                    </div>
                                    <div class="orderInfo f-clearfix">
                                        <div class="infol">累积订购&nbsp;<span class="num">1056</span><span class="split">|</span>累积评价&nbsp;<span class="num">0</span></div>
                                    </div>
                                    <div class="u-space f-clearfix"></div>
                                    <div class="orderAttr">
                                        <input type="hidden" class="j-numberInfo" value="" numberinfo="{&quot;min&quot;:1,&quot;minStep&quot;:1,&quot;step&quot;:1,&quot;range&quot;:[]}" unit="本" min="1" step="1">
                                        <div class="specBox f-posr f-clearfix j-specBox">

                                            <span class="s-name" style="">纸张</span>
                                            <ul class="list f-clearfix">
                                                <li class="j-s-option s-option on">
                                                    <span class=""></span>
                                                    <i class="f-left xuan3"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="0" specname="12071"><span class="sp">200g哑粉纸</span></a>
                                                    <input type="hidden" value="0" class="j-specInput" name="spec[0][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12071" isplate="0" platemoney="0.00">
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="specBox f-posr f-clearfix j-specBox">

                                            <span class="s-name" style="">页数</span>
                                            <ul class="list f-clearfix">
                                                <li class=" s-option on  ">
                                                    <span class=""></span>
                                                    <i class="xuan3 f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="1" specname="12073"><span class="sp">13张</span></a>
                                                    <input type="hidden" value="0" class="j-specInput" name="spec[1][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12073" isplate="0" platemoney="0.00">
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="specBox f-posr f-clearfix j-specBox">

                                            <span class="s-name" style="">尺寸</span>
                                            <ul class="list f-clearfix">
                                                <li class="s-option on">
                                                    <span class=""></span>
                                                    <i class="f-left xuan3"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="2" specname="12075"><span class="sp">175*220mm</span></a>
                                                    <input type="hidden" value="0" class="j-specInput" name="spec[2][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12075" isplate="0" platemoney="0.00">
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="specBox f-posr f-clearfix j-specBox">

                                            <span class="s-name" style="">工艺</span>
                                            <ul class="list f-clearfix">
                                                <li class="s-option on">
                                                    <span class=""></span>
                                                    <i class="f-left xuan3"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="3" specname="12080"><span class="sp">无</span></a>
                                                    <input type="hidden" value="0" class="j-specInput" name="spec[3][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12080" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class="s-option">
                                                    <span class=""></span>
                                                    <i class="f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="3" specname="12081"><span class="sp">单面 烫金/烫银</span></a>
                                                    <input type="hidden" value="1" class="j-specInput" name="normal[3][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12081" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class="s-option">
                                                    <span class=""></span>
                                                    <i class="f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="3" specname="12082"><span class="sp">双面 烫金/烫银</span></a>
                                                    <input type="hidden" value="2" class="j-specInput" name="normal[3][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12082" isplate="0" platemoney="0.00">
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="specBox f-posr f-clearfix j-specBox">

                                            <span class="s-name" style="">数量</span>
                                            <ul class="list f-clearfix">
                                                <li class=" s-option on  j-isNumber">
                                                    <span class=""></span>
                                                    <i class="xuan3 f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12084"><span class="sp">200</span></a>
                                                    <input type="hidden" value="0" class="j-specInput" name="spec[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12084" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class=" s-option   j-isNumber">
                                                    <span class=""></span>
                                                    <i class=" f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12085"><span class="sp">300</span></a>
                                                    <input type="hidden" value="1" class="j-specInput" name="normal[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12085" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class=" s-option   j-isNumber">
                                                    <span class=""></span>
                                                    <i class=" f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12086"><span class="sp">500</span></a>
                                                    <input type="hidden" value="2" class="j-specInput" name="normal[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12086" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class=" s-option   j-isNumber">
                                                    <span class=""></span>
                                                    <i class=" f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12087"><span class="sp">1000</span></a>
                                                    <input type="hidden" value="3" class="j-specInput" name="normal[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12087" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class=" s-option   j-isNumber">
                                                    <span class=""></span>
                                                    <i class=" f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12088"><span class="sp">2000</span></a>
                                                    <input type="hidden" value="4" class="j-specInput" name="normal[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12088" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class=" s-option   j-isNumber">
                                                    <span class=""></span>
                                                    <i class=" f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12089"><span class="sp">3000</span></a>
                                                    <input type="hidden" value="5" class="j-specInput" name="normal[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12089" isplate="0" platemoney="0.00">
                                                </li>
                                                <li class=" s-option   j-isNumber">
                                                    <span class=""></span>
                                                    <i class=" f-left"></i>
                                                    <a href="javascript:;" class="j-specPreview" datasrc="" specindex="4" specname="12090"><span class="sp">5000</span></a>
                                                    <input type="hidden" value="6" class="j-specInput" name="normal[4][]" price="0.0000" weightratio="1.0000" specgroup="" specid="12090" isplate="0" platemoney="0.00">
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="topRightB f-clearfix">
                                <div class="text">文件</div>
                                <div class="other f-clearfix">
                                    <div class="hasPrint" id="j-hasPrintBox">
                                        <div class="btn" id="upCase" style="position: relative; z-index: 1;">上传自备文件</div>
                                        <div class="uploadMask" id="j-uploadMask"></div>
                                        <ul class="upFileUl" id="j-upFileUl"></ul>
                                        <div id="html5_1d0jdgdv21joh1dgm13ag15lsron3_container" class="moxie-shim moxie-shim-html5" style="position: absolute; top: 0px; left: 0px; width: 166px; height: 37px; overflow: hidden; z-index: 0;"><input id="html5_1d0jdgdv21joh1dgm13ag15lsron3" type="file" style="font-size: 999px; opacity: 0; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;" accept="image/jpeg,image/png,.cdr,application/postscript,.rar,application/zip,image/photoshop,image/tiff,application/pdf"></div></div>
                                    <div class="tbz-pic" id="j-tbz">
                                        <div class="btn" id="uptbz">从图帮主选择文件</div>
                                        <ul class="upFileUl" id="j-tbz-upFile"></ul>
                                    </div>
                                </div>
                                <div class="o3"><div class="btn"><a href="http://www.tubangzhu.com/template/pr-qiyetaili.html" target="_blank" rel="nofollow">没有文件？去自助设计 &gt;</a></div></div>
                            </div>
                            <div class="orderBtn">
                                <a href="javascript:;" id="j-addBuy" class="order">立即订购</a>
                                <a href="javascript:;" id="j-addCart" class="addcart">加入购物车</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="goodsBot f-clearfix"></div>
            </div>
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    import listMenu from '../components/detailMenu'

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


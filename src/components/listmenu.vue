<style lang="scss" scoped>
.main-nav{
    left: 0;
    width: 186px;
    position: absolute;
     .allsort {
        background: url(//cdn2.duoduoyin.com/static/ddy-common/images/index/sortbg_ca9ca72.png) 0 0 no-repeat;
        height: 41px;
        font-size: 16px;
        padding-left: 19px;
        line-height: 41px;
        color: #fff;
        position: relative;
        zoom: 1;
        z-index: 10;
       i{
             display: inline-block;
             width: 15px;
             height: 12px;
             margin-right: 11px;
             background: url(//cdn2.duoduoyin.com/static/ddy-common/images/icon/ico-sort_a2fefc4.png) 0 0 no-repeat;
        }
    }
}
</style>
<template>
    <div class="main-nav">
        <div class="allsort"><i></i><span>印品分类</span></div>
        <div class="sortList" id="j-mainSortList">
            <ul class="list">
                <li class="li1 j-li" data-id="sort1" data-adlink="http://www.duoduoyin.com/mingpianLuxury.html" data-adimg="//image.duoduoyin.com/uploads/aid/20180319/180319033807f68df16f93.jpg">
                    <div class="sort1"><i></i><a target="_blank" href="/mingpian.html">名片</a></div>
                    <div class="sort2"><a target="_blank" href="/goods/1.html">铜版纸</a><a target="_blank" href="/goods/173.html">安格纸</a><a target="_blank" href="/goods/226.html">丽芙纸</a><br><a target="_blank" href="/goods/45.html">黑卡纸</a><a target="_blank" href="/goods/168.html">欧纯棉纸</a><a target="_blank" href="/zhiyang.html">纸样</a></div>
                </li>
                <li class="li2 j-li" data-id="sort9" data-adlink="http://www.duoduoyin.com/toteBag.html" data-adimg="//image.duoduoyin.com/uploads/aid/20180319/180319033937f69396d653.jpg">
                    <div class="sort1"><i></i><a target="_blank" href="/toteBag.html">手提袋</a></div>
                    <div class="sort2"><a target="_blank" href="/goods/292.html">白卡纸</a><a target="_blank" href="/goods/294.html">牛皮纸</a><a target="_blank" href="/toteBag.html#fabric">无纺布</a><br><a target="_blank" href="/goods/298.html">帆布袋</a><a target="_blank" href="/goods/297.html">塑料袋</a><a target="_blank" href="/toteBag.html#spot">现货</a></div>
                </li>
                <li class="li3 j-li" data-id="sort2" data-adlink="http://www.duoduoyin.com/huace.html" data-adimg="//image.duoduoyin.com/uploads/aid/20180319/180319033844f690411d62.jpg">
                    <div class="sort1"><i></i><a href="javascript:;">宣传</a></div>
                    <div class="sort2"><a target="_blank" href="/xuanchuandan.html">宣传单</a><a target="_blank" href="/huace.html">画册</a><a class="ar" target="_blank" href="/buganjiaotie.html">不干胶贴</a><br><a target="_blank" href="/yilabao.html">易拉宝</a><a target="_blank" href="/zheye.html">折页</a><a target="_blank" href="/wenhuashan.html">文化衫</a></div>
                </li>
                <li class="li4 j-li" data-id="sort3" data-adlink="http://www.duoduoyin.com/goods/274.html" data-adimg="//image.duoduoyin.com/uploads/aid/20180319/180319033901f6915e9892.jpg">
                    <div class="sort1"><i></i><a href="javascript:;">办公</a></div>
                    <div class="sort2"><a target="_blank" href="/gongzuozheng.html">工作证</a><a target="_blank" href="/goods/75.html">信纸</a><a target="_blank" href="/goods/108.html">信封</a><a target="_blank" href="/goods/60.html">便签</a><br><a target="_blank" href="/jishiben.html">记事本</a><a target="_blank" href="/goods/74.html">文件袋</a><a target="_blank" href="/goods/76.html">纸杯</a></div>
                </li>
                <li class="li5 j-li" data-id="sort7" data-adlink="http://www.duoduoyin.com/activity/foodBeverage.html" data-adimg="//image.duoduoyin.com/uploads/aid/20180319/180319034430f6a5e98582.png">
                    <div class="sort1"><i></i><a href="/activity/foodBeverage.html" target="_blank">餐饮印品</a></div>
                    <div class="sort2"><a target="_blank" href="/goods/305.html">订餐卡</a><a class="ar" target="_blank" href="/goods/311.html">不干胶</a><a target="_blank" href="/goods/306.html">DM单</a><br><a target="_blank" href="/goods/303.html">餐巾纸</a><a target="_blank" href="/goods/309.html">垫餐纸</a><a target="_blank" href="/goods/312.html">餐盒腰封</a></div>
                </li>
                <li class="li6 j-li" data-id="sort8" data-adlink="http://www.duoduoyin.com/kuaiyin.html" data-adimg="//image.duoduoyin.com/uploads/aid/20180319/180319033925f692decbd6.jpg">
                    <div class="sort1"><i></i><a href="javascript:;">速印</a></div>
                    <div class="sort2"><a target="_blank" href="/goods/267.html">项目书</a><a target="_blank" href="/goods/268.html">投标书</a><a target="_blank" href="/goods/263.html">VI手册</a><br><a target="_blank" href="/goods/266.html">培训书</a><a target="_blank" href="/zhaopianshu.html">相册书</a><a target="_blank" href="/goods/265.html">产品手册</a></div>
                </li>
            </ul>
            <div class="subsort" id="j-mainSubsort" style="display: none;">
                <div class="subwrap">
                    <div class="subbox j-subbox" style="width: 0px;"><div class="boxc j-box"><div class="subtitle"><a target="_blank" href="/toteBag.html#classic"><span>经典手提袋</span></a></div>		<div class="sublist">			<a target="_blank" href="/goods/292.html" class="hot-item">白卡纸手提袋</a>			<a target="_blank" href="/goods/293.html">铜版纸手提袋</a>			<a target="_blank" href="/goods/294.html">牛皮纸手提袋</a>			<a target="_blank" href="/goods/295.html">白牛皮纸手提袋</a>		</div>		<div class="subtitle"><a target="_blank" href="/toteBag.html#fabric"><span>无纺布手提袋</span></a></div>		<div class="sublist">			<a target="_blank" href="/goods/299.html">平口无纺布手提袋</a>			<a target="_blank" href="/goods/300.html" class="hot-item">立体无纺布手提袋</a>			<a target="_blank" href="/goods/301.html">船型无纺布手提袋</a>			<a target="_blank" href="/goods/302.html">折叠无纺布手提袋</a>		</div>		<div class="subtitle"><a target="_blank" href="/toteBag.html#other"><span>其他手提袋</span></a></div>		<div class="sublist">			<a target="_blank" href="/goods/298.html">帆布手提袋</a>			<a target="_blank" href="/goods/297.html">塑料手提袋</a>			<a target="_blank" href="/goods/296.html">船型手提袋</a>		</div>		<div class="subtitle"><a target="_blank" href="/toteBag.html#spot"><span>现货手提袋</span></a></div>		<div class="sublist">			<a target="_blank" href="/goods/291.html" class="hot-item">彩色牛皮纸手提袋</a>		</div></div></div>
                    <div class="subad j-subad" style="margin-left: 0px;"><a href="http://www.duoduoyin.com/toteBag.html"><img src="//image.duoduoyin.com/uploads/aid/20180319/180319033937f69396d653.jpg"></a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "listmenu"
    }
</script>


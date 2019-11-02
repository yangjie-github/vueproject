<template>
    <div>
        <!-- 轮播图区域 -->
        <swiper :lbtList="lbtList" :isfull="true"></swiper>

        <!-- 六宫格改造 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newsList">
                    <img src="../../images/img1.jpg" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                    <img src="../../images/img2.jpg" alt="">
                    <span class="mui-badge">5</span></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodslist">
                    <img src="../../images/img3.jpg" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/img4.jpg" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/img5.jpg" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/img6.jpg" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
// 导入Toast组件
import { Toast } from 'mint-ui'

// 导入轮播图组件
import swiper from '../subcomponents/Swiper.vue'

export default {
    data() {
        return {
            lbtList: [],
        }
    },
    created() {
        this.getLBT();
    },
    methods: {
        getLBT() { //获取轮播图
            this.$http.get("http://n.sinaimg.cn/sinacn/w640h400/20180105/d32e-fyqincu5933036.jpg").then(result => {
                this.lbtList = ['http://n.sinaimg.cn/sinacn/w640h400/20180105/d32e-fyqincu5933036.jpg', 
                                    'http://www.people.com.cn/mediafile/pic/20160203/94/10553687955795022058.jpg',
                                    'http://03imgmini.eastday.com/mobile/20180902/20180902100106_a93f0ba766b493b666ed07eabb70197e_2.jpeg']
                if (result.body.status === 0) {
                    // 请求成功，模拟数据
                    // Toast ('加载轮播图成功')
                } else {
                    // 失败
                    // Toast ('加载轮播图成功')
                }
            })
        }
    },
    // 注册子组件
    components: {
        swiper
    }
}
</script>

<style lang="scss" scoped>
.mui-grid-view.mui-grid-9 {
    background-color: white;
    border: none;
    img {
        width: 60px;
        height: 60px;
    }
}rgb(241, 228, 228)

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
    background-color: white;
    border: none;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body {
    font-size: 10px;
}
</style>





<template>
    <div class="goodinfo-container">

        <!-- 小球 -->
        <transition 
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
        >
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lbtList="lbtList" :isfull="false"></swiper>
                </div>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodinfo.name }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{ goodinfo.remarks }}</del>&nbsp;&nbsp;
                        销售价：<span class="now_price">￥{{ goodinfo.nowprice }}</span>
                    </p>
                    <!-- 怎样拿到numbers子组件的值，子组件向父组件传值 -->
                    <!-- 父组件向子组件传最大可以选的数量, goodinfo是异步获取， 此时注意子组件拿到的是undefined，需要在子组件使用watch监听父组件传递过来max -->
                    <p>购买数量：<numbers @getCount="getSelectCount" :max="goodinfo.store"></numbers></p>
                    <p>
                        <mt-button type="primary" size="small">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号: {{ goodinfo.number }}</p>
                    <p>库存情况: {{ goodinfo.store }} 件</p>
                    <p>上货时间: {{ goodinfo.date | dataFormat("YYYY-MM-DD") }}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <!-- 实现这两个button的上下布局，需要去除父元素flex布局 -->
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
// 导入轮播图组件
import swiper from '../subcomponents/Swiper.vue'
// 导入购买数量组件
import numbers from '../subcomponents/GoodsInfo_number.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            lbtList: [],
            goodinfo: {},
            ballFlag: false,
            selectCount: 1
        }
    },
    created() {
        this.getLBT();
        this.getGoodInfo();
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
        },
        getGoodInfo() {
            // this.$http.get('goodinfo.json').then(result => {
            //     this.goodinfo = result.body.list[this.id]
            // })
            var list = [
                { "id": 1, "name": "网纱拼接很仙的法国小众桔梗裙2019流行夏天裙子仙女森系连衣裙", "number": 102354178, "store": 8, "date": "2018-04-08T13:31:39Z", "remarks": 1299, "nowprice": 939 },
                { "id": 2, "name": "白色T恤女短袖宽松韩版圆领学生半袖潮流ins弹力夏季港风个性女装", "number": 102354178, "store": 8, "date": "2017-03-08T14:32:39Z", "remarks": 1399, "nowprice": 929 },
                { "id": 3, "name": "SW天然乳胶床垫 1.5米1.8m独立弹簧椰棕垫软硬两用定制加厚席梦思", "number": 102354178, "store": 8, "date": "2015-04-08T15:33:39Z", "remarks": 1499, "nowprice": 995 },
                { "id": 4, "name": "主卧室灯现代简约led吸顶灯超薄客厅灯大气家用圆形书房餐厅灯具", "number": 102354178, "store": 8, "date": "2016-06-08T16:34:39Z", "remarks": 1599, "nowprice": 334 },
                { "id": 5, "name": "西昊人体工学椅子靠背 电脑椅家用转椅老板椅护腰办公椅电竞座椅", "number": 102354178, "store": 8, "date": "2018-07-08T17:35:39Z", "remarks": 1699, "nowprice": 567 },
                { "id": 6, "name": "北欧风格高档大气棉麻遮光窗帘简约现代穿帘布客厅成品卧室遮光布", "number": 102354178, "store": 8, "date": "2019-08-08T18:36:39Z", "remarks": 1799, "nowprice": 678 },
                { "id": 7, "name": "歌德利电脑椅人体工学办公椅子职员椅家用休闲靠背网布转椅学生椅", "number": 102354178, "store": 8, "date": "2015-03-08T19:37:39Z", "remarks": 1899, "nowprice": 656 },
                { "id": 8, "name": "荣事达电风扇塔扇家用落地扇静音宿舍立式台式无叶风扇空气循环扇", "number": 102354178, "store": 8, "date": "2013-02-08T10:38:39Z", "remarks": 1999, "nowprice": 445 },
                { "id": 9, "name": "全遮光窗帘布料加厚防晒隔热遮阳成品定制落地飘卧室阳台简约现代", "number": 102354178, "store": 8, "date": "2018-09-08T11:30:39Z", "remarks": 199, "nowprice": 990 }
            ];
            this.goodinfo = list[this.id]

        },
        goDesc(id) {
            // 使用编程式导航去商品图文介绍页面
            this.$router.push({name: 'goodDesc', params: { id } })
        },
        goComment(id) {
            this.$router.push({name: 'goodComment', params: { id } })
        },
        addToShopCar() {
            this.ballFlag = !this.ballFlag;
            // 拼接一个需要保存到store中的商品数组对象
            var goodinfo = { id: parseInt(this.id), count: this.selectCount, price: this.goodinfo.nowprice, selected: true }
            // 存入store
            this.$store.commit('addToCar', goodinfo);
        },

        // 小球动画在切换屏幕大小时候，会出现移动位置错误， 因为我们把分辨率固定死了
        // 我们要动态调整小球移动的位置， 不能把小球的移动位移写死， 需要动态计算translate的值
        // 使用技术：拿到小球目的地的围标的位置和小球初始位置相减， 横轴减横轴，纵轴减纵轴
        // DomObject.getBoundingRect() 可以获取某个元素距离窗口（0,0）的我个位置的值；
        // 
        beforeEnter(el) {
            el.style.transform = "translate(0, 0)"; //是样式里面小球的位置

        },
        enter(el, done) {

            // 获取小球初始位置
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取徽标的位置
            const badgePosition = document.getElementById("badge").getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;



            el.offsetWidth;
            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            // 动画效果： cubic-bezier
            el.style.transition = "all .5s cubic-bezier(0.4, -0.3, 1, 0.68)";
            done();
        },
        afterEnter(el) {
            this.ballFlag = !this.ballFlag;
        },
        getSelectCount(count) {
            // 当子组件把选中的数量传递给父组件的时候，将count传递给父组件
            this.selectCount = count;
        }
    },
    components: {
        swiper,
        numbers
    }
}
</script>

<style lang="scss" scoped>
.mui-card-header {
    font-size: 14px;
}
.goodinfo-container {
    background-color: #eee;
    overflow: hidden;
}

.now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
}

.mui-card-footer {
    display: block;
    button {
        margin: 10px 0;
    }
}

.ball {
    position: absolute;
    background-color: red;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    z-index: 99;
    top: 410px;
    left: 147px;
}
</style>



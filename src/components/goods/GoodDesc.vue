<template>
    <div>
        <h3>商品号：{{ info.number }}</h3>
        <hr>
        <div class="content" v-html="info.name"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            info: {}
        }
    },
    created() {
        this.getInfo();
    },
    methods: {
        getInfo() {
            // this.$http.get('goodinfo.json').then(result => {
            //     this.info = result.body.list[this.id]
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
            this.info = list[this.id];
        }
    }
}
</script>

<style lang="scss" scoped>
h3 {
    font-size: 16px;
    color: #226aff;
    text-align: center;
    margin: 15px 0;
}

.content {
    padding: 4px;
}
</style>
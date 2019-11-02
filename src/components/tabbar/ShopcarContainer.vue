<template>
    <div class="gooslist-container">
        <div class="goodlist">

        <!-- 商品列表区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner" v-for="(item,i) in goodlist" :key="item.id">
                    <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>
                    <img :src="item.src" alt="">
                    <div class="info">
                        <h1>{{ item.name }}</h1>
                        <p>
                            <span class="price">￥{{item.price}}</span>
                            <number :initCount="$store.getters.getGoodsCount[item.id]" :goodId="item.id"></number>

                            <!-- 将购物车中的商品数量同步，从lacalStorage中获取对象数量, i用来删除goodslist数据， item.id是删除store数据 -->
                            <a href="" @click.prevent="remove(item.id, i)">删除</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner calculate">
                    <div class="left">
                        <p>总计(不含运费)</p>
                        <p>已勾选商品<span class="redSpan">{{ $store.getters.getGoodsCountAndAmount.count }}</span>件， 总价<span class="redSpan">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import number from '../subcomponents/GoodsList_number.vue'
export default {
    data() {
        return {
            goodlist: []
        }
    },
    created() {
        this.getGoodsList();
    },
    methods: {
        getGoodsList() {
            var idArr = [];
            this.$store.state.car.forEach(element => {
                idArr.push(parseInt(element.id));
                // console.log("购物车id:" + idArr)
            });

            if (idArr.length <= 0) {
                return ;
            } else {
                var resultArr = [];
                // this.$http.get('photos.json').then(result => {
                //     result.body.list.forEach(el => {
                //         var index = idArr.indexOf(parseInt(el.id));
                //         if (index > -1) {
                //             resultArr.push(el);
                //         }
                //     });
                // })
                var list = [
                    { "id": 1, "src": "http://img5.imgtn.bdimg.com/it/u=2416963768,4074781085&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 2399, "name": "袜子" },
                    { "id": 2, "src": "http://img4.imgtn.bdimg.com/it/u=1518510081,2046831373&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 1599, "name": "洗衣机" },
                    { "id": 3, "src": "http://img2.imgtn.bdimg.com/it/u=2060448307,4291199381&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 7499, "name": "电脑" },
                    { "id": 4, "src": "http://img2.imgtn.bdimg.com/it/u=3438967032,3980647158&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 2399, "name": "手机" },
                    { "id": 5, "src": "http://img1.imgtn.bdimg.com/it/u=2699511212,1685893059&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 4599, "name": "鼠标" },
                    { "id": 6, "src": "http://img5.imgtn.bdimg.com/it/u=2228946637,1607477398&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 8599, "name": "键盘" },
                    { "id": 7, "src": "http://img4.imgtn.bdimg.com/it/u=769835991,3074513317&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 9699, "name": "冰箱" },
                    { "id": 8, "src": "http://img3.imgtn.bdimg.com/it/u=1483966346,516685321&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 2399, "name": "电风扇" },
                    { "id": 9, "src": "http://img4.imgtn.bdimg.com/it/u=3350928507,1317787139&fm=26&gp=0.jpg", "title": "大家看过来，这里的图片都是几极好的", "price": 4499, "name": "冰淇淋" }
                ];
                list.forEach(el => {
                    var index = idArr.indexOf(parseInt(el.id));
                    if (index > -1) {
                        resultArr.push(el);
                    }
                });
                this.goodlist = resultArr;
            }
        },
        remove (id, index) {
            // 点击删除， 将商品从store和页面列表中伤处
            this.goodlist.splice(index, 1);
            this.$store.commit('removeFromCar', id);
        },
        selectedChanged(id, value) {
            // 点击开关，同步状态值store中
            // console.log(id)
            // console.log(value)
            this.$store.commit('updateGoodsSelected', {id, selected: value});
        }
    },
    components: {
        number
    }
}
</script>

<style lang="scss" scoped>
.gooslist-container {
    background-color: #eee;
    overflow: hidden;
    .goodlist {
        .mui-card-content-inner {
            display: flex;
            align-items: center;
        }
        img {
            height: 40px;
            width: 40px;
            margin: 0 5px;
        }

        h1 {
            font-size: 13px;
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .price {
                color: red;
                font-weight: bold;
            }
        }
    }

    .calculate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .redSpan {
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>
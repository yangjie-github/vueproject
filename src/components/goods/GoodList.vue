<template>
    <div class="goodslist">
        <!-- 路由跳转 -->
        <!-- <router-link class="goodsitem" v-for="item in goodslist" :key="item.id" :to="'/home/goodinfo/' + item.id" tag="div">
            <img :src="item.src" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2099</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60部</span>
                </p>
            </div>
        </router-link> -->

        <!-- 网页两种方式跳转：
            1. a标签（上面实际上就是用a标签跳转）
            2. window.location.href(编程式)
         -->
        <div class="goodsitem" v-for="item in goodslist" :key="item.id" @click="goDetail(item.id)">
            <img :src="item.src" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥2099</span>
                    <span class="old">￥2399</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余60部</span>
                </p>
            </div>
        </div>
        <mt-button type="danger" size="large" @click="getMore()">加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            goodslist: []
        }
    },
    created() {
        this.getGoodsList();
    },
    methods: {
        getGoodsList() {
            // this.$http.get('photos.json').then(result => {
            //     this.goodslist = this.goodslist.concat(result.body.list);
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

            this.goodslist = this.goodslist.concat(list);
        },
        getMore() {
            // 实际是先给页码相加，然后获取数据和之前的数据相加
            this.getGoodsList();
        },
        goDetail(id) {
            // 使用js方式进行路由跳转
            // $route是this中的参数对象，$router是this中的路由的导航对象，可以方便的使用js代码实现路由的前进和后退，跳转至新的地址
            // 最简单的一种
            // this.$router.push('/home/goodinfo/' + id); 
            // 传递对象
            // this.$router.push({ path: '/home/goodinfo/' + id}); 
            // 传递命名的路由
            this.$router.push({ name: 'goodinfo', params: {id} });

        }
    }
}
</script>

<style lang="scss" scoped>
.goodslist {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-around;这样不行
    padding: 7px;
    justify-content: space-between;

    .goodsitem {
        width: 49%;
        img {
            width: 100%;
        }
        .title {
            font-size: 14px;
        }
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 170px;;

        .info {
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                .now {
                    color: red;
                    font-weight: bold;
                    font-size: 10px;
                }
                .old {
                    text-decoration-line: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>





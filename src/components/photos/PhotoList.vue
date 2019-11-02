<template>
    <div>
        <!-- 顶部滑动条，删除mui-fullscreen类 -->
        <!-- 滑动条无法正常滑动，需要被初始化，导入mui.js -->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <!-- 此处的tap是mui中的组价可以使用的，若使用click，则在手机端切换图标时候会出现不切换的bug -->
                    <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="item in cates" :key="item.id" @tap="getAllPhoto">
                        {{ item.title }}
                    </a>
                </div>
            </div>
        </div>

        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in photolist" :key="item.src" :to="'/home/photoInfo/' + item.id" tag="li">
                <img v-lazy="item.src">
                <div class="info">
                    <h1 class="info-title">{{ item.title }}</h1>
                    <div class="info-body">{{ item.title }}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// 导入mui js文件， 会出现严格模式的问题，在webpack中打包好的bundle.js文件总是启用严格模式的，出现冲突， 需要去除webpack的严格模式；
// babel-plugin-transform-remove-strict-mode 这个插件可以解决严格模式问题：
// 1. npm i babel-plugin-transform-remove-strict-mode -D, 在babelIrc配置文件添加transform-remove-strict-mode

// 赶紧入页面无法滑动：添加mounted(组件的dom渲染好时候会执行)， 将mui(..)scroll(..)添加至mounted()钩子函数

// 底部tabar也不能点击： js和tabbar的类名冲突，需要修改App组件中的类名

import mui from '../../lib/mui/js/mui.min.js'
// 初始化滑动控件
mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


export default {
    data() {
        return {
            cates: [],//所有分类的列表
            photolist: [] //图片列表数组
        }
    },
    created() {
        this.getAllList();
        this.getAllPhoto();
    },
    mounted() {
        mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
        });
    },
    methods: {
        getAllList() {
            // this.$http.get('cates.json').then(result => {
            //     result.body.list.unshift({"title": "全部", "id": 0});
            //     this.cates = result.body.list;
            // })
            var list = [
                {"title": "推荐", "id": 1},
                {"title": "热点", "id": 2},
                {"title": "北京", "id": 3},
                {"title": "社会", "id": 4},
                {"title": "新闻", "id": 5},
                {"title": "资讯", "id": 6}
            ];
            list.unshift({"title": "全部", "id": 0});
            this.cates = list;
        },
        getAllPhoto() {
            // this.$http.get('photos.json').then(result => {
            //     this.photolist = result.body.list;
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
            this.photolist = list;
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    touch-action: pan-y //解决滑动的警告，无关紧要
}

.photo-list {
    margin: 0;
    padding: 10px;
    list-style: none;
    padding-bottom: 0;
    li {
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 4px #999;
        position: relative;

        img {
            width: 100%;
            vertical-align: middle;
        }

        img[lazy=loading] {
            width: 40px;
            height: 300px;
            margin: auto;
        }

        .info {
            padding-left: 5px; 
            width: 100%;
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            max-height: 50px;
            .info-title {
                font-size: 14px;
            }
            .info-body {
                font-size: 12px;
            }
        }
    }
}

</style>



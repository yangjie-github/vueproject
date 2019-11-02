<template>
    <div>
        <mt-swipe :auto="4000">
            <!-- 谁使用此组件，谁传递来lbtList， lbtList应该是父组件向子组件键传值 -->
            <mt-swipe-item v-for="item in lbtList" :key="item">
                <img :src="item" alt="" :class="{full: isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 首页的轮播图和商品列表的展示不一样，在首页是100%， 在详情页面应该是自适应比较合适，存在分歧 -->
    <!-- 解决办法：
        轮播图的调用者手动指定样式
     -->
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {

    },
    props: ['lbtList', 'isfull']
}
</script>

<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    text-align: center;
    // .mint-swipe-item:nth-child(1) {
    //     background-color: red;
    // }

    .mint-swipe-item {
        
    }

    img {
        height: 100%;
    }
}
.full {
    width: 100%;
}
</style>



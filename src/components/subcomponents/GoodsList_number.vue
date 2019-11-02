<template>
    <div class="mui-numbox" data-numbox-min='1' style="height: 25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" @change="countChanged" ref="numbox" :value="initCount" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        <!-- 子组件在点击加或减的时候吧count传给父组件, 还有手动修改的时候也要传值 ： 可以总结为只要文本框的数据发生变化，就调用监听事件-->
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    methods: {
        countChanged() {
            // console.log(this.$refs.numbox.value);
            // 调用vuex的更新方法
            this.$store.commit('updateGoodsInfo', {
                id: this.goodId,
                count: this.$refs.numbox.value
            })
        }
    },
    mounted() {
        //需要初始化才能点击
        mui(".mui-numbox").numbox();
    },
    props: ["initCount", "goodId"]
}
</script>

<style lang="scss" scoped>

</style>


<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input class="mui-input-numbox" type="number" @change="countChanged" ref="numbox"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
        <!-- 子组件在点击加或减的时候吧count传给父组件, 还有手动修改的时候也要传值 ： 可以总结为只要文本框的数据发生变化，就调用监听事件-->
    </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
    methods: {
        countChanged() {
            this.$emit('getCount', parseInt(this.$refs.numbox.value))
        }
    },
    mounted() {
        //需要初始化才能点击
        mui(".mui-numbox").numbox();
    },
    props: ["max"],
    watch: {
        'max': function(newValue, oldValue) {
            // 使用js操作numberbox的最大值
            mui(".mui-numbox").numbox().setOption("max", newValue);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>


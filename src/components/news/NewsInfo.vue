<template>
    <div class="newsInfoContainer">
        <h3 class="title">新闻标题: {{ newsInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间：{{ newsInfo.date | dataFormat }}</span>
            <span>点击次数：{{ newsInfo.times }}</span>
        </p>
        <hr>
        <div class="content">
            <span v-html="newsInfo.content"></span>
        </div>

        <!-- 评论子组件 -->
        <comment-box :id="this.id"></comment-box>
    </div>
</template>

<script>
//导入commet评论子组件
import comment from '../subcomponents/Comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id, //获取url地址传过来的id
            newsInfo: {}
        }
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo() {
            // this.$http.get("newList.json").then(result => {
            //     this.newsInfo = result.body.list[this.id - 1];
            // })
            var list = [
                        {
                            "id": 1,
                            "status": 200,
                            "title": "我是新闻标题111",
                            "content": "<h1>woshi hs</h1><img src='http://www.xinhuanet.com/politics/2019-05/01/1124442746_15567128827591n.jpg'/>",
                            "date": "2018-04-08T11:38:39Z",
                            "times": "80次"
                        },
                        {
                            "id": 2,
                            "status": 200,
                            "title": "我是新闻标题222",
                            "content": "我是新闻内容222",
                            "date": "2018-04-08T11:38:39Z",
                            "times": "85次"
                        },
                        {
                            "id": 3,
                            "status": 200,
                            "title": "我是新闻标题333",
                            "content": "我是新闻内容333",
                            "date": "2018-04-08T11:38:39Z",
                            "times": "85次"
                        },
                        {
                            "id": 4,
                            "status": 200,
                            "title": "我是新闻标题444",
                            "content": "我是新闻内容444",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 5,
                            "status": 200,
                            "title": "我是新闻标题555",
                            "content": "我是新闻内容555",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 6,
                            "status": 200,
                            "title": "我是新闻标题666",
                            "content": "我是新闻内容666",
                            "date": "2018-05-25",
                            "times": "85次"
                        },

                        {
                            "id": 7,
                            "status": 200,
                            "title": "我是新闻标题777",
                            "content": "我是新闻内容777",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 8,
                            "status": 200,
                            "title": "我是新闻标题888",
                            "content": "我是新闻内容888",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 9,
                            "status": 200,
                            "title": "我是新闻标题999",
                            "content": "我是新闻内容999",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 10,
                            "status": 200,
                            "title": "我是新闻标题1010",
                            "content": "我是新闻内容1010",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 11,
                            "status": 200,
                            "title": "我是新闻标题11-11",
                            "content": "我是新闻内容11-11",
                            "date": "2018-05-25",
                            "times": "85次"
                        },
                        {
                            "id": 12,
                            "status": 200,
                            "title": "我是新闻标题12-12",
                            "content": "我是新闻内容12-12",
                            "date": "2018-05-25",
                            "times": "85次"
                        }
                    ];
            this.newsInfo = list[this.id - 1];    
        }
    },
    components: { //用来注册子组件
        'comment-box': comment
    }
}
</script>

<style lang="scss">
.newsInfoContainer {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle {
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }
    .content {
        // 此时的img需要设置宽度，但是同时需要去除scoped属性， 注意： 去掉scoped属性需要保证.newsInfoContainer的唯一性，负责会有全局属性影响
        img {
            width: 100%;
        }
    }
}
</style>



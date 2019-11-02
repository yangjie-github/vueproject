<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
                <router-link :to="'/home/newsInfo/' + item.id">
                    <img class="mui-media-object mui-pull-left" src="../../images/img4.jpg">
                    <div class="mui-media-body">
                        <h1>{{ item.title }}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{ item.date | dataFormat("YYYY-MM-DD") }}</span>
                            <span>点击： {{ item.times }}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>

import {Toast} from "mint-ui";

export default {
    data() {
        return {
            newsList: [] //新闻列表数据
        }
    },
    created() {
        this.getNewsList();
    },
    methods: {
        getNewsList() {
            // this.$http.get('newList.json').then(result => {
            //     if (result.status == 200) {
            //         this.newsList = result.body.list;
            //     } else {
            //         Toast("获取失败");
            //     }
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
                    ]
            this.newsList = list;
        }
    }
}
</script>

<style lang="scss" scoped>
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 12px;
            color: #226aff;
            // 使用flex属性设置p标签里面的span两端对齐
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>



<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容：(最多120字)" maxlength="120" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="postMessage">发表</mt-button>
        <div class="cmt-list" v-for="item in comments" :key="item.id">
            <div class="cmt-item">
                <div class="cmt-title">
                    {{ item.id }}楼用户： 匿名用户&nbsp;&nbsp;&nbsp;发表时间： {{ item.date | dataFormat }}
                </div>
                <div class="cmt-body">
                    <span v-html="item.content"></span>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getNext">加载更多</mt-button>
    </div>
</template>

<script>
import {Toast} from "mint-ui";

export default {
    data() {
        return {
            msg: '',
            pageIndex: 1, //默认展示第一页数据
            comments: []
        }
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            // this.$http.get('newList.json').then(retult => {
            //     console.log(this.id)
            //     this.comments = this.comments.concat(retult.body.list); //获取新评论时候在后面追加
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

                this.comments = this.comments.concat(list);
        },
        getNext() {
            this.pageIndex++;
            this.getComments();
        },
        postMessage() {
            if (this.msg.trim().length == 0) {
                return Toast("评论内容不能为空");
            }
            // this.$http.get('newList.json').then(result => {
            //     var cmt = {
            //         "id": 30,
            //         "status": 200,
            //         "title": "我是新闻标题3030",
            //         "content": this.msg.trim(),
            //         "date": new Date(),
            //         "times": "30次"
            //     }
            //     this.comments.unshift(cmt);
            //     this.msg = '';
            // })
            var lsit = [
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

            var cmt = {
                    "id": 30,
                    "status": 200,
                    "title": "我是新闻标题3030",
                    "content": this.msg.trim(),
                    "date": new Date(),
                    "times": "30次"
                }
            this.comments.unshift(cmt);
            this.msg = '';
        }
    },
    props: [
        "id"
    ]
}
</script>

<style lang="scss">
.cmt-container {
    h3 {
        font-size: 18px;
    }

    img {
        width: 100%;
    }

    textarea {
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list {
        margin: 5px 0;
        .cmt-title {
            background-color: #ccc;
            font-size: 13px;
            line-height: 30px;
        }

        .cmt-body {
            line-height: 35px;
            text-indent: 2em;
            font-size: 14px;
        }
    }
}
</style>



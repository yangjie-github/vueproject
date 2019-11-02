<template>
    <div class="photoinfo-container">
        <h3>标题: {{ photoInfo.title }}</h3>
        <p class="subtitle">
            <span>发表时间： {{ photoInfo.id }}</span>
            <span>点击次数：{{ photoInfo.id }}</span>
        </p>
        <hr>

        <!-- 缩略图区域 -->
        <div class="thumImg">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        
        <!-- 图片内容区域 -->
        <div class="content" v-html="photoInfo.title"></div>

        <!-- 评论子组件 -->
        <cmt-box></cmt-box>
    </div>
</template>

<script>
// 导入评论子组件
import comment from '../subcomponents/Comment.vue'

export default {
    data() {
        return {
            id: this.$route.params.id,
            photoInfo: {},
            slide1: [
                        {
                            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                            alt: 'picture1',
                            title: 'Image Caption 1',
                            w: 600,
                            h: 400
                        },
                        {
                            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                            alt: 'picture2',
                            title: 'Image Caption 2',
                            w: 1200,
                            h: 900
                        }
                    ]
        }
    },
    created() {
        this.getPhotoInfo();
    },
    methods: {
        getPhotoInfo() {
            // this.$http.get('photos.json').then(result => {
            //     this.photoInfo = result.body.list[this.id];
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
            this.photoInfo = list[this.id];

        },
        handleClose () {//处理缩略图关闭
        console.log('close event')
      }
    },
    components: {
        "cmt-box": comment
    }
}
</script>

<style lang="scss">
.photoinfo-container {
    padding: 3px;
    h3 {
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content {
        font-size: 13px;
        line-height: 30px;
    }

    .thumImg {
        img {
            width: 100%;
        }
    }
}
</style>



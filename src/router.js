//使用vue-router, 下载包： npm i vue-router -S
import VueRouter from 'vue-router'


// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
import PhotoInfo from './components/photos/PhotoInfo.vue'
import GoodsList from './components/goods/GoodList.vue'
import GoodsInfo from './components/goods/GoodInfo.vue'
import GoodDesc from './components/goods/GoodDesc.vue'
import GoodComment from './components/goods/GoodComent.vue'


// 创建路由对象
var router = new VueRouter({
    routes: [
        //配置路由规则
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomeContainer },
        { path: '/member', component: MemberContainer },
        { path: '/shopcar', component: ShopcarContainer },
        { path: '/search', component: SearchContainer },
        { path: '/home/newsList', component: NewsList },
        { path: '/home/newsInfo/:id', component: NewsInfo },
        { path: '/home/photolist', component: PhotoList },
        { path: '/home/photoInfo/:id', component: PhotoInfo },
        { path: '/home/goodslist', component: GoodsList },
        { path: '/home/goodinfo/:id', component: GoodsInfo, name: 'goodinfo' },
        { path: '/home/goodDesc/:id', component: GoodDesc, name: 'goodDesc' },
        { path: '/home/goodComment/:id', component: GoodComment, name: 'goodComment' }
    ],
    linkActiveClass: 'mui-active' //覆盖路由高亮的类， 默认的类是router-link-active
})

// 把路由对象暴露出去
export default router
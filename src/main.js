// 入口文件

//导入vue
import Vue from 'vue'


//导入路由的包
import VueRouter from 'vue-router'
//安装路由模块
Vue.use(VueRouter)
//导入自己的路由模块
import router from './router.js'
//挂载路由对象到vm实例上


// vuex使用
//安装：npm i vuex -S
// 导入包
import Vuex from 'vuex'
// 注册到vue中
Vue.use(Vuex)
// 将本地存储的数据初始化到car[]
// var car = JSON.parse(localStorage.getItem('car') || [])
//部署到tomcat的时候改为下面的写法；
var car = [];
// new vuex实例，得到一个仓储对象
var store = new Vuex.Store({ //全局的store仓库
    state: {// 类似组件中的data
        // 在组件中访问此数据， this.$store.state.count
        count: 0,
        //将购物车中的商品数据，用一个数组存储起来
        car: car
    },
    mutations: {//类似组件中的methods
        // mutations只支持两个参数，第一个为state, 第二个为调用者传递来的参数（可以是对象）
        // 调用方法使用this.$store.commit('increment')
        increment(state) {
            state.count++;
        },
        substract(state, c) {
            // c是减少的步长
            state.count -= c;
        },
        addToCar(state, goodinfo) {//点击加入购物车，保存到store的car
            // 如果购物车有这个数据，只更新数量，如果没有，则push到car中
            var flag = false;

            state.car.some(item => {
                if (item.id == goodinfo.id) {
                    item.count += parseInt(goodinfo.count);
                    flag = true;
                    return true;
                }
            })

            if (!flag) {
                state.car.push(goodinfo);
            }

            // 更新car之后，将car数据存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car));

        },
        updateGoodsInfo(state, goodinfo) {//修改购物车商品的数量值
            state.car.some(item => {
                if (item.id === goodinfo.id) {
                    item.count = parseInt(goodinfo.count);
                    return true;
                }
            })
            // 更新car之后，将car数据存储到本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeFromCar(state, id) {
            // 从store删除数据
            state.car.some((item, i) => {
                if (parseInt(item.id) === id) {
                    state.car.splice(i, 1);
                    return true;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsSelected(state, info) {
            state.car.some(element => {
                if (element.id == info.id) {
                    element.selected = info.selected;
                }
            })
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    getters: {
        //getters中的方法和组件中的过滤器比较像，都不会修改数据，只是做了一层包装，提供给调用者； 
        //也和computed类似, 如果state数据发生变化，也会触发getters的重新请求
        optCount: function (state) {
            return "当前的count值为：" + state.count;
        },
        // 将所有的cars数量同步到购物车徽标
        getAll(state) {
            var c = 0;
            state.car.forEach(element => {
                c += element.count;
            });
            return c;
        },
        getGoodsCount(state) {
            var e = {}
            state.car.forEach(element => {
                var s = parseInt(element.id);
                e[s] = element.count;
            });
            // console.log(e);
            return e;
        },
        getGoodsSelected(state) {
            var e = {}
            state.car.forEach(element => {
                e[element.id] = element.selected;
            });
            // console.log(e)
            return e;
        },
        getGoodsCountAndAmount(state) {
            var e = {
                count: 0, //勾选的总数
                amount: 0 //勾选的总价
            }
            state.car.forEach(item => {
                if (item.selected) {
                    e.count += item.count;
                    e.amount += parseInt(item.price) * parseInt(item.count);    
                }
            })
            return e;
        }
    }
})
// 挂载到vm实例中


//导入vue-resource, 作用是加载首页轮播图资源
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = './files/'
// 设置post的请求数据为json
Vue.http.options.emulateJSON = true


// 安装图片缩略图插件
// 安装：npm i vue-preview -S
import VuePreview from 'vue-preview'
Vue.use(VuePreview)



// 导入时间插件
import moment from 'moment'
// 定义全局过滤器
Vue.filter("dataFormat", function(datastr, pattern = "YYYY-MM-DD HH:mm:ss") {
    // 使用node 的moment来过滤时间： npm i moment -S
    return moment(datastr).format(pattern);
})


//导入app组件
import App from './App.vue'


//按需引入mint-ui组件
// import {Header, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'
//注册引入的min-ui组件
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

//使用懒加载图片的时候需要使用全部导入，不能使用按需导入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'



// 导入mui样式
import './lib/mui/css/mui.min.css'
//导入扩展底部图标的样式
import './lib/mui/css/icons-extra.css'


var vm = new Vue({
    el: "#app",
    render: c => c(App),
    router,//挂载路由对象
    store //挂载vuex的store
})
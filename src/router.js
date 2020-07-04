import Vue from 'vue'
import Router from 'vue-router'
import home from './view/home'
import know from './view/know'
import staff from './view/staff'
import fangke from './view/fangke'
import bianmin from './view/bianmin'


Vue.use(Router);//使用路由

export default new Router({
    routes:[
        {path:'/',
        component:home
        },
        {
            path:'/know',
            component:know
        },
        {
          path:'/staff',
          component:staff
        },
        {
            path:'/fangke',
            component:fangke
        },
        {
            path:'/bianmin',
            component:bianmin
        }

    ]
})

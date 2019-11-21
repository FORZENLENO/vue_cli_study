import Vue from "vue";
import Router from "vue-router";
import mainView from "./components/mainView.vue"
import a from "./components/a.vue"
import HelloWorld from "./components/HelloWorld.vue"

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            component:mainView,
            children:[
                {
                    path:'/a',
                    component:a,
                },
                {
                    path:'/hello',
                    component:HelloWorld,
                }               
            ]
        }
    ]
})
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
<<<<<<< HEAD
                    path:'/a',
=======
                    path:'',
>>>>>>> 9ead2c5a67d0c6c239d23ed20666c9b55e1620dc
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

import Vue from 'vue'
import App from './App'
// import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

// Vue.use(MpvueRouterPatch)

var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
Vue.prototype.$http = fly

// vuex  信息共享  store 仓库
import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)


const store = new vuex.Store({
  state: {
    data:1
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})


export default store;
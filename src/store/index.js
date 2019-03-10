import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import maoyan from './maoyan'

export default new Vuex.Store({
    modules:{
        maoyan
    }
})

<template>
    <div class="box">
        <router-link to="/homere" tag="div">
            <p><span class="iconfont">&#xe6af;</span></p>
            <p>电影</p>
        </router-link>
        <router-link to="/moive" tag="div">
            <p><span class="iconfont">&#xe61d;</span></p>
            <p>影院</p>
        </router-link>
        <router-link to="/my" tag="div">
            <p><span class="iconfont">&#xe624;</span></p>
            <p>我的</p>
        </router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {path:'/homere',name:'Homere',text:'电影'},
                {path:'/moive',name:'Moive',text:'影院'},
                {path:'/my',name:'My',text:'我的'},
            ]
        }
    },
}
</script>

<style lang="less" scoped>
@import '~style/index.less';

.box{
    position: fixed;
    z-index: 66;
    .w(375);
    .bottom(0);
    display: flex;
    // justify-content: space-around;
    // align-items: center;
    font-size: 14px;
    div{
        width: 100%;
        .h(48);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            font-size: 24px;
        }
    }
}

</style>

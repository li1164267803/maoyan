<template>
<div>
    <div class="header"><h3>猫眼电影</h3></div>
      <div class="tab">
          <div>北京</div>
          <div class="tab-z">
              <router-link to="/homere" tag="span">正在热映</router-link>
              <router-link to="/homeshang" tag="span" class="dibian">即将上映</router-link>
          </div>
          <div class="jing iconfont">&#xe62d;</div>
      </div>
  <div class="wrapper www" ref="rrrr">
    <div class="content">
      <div class="singer">
            <div class="swiper-content">
              <p class="bti">近期最受期待</p>
              <div class="swiper">

              </div>
              <ul class="riqiliebiao">
              <li v-for="(item,index) in list" :key="index"
              >
                  <p class="title">{{item.title}}</p>
                <ul class="movie-item">
                    <li
                      v-for="(mml,index) in item.items" :key="index"
                      >
                      <img v-lazy="mml.imgg" width="50" height="50" alt="">
                      <p>{{mml.nm}}</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
 import BScroll from 'better-scroll'

export default {
    data(){
      return{
        list:[],
      }
    },
    mounted(){
      let url='/ry/ajax/mostExpected?ci=1&limit=10&offset=0&token='
        this.$axios.get(url)
          .then((res)=>{
            console.log(res);
            let kk=res.coming;
            this.normalarr(kk);
            this.$nextTick(()=>{
              let elel = this.$refs.rrrr;
              console.log(elel)
                new BScroll(elel)
            })
          })

    },
  methods:{
    normalarr(item){
      let lists={
        '3月29日 周五':{
          title:'3月29日 周五',
          items:[]
        }
      }
        for(let i=0;i<item.length;i++){
            if(!lists[item[i].comingTitle]){
              lists[item[i].comingTitle]={
                title:item[i].comingTitle,
                items: [{
                  mid: item[i].id,
                  imgg: item[i].img.replace('w.h','60.60'),
                  nm: item[i].nm,
                  wish: item[i].wish
                }]
              }
            }else{
              console.log(lists[item[i].comingTitle].items)
                lists[item[i].comingTitle].items.push({
                  mid: item[i].id,
                  imgg:item[i].img.replace('w.h','60.60'),
                  nm:item[i].nm,
                  wish:item[i].wish
                })
            }
        }
        console.log(lists)
        this.list=lists

        console.log(this.list)
    }
  }

}
</script>

<style lang="less" scoped>
@import '~style/index.less';

.www{
  position: fixed;
  .top(100);
  bottom: 0;
  .w(375);
  overflow: hidden;
}

.header{
    background: #e54847;
    .w(375);
    .h(50);
    .l_h(50);
    h3{
        color: #fff;
        text-align: center;
        font-size: 20px;
        font-weight: 200;
    }
}
.tab{
    // .bug(black);
    .w(375);
    .h(44);
    display: flex;
    justify-content: center;
    justify-content: space-around;

    div{
        font-size: 16px;
        .h(44);
        .l_h(44);
        // flex-direction: column;
    }
    .tab-z{
        // .w(208);
        text-align: center;
        span{
            display: inline-block;
            .w(80);
            box-sizing: border-box;
        }
        .dibian{
            border-bottom: 2px solid #e54847;
        }
    }

}

 .singer{
     .swiper-content {
      //  .h(216);
       .w(375);
       box-sizing: border-box;
       .padding(12,0,12,15);
       .margin(0,0,10,0);
       .bti {
          margin:0 0 12px;
         font-size:@f-z-ms;
         color:#333;
       };
       .swiper{
         .w(343);
         .h(161);
         background: yellow;
       }
     }
   
 }

</style>


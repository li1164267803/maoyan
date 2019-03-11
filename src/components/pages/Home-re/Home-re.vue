<template>
    <div>
        <div class="header"><h3>猫眼电影</h3></div>
        <div class="tab">
            <div>北京</div>
            <div class="tab-z">
                <span class="dibian">正在热映</span>
                <span>即将上映</span>
            </div>
            <div class="jing iconfont">&#xe62d;</div>
        </div>
        
        <!-- 滚动区 -->
        <div class="wrapper" ref="www">
                <ul class="content">
                    <li v-for="(item,index) in list"
                        :key="index"
                        class=""
                    >
                        <div>
                            <img v-lazy="item.img" width="64" height="90">
                        </div>
                        <div class="xiangqing">
                            <h3>{{item.nm}}</h3>
                            <p>观众评 {{item.sc}}</p>
                            <p class="zuyan">主演：{{item.star}}</p>
                            <p>{{item.showInfo}}</p>
                        </div>
                        <div class="button-block">
                            <span>
                                购票
                            </span>
                        </div>
                    </li>
                </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    data() {
        return {
            reying:true,
            list:[]
        }
    },
    props:['xixi'],
    methods: {
        normalData(data){
            for (let index = 0; index < data.length; index++) {
                // replaceFirst 
                let img = data[index].img.replace('w.h','128.180');
                data[index].img = img;
            }
                console.log(data)
                this.list = data;
        }
        
    },
    created() {
        console.log('开始请求缓存');
        let url = '/xixi/ajax/movieOnInfoList?token='
        this.$axios.get(url)
        .then((data)=>{
            console.log('then')
            this.normalData(data.movieList)
            this.list = data.movieList;
            this.$nextTick(()=>{
                 let elele = this.$refs.www
                console.log(elele)
                new BScroll(elele);
                
            })
        })
       
    },
    mounted() {
        // console.log(this.$refs)
       
    },
}

//https://p0.meituan.net/128.180/movie/034069fc367db8a7d9644717b416cc2c332883.jpg
//https://p1.meituan.net/128.180/movie/c9b280de01549fcb71913edec05880585769972.jpg 绿皮书
//http://p0.meituan.net/w.h/movie/034069fc367db8a7d9644717b416cc2c332883.jpg
//http://p1.meituan.net/w.h/movie/c9b280de01549fcb71913edec05880585769972.jpg
</script>


<style lang="less" scoped>
@import '~style/index.less';
li{
    list-style: none;
}
.wrapper{
    position: fixed;
    .top(94);
    .bottom(0);
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
.wrapper{
    li{
        .h(110);
        display: flex;
        font-size: 14px;
        .padding(0,0,0,15);
        align-items: center;
        .xiangqing{
            overflow: hidden;
            .w(206);
            .h(86);
            margin-left: 10px;
            margin-right: 20px;
            font-size: 12px;
            .zuyan{
                white-space: nowrap;
                .w(206);
                text-overflow: ellipsis;
            }
            h3{
                font-size: 18px;
                opacity: .7;
            }
        }
        .button-block{
            height: 100%;
            display: flex;
            align-items: center;
            
            span{
                display: inline-block;
                .h(27);
                .l_h(27);
                background: #e54847;
                border-radius: 5px;
                .w(47);
                color: #fff;
                text-align: center;

            }
        }
    }
}


</style>


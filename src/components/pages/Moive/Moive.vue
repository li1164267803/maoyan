<template>
  <div>
    <div class="header"><h3>影院</h3></div>

    <div class="gray-bg topbar-bg">
      <div class="city-entry">
        <span class="city-name">北京</span>
        <i class="city-entry-arrow"></i>
      </div>
      <div class="search-entry search-input" data-type="cinema">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAwFJREFUSA3FVs1qU0EUTibBRQiCRF3UB3BTcFHwJ0XRJ+gDhDaQ5vcJ3PgCfYL80AYSyQP4BIKQiosuhLoQXOjCbqQIJUgoyY3fdzNnmCRzk3uvBQfmzrlzzvm+OTNzz7mJxH9qyTC83W733mQyeTKbzbbQc8lk8hL9Ip1OfyqVSr/CYCzbBBKDQHU6nX2MZfQ8HNWyM949LOAU/bharb7F6DlsnFNOYhDmp9NpGx7bTi/35HkqlaphAadu9eLsCjFIS57nNRHlLct0AnmIiL5ivETPQf8Q4y56Gt1v0F8rpRog78pc0LhATFJEemIZXwHoKJvNNguFwm9r3hcHg8Gd0WjUwEJfY+K26BH54SZyQ8ztBcB7K9IzAO01Go2fAhg0NpvNB9C9Q9+hjY781bpt9y8MyBTP1CZFpC/CkJKIdrSHyMUmiKPxXBeSJvOb2mq1DiDLRbqCvFer1f7QIGzT9nuwpz/bNnZxfy6uPv0VYWvKouKZho1UfGTUkR/JOyI3uDIno2JygMEzPTHhRRJlnFH78yvglueJ78JRzEhQyFkMXbfX5Rg0p/2HWi/4K+YKq9qSWf2dymvs0cax8W1AEuesCSaHm2gGZwnfYCuszhhh1l6EMYohGJwlfANF4gt5w+qYBv+52Tg2vg2sWNowIVVll2nQNogqa3/mcDZP48/frKdiPcWqpKKkmXstfWRR+/uFg7hB9VpSpikMTPg690YmpR/834gjiI9FXh79IoEzUUibn6GUtHnG3Bslbbbb7QxIfwDjriY5r9frj0Aux7jALSnTYxGH0bXW7gDkQ9jIdaRfLFLCfEefUXA1UxapvKl6bBF1EXUZAa0sYIFYyBFt7D8QHBu/kuebyFeINXnsf65KpfIR94WXqrSO3ElMB33hDrBNh5DX/mVCf4It7ctFwntyE3kgsbXaRL/fvz8ejx8DMPR/9SbyUMT2IqLIa8mjAMWxdZB/y2QyT80/cRzQMD78lNDKOHOa84fwZbFYtCtiGJj4Noy81+uZcvkXH+aXwmK6+EsAAAAASUVORK5CYII="
        >
        <span>搜影院</span>
      </div>
    </div>
    <div class="tab">
      <ul class="tab-list">
        <li>
          全城
          <span></span>
        </li>
        <li>
          品牌
          <span></span>
        </li>
        <li>
          特色
          <span></span>
        </li>
      </ul>
    </div>
    <div>
          <ul class="main">
              <li @touchstart='btn'>
                  <div class="item">
                      <span class="data-item-one">大地院线影城（珠江摩尔城）</span>
                      <span class="data-item-two">34</span>
                      <span class="data-item-three">元起</span>
                  </div>
                  <div class="area">
                      <span class="data-area-one">后视镜的健康得很几日黄金</span>
                      <span class="data-area-two">4.1m</span>
                  </div>
                  <div class="title">
                      <span class="data-title-one">不要钱</span>
                      <span class="data-title-one">不要钱</span>
                      <span class="data-title-one">不要钱</span>
                  </div>
                  <div class="sale">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
                      <span class="data-sale-one">哈哈哈哈哈哈哈</span>
                  </div>
              </li>
          </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  methods: {
    btn(){
      Toast({
            message: '该功能暂时没有开放',
            position: 'center',
            duration: 1000
        });
    }
  },
};
</script>

<style lang="less" scoped>
@import "~style/index.less";

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


.gray-bg {
  .h(44);
  background: #f5f5f5;
  display: flex;
  font-size: 14px;
  align-items: center;
  .city-entry {
    .l_h(44);
    .padding(0, 0, 0, 15);
    .city-entry-arrow {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 4px;
      border: 4px solid transparent;
      border-top-color: #b0b0b0;
    }
  }
  .search-entry {
    .w(280);
    .h(28);
    border: 1px solid #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 5px;
    .margin(0, 0, 0, 18);
    color: #b2b2b2;
    img {
      width: 14px;
    }
  }
}
.tab-list {
  display: flex;
  align-items: center;
  .h(40);
  .w(375);
  font-size: 14px;
  border-bottom: 1px solid #e6e6e6;
  li {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      border-right: 1px solid #e6e6e6;
    span {
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 4px;
      margin-top: 6px;
      border: 4px solid transparent;
      border-top-color: #b0b0b0;
    }
  }
}
.main{
    .margin(0,0,0,15);
    .w(343);
    .h(124);
    li{
        .padding(15,15,15,0);
        border-bottom:1px solid #b2b2b2;
    }
    .item{
        font-size: 16px;
        .l_h(23);
        .data-item-two{
           color:red; 
        }
        .data-item-three{
            font-size: 12px;
            color:red;
        }
    }
    .area{
        font-size: 13px;
        color:#777;
        .data-area-two{
            float:right;
        }
    }
    .title{
        font-size: 10px;
        .padding(4,0,4,0);
        span{
            border:1px solid #f90;
        color:#f90;
        margin-left: 4px;
        }
    }
    .sale{
        font-size: 12px;
        .l_h(18);
        img{
            width: 14px;
            padding-top:3px ;
        }
        .data-sale-one{
            color:#999;
            
        }
    }
}
</style>


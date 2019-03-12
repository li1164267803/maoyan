<template>
    <div>
        这是我的个人中心
            <mt-popup
                    v-model="popupVisible"
                    position="center"
                    popup-transition="popup-fade">
                    改功能暂未开放
            </mt-popup>

    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { Popup } from 'mint-ui';

export default {
    data() {
        return {
            popupVisible:true
        }
    },
    mounted() {
        // Toast({
        //     message: '该功能暂时没有开放',
        //     position: 'center',
        //     duration: 1000
        // });
    },
}
</script>

<style lang="less" scoped>
@import '~style/index.less';


</style>


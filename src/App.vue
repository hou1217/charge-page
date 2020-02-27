<template>
  <div id="app">
    <div class="home">
      <div class="close-btn" @click="close">
        <!-- 关闭按钮 -->
      </div>
      <div class="select-time">
        <!-- 时间选择 -->
        <div 
          class="time-item"
          :class="{active:index === cur_index,done:item.done}"
          @click="handleTimeClick(index)"
          v-for="(item,index) in times" :key="index">
          <p class="time-txt">
            {{item.txt}}
          </p>
          
        </div>
      </div>
      <div class="goods">
        <!-- 物品展示区 -->
        <div class="item" v-for="(item,index) in items" :key="index">
          <img :src="item.headId ? item.headId : defaultSrc" alt="">
        </div>
      </div>
      <template v-if="!chargeStatus">
        <div class="charge-btn" @click="charge">
          <!-- 充值按钮 -->
          充点小钱玩一玩
        </div>
      </template>
      <template v-else-if="canDraw">
        <div class="charge-btn" @click="draw">
          <!-- 领取按钮 -->
          立即领取
        </div>
      </template>
      <template v-else>
        <div class="charge-btn" 
          :class="{disable:!canDraw}"  
          @click="drawDisable">
          <!-- 领取按钮 -->
          领取奖励
        </div>
      </template>
      
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        canDraw:true,
        cur_index:0,
        times:[
          {
            done:true,
            txt:'第一天可领'
          },
          {
            done:false,
            txt:'第二天可领'
          },
          {
            done:false,
            txt:'第三天可领'
          },
        ],
        chargeStatus:false,
        items:[
          {

          },
          {

          },
          {

          }
        ],
        defaultSrc: require('@/assets/images/recharge_reward_img@2x.png')
      }
    },
    created () {
      this.getStatus();
    },
    methods:{
      close(){
        alert('关闭按钮');
      },
      charge(){
        alert('充值按钮');
      },
      draw(){
        alert('领取按钮');
      },
      drawDisable(){
        alert('不能领取');
      },
      getStatus(){
        this.chargeStatus = true;
      },
      handleTimeClick(index){
        this.cur_index=index;
        let arr = [{},{}];
        for(let i=0;i<index+1;i++){
          arr.push({})
        }
        this.items= arr;
        if(index!=0){
          this.canDraw = false;
        }else{
          this.canDraw = true;

        }
      }
    }
  }
</script>
<style lang="stylus">
html,body 
  height 100%  
#app
  text-align center
  width 100%
  height 100%
  box-sizing border-box
  padding-top 180px
  background-color rgba(0,0,0,0.8)
  .home
    position relative
    /* margin-top 50% */
    width 100%
    height 870px
    background url(./assets/images/recharge_bg@2x.png) no-repeat center/cover
    .close-btn
      position absolute
      right 0
      top 0
      width 164px
      height 164px
      background url(./assets/images/recharge_close@2x.png) no-repeat center/cover

    .select-time
      position absolute
      bottom 280px
      height 64px
      width 100%
      display flex
      align-items center
      padding-left 77px
      .time-item
        &.active
          font-weight 700
          color: rgba(62,0,84,1)
          background url(./assets/images/recharge_reward_tabbg_select@2x.png) no-repeat center/cover
        &.done
          font-weight 400
          color: #A321C9;
          text-shadow: 1px 1px 0 #3E0054;
          background url(./assets/images/recharge_reward_tabbg_done@2x.png) no-repeat center/cover
          
        background url(./assets/images/recharge_reward_tabbg_normal@2x.png) no-repeat center/cover
        width 156px
        height 64px
        position relative
        
        .time-txt
          position absolute
          bottom 10px
          left 50%
          width 100%
          transform translateX(-50%)
          font-size 11px
          color: rgba(62,0,84,0.6);
          
          text-shadow: 1px 1px 0 #BB17FF;
    .goods
      display flex
      justify-content center
      align-items center

      position absolute
      bottom 150px
      width 100%
      height 130px
      background url(./assets/images/recharge_reward_bg@2x.png) no-repeat center/cover
      .item
        margin-left 20px
        &:first-child
          margin-left 0
        width 80px
        height 80px
        background-image: linear-gradient(148deg, #400654 28%, #7C1EA5 100%);
        border: 1px solid #D869F0;
        box-shadow: 0 0 4px 0 rgba(0,0,0,0.62);
        border-radius: 12px 0 12px 0;
    .charge-btn
      &.disable
        opacity 0.3
      text-align center
      font-size: 16px;
      color: #2D0C04;
      position absolute
      bottom 0
      left 50%
      margin-left -195px
      width 390px
      height 150px
      line-height 150px
      background url(./assets/images/recharge_btn_normalbg@2x.png) no-repeat center/cover
</style>

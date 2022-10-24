<template>
  <div>
    <ShopNav v-if="notShowShopNav" />
    <router-view></router-view>
    <ShopFooter v-if="notShowShopNav" />

  </div>
</template>

<script>
import ShopNav from "@/components/ShopNav";
import ShopFooter from "@/components/ShopFooter";
export default {
  components: {
    ShopNav,
    ShopFooter,
  },
  computed:{
    notShowShopNav(){
      return this.$route.path != '/home' && this.$route.path != '/search'
    }
  }
};
</script>

<style lang="less" scoped>
// .moveTo{
//   height: 0;
// }
// @keyframes moveSearch {
//   to{height: 0;}
//   from{height: 100%;}
// }
</style>
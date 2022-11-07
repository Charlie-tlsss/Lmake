<template>
  <div>
    <ShopNav v-if="$route.meta.isShowHF" />
    <router-view></router-view>
    <ShopFooter v-if="$route.meta.isShowHF" />

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
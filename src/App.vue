<template>
  <div>
    <Nav />
    <router-view></router-view>
    <Footer v-show="$route.meta.isShowFooter"/>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
export default {
  components: {
    Nav,
    Footer,
  },
};
</script>

<style>
</style>
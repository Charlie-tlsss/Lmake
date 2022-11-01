<template>
  <div class="search-list">
    <div class="search-list-warp">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>手机</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 搜索头 -->
      <div class="search-selector">
        <ul>
          <li>综合</li>
          <li>销量</li>
          <li>新品</li>
          <li>价格</li>
        </ul>
      </div>
      <!-- 搜索列表 -->
      <div class="product-list">
        <ul>
          <li v-for="(searchListItem,index) in searchList" :key="index" @click="goDetail()">
            <div class="product-list-img">
              <img
                :src=searchListItem.skuImg
                alt=""
              />
            </div>
            <div class="product-list-title">{{searchListItem.skuName}}</div>
            <div class="product-list-desc">{{searchListItem.skuDesc}}</div>
            <div class="product-list-price">¥ {{searchListItem.skuPrice}} 起</div>
          </li>
        </ul>
      </div>
      <!-- 分页器 -->
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :size="10"
        :total="200"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchList",
  data() {
    return {
      searchParams:{
        keyWord:this.$route.query.keyWord,
      },
      searchList :[],
      
    };
  },
  mounted(){
    this.getSearchList(this.searchParams)
    console.log(this.searchParams)
  },
  methods: {
    goDetail() {
      this.$router.push({
        path: "/productdetail",
      });
    },
    async getSearchList(searchParams) {
      let res = await this.$API.reqGetSearchList(searchParams);
      this.searchList = res.data.data || []
    },
  },
  computed:{
    kewWord(){
      return this.$route.query.keyWord
    }
  }
};
</script>

<style lang="less" scoped>
.search-list {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  background-color: #f5f5f5;
}
.search-list-warp {
  width: 1200px;
  margin: 0 auto;
  padding-top: 16px;
  .search-selector {
    margin-top: 20px;
    ul {
      display: flex;
      li {
        width: 105px;
        height: 20px;
        line-height: 20 px;
      }
    }
  }
  .product-list {
    margin-top: 20px;
    margin-bottom: 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 230px;
        height: 353px;
        background-color: #fff;
        margin-bottom: 10px;
        transition: all 0.5s;
        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 2px 10px rgb(0 0 0 / 15%);
        }
        .product-list-img {
          margin-top: 30px;
          img {
            width: 180px;
          }
        }
        .product-list-title {
          margin-top: 30px;
          color: #333;
          font-size: 18px;
        }
        .product-list-desc {
          margin-top: 5px;
          font-size: 12px;
          color: #ddd;
        }
        .product-list-price {
          margin-top: 15px;
          color: #000;
          font-size: 18px;
        }
      }
    }
  }
  .pagination {
    text-align: center;
  }
}
</style>
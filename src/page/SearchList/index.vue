<template>
  <div class="search-list">
    <div class="search-list-warp">
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.query.keyWord}}</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 搜索头 -->
      <div class="search-selector">
        <ul>
          <li :class="{ 'isActive' : searchParams.order == ''}" @click="changeOrderById">综合</li>
          <li :class="{ 'isActive' : searchParams.order != ''}" @click="changeOrderByPrice">价格
            <i></i>
            <i></i>
          </li>
          <li>销量</li>
          
        </ul>
      </div>
      <!-- 搜索列表 -->
      <div class="product-list">
        <ul>
          <li
            v-for="(searchListItem, index) in searchList[0]"
            :key="index"
            @click="goDetail()"
          >
            <div class="product-list-img">
              <img v-lazy="searchListItem.skuImg" alt="" />
            </div>
            <div class="product-list-title">{{ searchListItem.skuName }}</div>
            <div class="product-list-desc">{{ searchListItem.skuDesc }}</div>
            <div class="product-list-price">
              ¥ {{ searchListItem.skuPrice }} 起
            </div>
          </li>
        </ul>
      </div>
      <!-- 分页器 -->
      <el-pagination
        @current-change="handleCurrentChange"
        class="pagination"
        background
        layout="prev, pager, next"
        :size="this.searchParams.page_num"
        :total="this.total"
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
      total: 0,
      searchParams: {
        keyWord: this.$route.query.keyWord,
        page_size: 10,
        page_num: 1,
        order:''
      },
      searchList: [],
    };
  },
  mounted() {
    this.getSearchList(this.searchParams);
  },
  methods: {
    goDetail() {
      this.$router.push({
        path: "/productdetail",
      });
    },
    async getSearchList(searchParams) {
      let res = await this.$API.reqGetSearchList(searchParams);
      this.searchList = res.data || [];
    },
    handleCurrentChange(newPage) {
      this.searchParams.page_num = newPage
      this.getSearchList(this.searchParams);
    },
    changeOrderByPrice(){
      if(this.searchParams.order == ""){
        this.searchParams.order = 'asc'
      }else{
        this.searchParams.order = this.searchParams.order == "asc" ? 'desc':'asc'
      }
      this.getSearchList(this.searchParams);
    },
    changeOrderById(){
      this.searchParams.order = ''
      this.getSearchList(this.searchParams);
    }
  },
  computed: {
    kewWord() {
      return this.$route.query.keyWord;
    },
  },
  watch: {
    searchList: {
      handler(oldvalue, newValue) {
        this.total = this.searchList[1].total;
      },
    },
  },
};
</script>

<style lang="less" scoped>
.isActive{
  color:#409eff;
}
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
        cursor: pointer;
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
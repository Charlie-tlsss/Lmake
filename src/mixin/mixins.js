export const goDetailMixin = {
    methods:{
        goDetail(skuId){
            this.$router.push({
                name:'productDetail',
                query:{
                    skuId
                }
            })
        }
    }
}
import{_ as f,i as P,d as S,P as R,e as v,m as W,n as w,r as h,o as i,c as a,a as s,w as u,v as d,t as g,f as y,F as I,g as O,h as p,u as C}from"./index.cdc48a6b.js";const D={name:"SearchResultView",components:{itemFrame:P,customPaginationVue:S},data(){return{PRODUCT_LIST:R,PRODUCTS_DROPDOWN:v,currPg:1,pageWidth:5,pageSize:12,ro:null,ctnrWidth:0}},methods:{toPage(e){this.currPg=e+1,this.scrollToTopPage(this.currPg+"SR")},getWidth(){this.ctnrWidth=this.$refs.ctnr.clientWidth,this.$refs.ctnr.clientWidth<576?this.pageWidth=1:this.$refs.ctnr.clientWidth>=576&&this.$refs.ctnr.clientWidth<768?this.pageWidth=5:this.pageWidth=7}},computed:{...W(C,["scrollToTopPage"]),filteredItems(){let e=[];e=w(this.PRODUCTS_DROPDOWN,({name:t})=>{if(t.toLowerCase().search(this.$route.query.input.toLowerCase())!==-1)return!0});let o=[];return o=this.PRODUCT_LIST.filter(t=>{if(t.description.toLowerCase().search(this.$route.query.input.toLowerCase())!==-1)return t;if(e.some(n=>n.pig===t.pig))return t}),o},displayedFilteredItems(){let e=[];return e=this.filteredItems.slice((this.currPg-1)*this.pageSize,this.currPg*this.pageSize),e},currentRecordNoStart(){return this.filteredItems.length===0?0:(this.currPg-1)*(this.pageSize-1)+this.currPg},currentRecordNoEnd(){return this.filteredItems.length-(this.currPg-1)*this.pageSize<this.pageSize?this.filteredItems.length:this.currPg===0?this.pageSize:this.currPg*this.pageSize}},mounted(){this.ro=new ResizeObserver(this.getWidth),this.ro.observe(this.$refs.ctnr)},beforeUnmount(){this.ro.unobserve(this.$refs.ctnr)}},T={class:"search-result container",ref:"ctnr"},x={class:"row"},z={class:"col"},b={key:0,class:"py-2",style:{height:"calc(100% - 40px - 88px)"}},N={class:"row row-result"},L={class:"row flex-fill align-items-end"},U={class:"col text-center",style:{height:"88px"}};function V(e,o,t,n,l,r){const m=h("item-frame"),_=h("custom-pagination-vue");return i(),a("div",T,[s("div",x,[s("div",z,[u(s("h5",{class:"py-2",style:{height:"40px"}},' Search Results for "'+g(e.$route.query.input)+'" ',513),[[d,r.filteredItems.length>0]]),r.filteredItems.length==0?(i(),a("div",b,[s("b",null,'No results for "'+g(e.$route.query.input)+'"',1)])):y("",!0)])]),s("div",N,[(i(!0),a(I,null,O(r.displayedFilteredItems,c=>(i(),a("div",{key:c.pid,class:"col-6 col-md-4 col-xl-3 col-xxl-2 mb-4 px-1"},[p(m,{item:c},null,8,["item"])]))),128))]),u(s("div",L,[s("div",U,[p(_,{class:"mb-4 mt-2",totalRows:r.filteredItems.length,paginationWidth:l.pageWidth,pageSize:l.pageSize,onOnPage:r.toPage},null,8,["totalRows","paginationWidth","pageSize","onOnPage"])])],512),[[d,r.filteredItems.length>0]])],512)}const $=f(D,[["render",V],["__scopeId","data-v-794b8df7"]]);export{$ as default};

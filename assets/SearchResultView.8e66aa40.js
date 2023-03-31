import{_ as f,i as P,d as S,P as v,e as R,m as W,n as w,r as d,o as i,c as o,a as t,w as u,v as g,t as n,f as y,g as I,F as O,h as C,j as m,u as D}from"./index.11dc2189.js";const T={name:"SearchResultView",components:{itemFrame:P,customPaginationVue:S},data(){return{PRODUCT_LIST:v,PRODUCTS_DROPDOWN:R,currPg:1,pageWidth:5,pageSize:12,ro:null,ctnrWidth:0}},methods:{toPage(e){this.currPg=e+1,this.scrollToTopPage(this.currPg+"SR")},getWidth(){this.ctnrWidth=this.$refs.ctnr.clientWidth,this.$refs.ctnr.clientWidth<576?this.pageWidth=1:this.$refs.ctnr.clientWidth>=576&&this.$refs.ctnr.clientWidth<768?this.pageWidth=5:this.pageWidth=7}},computed:{...W(D,["scrollToTopPage"]),filteredItems(){let e=[];e=w(this.PRODUCTS_DROPDOWN,({name:s})=>{if(s.toLowerCase().search(this.$route.query.input.toLowerCase())!==-1)return!0});let a=[];return a=this.PRODUCT_LIST.filter(s=>{if(s.description.toLowerCase().search(this.$route.query.input.toLowerCase())!==-1)return s;if(e.some(l=>l.pig===s.pig))return s}),a},displayedFilteredItems(){let e=[];return e=this.filteredItems.slice((this.currPg-1)*this.pageSize,this.currPg*this.pageSize),e},currentRecordNoStart(){return this.filteredItems.length===0?0:(this.currPg-1)*(this.pageSize-1)+this.currPg},currentRecordNoEnd(){return this.filteredItems.length-(this.currPg-1)*this.pageSize<this.pageSize?this.filteredItems.length:this.currPg===0?this.pageSize:this.currPg*this.pageSize}},mounted(){this.ro=new ResizeObserver(this.getWidth),this.ro.observe(this.$refs.ctnr)},beforeUnmount(){this.ro.unobserve(this.$refs.ctnr)}},x={class:"search-result container",ref:"ctnr"},z={class:"row"},N={class:"col"},L={class:"py-2",style:{height:"40px"}},V={key:0,class:"py-2",style:{height:"calc(100% - 40px - 88px)"}},b={class:"row row-result"},U={class:"row flex-fill align-items-end"},F={class:"col text-center",style:{height:"88px"}};function $(e,a,s,l,c,r){const p=d("item-frame"),_=d("custom-pagination-vue");return i(),o("div",x,[t("div",z,[t("div",N,[u(t("h6",L,[t("strong",null,n(this.filteredItems.length),1),y(' results for "'+n(e.$route.query.input)+'" ',1)],512),[[g,r.filteredItems.length>0]]),r.filteredItems.length==0?(i(),o("div",V,[t("b",null,'No results for "'+n(e.$route.query.input)+'"',1)])):I("",!0)])]),t("div",b,[(i(!0),o(O,null,C(r.displayedFilteredItems,h=>(i(),o("div",{key:h.pid,class:"col-6 col-md-4 col-xl-3 col-xxl-2 mb-4 px-1"},[m(p,{item:h},null,8,["item"])]))),128))]),u(t("div",U,[t("div",F,[m(_,{class:"mb-4 mt-2",totalRows:r.filteredItems.length,paginationWidth:c.pageWidth,pageSize:c.pageSize,onOnPage:r.toPage},null,8,["totalRows","paginationWidth","pageSize","onOnPage"])])],512),[[g,r.filteredItems.length>0]])],512)}const q=f(T,[["render",$],["__scopeId","data-v-d08d3d71"]]);export{q as default};

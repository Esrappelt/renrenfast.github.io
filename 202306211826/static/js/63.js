webpackJsonp([63],{"95mR":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("woOf"),l=a.n(n),i={data:function(){return{dataSub:null,dataForm:{},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},props:{catId:{type:Number,default:0}},components:{},activated:function(){this.getDataList()},methods:{productUp:function(t){var e=this;this.$http({url:this.$http.adornUrl("/product/spuinfo/"+t+"/up"),method:"post"}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})},attrUpdateShow:function(t){console.log(t),this.$router.push({path:"/product-attrupdate",query:{spuId:t.id,catalogId:t.catalogId}})},getDataList:function(){var t=this;this.dataListLoading=!0;var e={};l()(e,this.dataForm,{page:this.pageIndex,limit:this.pageSize}),this.$http({url:this.$http.adornUrl("/product/spuinfo/list"),method:"get",params:this.$http.adornParams(e)}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){}},mounted:function(){var t=this;this.dataSub=PubSub.subscribe("dataForm",function(e,a){console.log("~~~~~",a),t.dataForm=a,t.getDataList()})},beforeDestroy:function(){PubSub.unsubscribe(this.dataSub)}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"spuName","header-align":"center",align:"center",label:"名称"}}),t._v(" "),a("el-table-column",{attrs:{prop:"spuDescription","header-align":"center",align:"center",label:"描述"}}),t._v(" "),a("el-table-column",{attrs:{prop:"catalogId","header-align":"center",align:"center",label:"分类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"brandId","header-align":"center",align:"center",label:"品牌"}}),t._v(" "),a("el-table-column",{attrs:{prop:"weight","header-align":"center",align:"center",label:"重量"}}),t._v(" "),a("el-table-column",{attrs:{prop:"publishStatus","header-align":"center",align:"center",label:"上架状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.publishStatus?a("el-tag",[t._v("新建")]):t._e(),t._v(" "),1==e.row.publishStatus?a("el-tag",[t._v("已上架")]):t._e(),t._v(" "),2==e.row.publishStatus?a("el-tag",[t._v("已下架")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime","header-align":"center",align:"center",label:"创建时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"updateTime","header-align":"center",align:"center",label:"修改时间"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.publishStatus?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.productUp(e.row.id)}}},[t._v("上架")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.attrUpdateShow(e.row)}}},[t._v("规格")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}})],1)},staticRenderFns:[]},s=a("VU/8")(i,r,!1,null,null,null);e.default=s.exports}});
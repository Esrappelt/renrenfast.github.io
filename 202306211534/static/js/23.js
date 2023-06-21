webpackJsonp([23,59],{"7zAI":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{visible:!1,wareList:[],dataForm:{id:0,skuId:"",wareId:"",stock:0,skuName:"",stockLocked:0},dataRule:{skuId:[{required:!0,message:"sku_id不能为空",trigger:"blur"}],wareId:[{required:!0,message:"仓库id不能为空",trigger:"blur"}],stock:[{required:!0,message:"库存数不能为空",trigger:"blur"}],skuName:[{required:!0,message:"sku_name不能为空",trigger:"blur"}]}}},created:function(){this.getWares()},methods:{getWares:function(){var t=this;this.$http({url:this.$http.adornUrl("/ware/wareinfo/list"),method:"get",params:this.$http.adornParams({page:1,limit:500})}).then(function(e){var a=e.data;t.wareList=a.page.list})},init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/ware/waresku/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.skuId=a.wareSku.skuId,e.dataForm.wareId=a.wareSku.wareId,e.dataForm.stock=a.wareSku.stock,e.dataForm.skuName=a.wareSku.skuName,e.dataForm.stockLocked=a.wareSku.stockLocked)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/ware/waresku/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,skuId:t.dataForm.skuId,wareId:t.dataForm.wareId,stock:t.dataForm.stock,skuName:t.dataForm.skuName,stockLocked:t.dataForm.stockLocked})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"sku_id",prop:"skuId"}},[a("el-input",{attrs:{placeholder:"sku_id"},model:{value:t.dataForm.skuId,callback:function(e){t.$set(t.dataForm,"skuId",e)},expression:"dataForm.skuId"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"仓库",prop:"wareId"}},[a("el-select",{attrs:{placeholder:"请选择仓库",clearable:""},model:{value:t.dataForm.wareId,callback:function(e){t.$set(t.dataForm,"wareId",e)},expression:"dataForm.wareId"}},t._l(t.wareList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"库存数",prop:"stock"}},[a("el-input",{attrs:{placeholder:"库存数"},model:{value:t.dataForm.stock,callback:function(e){t.$set(t.dataForm,"stock",e)},expression:"dataForm.stock"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"sku_name",prop:"skuName"}},[a("el-input",{attrs:{placeholder:"sku_name"},model:{value:t.dataForm.skuName,callback:function(e){t.$set(t.dataForm,"skuName",e)},expression:"dataForm.skuName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"锁定库存",prop:"stockLocked"}},[a("el-input",{attrs:{placeholder:"锁定库存"},model:{value:t.dataForm.stockLocked,callback:function(e){t.$set(t.dataForm,"stockLocked",e)},expression:"dataForm.stockLocked"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},i=a("VU/8")(r,s,!1,null,null,null);e.default=i.exports},IdUh:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{wareList:[],dataForm:{wareId:"",skuId:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("7zAI").default},activated:function(){console.log("接收到",this.$route.query.skuId),this.$route.query.skuId&&(this.dataForm.skuId=this.$route.query.skuId),this.getWares(),this.getDataList()},methods:{getWares:function(){var t=this;this.$http({url:this.$http.adornUrl("/ware/wareinfo/list"),method:"get",params:this.$http.adornParams({page:1,limit:500})}).then(function(e){var a=e.data;t.wareList=a.page.list})},getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/ware/waresku/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,skuId:this.dataForm.skuId,wareId:this.dataForm.wareId})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/ware/waresku/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getDataList()}}},[a("el-form-item",{attrs:{label:"仓库"}},[a("el-select",{staticStyle:{width:"160px"},attrs:{placeholder:"请选择仓库",clearable:""},model:{value:t.dataForm.wareId,callback:function(e){t.$set(t.dataForm,"wareId",e)},expression:"dataForm.wareId"}},t._l(t.wareList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:"skuId"}},[a("el-input",{attrs:{placeholder:"skuId",clearable:""},model:{value:t.dataForm.skuId,callback:function(e){t.$set(t.dataForm,"skuId",e)},expression:"dataForm.skuId"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("ware:waresku:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("ware:waresku:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"skuId","header-align":"center",align:"center",label:"sku_id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"wareId","header-align":"center",align:"center",label:"仓库id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stock","header-align":"center",align:"center",label:"库存数"}}),t._v(" "),a("el-table-column",{attrs:{prop:"skuName","header-align":"center",align:"center",label:"sku_name"}}),t._v(" "),a("el-table-column",{attrs:{prop:"stockLocked","header-align":"center",align:"center",label:"锁定库存"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},i=a("VU/8")(r,s,!1,null,null,null);e.default=i.exports}});
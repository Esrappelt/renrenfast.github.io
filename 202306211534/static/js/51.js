webpackJsonp([51,104],{"K+w4":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={data:function(){return{dataForm:{key:""},dataList:[],pageIndex:1,pageSize:10,totalPage:0,dataListLoading:!1,dataListSelections:[],addOrUpdateVisible:!1}},components:{AddOrUpdate:a("oTdx").default},activated:function(){this.getDataList()},methods:{getDataList:function(){var t=this;this.dataListLoading=!0,this.$http({url:this.$http.adornUrl("/coupon/homesubject/list"),method:"get",params:this.$http.adornParams({page:this.pageIndex,limit:this.pageSize,key:this.dataForm.key})}).then(function(e){var a=e.data;a&&0===a.code?(t.dataList=a.page.list,t.totalPage=a.page.totalCount):(t.dataList=[],t.totalPage=0),t.dataListLoading=!1})},sizeChangeHandle:function(t){this.pageSize=t,this.pageIndex=1,this.getDataList()},currentChangeHandle:function(t){this.pageIndex=t,this.getDataList()},selectionChangeHandle:function(t){this.dataListSelections=t},addOrUpdateHandle:function(t){var e=this;this.addOrUpdateVisible=!0,this.$nextTick(function(){e.$refs.addOrUpdate.init(t)})},deleteHandle:function(t){var e=this,a=t?[t]:this.dataListSelections.map(function(t){return t.id});this.$confirm("确定对[id="+a.join(",")+"]进行["+(t?"删除":"批量删除")+"]操作?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$http({url:e.$http.adornUrl("/coupon/homesubject/delete"),method:"post",data:e.$http.adornData(a,!1)}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.getDataList()}}):e.$message.error(a.msg)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mod-config"},[a("el-form",{attrs:{inline:!0,model:t.dataForm},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.getDataList()}}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"参数名",clearable:""},model:{value:t.dataForm.key,callback:function(e){t.$set(t.dataForm,"key",e)},expression:"dataForm.key"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getDataList()}}},[t._v("查询")]),t._v(" "),t.isAuth("coupon:homesubject:save")?a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.addOrUpdateHandle()}}},[t._v("新增")]):t._e(),t._v(" "),t.isAuth("coupon:homesubject:delete")?a("el-button",{attrs:{type:"danger",disabled:t.dataListSelections.length<=0},on:{click:function(e){t.deleteHandle()}}},[t._v("批量删除")]):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.dataListLoading,expression:"dataListLoading"}],staticStyle:{width:"100%"},attrs:{data:t.dataList,border:""},on:{"selection-change":t.selectionChangeHandle}},[a("el-table-column",{attrs:{type:"selection","header-align":"center",align:"center",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id","header-align":"center",align:"center",label:"id"}}),t._v(" "),a("el-table-column",{attrs:{prop:"name","header-align":"center",align:"center",label:"专题名字"}}),t._v(" "),a("el-table-column",{attrs:{prop:"title","header-align":"center",align:"center",label:"专题标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"subTitle","header-align":"center",align:"center",label:"专题副标题"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status","header-align":"center",align:"center",label:"显示状态"}}),t._v(" "),a("el-table-column",{attrs:{prop:"url","header-align":"center",align:"center",label:"详情连接"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sort","header-align":"center",align:"center",label:"排序"}}),t._v(" "),a("el-table-column",{attrs:{prop:"img","header-align":"center",align:"center",label:"专题图片地址"}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right","header-align":"center",align:"center",width:"150",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.addOrUpdateHandle(e.row.id)}}},[t._v("修改")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.deleteHandle(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.pageIndex,"page-sizes":[10,20,50,100],"page-size":t.pageSize,total:t.totalPage,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.sizeChangeHandle,"current-change":t.currentChangeHandle}}),t._v(" "),t.addOrUpdateVisible?a("add-or-update",{ref:"addOrUpdate",on:{refreshDataList:t.getDataList}}):t._e()],1)},staticRenderFns:[]},l=a("VU/8")(r,i,!1,null,null,null);e.default=l.exports},oTdx:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={components:{SingleUpload:a("z009").a},data:function(){return{visible:!1,dataForm:{id:0,name:"",title:"",subTitle:"",status:"",url:"",sort:"",img:""},dataRule:{name:[{required:!0,message:"专题名字不能为空",trigger:"blur"}],title:[{required:!0,message:"专题标题不能为空",trigger:"blur"}],subTitle:[{required:!0,message:"专题副标题不能为空",trigger:"blur"}],status:[{required:!0,message:"显示状态不能为空",trigger:"blur"}],url:[{required:!0,message:"详情连接不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}],img:[{required:!0,message:"专题图片地址不能为空",trigger:"blur"}]}}},methods:{init:function(t){var e=this;this.dataForm.id=t||0,this.visible=!0,this.$nextTick(function(){e.$refs.dataForm.resetFields(),e.dataForm.id&&e.$http({url:e.$http.adornUrl("/coupon/homesubject/info/"+e.dataForm.id),method:"get",params:e.$http.adornParams()}).then(function(t){var a=t.data;a&&0===a.code&&(e.dataForm.name=a.homeSubject.name,e.dataForm.title=a.homeSubject.title,e.dataForm.subTitle=a.homeSubject.subTitle,e.dataForm.status=a.homeSubject.status,e.dataForm.url=a.homeSubject.url,e.dataForm.sort=a.homeSubject.sort,e.dataForm.img=a.homeSubject.img)})})},dataFormSubmit:function(){var t=this;this.$refs.dataForm.validate(function(e){e&&t.$http({url:t.$http.adornUrl("/coupon/homesubject/"+(t.dataForm.id?"update":"save")),method:"post",data:t.$http.adornData({id:t.dataForm.id||void 0,name:t.dataForm.name,title:t.dataForm.title,subTitle:t.dataForm.subTitle,status:t.dataForm.status,url:t.dataForm.url,sort:t.dataForm.sort,img:t.dataForm.img})}).then(function(e){var a=e.data;a&&0===a.code?t.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){t.visible=!1,t.$emit("refreshDataList")}}):t.$message.error(a.msg)})})}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,rules:t.dataRule,"label-width":"120px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"专题名字",prop:"name"}},[a("el-input",{attrs:{placeholder:"专题名字"},model:{value:t.dataForm.name,callback:function(e){t.$set(t.dataForm,"name",e)},expression:"dataForm.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专题标题",prop:"title"}},[a("el-input",{attrs:{placeholder:"专题标题"},model:{value:t.dataForm.title,callback:function(e){t.$set(t.dataForm,"title",e)},expression:"dataForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专题副标题",prop:"subTitle"}},[a("el-input",{attrs:{placeholder:"专题副标题"},model:{value:t.dataForm.subTitle,callback:function(e){t.$set(t.dataForm,"subTitle",e)},expression:"dataForm.subTitle"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"显示状态",prop:"status"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.dataForm.status,callback:function(e){t.$set(t.dataForm,"status",e)},expression:"dataForm.status"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"详情连接",prop:"url"}},[a("el-input",{attrs:{placeholder:"详情连接"},model:{value:t.dataForm.url,callback:function(e){t.$set(t.dataForm,"url",e)},expression:"dataForm.url"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"排序",prop:"sort"}},[a("el-input",{attrs:{placeholder:"排序"},model:{value:t.dataForm.sort,callback:function(e){t.$set(t.dataForm,"sort",e)},expression:"dataForm.sort"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"专题图片地址",prop:"img"}},[a("single-upload",{model:{value:t.dataForm.img,callback:function(e){t.$set(t.dataForm,"img",e)},expression:"dataForm.img"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dataFormSubmit()}}},[t._v("确定")])],1)],1)},staticRenderFns:[]},l=a("VU/8")(r,i,!1,null,null,null);e.default=l.exports}});
webpackJsonp([91],{Y4dZ:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,memberId:"",createTime:"",changeCount:"",note:"",sourceTyoe:""},dataRule:{memberId:[{required:!0,message:"member_id不能为空",trigger:"blur"}],createTime:[{required:!0,message:"create_time不能为空",trigger:"blur"}],changeCount:[{required:!0,message:"变化的值不能为空",trigger:"blur"}],note:[{required:!0,message:"备注不能为空",trigger:"blur"}],sourceTyoe:[{required:!0,message:"来源[0->购物；1->管理员修改;2->活动]不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/member/integrationchangehistory/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.memberId=a.integrationChangeHistory.memberId,t.dataForm.createTime=a.integrationChangeHistory.createTime,t.dataForm.changeCount=a.integrationChangeHistory.changeCount,t.dataForm.note=a.integrationChangeHistory.note,t.dataForm.sourceTyoe=a.integrationChangeHistory.sourceTyoe)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/member/integrationchangehistory/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,memberId:e.dataForm.memberId,createTime:e.dataForm.createTime,changeCount:e.dataForm.changeCount,note:e.dataForm.note,sourceTyoe:e.dataForm.sourceTyoe})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"member_id",prop:"memberId"}},[a("el-input",{attrs:{placeholder:"member_id"},model:{value:e.dataForm.memberId,callback:function(t){e.$set(e.dataForm,"memberId",t)},expression:"dataForm.memberId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"create_time",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"create_time"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"变化的值",prop:"changeCount"}},[a("el-input",{attrs:{placeholder:"变化的值"},model:{value:e.dataForm.changeCount,callback:function(t){e.$set(e.dataForm,"changeCount",t)},expression:"dataForm.changeCount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.note,callback:function(t){e.$set(e.dataForm,"note",t)},expression:"dataForm.note"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"来源[0->购物；1->管理员修改;2->活动]",prop:"sourceTyoe"}},[a("el-input",{attrs:{placeholder:"来源[0->购物；1->管理员修改;2->活动]"},model:{value:e.dataForm.sourceTyoe,callback:function(t){e.$set(e.dataForm,"sourceTyoe",t)},expression:"dataForm.sourceTyoe"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},i=a("VU/8")(r,o,!1,null,null,null);t.default=i.exports}});
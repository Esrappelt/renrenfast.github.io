webpackJsonp([85],{"Xd/g":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={data:function(){return{visible:!1,dataForm:{id:0,memberId:"",createTime:"",ip:"",city:"",loginType:""},dataRule:{memberId:[{required:!0,message:"member_id不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}],ip:[{required:!0,message:"ip不能为空",trigger:"blur"}],city:[{required:!0,message:"city不能为空",trigger:"blur"}],loginType:[{required:!0,message:"登录类型[1-web，2-app]不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.dataForm.id&&t.$http({url:t.$http.adornUrl("/member/memberloginlog/info/"+t.dataForm.id),method:"get",params:t.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(t.dataForm.memberId=a.memberLoginLog.memberId,t.dataForm.createTime=a.memberLoginLog.createTime,t.dataForm.ip=a.memberLoginLog.ip,t.dataForm.city=a.memberLoginLog.city,t.dataForm.loginType=a.memberLoginLog.loginType)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http({url:e.$http.adornUrl("/member/memberloginlog/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,memberId:e.dataForm.memberId,createTime:e.dataForm.createTime,ip:e.dataForm.ip,city:e.dataForm.city,loginType:e.dataForm.loginType})}).then(function(t){var a=t.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"80px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"member_id",prop:"memberId"}},[a("el-input",{attrs:{placeholder:"member_id"},model:{value:e.dataForm.memberId,callback:function(t){e.$set(e.dataForm,"memberId",t)},expression:"dataForm.memberId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"创建时间",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"创建时间"},model:{value:e.dataForm.createTime,callback:function(t){e.$set(e.dataForm,"createTime",t)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"ip",prop:"ip"}},[a("el-input",{attrs:{placeholder:"ip"},model:{value:e.dataForm.ip,callback:function(t){e.$set(e.dataForm,"ip",t)},expression:"dataForm.ip"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"city",prop:"city"}},[a("el-input",{attrs:{placeholder:"city"},model:{value:e.dataForm.city,callback:function(t){e.$set(e.dataForm,"city",t)},expression:"dataForm.city"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"登录类型[1-web，2-app]",prop:"loginType"}},[a("el-input",{attrs:{placeholder:"登录类型[1-web，2-app]"},model:{value:e.dataForm.loginType,callback:function(t){e.$set(e.dataForm,"loginType",t)},expression:"dataForm.loginType"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},o=a("VU/8")(r,i,!1,null,null,null);t.default=o.exports}});
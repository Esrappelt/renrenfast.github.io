webpackJsonp([79],{"4gtH":function(e,r,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t={data:function(){return{visible:!1,dataForm:{id:0,orderId:"",skuId:"",orderSn:"",createTime:"",memberUsername:"",returnAmount:"",returnName:"",returnPhone:"",status:"",handleTime:"",skuImg:"",skuName:"",skuBrand:"",skuAttrsVals:"",skuCount:"",skuPrice:"",skuRealPrice:"",reason:"","description述":"",descPics:"",handleNote:"",handleMan:"",receiveMan:"",receiveTime:"",receiveNote:"",receivePhone:"",companyAddress:""},dataRule:{orderId:[{required:!0,message:"order_id不能为空",trigger:"blur"}],skuId:[{required:!0,message:"退货商品id不能为空",trigger:"blur"}],orderSn:[{required:!0,message:"订单编号不能为空",trigger:"blur"}],createTime:[{required:!0,message:"申请时间不能为空",trigger:"blur"}],memberUsername:[{required:!0,message:"会员用户名不能为空",trigger:"blur"}],returnAmount:[{required:!0,message:"退款金额不能为空",trigger:"blur"}],returnName:[{required:!0,message:"退货人姓名不能为空",trigger:"blur"}],returnPhone:[{required:!0,message:"退货人电话不能为空",trigger:"blur"}],status:[{required:!0,message:"申请状态[0->待处理；1->退货中；2->已完成；3->已拒绝]不能为空",trigger:"blur"}],handleTime:[{required:!0,message:"处理时间不能为空",trigger:"blur"}],skuImg:[{required:!0,message:"商品图片不能为空",trigger:"blur"}],skuName:[{required:!0,message:"商品名称不能为空",trigger:"blur"}],skuBrand:[{required:!0,message:"商品品牌不能为空",trigger:"blur"}],skuAttrsVals:[{required:!0,message:"商品销售属性(JSON)不能为空",trigger:"blur"}],skuCount:[{required:!0,message:"退货数量不能为空",trigger:"blur"}],skuPrice:[{required:!0,message:"商品单价不能为空",trigger:"blur"}],skuRealPrice:[{required:!0,message:"商品实际支付单价不能为空",trigger:"blur"}],reason:[{required:!0,message:"原因不能为空",trigger:"blur"}],"description述":[{required:!0,message:"描述不能为空",trigger:"blur"}],descPics:[{required:!0,message:"凭证图片，以逗号隔开不能为空",trigger:"blur"}],handleNote:[{required:!0,message:"处理备注不能为空",trigger:"blur"}],handleMan:[{required:!0,message:"处理人员不能为空",trigger:"blur"}],receiveMan:[{required:!0,message:"收货人不能为空",trigger:"blur"}],receiveTime:[{required:!0,message:"收货时间不能为空",trigger:"blur"}],receiveNote:[{required:!0,message:"收货备注不能为空",trigger:"blur"}],receivePhone:[{required:!0,message:"收货电话不能为空",trigger:"blur"}],companyAddress:[{required:!0,message:"公司收货地址不能为空",trigger:"blur"}]}}},methods:{init:function(e){var r=this;this.dataForm.id=e||0,this.visible=!0,this.$nextTick(function(){r.$refs.dataForm.resetFields(),r.dataForm.id&&r.$http({url:r.$http.adornUrl("/order/orderreturnapply/info/"+r.dataForm.id),method:"get",params:r.$http.adornParams()}).then(function(e){var a=e.data;a&&0===a.code&&(r.dataForm.orderId=a.orderReturnApply.orderId,r.dataForm.skuId=a.orderReturnApply.skuId,r.dataForm.orderSn=a.orderReturnApply.orderSn,r.dataForm.createTime=a.orderReturnApply.createTime,r.dataForm.memberUsername=a.orderReturnApply.memberUsername,r.dataForm.returnAmount=a.orderReturnApply.returnAmount,r.dataForm.returnName=a.orderReturnApply.returnName,r.dataForm.returnPhone=a.orderReturnApply.returnPhone,r.dataForm.status=a.orderReturnApply.status,r.dataForm.handleTime=a.orderReturnApply.handleTime,r.dataForm.skuImg=a.orderReturnApply.skuImg,r.dataForm.skuName=a.orderReturnApply.skuName,r.dataForm.skuBrand=a.orderReturnApply.skuBrand,r.dataForm.skuAttrsVals=a.orderReturnApply.skuAttrsVals,r.dataForm.skuCount=a.orderReturnApply.skuCount,r.dataForm.skuPrice=a.orderReturnApply.skuPrice,r.dataForm.skuRealPrice=a.orderReturnApply.skuRealPrice,r.dataForm.reason=a.orderReturnApply.reason,r.dataForm.description述=a.orderReturnApply.description述,r.dataForm.descPics=a.orderReturnApply.descPics,r.dataForm.handleNote=a.orderReturnApply.handleNote,r.dataForm.handleMan=a.orderReturnApply.handleMan,r.dataForm.receiveMan=a.orderReturnApply.receiveMan,r.dataForm.receiveTime=a.orderReturnApply.receiveTime,r.dataForm.receiveNote=a.orderReturnApply.receiveNote,r.dataForm.receivePhone=a.orderReturnApply.receivePhone,r.dataForm.companyAddress=a.orderReturnApply.companyAddress)})})},dataFormSubmit:function(){var e=this;this.$refs.dataForm.validate(function(r){r&&e.$http({url:e.$http.adornUrl("/order/orderreturnapply/"+(e.dataForm.id?"update":"save")),method:"post",data:e.$http.adornData({id:e.dataForm.id||void 0,orderId:e.dataForm.orderId,skuId:e.dataForm.skuId,orderSn:e.dataForm.orderSn,createTime:e.dataForm.createTime,memberUsername:e.dataForm.memberUsername,returnAmount:e.dataForm.returnAmount,returnName:e.dataForm.returnName,returnPhone:e.dataForm.returnPhone,status:e.dataForm.status,handleTime:e.dataForm.handleTime,skuImg:e.dataForm.skuImg,skuName:e.dataForm.skuName,skuBrand:e.dataForm.skuBrand,skuAttrsVals:e.dataForm.skuAttrsVals,skuCount:e.dataForm.skuCount,skuPrice:e.dataForm.skuPrice,skuRealPrice:e.dataForm.skuRealPrice,reason:e.dataForm.reason,"description述":e.dataForm.description述,descPics:e.dataForm.descPics,handleNote:e.dataForm.handleNote,handleMan:e.dataForm.handleMan,receiveMan:e.dataForm.receiveMan,receiveTime:e.dataForm.receiveTime,receiveNote:e.dataForm.receiveNote,receivePhone:e.dataForm.receivePhone,companyAddress:e.dataForm.companyAddress})}).then(function(r){var a=r.data;a&&0===a.code?e.$message({message:"操作成功",type:"success",duration:1500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(a.msg)})})}}},o={render:function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("el-dialog",{attrs:{title:e.dataForm.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(r){e.visible=r}}},[a("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(r){if(!("button"in r)&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.dataFormSubmit()}}},[a("el-form-item",{attrs:{label:"order_id",prop:"orderId"}},[a("el-input",{attrs:{placeholder:"order_id"},model:{value:e.dataForm.orderId,callback:function(r){e.$set(e.dataForm,"orderId",r)},expression:"dataForm.orderId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退货商品id",prop:"skuId"}},[a("el-input",{attrs:{placeholder:"退货商品id"},model:{value:e.dataForm.skuId,callback:function(r){e.$set(e.dataForm,"skuId",r)},expression:"dataForm.skuId"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"订单编号",prop:"orderSn"}},[a("el-input",{attrs:{placeholder:"订单编号"},model:{value:e.dataForm.orderSn,callback:function(r){e.$set(e.dataForm,"orderSn",r)},expression:"dataForm.orderSn"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请时间",prop:"createTime"}},[a("el-input",{attrs:{placeholder:"申请时间"},model:{value:e.dataForm.createTime,callback:function(r){e.$set(e.dataForm,"createTime",r)},expression:"dataForm.createTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"会员用户名",prop:"memberUsername"}},[a("el-input",{attrs:{placeholder:"会员用户名"},model:{value:e.dataForm.memberUsername,callback:function(r){e.$set(e.dataForm,"memberUsername",r)},expression:"dataForm.memberUsername"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退款金额",prop:"returnAmount"}},[a("el-input",{attrs:{placeholder:"退款金额"},model:{value:e.dataForm.returnAmount,callback:function(r){e.$set(e.dataForm,"returnAmount",r)},expression:"dataForm.returnAmount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退货人姓名",prop:"returnName"}},[a("el-input",{attrs:{placeholder:"退货人姓名"},model:{value:e.dataForm.returnName,callback:function(r){e.$set(e.dataForm,"returnName",r)},expression:"dataForm.returnName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退货人电话",prop:"returnPhone"}},[a("el-input",{attrs:{placeholder:"退货人电话"},model:{value:e.dataForm.returnPhone,callback:function(r){e.$set(e.dataForm,"returnPhone",r)},expression:"dataForm.returnPhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"申请状态[0->待处理；1->退货中；2->已完成；3->已拒绝]",prop:"status"}},[a("el-input",{attrs:{placeholder:"申请状态[0->待处理；1->退货中；2->已完成；3->已拒绝]"},model:{value:e.dataForm.status,callback:function(r){e.$set(e.dataForm,"status",r)},expression:"dataForm.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"处理时间",prop:"handleTime"}},[a("el-input",{attrs:{placeholder:"处理时间"},model:{value:e.dataForm.handleTime,callback:function(r){e.$set(e.dataForm,"handleTime",r)},expression:"dataForm.handleTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品图片",prop:"skuImg"}},[a("el-input",{attrs:{placeholder:"商品图片"},model:{value:e.dataForm.skuImg,callback:function(r){e.$set(e.dataForm,"skuImg",r)},expression:"dataForm.skuImg"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"skuName"}},[a("el-input",{attrs:{placeholder:"商品名称"},model:{value:e.dataForm.skuName,callback:function(r){e.$set(e.dataForm,"skuName",r)},expression:"dataForm.skuName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品品牌",prop:"skuBrand"}},[a("el-input",{attrs:{placeholder:"商品品牌"},model:{value:e.dataForm.skuBrand,callback:function(r){e.$set(e.dataForm,"skuBrand",r)},expression:"dataForm.skuBrand"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品销售属性(JSON)",prop:"skuAttrsVals"}},[a("el-input",{attrs:{placeholder:"商品销售属性(JSON)"},model:{value:e.dataForm.skuAttrsVals,callback:function(r){e.$set(e.dataForm,"skuAttrsVals",r)},expression:"dataForm.skuAttrsVals"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"退货数量",prop:"skuCount"}},[a("el-input",{attrs:{placeholder:"退货数量"},model:{value:e.dataForm.skuCount,callback:function(r){e.$set(e.dataForm,"skuCount",r)},expression:"dataForm.skuCount"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品单价",prop:"skuPrice"}},[a("el-input",{attrs:{placeholder:"商品单价"},model:{value:e.dataForm.skuPrice,callback:function(r){e.$set(e.dataForm,"skuPrice",r)},expression:"dataForm.skuPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品实际支付单价",prop:"skuRealPrice"}},[a("el-input",{attrs:{placeholder:"商品实际支付单价"},model:{value:e.dataForm.skuRealPrice,callback:function(r){e.$set(e.dataForm,"skuRealPrice",r)},expression:"dataForm.skuRealPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"原因",prop:"reason"}},[a("el-input",{attrs:{placeholder:"原因"},model:{value:e.dataForm.reason,callback:function(r){e.$set(e.dataForm,"reason",r)},expression:"dataForm.reason"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"description述"}},[a("el-input",{attrs:{placeholder:"描述"},model:{value:e.dataForm.description述,callback:function(r){e.$set(e.dataForm,"description述",r)},expression:"dataForm.description述"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"凭证图片，以逗号隔开",prop:"descPics"}},[a("el-input",{attrs:{placeholder:"凭证图片，以逗号隔开"},model:{value:e.dataForm.descPics,callback:function(r){e.$set(e.dataForm,"descPics",r)},expression:"dataForm.descPics"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"处理备注",prop:"handleNote"}},[a("el-input",{attrs:{placeholder:"处理备注"},model:{value:e.dataForm.handleNote,callback:function(r){e.$set(e.dataForm,"handleNote",r)},expression:"dataForm.handleNote"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"处理人员",prop:"handleMan"}},[a("el-input",{attrs:{placeholder:"处理人员"},model:{value:e.dataForm.handleMan,callback:function(r){e.$set(e.dataForm,"handleMan",r)},expression:"dataForm.handleMan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货人",prop:"receiveMan"}},[a("el-input",{attrs:{placeholder:"收货人"},model:{value:e.dataForm.receiveMan,callback:function(r){e.$set(e.dataForm,"receiveMan",r)},expression:"dataForm.receiveMan"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货时间",prop:"receiveTime"}},[a("el-input",{attrs:{placeholder:"收货时间"},model:{value:e.dataForm.receiveTime,callback:function(r){e.$set(e.dataForm,"receiveTime",r)},expression:"dataForm.receiveTime"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货备注",prop:"receiveNote"}},[a("el-input",{attrs:{placeholder:"收货备注"},model:{value:e.dataForm.receiveNote,callback:function(r){e.$set(e.dataForm,"receiveNote",r)},expression:"dataForm.receiveNote"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"收货电话",prop:"receivePhone"}},[a("el-input",{attrs:{placeholder:"收货电话"},model:{value:e.dataForm.receivePhone,callback:function(r){e.$set(e.dataForm,"receivePhone",r)},expression:"dataForm.receivePhone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"公司收货地址",prop:"companyAddress"}},[a("el-input",{attrs:{placeholder:"公司收货地址"},model:{value:e.dataForm.companyAddress,callback:function(r){e.$set(e.dataForm,"companyAddress",r)},expression:"dataForm.companyAddress"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(r){e.visible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(r){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]},s=a("VU/8")(t,o,!1,null,null,null);r.default=s.exports}});
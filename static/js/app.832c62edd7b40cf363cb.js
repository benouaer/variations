webpackJsonp([1],{"0zIf":function(t,a,i){"use strict";var e=i("UQkB"),r=i("vBHF"),s=i("VU/8"),n=s(e.a,r.a,null,null,null);a.a=n.exports},"21M/":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"jumbotron",attrs:{id:"select-variations"}},[t._m(0),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.variant,expression:"variant"}],staticClass:"form-control",attrs:{list:"variants",name:"variant",type:"search",id:"variant",placeholder:"variant"},domProps:{value:t.variant},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13))return null;t.focusToVariantValue()},input:function(a){a.target.composing||(t.variant=a.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-3"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.variantValue,expression:"variantValue"}],ref:"variantValue",staticClass:"form-control",attrs:{type:"search",name:"variantValue",id:"variant-value"},domProps:{value:t.variantValue},on:{keyup:function(a){if(!("button"in a)&&t._k(a.keyCode,"enter",13))return null;t.addVariation(t.variant,t.variantValue)},input:function(a){a.target.composing||(t.variantValue=a.target.value)}}})]),t._v(" "),i("div",{staticClass:"col-6"},t._l(t.variations,function(a,e){return i("div",{key:e},t._l(a,function(a,r){return i("div",{key:e-r,staticClass:"row"},[i("div",{staticClass:"col-4"},[i("span",{staticClass:"text-capitalize"},[t._v(t._s(e))])]),t._v(" "),i("div",{staticClass:"col-4"},[i("span",{staticClass:"text-capitalize"},[t._v(t._s(a))])]),t._v(" "),i("div",{staticClass:"col-1"},[i("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(i){t.removeVariation(e,a,r)}}},[i("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])])])}))}))]),t._v(" "),i("datalist",{attrs:{id:"variants"}},t._l(t.variants,function(t){return i("option",{key:t,domProps:{value:t}})}))])},r=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"row"},[i("div",{staticClass:"col-6"},[i("h4",{staticClass:"display-5"},[t._v("Select variations")]),i("hr")]),t._v(" "),i("div",{staticClass:"col-6"},[i("h4",{staticClass:"display-5"},[t._v("Variations selected")]),i("hr")])])}],s={render:e,staticRenderFns:r};a.a=s},"43PG":function(t,a,i){"use strict";var e=i("woOf"),r=i.n(e),s=i("M93x"),n=i("jyVo"),o=i("Ln0X");a.a={name:"select-variations",data:function(){return{variants:[],variant:"",variantValue:"",variations:{}}},methods:{loadVariants:function(){var t=this;n.a.fetchData(o.a.services.variants.path).then(function(a){t.variants=a})},focusToVariantValue:function(){this.variant&&this.$refs.variantValue.focus()},addVariation:function(t,a){var i=this.variations;i[t]||(i[t]=[]),a&&!i[t].includes(a)&&(i[t].push(a),s.a.bus.$emit("add-variation",[t,a]),this.variantValue="")},removeVariation:function(t,a,i){if(this.variations[t].includes(a)){this.variations[t].splice(i,1);var e=r()({},this.variations);this.variations=e,s.a.bus.$emit("remove-variation",[t,a])}}},beforeMount:function(){this.loadVariants()}}},Goc6:function(t,a,i){"use strict";var e=i("43PG"),r=i("21M/"),s=i("VU/8"),n=s(e.a,r.a,null,null,null);a.a=n.exports},Ln0X:function(t,a,i){"use strict";a.a={services:{url:"http://localhost:8080",refdata:{path:"static/json/categories.json"},variants:{path:"static/json/variants.json"}}}},M93x:function(t,a,i){"use strict";var e=i("xJD8"),r=i("UPEO"),s=i("VU/8"),n=s(e.a,r.a,null,null,null);a.a=n.exports},NHnr:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=i("7+uW"),r=i("M93x");e.a.config.productionTip=!1,new e.a({el:"#app",template:"<App/>",components:{App:r.a}})},PyYC:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"product"}},[i("div",{staticClass:"jumbotron"},[i("h4",{staticClass:"item-details display-5"},[t._v("Item details")]),i("hr"),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputTitle"}},[t._v("Title*")]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.product.title,expression:"product.title"}],staticClass:"form-control",attrs:{type:"text",id:"inputTitle"},domProps:{value:t.product.title},on:{input:function(a){a.target.composing||(t.product.title=a.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"selectCategory"}},[t._v("Category*")]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.subCategories,expression:"subCategories"}],staticClass:"form-control",attrs:{name:"category"},on:{click:function(a){t.updateProduct(a.target)},change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subCategories=a.target.multiple?i:i[0]}}},[i("option",{attrs:{selected:"selected"}},[t._v("Select category")]),t._v(" "),t._l(t.categories,function(a,e){return i("option",{key:e,domProps:{value:a}},[t._v(t._s(e))])})],2)])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"selectSubCategory"}},[t._v("Sub Category*")]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.subSubCategories,expression:"subSubCategories"}],staticClass:"form-control",attrs:{name:"subCategory"},on:{click:function(a){t.updateProduct(a.target)},change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subSubCategories=a.target.multiple?i:i[0]}}},[i("option",{attrs:{selected:"selected"}},[t._v("Select sub category")]),t._v(" "),t._l(t.subCategories,function(a,e){return i("option",{key:e,domProps:{value:a}},[t._v(t._s(e))])})],2)])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"selectSubSubCategory"}},[t._v("Sub-sub Category*")]),t._v(" "),i("div",{staticClass:"col-sm-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.subSubCategory,expression:"subSubCategory"}],staticClass:"form-control",attrs:{name:"subSubCategory"},on:{click:function(a){t.updateProduct(a.target)},change:function(a){var i=Array.prototype.filter.call(a.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.subSubCategory=a.target.multiple?i:i[0]}}},[i("option",{attrs:{selected:"selected"}},[t._v("Select sub sub category")]),t._v(" "),t._l(t.subSubCategories,function(a){return i("option",{key:a,domProps:{value:a}},[t._v(t._s(a))])})],2)])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputItemOverview"}},[t._v("Item Overview")]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.overview,expression:"product.overview"}],staticClass:"form-control",attrs:{rows:"5",id:"inputItemOverview"},domProps:{value:t.product.overview},on:{input:function(a){a.target.composing||(t.product.overview=a.target.value)}}})])]),t._v(" "),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputItemDescription"}},[t._v("Item Description*")]),t._v(" "),i("div",{staticClass:"col-sm-8"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",attrs:{rows:"5",id:"inputItemDescription"},domProps:{value:t.product.description},on:{input:function(a){a.target.composing||(t.product.description=a.target.value)}}})])])]),t._v(" "),i("CreateVariation"),t._v(" "),i("ListVariation",{attrs:{product:t.product}})],1)},r=[],s={render:e,staticRenderFns:r};a.a=s},UPEO:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"content",attrs:{id:"app"}},[i("Product")],1)},r=[],s={render:e,staticRenderFns:r};a.a=s},UQkB:function(t,a,i){"use strict";var e=i("mvHQ"),r=i.n(e),s=i("W3Iv"),n=i.n(s),o=i("woOf"),c=i.n(o),l=i("d7EF"),u=i.n(l),v=i("M93x"),p=i("jyVo"),d=i("pMdQ");a.a={name:"create-variations",props:["product"],data:function(){return{variants:[],variationsMatrix:{}}},computed:{priceColSize:function(){return this.variants.length>7?"col small":"col"},varColSize:function(){return this.variants.length>4?"col-1 small":"col"}},methods:{loadVariations:function(){var t=this;v.a.bus.$on("add-variation",function(a){var i=u()(a,2),e=i[0],r=i[1],s=t.addToMatrix(e,r,t.variationsMatrix);t.variationsMatrix=c()({},s),t.variants&&!t.variants.includes(e)?t.variants.push(e):t.variants=t.variants||[e]}),v.a.bus.$on("remove-variation",function(a){var i=u()(a,2),e=i[0],r=i[1],s=t.removeFromMatrix(e,r,t.variationsMatrix,t.variants),n=u()(s,2),o=n[0],l=n[1];t.variationsMatrix=c()({},o),t.variants=l.slice()})},addToMatrix:d.a.addToMatrix,removeFromMatrix:d.a.removeFromMatrix,createProduct:function(){var t=this,a=[];n()(this.variationsMatrix).forEach(function(i){var e=u()(i,2),r=(e[0],e[1]);a.push(r),t.product.variations=a}),console.log("this is the final product"+r()(this.product)),p.a.postData("product",this.product).then(function(t){if(!t.ok)throw new Error(t.message);console.log("Sucessfully created product and variations")}).catch(function(t){console.log("We encountered a problem trying to create the product \n"+t)})}},beforeMount:function(){this.loadVariations()}}},jyVo:function(t,a,i){"use strict";var e=i("mvHQ"),r=i.n(e),s=i("Ln0X");a.a={fetchData:function(t){return fetch(s.a.services.url+"/"+t).then(function(t){return t.json()}).catch(function(t){return t})},postData:function(t,a){var i={"Content-Type":"application/json"},e={method:"POST",redirect:"follow",follow:10,timeout:1e4,body:r()(a),headers:i};return fetch(s.a.services.url+"/"+t,e).then(function(t){return t}).catch(function(t){return t})}}},kxce:function(t,a,i){"use strict";var e=i("jyVo"),r=i("Ln0X"),s=i("Goc6"),n=i("0zIf");a.a={name:"product",components:{CreateVariation:s.a,ListVariation:n.a},data:function(){return{title:"",categories:{},subCategories:"Select category",subSubCategories:"Select sub category",subSubCategory:"Select sub sub-category",product:{}}},methods:{loadCategories:function(){var t=this;e.a.fetchData(r.a.services.refdata.path).then(function(a){t.categories=a})},updateProduct:function(t){var a=t.options[t.selectedIndex];this.$set(this.product,t.name,a.text)}},beforeMount:function(){this.loadCategories()}}},pMdQ:function(t,a,i){"use strict";var e=i("woOf"),r=i.n(e),s=i("d7EF"),n=i.n(s),o=i("W3Iv"),c=i.n(o),l=i("fZjL"),u=i.n(l);a.a={addToMatrix:function(t,a,i){if(u()(i).length>0)c()(i).forEach(function(e){var s=n()(e,2),o=s[0],c=s[1];if(c.hasOwnProperty(t)){var l=r()({},c);l[t]=a;var u=o.replace(c[t],a);i[u]=l}else c[t]=a,i[o+"-"+a]=c,delete i[o]});else{var e={};e[t]=a,i[a]=e}return i},removeFromMatrix:function(t,a,i,e){var r=[];return c()(i).forEach(function(a){var i=n()(a,2),e=(i[0],i[1]);r.includes(e[t])||r.push(e[t])}),r.length>1||1===e.length?(c()(i).filter(function(i){var e=n()(i,2);e[0];return e[1][t]===a}).forEach(function(t){var a=n()(t,2),e=a[0];a[1];return delete i[e]}),e=u()(i).length>0?e:[]):(c()(i).filter(function(i){var e=n()(i,2);e[0];return e[1][t]===a}).forEach(function(a){var e=n()(a,2),r=e[0],s=e[1],o=r.includes("-"+s[t])?"-"+s[t]:s[t]+"-",c=r.replace(o,"");delete s[t],delete i[r],i[c]=s}),e.splice(e.indexOf(t),1)),[i,e]}}},"u+Fy":function(t,a,i){"use strict";var e=i("kxce"),r=i("PyYC"),s=i("VU/8"),n=s(e.a,r.a,null,null,null);a.a=n.exports},vBHF:function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{attrs:{id:"create-variations"}},[i("div",{staticClass:"jumbotron"},[i("h4",{staticClass:"display-5"},[t._v("Quantities, pricing and shipping information for product "+t._s(t.product.title))]),t._v(" "),i("hr"),t._v(" "),i("div",{staticClass:"row"},[!t.variants.length>0?i("div",{staticClass:"col"},[i("span",[t._v("Variations")])]):t._e(),t._v(" "),t._l(t.variants,function(a){return i("div",{key:a,staticClass:"col"},[i("span",{staticClass:"text-capitalize"},[t._v(t._s(a))])])}),t._v(" "),i("div",{class:t.priceColSize+" text-center"},[i("span",[t._v("Price Per Unit")])]),t._v(" "),i("div",{class:t.varColSize+" text-center"},[i("span",[t._v("UK Shipping Cost")])]),t._v(" "),i("div",{class:t.varColSize+" text-center"},[i("span",[t._v("Overseas Shipping Cost")])]),t._v(" "),i("div",{class:t.varColSize+" text-center"},[i("span",[t._v("Qty Available")])]),t._v(" "),i("div",{class:t.varColSize+" text-center"},[i("span",[t._v("Qty per Shipment")])])],2),t._v(" "),t._l(t.variationsMatrix,function(a,e){return i("div",{key:e,staticClass:"row"},[t._l(a,function(a,e){return t.variants.includes(e)?i("div",{key:a,staticClass:"col"},[i("span",{staticClass:"text-capitalize"},[t._v(t._s(a))])]):t._e()}),t._v(" "),i("div",{class:t.priceColSize+" input-group"},[i("span",{staticStyle:{"margin-top":"0.5em","margin-right":"0.1em"}},[t._v("£")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.variationsMatrix[e].unitPrice,expression:"variationsMatrix[index].unitPrice"}],staticClass:"form-control",attrs:{type:"text",name:"unitPrice",id:"unitPrice-"+e},domProps:{value:t.variationsMatrix[e].unitPrice},on:{input:function(a){a.target.composing||(t.variationsMatrix[e].unitPrice=a.target.value)}}})]),t._v(" "),i("div",{class:t.varColSize+" input-group"},[i("span",{staticStyle:{"margin-top":"0.5em","margin-right":"0.1em"}},[t._v("£")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.variationsMatrix[e].shippingCostUk,expression:"variationsMatrix[index].shippingCostUk"}],staticClass:"form-control",attrs:{type:"text",name:"shippingCostUk",id:"shippingCostUk-"+e},domProps:{value:t.variationsMatrix[e].shippingCostUk},on:{input:function(a){a.target.composing||(t.variationsMatrix[e].shippingCostUk=a.target.value)}}})]),t._v(" "),i("div",{class:t.varColSize+" input-group"},[i("span",{staticStyle:{"margin-top":"0.5em","margin-right":"0.1em"}},[t._v("£")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.variationsMatrix[e].shippingCostIntl,expression:"variationsMatrix[index].shippingCostIntl"}],staticClass:"form-control",attrs:{type:"text",name:"shippingCostIntl",id:"shippingCostIntl-"+e},domProps:{value:t.variationsMatrix[e].shippingCostIntl},on:{input:function(a){a.target.composing||(t.variationsMatrix[e].shippingCostIntl=a.target.value)}}})]),t._v(" "),i("div",{class:t.varColSize},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.variationsMatrix[e].quantity,expression:"variationsMatrix[index].quantity"}],staticClass:"form-control",attrs:{type:"text",name:"quantity",id:"quantity-"+e},domProps:{value:t.variationsMatrix[e].quantity},on:{input:function(a){a.target.composing||(t.variationsMatrix[e].quantity=a.target.value)}}})]),t._v(" "),i("div",{class:t.varColSize},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.variationsMatrix[e].shipmentSize,expression:"variationsMatrix[index].shipmentSize"}],staticClass:"form-control",attrs:{type:"text",name:"shipmentSize",id:"shipmentSize-"+e},domProps:{value:t.variationsMatrix[e].shipmentSize},on:{input:function(a){a.target.composing||(t.variationsMatrix[e].shipmentSize=a.target.value)}}})])],2)})],2),t._v(" "),i("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"button"},on:{click:function(a){t.createProduct()}}},[t._v("Update")])])},r=[],s={render:e,staticRenderFns:r};a.a=s},xJD8:function(t,a,i){"use strict";var e=i("7+uW"),r=i("u+Fy"),s=new e.a;a.a={name:"app",bus:s,components:{Product:r.a}}}},["NHnr"]);
//# sourceMappingURL=app.832c62edd7b40cf363cb.js.map
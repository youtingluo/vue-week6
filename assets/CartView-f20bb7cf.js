import{L as x}from"./index-65a896c4.js";import{_ as A,r as _,o as d,c,b as a,a as e,F as f,e as g,t as r,w as V,f as E,d as k,bm as L,bb as S,aj as h}from"./index-43f277a7.js";const{VITE_USER:p,VITE_PATH:b}={VITE_USER:"youting",VITE_PATH:"https://vue3-course-api.hexschool.io",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},q={data(){return{carts:{},isActive:!1,isLoading:!1}},components:{Loading:x},methods:{getCart(){this.isLoading=!0,this.$http.get(`${b}/v2/api/${p}/cart`).then(s=>{this.carts=s.data.data,this.isLoading=!1}).catch(s=>{alert(s.data.message)})},removeCart(s){this.isActive=!0,this.$http.delete(`${b}/v2/api/${p}/cart/${s}`).then(()=>{this.getCart(),this.isActive=!1}).catch(l=>{alert(l.data.message)})},updateCart(s){this.isActive=!0;const l={product_id:s.product_id,qty:s.qty};this.$http.put(`${b}/v2/api/${p}/cart/${s.id}`,{data:l}).then(v=>{this.getCart(),this.isActive=!1}).catch(v=>{alert(v.data.message)})},removeAllCart(){this.isActive=!0,this.$http.delete(`${b}/v2/api/${p}/carts`).then(()=>{this.getCart(),this.isActive=!1,alert("已清空購物車")}).catch(s=>{alert(s.data.message)})},onSubmit(){alert("表單驗證成功"),this.$refs.form.resetForm()}},mounted(){this.getCart()}},$=e("h1",null,"這是購物車列表",-1),w={class:"text-end"},F=["disabled"],T={class:"table align-middle"},U=e("thead",null,[e("tr",null,[e("th"),e("th",null,"品名"),e("th",{style:{width:"150px"}},"數量/單位"),e("th",null,"單價")])],-1),D=["disabled","onClick"],B={key:0,class:"spinner-border spinner-border-sm"},I={class:"input-group input-group-sm"},M={class:"input-group mb-3"},N=["onUpdate:modelValue","onChange","disabled"],R=["value"],P={class:"input-group-text",id:"basic-addon2"},H={class:"text-end"},O=e("td",{colspan:"3",class:"text-end"},"總計",-1),j={class:"text-end"},z={class:"mb-3"},G=e("label",{for:"email",class:"form-label"},"Email",-1),J={class:"mb-3"},K=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),Q={class:"mb-3"},W=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),X={class:"mb-3"},Y=e("label",{for:"address",class:"form-label"},"收件人地址",-1),Z=e("div",{class:"mb-3"},[e("label",{for:"message",class:"form-label"},"留言"),e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10"})],-1),ee=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function te(s,l,v,se,o,n){const C=_("loading"),m=_("VeeField"),u=_("ErrorMessage"),y=_("VeeForm");return d(),c("div",null,[a(C,{active:o.isLoading,"onUpdate:active":l[0]||(l[0]=t=>o.isLoading=t)},null,8,["active"]),$,e("div",w,[e("button",{class:"btn btn-outline-danger",disabled:o.carts.total===0,type:"button",onClick:l[1]||(l[1]=(...t)=>n.removeAllCart&&n.removeAllCart(...t))}," 清空購物車 ",8,F)]),e("table",T,[U,e("tbody",null,[(d(!0),c(f,null,g(o.carts.carts,t=>(d(),c("tr",{key:t.id},[e("td",null,[e("button",{type:"button",disabled:o.isActive,class:"btn btn-outline-danger btn-sm",onClick:i=>n.removeCart(t.id)},[o.isActive?(d(),c("i",B)):E("",!0),k(" x ")],8,D)]),e("td",null,r(t.product.title),1),e("td",null,[e("div",I,[e("div",M,[L(e("select",{class:"form-select","onUpdate:modelValue":i=>t.qty=i,onChange:i=>n.updateCart(t),disabled:o.isActive},[(d(),c(f,null,g(10,i=>e("option",{value:i,key:i+"5458"},r(i),9,R)),64))],40,N),[[S,t.qty]]),e("span",P,r(t.product.unit),1)])])]),e("td",H,r(t.final_total),1)]))),128))]),e("tfoot",null,[e("tr",null,[O,e("td",j,r(o.carts.total),1)])])]),a(y,{ref:"form",class:"col-md-6",onSubmit:n.onSubmit},{default:V(({errors:t})=>[e("div",z,[G,a(m,{id:"email",name:"email",type:"email",class:h(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"required|email"},null,8,["class"]),a(u,{name:"email",class:"invalid-feedback"})]),e("div",J,[K,a(m,{id:"name",name:"姓名",type:"text",class:h(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required"},null,8,["class"]),a(u,{name:"姓名",class:"invalid-feedback"})]),e("div",Q,[W,a(m,{id:"tel",name:"電話",type:"tel",class:h(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"required|min:8"},null,8,["class"]),a(u,{name:"電話",class:"invalid-feedback"})]),e("div",X,[Y,a(m,{id:"address",name:"地址",type:"text",class:h(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required"},null,8,["class"]),a(u,{name:"地址",class:"invalid-feedback"})]),Z,ee]),_:1},8,["onSubmit"])])}const oe=A(q,[["render",te]]);export{oe as default};
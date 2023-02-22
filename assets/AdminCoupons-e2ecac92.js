import{L as w}from"./index-c2637b0f.js";import{M as x,D,P as V}from"./PaginationComponent-18955d1c.js";import{_ as g,o as d,c as i,a as o,bm as p,bc as c,b8 as E,r,b as h,F as f,e as L,d as C,t as m}from"./index-29f868dc.js";const N={props:["isNew","coupon"],data(){return{tempCoupon:{},due_date:""}},watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T")[0];this.due_date=t},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new x(this.$refs.modal)}},T={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog"},P={class:"modal-content"},R={class:"modal-header"},I={class:"modal-title fs-5",id:"staticBackdropLabel"},S={key:0},B={key:1},A=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},F={class:"mb-3"},H=o("label",{for:"title",class:"form-label"},"標題",-1),j={class:"mb-3"},q=o("label",{for:"percent",class:"form-label"},"百分比",-1),z={class:"mb-3"},G=o("label",{for:"due_date",class:"form-label"},"到期日",-1),J={class:"mb-3"},K=o("label",{for:"code",class:"form-label"},"優惠碼",-1),Q={class:"mb-3"},W={class:"form-check"},X=o("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Y={class:"modal-footer"},Z=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"關閉",-1);function oo(t,e,u,v,s,a){return d(),i("div",T,[o("div",U,[o("div",P,[o("div",R,[o("h2",I,[u.isNew?(d(),i("span",S,"新增產品")):(d(),i("span",B,"編輯產品"))]),A]),o("div",O,[o("div",F,[H,p(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=n=>s.tempCoupon.title=n),placeholder:"輸入標題"},null,512),[[c,s.tempCoupon.title]])]),o("div",j,[q,p(o("input",{type:"number",class:"form-control",id:"percent","onUpdate:modelValue":e[1]||(e[1]=n=>s.tempCoupon.percent=n),placeholder:"輸入百分比"},null,512),[[c,s.tempCoupon.percent,void 0,{number:!0}]])]),o("div",z,[G,p(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=n=>s.due_date=n)},null,512),[[c,s.due_date]])]),o("div",J,[K,p(o("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":e[3]||(e[3]=n=>s.tempCoupon.code=n),placeholder:"輸入優惠碼"},null,512),[[c,s.tempCoupon.code]])]),o("div",Q,[o("div",W,[X,p(o("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=n=>s.tempCoupon.is_enabled=n),"true-value":1,"false-value":0},null,512),[[E,s.tempCoupon.is_enabled]])])])]),o("div",Y,[Z,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=n=>t.$emit("update"))},"確定")])])])],512)}const eo=g(N,[["render",oo]]),{VITE_PATH:_,VITE_USER:b}={VITE_USER:"youting",VITE_PATH:"https://vue3-course-api.hexschool.io",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},to={data(){return{isNew:!0,isLoading:!1,coupons:[],tempCoupon:{},pagination:{},bsModal:""}},components:{CouponModal:eo,DelModal:D,Pagination:V,Loading:w},methods:{getCoupon(t=1){this.isLoading=!0,this.$http.get(`${_}/v2/api/${b}/admin/coupons?page=${t}`).then(e=>{this.coupons=e.data.coupons,this.pagination=e.data.pagination,this.isLoading=!1}).catch(()=>{this.isLoading=!1,this.$router.push("/login")})},openCouponModal(t,e){t?(this.tempCoupon={due_date:new Date().getTime()/1e3},this.isNew=!0):(this.tempCoupon={...e},this.isNew=!1),this.bsModal=this.$refs.couponModal,this.bsModal.openModal()},updateCoupon(){let t=`${_}/api/${b}/admin/coupon`,e="post";this.isNew||(t=`${_}/api/${b}/admin/coupon/${this.tempCoupon.id}`,e="put"),this.$http[e](t,{data:this.tempCoupon}).then(()=>{this.getCoupon()}).catch(u=>{alert(u.message)}),this.bsModal.hideModal()},openRemoveModal(t){this.tempCoupon={...t},this.bsModal=this.$refs.delModal,this.bsModal.openModal()},removeCoupon(){this.$http.delete(`${_}/api/${b}/admin/coupon/${this.tempCoupon.id}`).then(()=>{this.getCoupon()}).catch(t=>{alert(t.response.data.message)}),this.bsModal.hideModal()}},computed:{dueDate(){return t=>new Date(t*1e3).toLocaleDateString()}},mounted(){this.getCoupon()}},so={class:"text-end mt-4"},no=o("h2",null,"優惠券列表",-1),lo={class:"table table-hover mt-4"},ao=o("thead",null,[o("tr",null,[o("th",null,"優惠券名稱"),o("th",null,"折價百分比"),o("th",null,"code"),o("th",null,"到期日"),o("th",null,"是否啟用"),o("th",null,"編輯產品")])],-1),io={key:0,class:"text-success"},po={key:1},uo={class:"btn-group",role:"group","aria-label":"Basic mixed styles example"},co=["onClick"],ro=["onClick"],ho=o("p",null,[C(" 目前有 "),o("span"),C(" 項優惠券 ")],-1),mo={class:"d-flex justify-content-center"};function _o(t,e,u,v,s,a){const n=r("loading"),M=r("Pagination"),y=r("DelModal"),k=r("CouponModal");return d(),i(f,null,[o("div",null,[h(n,{active:s.isLoading},null,8,["active"]),o("div",so,[o("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=l=>a.openCouponModal(!0))}," 建立新的優惠券 ")]),no,o("table",lo,[ao,o("tbody",null,[(d(!0),i(f,null,L(s.coupons,l=>(d(),i("tr",{key:l.id},[o("td",null,m(l.title),1),o("td",null,m(l.percent),1),o("td",null,m(l.code),1),o("td",null,m(a.dueDate(l.due_date)),1),o("td",null,[l.is_enabled?(d(),i("span",io,"啟用")):(d(),i("span",po,"未啟用"))]),o("td",null,[o("div",uo,[o("button",{type:"button",class:"btn btn-secondary",onClick:$=>a.openCouponModal(!1,l)}," 編輯 ",8,co),o("button",{type:"button",class:"btn btn-outline-danger",onClick:$=>a.openRemoveModal(l)}," 刪除 ",8,ro)])])]))),128))])]),ho,o("div",mo,[h(M,{pagination:s.pagination,onEmitPage:a.getCoupon},null,8,["pagination","onEmitPage"])])]),h(y,{ref:"delModal",product:s.tempCoupon,onRemoveItem:a.removeCoupon},null,8,["product","onRemoveItem"]),h(k,{ref:"couponModal",isNew:s.isNew,coupon:s.tempCoupon,onUpdate:a.updateCoupon},null,8,["isNew","coupon","onUpdate"])],64)}const go=g(to,[["render",_o]]);export{go as default};

import{_ as u,r,o as l,c as h,a as t,b as o,w as a,x as p,f as v,d as n}from"./index-29f868dc.js";const{VITE_PATH:m}={VITE_USER:"youting",VITE_PATH:"https://vue3-course-api.hexschool.io",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{status:!1}},methods:{checkLogin(){var c;const i=(c=document.cookie.split("; ").find(s=>s.startsWith("hexschoolToken")))==null?void 0:c.split("=")[1];this.$http.defaults.headers.common.Authorization=i,this.$http.post(`${m}/v2/api/user/check`).then(s=>{s.data.success&&(this.status=!0,this.$router.push("/admin/products"))}).catch(()=>{this.$router.push("/login")})}},mounted(){this.checkLogin()}},f={class:"navbar navbar-expand-lg bg-dark","data-bs-theme":"dark"},V={class:"container"},b={class:"collapse navbar-collapse",id:"navbarNav"},x={class:"navbar-nav"},E={class:"nav-item"},$={class:"nav-item"},T={class:"nav-item"},g={class:"nav-item"},w={class:"container mt-3"};function B(i,c,s,N,d,A){const e=r("router-link"),_=r("router-view");return l(),h("div",null,[t("nav",f,[t("div",V,[t("div",b,[t("ul",x,[t("li",E,[o(e,{class:"nav-link",to:"/admin/products"},{default:a(()=>[n("產品列表")]),_:1})]),t("li",$,[o(e,{class:"nav-link",to:"/admin/coupons"},{default:a(()=>[n("優惠券列表")]),_:1})]),t("li",T,[o(e,{class:"nav-link",to:"/admin/orders"},{default:a(()=>[n("訂單列表")]),_:1})]),t("li",g,[o(e,{class:"nav-link",to:"/"},{default:a(()=>[n("回前台")]),_:1})])])])])]),t("div",w,[d.status?(l(),p(_,{key:0})):v("",!0)])])}const C=u(k,[["render",B]]);export{C as default};
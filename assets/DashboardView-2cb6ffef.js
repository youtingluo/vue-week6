import{_ as h,r as c,o as n,c as _,a as t,b as i,w as r,x as p,f as v,d as l}from"./index-43f277a7.js";const{VITE_PATH:m}={VITE_USER:"youting",VITE_PATH:"https://vue3-course-api.hexschool.io",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{status:!1}},methods:{checkLogin(){var e;const o=(e=document.cookie.split("; ").find(s=>s.startsWith("hexschoolToken")))==null?void 0:e.split("=")[1];this.$http.defaults.headers.common.Authorization=o,this.$http.post(`${m}/v2/api/user/check`).then(s=>{s.data.success&&(this.status=!0,this.$router.push("/admin/products"))}).catch(()=>{this.$router.push("/login")})}},mounted(){this.checkLogin()}},f={class:"navbar navbar-expand-lg bg-dark","data-bs-theme":"dark"},V={class:"container"},b={class:"collapse navbar-collapse",id:"navbarNav"},x={class:"navbar-nav"},E={class:"nav-item"},$={class:"nav-item"},T={class:"container mt-3"};function g(o,e,s,w,d,B){const a=c("router-link"),u=c("router-view");return n(),_("div",null,[t("nav",f,[t("div",V,[t("div",b,[t("ul",x,[t("li",E,[i(a,{class:"nav-link",to:"/products"},{default:r(()=>[l("產品列表")]),_:1})]),t("li",$,[i(a,{class:"nav-link",to:"/"},{default:r(()=>[l("回前台")]),_:1})])])])])]),t("div",T,[d.status?(n(),p(u,{key:0})):v("",!0)])])}const A=h(k,[["render",g]]);export{A as default};
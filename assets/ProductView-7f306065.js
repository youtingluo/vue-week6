import{_ as c,o as r,c as i,d as a,t as u,a as o}from"./index-29f868dc.js";const{VITE_USER:d,VITE_PATH:n}={VITE_USER:"youting",VITE_PATH:"https://vue3-course-api.hexschool.io",BASE_URL:"/vue-week6/",MODE:"production",DEV:!1,PROD:!0},p={data(){return{product:{}}},methods:{getProduct(){const{id:e}=this.$route.params;this.isActive=!0,this.$http.get(`${n}/v2/api/${d}/product/${e}`).then(t=>{this.product=t.data.product,this.isActive=!1}).catch(t=>{alert(t.data.message)})}},mounted(){this.getProduct()}},l=o("h1",null,"單一產品細節",-1),h=["src"];function _(e,t,m,E,s,f){return r(),i("div",null,[l,a(" "+u(s.product.title)+" ",1),o("img",{class:"img-fluid",width:"300",src:s.product.imageUrl},null,8,h)])}const V=c(p,[["render",_]]);export{V as default};
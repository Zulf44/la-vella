(function(){"use strict";var a={3322:function(a,e,i){var t=i(9242),d=i(3396);function s(a,e,i,t,s,c){const v=(0,d.up)("router-view");return(0,d.wg)(),(0,d.j4)(v)}var c=i.p+"img/logo_la_vella.d59d8cd3.svg",v=i.p+"img/wella.afa0c5b8.png",r=i.p+"img/inter.1958f3f1.png",l=i.p+"img/ench.36c1f457.png";const _={class:"app"},n={class:"preview"},o={class:"header"},u=(0,d.Uk)("Прайст-лист"),p=(0,d.uE)('<div class="logo"><img class="logo__img" src="'+c+'" alt=""></div><div class="contacts"><div class="info">Запись по телефону</div><div class="contacts__phone"><a href="tel:+79883877760"> 7-988 38 777 60</a></div><div class="contacts__addres">Мира, 50 1 этаж</div></div>',2),m=(0,d.uE)('<section id="achievements" class="achievements"><div class="achievement"><div class="achievement__logo"><img class="achievement__logo_img" src="'+v+'" alt=""></div><div class="achievement__title"> Салон красоты заслуживший звание Wella Color Podium Salon </div></div><div id="one" class="achievement"><div class="achievement__logo"><img class="achievement__logo_img" src="'+r+'" alt=""></div><div class="achievement__title"> В 2018 году стали членами всемирной организации Intercoiffure Mondial — лучших парикмахеров мира </div></div><div name="two" class="achievement"><div class="achievement__logo"><img class="achievement__logo_img" src="'+l+'" alt=""></div><div class="achievement__title"> Высокое качество касителей из Германии </div></div></section>',1),b={id:"services",class:"services"},f=(0,d._)("div",{class:"services__title"},"Услуги",-1),h={class:"services__box"},g=(0,d._)("div",{class:"services__box_item_title"},"Женская стрижка",-1),w=(0,d._)("div",{class:"services__box_item_title"},"Мужская стрижка",-1),y=(0,d._)("div",{class:"services__box_item_title"},"Детская стрижка",-1),x=(0,d._)("div",{class:"services__box_item_title"},"Визаж",-1),W=(0,d._)("div",{class:"services__box_item_title"},"Косметология",-1),k=(0,d._)("div",{class:"services__box_item_title"},"Массаж",-1),P=(0,d._)("section",{class:"map"},[(0,d._)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.2357240801725!2d38.97028121594595!3d45.02014007909812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f04fb651045a31%3A0x3d4c2a256d24e0da!2sLa%20Vella!5e0!3m2!1sru!2sru!4v1652815258204!5m2!1sru!2sru",width:"100%",height:"400",style:{border:"0"},allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})],-1);function S(a,e,i,t,s,c){const v=(0,d.up)("router-link"),r=(0,d.up)("carousel");return(0,d.wg)(),(0,d.iD)("div",_,[(0,d._)("header",n,[(0,d._)("header",o,[(0,d._)("div",{onClick:e[0]||(e[0]=(...a)=>c.scrollToServices&&c.scrollToServices(...a))},"Услуги"),(0,d.Wm)(v,{to:"/price"},{default:(0,d.w5)((()=>[u])),_:1}),(0,d._)("div",{onClick:e[1]||(e[1]=(...a)=>c.scrollToPhoto&&c.scrollToPhoto(...a))},"Фотогалерея")]),p]),m,(0,d._)("section",b,[f,(0,d._)("div",h,[(0,d.Wm)(v,{to:"/price",class:"services__box_item woman"},{default:(0,d.w5)((()=>[g])),_:1}),(0,d.Wm)(v,{to:"/price",class:"services__box_item men"},{default:(0,d.w5)((()=>[w])),_:1}),(0,d.Wm)(v,{to:"/price",class:"services__box_item baby"},{default:(0,d.w5)((()=>[y])),_:1}),(0,d.Wm)(v,{to:"/price",class:"services__box_item makeup"},{default:(0,d.w5)((()=>[x])),_:1}),(0,d.Wm)(v,{to:"/price",class:"services__box_item face"},{default:(0,d.w5)((()=>[W])),_:1}),(0,d.Wm)(v,{to:"/price",class:"services__box_item body"},{default:(0,d.w5)((()=>[k])),_:1})])]),(0,d.Wm)(r),P])}var O=i(7139);const I={id:"photo"},C=(0,d._)("div",{class:"carousel_vue__title"},"Фотогалерея",-1),A={class:"carousel_vue"},E={class:"carousel__item"};function T(a,e,i,t,s,c){const v=(0,d.up)("Slide"),r=(0,d.up)("Navigation"),l=(0,d.up)("Pagination"),_=(0,d.up)("Carousel",!0);return(0,d.wg)(),(0,d.iD)("div",I,[C,(0,d._)("div",A,[(0,d.Wm)(_,null,{addons:(0,d.w5)((()=>[(0,d.Wm)(r),(0,d.Wm)(l)])),default:(0,d.w5)((()=>[((0,d.wg)(),(0,d.iD)(d.HY,null,(0,d.Ko)(10,(a=>(0,d.Wm)(v,{key:a},{default:(0,d.w5)((()=>[(0,d._)("div",E,[(0,d._)("div",{class:(0,O.C_)("photo g"+a)},null,2)])])),_:2},1024))),64))])),_:1})])])}var j=i(1658),N=(0,d.aZ)({name:"Basic",components:{Carousel:j.lr,Slide:j.Mi,Pagination:j.tl,Navigation:j.W_}}),D=i(89);const M=(0,D.Z)(N,[["render",T]]);var Z=M,L={components:{carousel:Z},methods:{scrollToPhoto(){const a=document.getElementById("photo");a.scrollIntoView();const e=document.querySelectorAll('a[href^="#"]');for(let i of e)i.addEventListener("click",(function(a){a.preventDefault();const e=i.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}))},scrollToServices(){const a=document.getElementById("services");a.scrollIntoView()}}};const V=(0,D.Z)(L,[["render",S]]);var B=V,q={components:{Main:B}};const G=(0,D.Z)(q,[["render",s]]);var H=G;const X=a=>((0,d.dD)("data-v-de6d171a"),a=a(),(0,d.Cn)(),a),z={class:"price_section"},F={class:"price_header"},K={class:"preview"},U={class:"logo"},Y=X((()=>(0,d._)("img",{src:c,alt:""},null,-1))),J=(0,d.uE)('<div class="price_title" data-v-de6d171a>Прайс лист</div><div class="price_list" data-v-de6d171a><div class="price__name" data-v-de6d171a><div class="price__name_attribute" data-v-de6d171a>Стрижка женская</div><div class="price__name_attribute" data-v-de6d171a>Укладка</div><div class="price__name_attribute" data-v-de6d171a>Прическа</div><div class="price__name_attribute" data-v-de6d171a>Окрашивание Must Have</div><div class="price__name_attribute" data-v-de6d171a>Окрашивание Couture</div><div class="price__name_attribute" data-v-de6d171a>Окрашивание AirTouch</div><div class="price__name_attribute" data-v-de6d171a>Долговременная укладка</div><div class="price__name_attribute" data-v-de6d171a>Кератиновая реставрация Greymy</div><div class="price__name_attribute" data-v-de6d171a>Кератиновое выпрямление Greymy</div><div class="price__name_attribute" data-v-de6d171a>SPA-терапия NIOXIN</div><div class="price__name_attribute" data-v-de6d171a>SPA-сервисы System Professional</div><div class="price__name_attribute" data-v-de6d171a>SPA-сервисы WELLA</div><div class="price__name_attribute" data-v-de6d171a>Стрижка мужская NEW</div><div class="price__name_attribute" data-v-de6d171a>Стрижка мужская SP</div><div class="price__name_attribute" data-v-de6d171a>SPA-терапии NIOXIN</div><div class="price__name_attribute" data-v-de6d171a>Стрижка детская (до 10 лет)</div><div class="price__name_attribute" data-v-de6d171a>Стрижка детская (старше 10 лет)</div><div class="price__name_attribute" data-v-de6d171a>Стрижка подростковая</div><div class="price__name_attribute" data-v-de6d171a>Коррекция бровей</div><div class="price__name_attribute" data-v-de6d171a>Окрашивание бровей</div><div class="price__name_attribute" data-v-de6d171a>Окрашивание ресниц</div><div class="price__name_attribute" data-v-de6d171a>Массаж лица и декольте</div><div class="price__name_attribute" data-v-de6d171a>Массаж лица сахаром</div><div class="price__name_attribute" data-v-de6d171a>Моделирующий массаж</div><div class="price__name_attribute" data-v-de6d171a>Лимфодренажный массаж</div><div class="price__name_attribute" data-v-de6d171a>Чистка лица механическая</div><div class="price__name_attribute" data-v-de6d171a>Миндальный пилинг</div><div class="price__name_attribute" data-v-de6d171a>Миндальный пилинг с ретинолом</div><div class="price__name_attribute" data-v-de6d171a>Маникюр Классический</div><div class="price__name_attribute" data-v-de6d171a>Маникюр Классический Дизайн</div></div><div class="price__price" data-v-de6d171a><div class="attribute_price" data-v-de6d171a>≈ 1 час от 700 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 1000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 900 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 2 часа от 3000₽</div><div class="attribute_price" data-v-de6d171a>≈ 3 часа от 3500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 4 часа от 9000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 2 часа 30 мин от 2800 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час 30 мин от 2500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 3 часа от 4000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 1500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 800 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 1100 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 750 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 700 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 1500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 600 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 700 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 30 мин 350 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 30 мин 350 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 30 мин 350 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час 1000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 30 мин от 1000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час 2500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 30 мин 800 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 2 часа от 2000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 2 часа от 2000 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час от 3500 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 1 час 800 ₽</div><div class="attribute_price" data-v-de6d171a>≈ 30 мин от 100 ₽</div></div></div><div class="contacts" data-v-de6d171a><div class="info" data-v-de6d171a>Запись по телефону</div><div class="contacts__phone" data-v-de6d171a><a href="tel:+79883877760" data-v-de6d171a> 7-988 38 777 60</a></div><div class="contacts__addres" data-v-de6d171a>Мира, 50 1 этаж</div></div>',3);function Q(a,e,i,t,s,c){const v=(0,d.up)("router-link");return(0,d.wg)(),(0,d.iD)("section",z,[(0,d._)("div",F,[(0,d._)("header",K,[(0,d._)("div",U,[(0,d.Wm)(v,{to:"/"},{default:(0,d.w5)((()=>[Y])),_:1})])])]),J])}var R={};const $=(0,D.Z)(R,[["render",Q],["__scopeId","data-v-de6d171a"]]);var aa=$,ea=i(678);const ia=[{path:"/",component:B},{path:"/price",component:aa}],ta=(0,ea.p7)({routes:ia,history:(0,ea.r5)()});var da=ta;(0,t.ri)(H).use(da).mount("#app")}},e={};function i(t){var d=e[t];if(void 0!==d)return d.exports;var s=e[t]={exports:{}};return a[t](s,s.exports,i),s.exports}i.m=a,function(){var a=[];i.O=function(e,t,d,s){if(!t){var c=1/0;for(_=0;_<a.length;_++){t=a[_][0],d=a[_][1],s=a[_][2];for(var v=!0,r=0;r<t.length;r++)(!1&s||c>=s)&&Object.keys(i.O).every((function(a){return i.O[a](t[r])}))?t.splice(r--,1):(v=!1,s<c&&(c=s));if(v){a.splice(_--,1);var l=d();void 0!==l&&(e=l)}}return e}s=s||0;for(var _=a.length;_>0&&a[_-1][2]>s;_--)a[_]=a[_-1];a[_]=[t,d,s]}}(),function(){i.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return i.d(e,{a:e}),e}}(),function(){i.d=function(a,e){for(var t in e)i.o(e,t)&&!i.o(a,t)&&Object.defineProperty(a,t,{enumerable:!0,get:e[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){i.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)}}(),function(){i.p="/"}(),function(){var a={143:0};i.O.j=function(e){return 0===a[e]};var e=function(e,t){var d,s,c=t[0],v=t[1],r=t[2],l=0;if(c.some((function(e){return 0!==a[e]}))){for(d in v)i.o(v,d)&&(i.m[d]=v[d]);if(r)var _=r(i)}for(e&&e(t);l<c.length;l++)s=c[l],i.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return i.O(_)},t=self["webpackChunkla_vella"]=self["webpackChunkla_vella"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=i.O(void 0,[998],(function(){return i(3322)}));t=i.O(t)})();
//# sourceMappingURL=app.5c423fc7.js.map
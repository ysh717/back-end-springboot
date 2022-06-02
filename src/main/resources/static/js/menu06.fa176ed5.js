"use strict";(self["webpackChunkfront_end_vue"]=self["webpackChunkfront_end_vue"]||[]).push([[779],{6154:function(t,n,u){u.r(n),u.d(n,{default:function(){return I}});var e=u(3396),o=u(7139),l=u(4870),r=u(9242),s=u(65);const c={class:"card"},a=(0,e._)("div",{class:"card-header"}," Exam01RootState ",-1),d={class:"card-body"},i=(0,e._)("h6",null,"[Root State 읽기]",-1),_=(0,e.Uk)("userId 양방향 바인딩: "),p=(0,e._)("hr",null,null,-1),v=(0,e._)("h6",null,"[Root State 변경]",-1),b=(0,e.Uk)("userId 변경값 입력 : ");var f={setup(t){const n=(0,s.oR)();function u(){return n.state.userId}const f=(0,e.Fl)((()=>n.state.userId)),m=(0,l.iH)("");function I(){n.commit("setUserId",m.value)}function w(){n.dispatch("setUserIdByAsync",{userId:m.value,duration:3e3})}return(t,s)=>((0,e.wg)(),(0,e.iD)("div",c,[a,(0,e._)("div",d,[(0,e._)("div",null,[i,(0,e._)("p",null,"userId 단방향 바인딩: "+(0,o.zw)(t.$store.state.userId),1),(0,e._)("p",null,"userId 단방향 바인딩: "+(0,o.zw)((0,l.SU)(n).state.userId),1),(0,e._)("p",null,"userId 단방향 바인딩: "+(0,o.zw)((0,l.SU)(n).getters.getUserId),1),(0,e._)("p",null,"userId 단방향 바인딩: "+(0,o.zw)(u()),1),(0,e._)("p",null,"userId 단방향 바인딩: "+(0,o.zw)((0,l.SU)(f)),1),(0,e._)("p",null,[_,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>t.$store.state.userId=n)},null,512),[[r.nr,t.$store.state.userId]])])]),p,v,(0,e._)("p",null,[b,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>m.value=t)},null,512),[[r.nr,m.value]])]),(0,e._)("div",null,[(0,e._)("button",{onClick:I,class:"btn btn-info btn-sm mr-2"},"userId 변경(Mutation 동기 방식)"),(0,e._)("button",{onClick:w,class:"btn btn-info btn-sm mr-2"},"userId 변경(Action 비동기 방식)")])])]))}};const m=f;var I=m},3890:function(t,n,u){u.r(n),u.d(n,{default:function(){return I}});var e=u(3396),o=u(7139),l=u(4870),r=u(9242),s=u(65);const c={class:"card"},a=(0,e._)("div",{class:"card-header"}," Exam02CounterState ",-1),d={class:"card-body"},i=(0,e._)("h6",null,"[Counter State 읽기]",-1),_=(0,e.Uk)("counter/count 양방향 바인딩: "),p=(0,e._)("hr",null,null,-1),v=(0,e._)("h6",null,"[Counter State 변경]",-1),b=(0,e.Uk)("count 증가값 입력 : ");var f={setup(t){const n=(0,s.oR)();function u(){return n.state.counter.count}const f=(0,e.Fl)((()=>n.getters["counter/getCount"])),m=(0,l.iH)(1);function I(){n.commit("counter/setCount",m.value)}function w(){n.dispatch("counter/setCountByAsync",{value:m.value,duration:3e3})}return(t,s)=>((0,e.wg)(),(0,e.iD)("div",c,[a,(0,e._)("div",d,[(0,e._)("div",null,[i,(0,e._)("p",null,"counter/count 단방향 바인딩: "+(0,o.zw)(t.$store.state.counter.count),1),(0,e._)("p",null,"counter/count 단방향 바인딩: "+(0,o.zw)((0,l.SU)(n).state.counter.count),1),(0,e._)("p",null,"counter/count 단방향 바인딩: "+(0,o.zw)((0,l.SU)(n).getters["counter/getCount"]),1),(0,e._)("p",null,"counter/count 단방향 바인딩: "+(0,o.zw)(u()),1),(0,e._)("p",null,"counter/count 단방향 바인딩: "+(0,o.zw)((0,l.SU)(f)),1),(0,e._)("p",null,[_,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=n=>t.$store.state.counter.count=n)},null,512),[[r.nr,t.$store.state.counter.count]])])]),p,v,(0,e._)("p",null,[b,(0,e.wy)((0,e._)("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=t=>m.value=t)},null,512),[[r.nr,m.value,void 0,{number:!0}]])]),(0,e._)("div",null,[(0,e._)("button",{onClick:I,class:"btn btn-info btn-sm mr-2"},"count 변경(Mutation 동기 방식)"),(0,e._)("button",{onClick:w,class:"btn btn-info btn-sm mr-2"},"count 변경(Action 비동기 방식)")])])]))}};const m=f;var I=m}}]);
//# sourceMappingURL=menu06.fa176ed5.js.map
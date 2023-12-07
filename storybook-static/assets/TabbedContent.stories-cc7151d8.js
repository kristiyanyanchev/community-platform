import{a as x,j as L}from"./jsx-runtime-913be41c.js";import{g as be,a as pe,u as me,_ as m,C as Ce,T as Ee,b as Te,c as xe,d as ve,e as Ve,L as R,f as _e,h as He,i as Oe,j as Ae,k as A,l as F}from"./TabbedContent-dbf187d0.js";import{y as $}from"./index-a7768622.js";import{r as o}from"./index-2506bfc3.js";import"./emotion-styled.browser.esm-935c8bd8.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-11801e73.js";import"./emotion-element-6a883da9.browser.esm-becb4ad2.js";function Fe({controlled:t,default:e,name:l,state:n="value"}){const{current:r}=o.useRef(t!==void 0),[s,a]=o.useState(e),d=r?t:s,i=o.useCallback(u=>{r||a(u)},[]);return[d,i]}function ae(t,e,l=(n,r)=>n===r){return t.length===e.length&&t.every((n,r)=>l(n,e[r]))}function $e(t){return be("MuiTabs",t)}pe("MuiTabs",["root","horizontal","vertical"]);function Ne(t){const{value:e,defaultValue:l,onChange:n,orientation:r,direction:s,selectionFollowsFocus:a}=t,[d,i]=Fe({controlled:e,default:l,name:"Tabs",state:"value"}),u=o.useCallback((S,v)=>{i(v),n==null||n(S,v)},[n,i]),{subitems:p,contextValue:h}=me(),c=o.useRef(()=>{}),g=o.useCallback(S=>{var v;return(v=p.get(S))==null?void 0:v.id},[p]),f=o.useCallback(S=>c.current(S),[]),C=o.useCallback(S=>{c.current=S},[]);return{contextValue:m({direction:s,getTabId:f,getTabPanelId:g,onSelected:u,orientation:r,registerTabIdLookup:C,selectionFollowsFocus:a,value:d},h)}}function Ue(t){const{value:e,children:l}=t,{direction:n,getItemIndex:r,onSelected:s,orientation:a,registerItem:d,registerTabIdLookup:i,selectionFollowsFocus:u,totalSubitemCount:p,value:h,getTabId:c,getTabPanelId:g}=e,f=o.useMemo(()=>({getItemIndex:r,registerItem:d,totalSubitemCount:p}),[d,r,p]),C=o.useMemo(()=>({direction:n,getTabId:c,getTabPanelId:g,onSelected:s,orientation:a,registerTabIdLookup:i,selectionFollowsFocus:u,value:h}),[n,c,g,s,a,i,u,h]);return x(Ce.Provider,{value:f,children:x(Ee.Provider,{value:C,children:l})})}const ze=["children","value","defaultValue","orientation","direction","onChange","selectionFollowsFocus","slotProps","slots"],Be=t=>{const{orientation:e}=t;return ve({root:["root",e]},Ve($e))},je=o.forwardRef(function(e,l){var n;const{children:r,orientation:s="horizontal",direction:a="ltr",slotProps:d={},slots:i={}}=e,u=Te(e,ze),{contextValue:p}=Ne(e),h=m({},e,{orientation:s,direction:a}),c=Be(h),g=(n=i.root)!=null?n:"div",f=xe({elementType:g,externalSlotProps:d.root,externalForwardedProps:u,additionalProps:{ref:l},ownerState:h,className:c.root});return x(g,m({},f,{children:x(Ue,{value:p,children:r})}))});function Ke(t,e,l,n,r,s){if(l.length===0||!n&&l.every((d,i)=>r(d,i)))return-1;let a=t;for(;;){if(!s&&e==="next"&&a===l.length||!s&&e==="previous"&&a===-1)return-1;if(n?!1:r(l[a],a))a+=e==="next"?1:-1,s&&(a=(a+l.length)%l.length);else return a}}function k(t,e,l){var n;const{items:r,isItemDisabled:s,disableListWrap:a,disabledItemsFocusable:d,itemComparer:i,focusManagement:u}=l,p=u==="DOM"?0:-1,h=r.length-1,c=t==null?-1:r.findIndex(v=>i(v,t));let g,f,C=!a;switch(e){case"reset":if(p===-1)return null;g=0,f="next",C=!1;break;case"start":g=0,f="next",C=!1;break;case"end":g=h,f="previous",C=!1;break;default:{const v=c+e;v<0?!C&&c!==-1||Math.abs(e)>1?(g=0,f="next"):(g=h,f="previous"):v>h?!C||Math.abs(e)>1?(g=h,f="previous"):(g=0,f="next"):(g=v,f=e>=0?"next":"previous")}}const S=Ke(g,f,r,d,s,C);return S===-1&&t!==null&&!s(t,c)?t:(n=r[S])!=null?n:null}function Ge(t,e,l,n){return l==="none"?[]:l==="single"?n(e[0],t)?e:[t]:e.some(r=>n(r,t))?e.filter(r=>!n(r,t)):[...e,t]}function Se(t,e,l){const{itemComparer:n,isItemDisabled:r,selectionMode:s,items:a}=l,{selectedValues:d}=e,i=a.findIndex(p=>n(t,p));if(r(t,i))return e;const u=Ge(t,d,s,n);return m({},e,{selectedValues:u,highlightedValue:t})}function We(t,e,l){const n=e.highlightedValue,{orientation:r,pageSize:s}=l;switch(t){case"Home":return m({},e,{highlightedValue:k(n,"start",l)});case"End":return m({},e,{highlightedValue:k(n,"end",l)});case"PageUp":return m({},e,{highlightedValue:k(n,-s,l)});case"PageDown":return m({},e,{highlightedValue:k(n,s,l)});case"ArrowUp":if(r!=="vertical")break;return m({},e,{highlightedValue:k(n,-1,l)});case"ArrowDown":if(r!=="vertical")break;return m({},e,{highlightedValue:k(n,1,l)});case"ArrowLeft":{if(r==="vertical")break;return m({},e,{highlightedValue:k(n,r==="horizontal-ltr"?-1:1,l)})}case"ArrowRight":{if(r==="vertical")break;return m({},e,{highlightedValue:k(n,r==="horizontal-ltr"?1:-1,l)})}case"Enter":case" ":return e.highlightedValue===null?e:Se(e.highlightedValue,e,l)}return e}function qe(t,e){return e.focusManagement==="DOM"?t:m({},t,{highlightedValue:null})}function Je(t,e,l){var n;const r=(n=l(t))==null?void 0:n.trim().toLowerCase();return!r||r.length===0?!1:r.indexOf(e)===0}function Ye(t,e,l){const{items:n,isItemDisabled:r,disabledItemsFocusable:s,getItemAsString:a}=l,d=e.length>1;let i=d?t.highlightedValue:k(t.highlightedValue,1,l);for(let u=0;u<n.length;u+=1){if(!i||!d&&t.highlightedValue===i)return t;if(Je(i,e,a)&&(!r(i,n.indexOf(i))||s))return m({},t,{highlightedValue:i});i=k(i,1,l)}return t}function Xe(t,e,l,n){var r;const{itemComparer:s,focusManagement:a}=n;let d=null;if(l.highlightedValue!=null){var i;d=(i=t.find(h=>s(h,l.highlightedValue)))!=null?i:null}else a==="DOM"&&e.length===0&&(d=k(null,"reset",n));const p=((r=l.selectedValues)!=null?r:[]).filter(h=>t.some(c=>s(c,h)));return m({},l,{highlightedValue:d,selectedValues:p})}function Qe(t,e){return m({},t,{highlightedValue:k(null,"reset",e)})}function Ie(t,e){const{type:l,context:n}=e;switch(l){case R.keyDown:return We(e.key,t,n);case R.itemClick:return Se(e.item,t,n);case R.blur:return qe(t,n);case R.textNavigation:return Ye(t,e.searchString,n);case R.itemsChange:return Xe(e.items,e.previousItems,t,n);case R.resetHighlight:return Qe(t,n);default:return t}}function Ze(){const t=new Map;function e(n,r){let s=t.get(n);return s?s.add(r):(s=new Set([r]),t.set(n,s)),()=>{s.delete(r),s.size===0&&t.delete(n)}}function l(n,...r){const s=t.get(n);s&&s.forEach(a=>a(...r))}return{subscribe:e,publish:l}}function et(){const t=o.useRef();return t.current||(t.current=Ze()),t.current}const oe="select:change-selection",ie="select:change-highlight";function tt(){const t=et(),e=o.useCallback(s=>{t.publish(oe,s)},[t]),l=o.useCallback(s=>{t.publish(ie,s)},[t]),n=o.useCallback(s=>t.subscribe(oe,s),[t]),r=o.useCallback(s=>t.subscribe(ie,s),[t]);return{notifySelectionChanged:e,notifyHighlightChanged:l,registerSelectionChangeHandler:n,registerHighlightChangeHandler:r}}function nt(t,e){return t===e}const X={},ue=()=>{};function Q(t,e){const l=m({},t);return Object.keys(e).forEach(n=>{e[n]!==void 0&&(l[n]=e[n])}),l}function lt(t){const{nextState:e,initialState:l,stateComparers:n,onStateChange:r,controlledProps:s,lastActionRef:a}=t,d=o.useRef(l);o.useEffect(()=>{if(a.current===null)return;const i=Q(d.current,s);Object.keys(e).forEach(u=>{var p;const h=(p=n[u])!=null?p:nt,c=e[u],g=i[u];if(g==null&&c!=null||g!=null&&c==null||g!=null&&c!=null&&!h(c,g)){var f,C;r==null||r((f=a.current.event)!=null?f:null,u,c,(C=a.current.type)!=null?C:"",e)}}),d.current=e,a.current=null},[d,e,a,r,n,s])}function rt(t){const e=o.useRef(null),{reducer:l,initialState:n,controlledProps:r=X,stateComparers:s=X,onStateChange:a=ue,actionContext:d}=t,i=o.useCallback((c,g)=>{e.current=g;const f=Q(c,r);return l(f,g)},[r,l]),[u,p]=o.useReducer(i,n),h=o.useCallback(c=>{p(m({},c,{context:d}))},[d]);return lt({nextState:u,initialState:n,stateComparers:s??X,onStateChange:a??ue,controlledProps:r,lastActionRef:e}),[Q(u,r),h]}function ce(t,e){const l=o.useRef(t);return o.useEffect(()=>{l.current=t},e??[t]),l}const st=500;function at(t){const e=o.useRef({searchString:"",lastTime:null});return o.useCallback(l=>{if(l.key.length===1&&l.key!==" "){const n=e.current,r=l.key.toLowerCase(),s=performance.now();n.searchString.length>0&&n.lastTime&&s-n.lastTime>st?n.searchString=r:(n.searchString.length!==1||r!==n.searchString)&&(n.searchString+=r),n.lastTime=s,t(n.searchString,l)}},[t])}const de={},ot=()=>{},it=(t,e)=>t===e,ut=()=>!1,ct=t=>typeof t=="string"?t:String(t),dt=()=>({highlightedValue:null,selectedValues:[]});function ht(t){const{controlledProps:e=de,disabledItemsFocusable:l=!1,disableListWrap:n=!1,focusManagement:r="activeDescendant",getInitialState:s=dt,getItemDomElement:a,getItemId:d,isItemDisabled:i=ut,rootRef:u,onStateChange:p=ot,items:h,itemComparer:c=it,getItemAsString:g=ct,onChange:f,onHighlightChange:C,onItemsChange:S,orientation:v="vertical",pageSize:N=5,reducerActionContext:_=de,selectionMode:D="single",stateReducer:U}=t,z=o.useRef(null),B=_e(u,z),E=o.useCallback((T,b,V)=>{if(C==null||C(T,b,V),r==="DOM"&&b!=null&&(V===R.itemClick||V===R.keyDown||V===R.textNavigation)){var I;a==null||(I=a(b))==null||I.focus()}},[a,C,r]),H=o.useMemo(()=>({highlightedValue:c,selectedValues:(T,b)=>ae(T,b,c)}),[c]),Z=o.useCallback((T,b,V,I,Y)=>{switch(p==null||p(T,b,V,I,Y),b){case"highlightedValue":E(T,V,I);break;case"selectedValues":f==null||f(T,V,I);break}},[E,f,p]),P=o.useMemo(()=>({disabledItemsFocusable:l,disableListWrap:n,focusManagement:r,isItemDisabled:i,itemComparer:c,items:h,getItemAsString:g,onHighlightChange:E,orientation:v,pageSize:N,selectionMode:D,stateComparers:H}),[l,n,r,i,c,h,g,E,v,N,D,H]),w=s(),y=U??Ie,Re=o.useMemo(()=>m({},_,P),[_,P]),[G,M]=rt({reducer:y,actionContext:Re,initialState:w,controlledProps:e,stateComparers:H,onStateChange:Z}),{highlightedValue:O,selectedValues:W}=G,ke=at((T,b)=>M({type:R.textNavigation,event:b,searchString:T})),ee=ce(W),q=ce(O),J=o.useRef([]);o.useEffect(()=>{ae(J.current,h,c)||(M({type:R.itemsChange,event:null,items:h,previousItems:J.current}),J.current=h,S==null||S(h))},[h,c,M,S]);const{notifySelectionChanged:te,notifyHighlightChanged:ne,registerHighlightChangeHandler:le,registerSelectionChangeHandler:re}=tt();o.useEffect(()=>{te(W)},[W,te]),o.useEffect(()=>{ne(O)},[O,ne]);const we=T=>b=>{var V;if((V=T.onKeyDown)==null||V.call(T,b),b.defaultMuiPrevented)return;const I=["Home","End","PageUp","PageDown"];v==="vertical"?I.push("ArrowUp","ArrowDown"):I.push("ArrowLeft","ArrowRight"),r==="activeDescendant"&&I.push(" ","Enter"),I.includes(b.key)&&b.preventDefault(),M({type:R.keyDown,key:b.key,event:b}),ke(b)},ye=T=>b=>{var V,I;(V=T.onBlur)==null||V.call(T,b),!b.defaultMuiPrevented&&((I=z.current)!=null&&I.contains(b.relatedTarget)||M({type:R.blur,event:b}))},Me=(T={})=>{const b=He(T);return m({},T,{"aria-activedescendant":r==="activeDescendant"&&O!=null?d(O):void 0,tabIndex:r==="DOM"?-1:0,ref:B},b,{onBlur:ye(b),onKeyDown:we(b)})},se=o.useCallback(T=>{var b;const V=h.findIndex(j=>c(j,T)),I=((b=ee.current)!=null?b:[]).some(j=>j!=null&&c(T,j)),Y=i(T,V),De=q.current!=null&&c(T,q.current);return{disabled:Y,focusable:r==="DOM",highlighted:De,index:V,selected:I}},[h,i,c,ee,q,r]),Le=o.useMemo(()=>({dispatch:M,getItemState:se,registerHighlightChangeHandler:le,registerSelectionChangeHandler:re}),[M,se,le,re]);return o.useDebugValue({state:G}),{contextValue:Le,dispatch:M,getRootProps:Me,rootRef:B,state:G}}function gt(t){return be("MuiTabsList",t)}pe("MuiTabsList",["root","horizontal","vertical"]);const Pe={valueChange:"valueChange"};function ft(t,e){if(e.type===Pe.valueChange)return m({},t,{highlightedValue:e.value});const l=Ie(t,e),{context:{selectionFollowsFocus:n}}=e;if(e.type===R.itemsChange){if(l.selectedValues.length>0)return m({},l,{highlightedValue:l.selectedValues[0]});k(null,"reset",e.context)}return n&&l.highlightedValue!=null?m({},l,{selectedValues:[l.highlightedValue]}):l}function bt(t){var e;const{rootRef:l}=t,{direction:n="ltr",onSelected:r,orientation:s="horizontal",value:a,registerTabIdLookup:d,selectionFollowsFocus:i}=Oe(),{subitems:u,contextValue:p}=me(),h=o.useCallback(P=>{var w;return(w=u.get(P))==null?void 0:w.id},[u]);d(h);const c=o.useMemo(()=>Array.from(u.keys()),[u]),g=o.useCallback(P=>{var w,y;return P==null?null:(w=(y=u.get(P))==null?void 0:y.ref.current)!=null?w:null},[u]),f=n==="rtl";let C;s==="vertical"?C="vertical":C=f?"horizontal-rtl":"horizontal-ltr";const S=o.useCallback((P,w)=>{var y;r(P,(y=w[0])!=null?y:null)},[r]),v=o.useMemo(()=>a===void 0?{}:a!=null?{selectedValues:[a]}:{selectedValues:[]},[a]),N=o.useCallback(P=>{var w,y;return(w=(y=u.get(P))==null?void 0:y.disabled)!=null?w:!1},[u]),{contextValue:_,dispatch:D,getRootProps:U,state:{highlightedValue:z,selectedValues:B},rootRef:E}=ht({controlledProps:v,disabledItemsFocusable:!i,focusManagement:"DOM",getItemDomElement:g,isItemDisabled:N,items:c,rootRef:l,onChange:S,orientation:C,reducerActionContext:o.useMemo(()=>({selectionFollowsFocus:i||!1}),[i]),selectionMode:"single",stateReducer:ft});o.useEffect(()=>{a!==void 0&&a!=null&&D({type:Pe.valueChange,value:a})},[D,a]);const H=(P={})=>m({},P,U(P),{"aria-orientation":s==="vertical"?"vertical":void 0,role:"tablist"});return{contextValue:o.useMemo(()=>m({},p,_),[p,_]),dispatch:D,getRootProps:H,highlightedValue:z,isRtl:f,orientation:s,rootRef:E,selectedValue:(e=B[0])!=null?e:null}}function pt(t){const{value:e,children:l}=t,{dispatch:n,getItemIndex:r,getItemState:s,registerHighlightChangeHandler:a,registerSelectionChangeHandler:d,registerItem:i,totalSubitemCount:u}=e,p=o.useMemo(()=>({dispatch:n,getItemState:s,getItemIndex:r,registerHighlightChangeHandler:a,registerSelectionChangeHandler:d}),[n,r,s,a,d]),h=o.useMemo(()=>({getItemIndex:r,registerItem:i,totalSubitemCount:u}),[i,r,u]);return x(Ce.Provider,{value:h,children:x(Ae.Provider,{value:p,children:l})})}const mt=["children","slotProps","slots"],Ct=t=>{const{orientation:e}=t;return ve({root:["root",e]},Ve(gt))},Tt=o.forwardRef(function(e,l){var n;const{children:r,slotProps:s={},slots:a={}}=e,d=Te(e,mt),{isRtl:i,orientation:u,getRootProps:p,contextValue:h}=bt({rootRef:l}),c=m({},e,{isRtl:i,orientation:u}),g=Ct(c),f=(n=a.root)!=null?n:"div",C=xe({elementType:f,getSlotProps:p,externalSlotProps:s.root,externalForwardedProps:d,ownerState:c,className:g.root});return x(pt,{value:h,children:x(f,m({},C,{children:r}))})}),wt={title:"Components/TabbedContent"},K=()=>L(je,{defaultValue:0,children:[L(Tt,{children:[x(A,{children:"Tab #1"}),x(A,{children:"Tab #2"}),x(A,{children:"Tab #3"}),x(A,{children:"Tab #4"}),x(A,{children:"Tab #5"})]}),L(F,{children:[x("p",{children:"Tab Panel #1"}),x("p",{children:$.lorem.paragraphs(3)})]}),L(F,{children:[x("p",{children:"Tab Panel #2"}),x("p",{children:$.lorem.paragraphs(3)})]}),L(F,{children:[x("p",{children:"Tab Panel #3"}),x("p",{children:$.lorem.paragraphs(3)})]}),L(F,{children:[x("p",{children:"Tab Panel #4"}),x("p",{children:$.lorem.paragraphs(3)})]}),L(F,{children:[x("p",{children:"Tab Panel #5"}),x("p",{children:$.lorem.paragraphs(3)})]})]});var he,ge,fe;K.parameters={...K.parameters,docs:{...(he=K.parameters)==null?void 0:he.docs,source:{originalSource:`() => {
  return <Tabs defaultValue={0}>
      <TabsList>
        <Tab>Tab #1</Tab>
        <Tab>Tab #2</Tab>
        <Tab>Tab #3</Tab>
        <Tab>Tab #4</Tab>
        <Tab>Tab #5</Tab>
      </TabsList>

      <TabPanel>
        <p>Tab Panel #1</p>
        <p>{faker.lorem.paragraphs(3)}</p>
      </TabPanel>
      <TabPanel>
        <p>Tab Panel #2</p>
        <p>{faker.lorem.paragraphs(3)}</p>
      </TabPanel>
      <TabPanel>
        <p>Tab Panel #3</p>
        <p>{faker.lorem.paragraphs(3)}</p>
      </TabPanel>
      <TabPanel>
        <p>Tab Panel #4</p>
        <p>{faker.lorem.paragraphs(3)}</p>
      </TabPanel>
      <TabPanel>
        <p>Tab Panel #5</p>
        <p>{faker.lorem.paragraphs(3)}</p>
      </TabPanel>
    </Tabs>;
}`,...(fe=(ge=K.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};const yt=["Default"];export{K as Default,yt as __namedExportsOrder,wt as default};
//# sourceMappingURL=TabbedContent.stories-cc7151d8.js.map

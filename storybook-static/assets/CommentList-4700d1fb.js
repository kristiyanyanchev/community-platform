import{j as C,a as n}from"./jsx-runtime-913be41c.js";import{r as b}from"./index-2506bfc3.js";import{B as E}from"./Button-ed8e0074.js";import{B as L}from"./ButtonShowReplies-425c9b7c.js";import{C as S}from"./CommentItem-6c4cb62b.js";import{C as B}from"./CreateReply-e3b3b21f.js";import{I as D}from"./Icon-a3188c61.js";import{F as q,B as x}from"./theme-ui-components.esm-29c4d01e.js";const w=5,V=o=>{const[e,I]=b.useState(!1),{comment:a,handleDelete:s,handleEditRequest:i,handleEdit:d,supportReplies:m,isLoggedIn:u,isReplies:l,maxLength:p,onSubmitReply:c,showAvatar:h}=o,{_id:f,creatorName:g,replies:r}=a,_=()=>n(x,{sx:{paddingTop:1,paddingRight:2},children:n(D,{glyph:"arrow-curved-bottom-right"})}),y=()=>n(L,{creatorName:g,isShowReplies:e,replies:r||[],setIsShowReplies:()=>I(!e)}),t=()=>{if(c)return n(B,{commentId:f,isLoggedIn:u,maxLength:p,onSubmit:c})};return C(x,{sx:{backgroundColor:"white",borderRadius:1,padding:l?0:2},children:[n(S,{comment:a,handleEditRequest:i,handleDelete:s,handleEdit:d,isReply:!!l,showAvatar:h}),m&&!e&&y(),m&&e?C(q,{sx:{alignItems:"stretch",flexDirection:"row"},children:[r&&_(),C(q,{sx:{alignItems:"stretch",flexDirection:"column",flex:1},children:[n(v,{comments:r||[],handleDelete:s,handleEdit:d,handleEditRequest:i,isLoggedIn:u,isReplies:!0,maxLength:p,supportReplies:!1,showAvatar:h}),t(),y()]})]}):null]})},v=o=>{const{comments:e,handleDelete:I,handleEdit:a,handleEditRequest:s,highlightedCommentId:i,isLoggedIn:d,isReplies:m,maxLength:u,onMoreComments:l,onSubmitReply:p,showAvatar:c,supportReplies:h=!1}=o,[f,g]=b.useState(1),r=f*w,_=t=>{setTimeout(()=>{var R;(R=document.getElementById(`comment:${t}`))==null||R.scrollIntoView({behavior:"smooth",block:"start"})},0)},y=()=>{l&&l(),g(f+1)};return b.useEffect(()=>{if(!i)return;const t=e.findIndex(R=>i.includes(R._id));t>=0&&(g(Math.floor(t/w)+1),_(i))},[i,e]),C(q,{sx:{gap:2,flexDirection:"column"},children:[e&&e.slice(0,r).map(t=>n(x,{"data-testid":"CommentList: item",sx:{border:`${i===t._id?"2px dashed black":"none"}`,borderRadius:1},children:n(V,{comment:t,handleEditRequest:s,handleDelete:I,handleEdit:a,isLoggedIn:d,isReplies:m,maxLength:u,onSubmitReply:p,supportReplies:h,showAvatar:c})},t._id)),e&&e.length>r&&n(q,{children:n(E,{sx:{margin:"0 auto"},variant:"outline",onClick:y,children:"show more comments"})})]})};try{V.displayName="CommentContainer",V.__docgenInfo={description:"",displayName:"CommentContainer",props:{comment:{defaultValue:null,description:"",name:"comment",required:!0,type:{name:"IComment"}},handleCommentReply:{defaultValue:null,description:"",name:"handleCommentReply",required:!1,type:{name:"((commentId: string | null) => void)"}},supportReplies:{defaultValue:null,description:"",name:"supportReplies",required:!0,type:{name:"boolean"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(_id: string) => Promise<void>"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!0,type:{name:"(_id: string, comment: string) => Promise<void>"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!0,type:{name:"() => Promise<void>"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},isReplies:{defaultValue:null,description:"",name:"isReplies",required:!0,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},onSubmitReply:{defaultValue:null,description:"",name:"onSubmitReply",required:!1,type:{name:"((_id: string, reply: string) => Promise<void>)"}},showAvatar:{defaultValue:null,description:"",name:"showAvatar",required:!0,type:{name:"boolean"}}}}}catch{}try{v.displayName="CommentList",v.__docgenInfo={description:"",displayName:"CommentList",props:{supportReplies:{defaultValue:null,description:"",name:"supportReplies",required:!1,type:{name:"boolean"}},comments:{defaultValue:null,description:"",name:"comments",required:!0,type:{name:"IComment[]"}},highlightedCommentId:{defaultValue:null,description:"",name:"highlightedCommentId",required:!1,type:{name:"string"}},onMoreComments:{defaultValue:null,description:"",name:"onMoreComments",required:!1,type:{name:"(() => void)"}},setCommentBeingRepliedTo:{defaultValue:null,description:"",name:"setCommentBeingRepliedTo",required:!1,type:{name:"((commentId: string | null) => void)"}},handleDelete:{defaultValue:null,description:"",name:"handleDelete",required:!0,type:{name:"(_id: string) => Promise<void>"}},handleEdit:{defaultValue:null,description:"",name:"handleEdit",required:!0,type:{name:"(_id: string, comment: string) => Promise<void>"}},handleEditRequest:{defaultValue:null,description:"",name:"handleEditRequest",required:!0,type:{name:"() => Promise<void>"}},isLoggedIn:{defaultValue:null,description:"",name:"isLoggedIn",required:!0,type:{name:"boolean"}},isReplies:{defaultValue:null,description:"",name:"isReplies",required:!0,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!0,type:{name:"number"}},onSubmitReply:{defaultValue:null,description:"",name:"onSubmitReply",required:!1,type:{name:"((_id: string, reply: string) => Promise<void>)"}},showAvatar:{defaultValue:null,description:"",name:"showAvatar",required:!0,type:{name:"boolean"}}}}}catch{}export{v as C};
//# sourceMappingURL=CommentList-4700d1fb.js.map

"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[80098],{820428:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(107366),i=n(217058),o=n(546689);async function a(e){let t=(0,o.i$)(),n=(0,o.nR)(),a=(0,o.di)(),s=t?t.map(({pageType:e,...t})=>t):null,l={is_register:e??!1};if(s&&(l.unauth_visited_pages=JSON.stringify(s)),n&&(l.invite_redemption=JSON.stringify(n)),a&&(l.paid_landing=JSON.stringify(a)),s||n||a){let e=await (0,r.Z)({url:"/v3/orientation/user_landing_signals/",method:"POST",data:l});(0,i.My)(`landing_signals.flush.${e.status}`),(0,o.z$)()}}},974371:(e,t,n)=>{n.d(t,{M:()=>f,Z:()=>y});var r=n(667294),i=n(86785),o=n(342513),a=n(897650),s=n(11453),l=n(992083),u=n(340523),c=n(5859),_=n(217058),g=n(554786),d=n(149722),p=n(785893);let{Provider:h,useMaybeHook:f}=(0,o.Z)("GoogleSignInApi"),m=()=>{let e=(0,g.HG)(),{checkExperiment:t}=(0,u.F)();return t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled};function y({children:e}){let t=(0,d.Z)(),{isAuth:n}=t,o=m(),f=function(){let e=(0,g.HG)(),{checkExperiment:t}=(0,u.F)(),{userAgent:{browserName:n,platform:r}}=(0,c.B)(),o=n??"";if("ios"===r||(0,i.G6)(o))return!0;switch(t(`${e?"dweb":"mweb"}_unauth_${(0,i.vU)(o)?"firefox":"remaining"}_itp_support`).group){case"enabled":return!0;case"enabled_default":return;default:return!1}}(),y=(0,g.HG)(),{checkExperiment:b}=(0,u.F)(),{userAgent:v}=(0,c.B)(),w=(0,s.JZ)(y,b,v,n),S=(0,s.Qs)(t),P=S&&w?t.email:void 0,L=(0,r.useRef)(null),N=(0,r.useRef)(new Set),O=(0,r.useRef)(new Set),A=(0,r.useRef)(null),{language:k}=(0,c.B)(),C=y?"dweb":"mweb",M=(0,r.useRef)(!1),R=(0,r.useCallback)(()=>{if(M.current)return;M.current=!0;let e=!1,t=()=>{let t=(0,a.Fm)();t&&!e&&(e=!0,(0,l.Z)({type:"loadScript",status:"success"}),(0,l.Z)({type:"apiClient",valid:!!t}),A.current=t,(0,a.OY)({autoSelect:!S,itpSupport:f,isFedCMEnabled:(!n||S)&&w,loginHint:P},e=>{if((0,l.Z)({type:"response",valid:!!e}),e){if((0,_.My)(`${C}.google_sign_in.select_by.${e.select_by}`),"SIGN_IN_WITH_GOOGLE_BUTTON"===(0,a.PL)(e.select_by)){let t=Array.from(N.current),n=t[t.length-1],r=L.current;n?n(e):r&&r(e)}else L.current?.(e)}}),O.current.forEach(e=>{e()}),O.current.clear())};window.onGoogleLibraryLoad=()=>t(),(0,l.Z)({type:"loadScript",status:"start"}),(0,a.Px)(void 0,k).then(()=>{t()}).catch(()=>{})},[k,f,n,S,w,P,C]);(0,r.useEffect)(()=>{o?(N.current.clear(),O.current.clear()):R()},[o,R]);let U=(0,r.useRef)({ensureInit:(e,t)=>(R(),"button"===e?N.current.add(t):L.current=t,new Promise(e=>{A.current?e(void 0):O.current.add(e)})),removeButtonCallback:e=>{N.current.delete(e)}});return(0,p.jsx)(h,{value:U.current,children:e})}},897650:(e,t,n)=>{n.d(t,{Fm:()=>a,OY:()=>l,PL:()=>c,Px:()=>s,mK:()=>_,ru:()=>u});var r=n(794658),i=n(702497),o=n(217058);let a=()=>window?.google?.accounts?.id,s=(e,t)=>(0,r.Z)("https://accounts.google.com/gsi/client"+(t?`?hl=${t}`:""),e?.unsafe?null:"GSI"),l=({autoSelect:e,itpSupport:t,isFedCMEnabled:n,loginHint:r},o)=>{let s={auto_select:e??!1,client_id:i.v3o,callback:o,cancel_on_tap_outside:!1,context:"use",itp_support:t,use_fedcm_for_prompt:n,login_hint:r};a()?.initialize(s)},u=({buttonRef:e,isDesktop:t,locale:n,logo_alignment:r,onClick:i})=>{let s=a();if(s&&e.current){let t=e.current.offsetWidth;s.renderButton(e.current,{locale:n,size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px",logo_alignment:r,click_listener:()=>{i&&i(),(0,o.EX)({event:"start",provider:"google"})}})}else(0,o.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},c=e=>["auto","fedcm_auto"].includes(e)?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",_=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},992083:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(306775),i=n(217058);let o=e=>(0,i.dy)({event:e,provider:"google"}),a=e=>(0,r.RP)("google_autologin",e),s=e=>(0,r.M3)("google_autologin",e),l=e=>{switch(e.type){case"loadScript":"start"===e.status?(o("start"),o("load_script_start"),s("autoLoginGoogleStart")):"success"===e.status?o("load_script_success"):o("load_script_failure");break;case"apiClient":e.valid?(o("initialize_library"),s("autoLoginGoogleInitEnd")):(a("noAccountFound"),o("global_object_not_found"));break;case"response":e.valid?(o("receive_credential_response_from_provider"),(0,i.EX)({event:"receive_credential_response_from_provider",provider:"google"})):(a("noResponse"),(0,i.EX)({event:"receive_no_credential_response_from_provider",provider:"google"}));break;case"autologin":"start"===e.status?(o("pinterest_login_start"),(0,i.NC)("press_google_one_tap_other"),(0,r.M3)("google_autologin","autoLoginGoogleEnd"),(0,r.PA)("google_autologin")):("success"===e.status?o("pinterest_login_success"):o("pinterest_login_failure"),o("end"));break;case"manualLoginAttempt":(0,i.NC)(e.fromConnectButton?"press_google_one_tap_button":"press_google_one_tap"),(0,r.PA)("google_autologin")}}},182962:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294),i=n(340523);let o=()=>{let e=(0,i.F)();return(0,r.useCallback)(()=>{e.flush()},[e])}},722363:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(667294),i=n(373314),o=n(217058);function a(){return(0,r.useCallback)(e=>{e.action&&e.event?(0,o.My)("pinner_conversion",{...e,type:e.type||"none",trigger:e.trigger||"other",referrer:(0,i.Z)()}):(0,o.My)("pinner_conversion.missing_tags")},[])}},487487:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(689390),i=n(139655);let o=e=>{let t=/^\/pin\/([a-zA-Z0-9-]+)/,n=(0,i.Z)(e);if(t.test(n.path)){let e=n.path.match(t);if(e)return(0,r.Z)(e[1]).pinId||void 0}}},546689:(e,t,n)=>{n.d(t,{Cb:()=>D,Ff:()=>e_,K7:()=>j,Lp:()=>Z,MM:()=>ea,N7:()=>W,O0:()=>ed,OJ:()=>T,PW:()=>ep,Rh:()=>ei,S2:()=>I,Vd:()=>Y,Yi:()=>es,Yy:()=>eu,Z4:()=>M,ZN:()=>w,dc:()=>z,di:()=>E,i$:()=>O,iU:()=>K,nR:()=>B,oQ:()=>eg,t_:()=>L,z$:()=>x});var r=n(667294),i=n(216167),o=n(224796),a=n(836313),s=n(658583),l=n(622541),u=n(342513),c=n(731714),_=n(191313),g=n(573810),d=n(217058),p=n(624797),h=n(487487),f=n(494125),m=n(407053),y=n(942397),b=n(785893);let v=new Set([...a.Z,"UK"]),w=["utm_pai","utm_source","invite_code"],S=e=>{let t=[...e];return t.reverse(),t},P=function(e){return{...e,ts:Date.now()}},L=()=>(0,_.qn)(m.tz,"");function N(e,t){let n;try{n=JSON.parse(e)}catch(e){n=t}return n}let O=()=>N(L(),[]),A=()=>N((0,_.qn)(o.s1,""),[]),k=()=>N((0,_.qn)(o.Vb,""),[]),C=({pinId:e,link:t,imageSignature:n,domain:r})=>{let i=[...k()],a=i.length,s=a?i[0].pinId:"";if(a>=m.eA&&i.pop(),!a||e!==s){let a=P({pinId:e,link:t,imageSignature:n,domain:r});(0,_.Nh)(o.Vb,JSON.stringify([a].concat(i)))}},M=(e,t)=>{let n=[...O()],r=n.length,i=r?n[0].path:"";if(r>=m.eA&&n.pop(),!r||e!==i){let r=P({path:e,pageType:t});(0,_.Nh)(m.tz,JSON.stringify([r].concat(n)))}},R=()=>N((0,_.qn)(o.ny,""),[]),U=()=>parseInt((0,_.qn)(o.rN,0),10),$=()=>N((0,_.qn)(m.dx,""),[]),B=()=>N((0,_.qn)(m.Lg,""),null),Z=e=>{if(!e)return;let t=[...$()],n=P({inviteCode:e});(0,_.Nh)(m.Lg,JSON.stringify(n)),t.length>=m.eA||(0,_.Nh)(m.dx,JSON.stringify([n].concat(t)))},E=()=>N((0,_.qn)(m.eV,""),null),I=(e,t)=>{if(!e)return;let n=P({...!!t&&{adImageUrl:t},campaignId:e});(0,_.Nh)(m.eV,JSON.stringify(n))},T=()=>(0,_.qn)(m.fo,""),D=e=>{(0,_.Nh)(m.fo,e)},x=()=>{L()&&(0,_.L_)(m.tz),(0,_.qn)(o.ny)&&(0,_.L_)(o.ny),(0,_.qn)(o.Vb)&&(0,_.L_)(o.Vb),B()&&((0,_.L_)(m.Lg),(0,_.L_)(m.dx)),E()&&(0,_.L_)(m.eV),T()&&(0,_.L_)(m.fo)},G=()=>{let e=O().filter(e=>"closeup"===e.pageType),t=new Set(e.map(({path:e})=>e));return S(e).reduce((e,n)=>(t.has(n.path)&&(t.delete(n.path),n.id=(0,h.Z)(n.path),e.push(n)),e),[])};function z(){return G().length}let H=({query:e,rs:t,scope:n,rg:r})=>{let i=[...R()],a=i.length,s=a?i[0].query:"";a>=m.eA&&i.pop();let l=i.filter(t=>t.query!==e);if(!a||e!==s){let i=P({query:e,rs:t,scope:n,rg:r});(0,_.Nh)(o.ny,JSON.stringify([i].concat(l)))}},F=({query:e})=>{let t=[...R()].filter(t=>t.query!==e);(0,_.Nh)(o.ny,JSON.stringify(t))},J=()=>{try{return JSON.parse((0,_.qn)(o.Y8))}catch(e){return null}},q=(e,t,n)=>{let r="pc.auth.multi_account_storage";e&&(r+=".email"),n&&(r+=".facebook"),t&&(r+=".google"),(0,d.My)(r)},V=({hasPassword:e,googleConnection:t,facebookConnection:n,pastLogins:r})=>{let i=[],a=c.Z.getItem(o.V6),s=n||r.includes("facebook")||"facebook"===a,l=t||r.includes("google")||"google"===a;return e&&i.push("email"),s&&i.push("facebook"),l&&i.push("google"),q(e,l,s),i},W=({avatar:e,username:t,email:n,hasPassword:r,googleConnection:i,facebookConnection:a})=>{let s=J(),l=c.Z.getItem(o.V6),u=[];s?(u=V({hasPassword:r,googleConnection:i,facebookConnection:a,pastLogins:s[t]?.loginMethods||u}),s[t]={avatar:e,loginMethods:u,email:n,lastLogin:l},c.Z.setItem(o.Y8,s),(0,d.My)(`pc.auth.multiple_account_storage.num_accounts.${Object.keys(s).length}`)):(u=V({hasPassword:r,googleConnection:i,facebookConnection:a,pastLogins:[]}),c.Z.setItem(o.Y8,{[t]:{avatar:e,loginMethods:u,email:n,lastLogin:l}}),(0,d.My)("pc.auth.multiple_account_storage.num_accounts.1"))},j=()=>({count:1,time:0,ts:Date.now()}),K=()=>{try{let{count:e,time:t,ts:n}=JSON.parse((0,_.qn)(o.SI));if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return{count:e,time:t,ts:n};throw Error("Invalid revisitation data")}catch(e){return j()}},Y=e=>{(0,_.Nh)(o.SI,JSON.stringify(P(e)))},Q=(e,t,n)=>{if(e>=n)return`${n}+`;if(e<=0)return"0";let r=e.toString();if(e>t){let n=Math.floor(e/t);r=`${n*t}+`}return r},X=e=>Q(e,5,20),ee=(e,t,n)=>t.reduce((t,n)=>(Array.isArray(e[n])&&(t[n+"Count"]=X(e[n].length)),t),n),et=e=>({...e,_updateUnauthUserAggregateDefinitions:function(){let{completedSearches:t,closeupPins:n,clickthroughPins:r,downloadedPinsCount:i}=e;e.isQUS=Number(t.length>=1||n.length>=3||r.length>=1||i>=1)},_getDaysSinceLastRevisitation:function(){let{revisitationState:t}=e,{ts:n}=t,r=new Date,i=new Date(n||r),o=Math.max(Math.floor(Number(((r.getTime()-i.getTime())/864e5).toFixed(2))),0),a=Q(o,7,84);return[o,a]},getStatslogData:function(){return{core:ee(e,[],{isQUS:e.isQUS.toString(),isAllowedCountry:e.isAllowedCountry.toString(),daysSinceLastRevisitationBucket:e.daysSinceLastRevisitationBucket}),counts:ee(e,["closeupPins","completedSearches","clickthroughPins","savedPins","invitesRedeemed"],{revisitationCount:X(e.revisitationState.count||1),downloadedPinsCount:X(e.downloadedPinsCount)})}}}),en=({isAuthenticated:e,countryFromIp:t,countryFromHostName:n})=>{let r={isAuthenticated:Number(e),countryFromIp:t||"",countryFromHostName:n||"",closeupPins:[],completedSearches:[],clickthroughPins:[],downloadedPinsCount:0,savedPins:[],invitesRedeemed:[],isQUS:0,revisitationState:j(),daysSinceLastRevisitation:0,daysSinceLastRevisitationBucket:"0",isAllowedCountry:Number(!(v.has(t||"")||v.has(n||"")))};if(e||!r.isAllowedCountry)return Object.freeze({...et(r),...r});r.closeupPins=G(),r.completedSearches=R(),r.clickthroughPins=k(),r.downloadedPinsCount=U(),r.savedPins=A(),r.invitesRedeemed=$(),r.revisitationState=K();let i=et(r),[o,a]=i._getDaysSinceLastRevisitation();return r.daysSinceLastRevisitation=o,r.daysSinceLastRevisitationBucket=a,i._updateUnauthUserAggregateDefinitions(),Object.freeze({...i,...r})},{Provider:er,useHook:ei}=(0,u.Z)("UnauthUserStateContext");function eo(e,t){let{isAuthenticated:n,countryFromIp:r,countryFromHostName:i,isAllowedCountry:o}=e;if(n||!o)return e;switch(t.type){case"UPDATE":break;case"ADD_UNAUTH_COMPLETED_SEARCH":H(t.payload);break;case"REMOVE_UNAUTH_COMPLETED_SEARCH":F(t.payload);break;case"ADD_UNAUTH_CLICKTHROUGH_PIN":C(t.payload);break;default:return e}return en({isAuthenticated:n,countryFromIp:r,countryFromHostName:i})}function ea({children:e,initialState:t}){let[n,i]=(0,r.useReducer)(eo,t,en);(0,f.Z)(()=>{i({type:"UPDATE"})});let o=(0,r.useMemo)(()=>({unauthUserState:n,unauthUserStateDispatch:i}),[n,i]);return(0,b.jsx)(er,{value:o,children:e})}function es(){let e=i.Z.create("UnauthUserDataResource");return new Promise((t,n)=>{e.callGet().then(e=>{let r=e.resource_response.data,i=!!s.U2(l.x3);return r?((0,y.Wn)(r.medium_image_url)&&(r.medium_image_url=""),(0,d.My)(`mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_${i?"true":"false"}`),t(r)):((0,d.My)(`mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_${i?"true":"false"}`),n({}))}).catch(e=>{if(e&&e.message){let t=e.message.replace(/\s/g,"_").toLowerCase();(0,d.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${t}`)}else(0,d.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return n(e)})})}function el({i18n:e,location:t}){let n;let r=t.pathname.startsWith("/signup"),i=t.pathname.startsWith("/login");if(!r&&!i)return{showPLPBanner:!1,pinForBanner:null};try{n=JSON.parse((0,g.qn)(m.KH))}catch(e){n=[]}if(n&&n.length>0){let t=n[0];if(t)return t.bannerCopy=e.bt("Te esperan más ideas como esta", "More ideas like this await", "page banner with pin image that was signed up from", undefined, true),{showPLPBanner:!!t.image,pinForBanner:t}}return{showPLPBanner:!1,pinForBanner:null}}let eu=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function ec({i18n:e,location:t}){let n=t.state?.next||eu(t);if(n){let t=n.indexOf("?"),r=(0,p.mB)(n.substring(t));if(r.url&&r.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,p.Jx)(r.media),height:1,width:1},pinDescription:r.description,bannerCopy:e.bt("Guarda esta idea y descubre otras similares que te inspiren.", "Save this idea and discover more inspiration like it.", "page banner with pin image that was signed up from", undefined, true)}}}return{showPLPBanner:!1,pinForBanner:null}}function e_({i18n:e,location:t}){return ec({i18n:e,location:t}).showPLPBanner?ec({i18n:e,location:t}):el({i18n:e,location:t}).showPLPBanner?el({i18n:e,location:t}):{showPLPBanner:!1,pinForBanner:null}}let eg=(e,t)=>e?`https://i.pinimg.com/${t||"474x"}/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",ed=e=>e?`https://i.pinimg.com/75x75/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:"",ep=e=>e?`https://i.pinimg.com/236x/${e.substr(0,2)}/${e.substr(2,2)}/${e.substr(4,2)}/${e}.jpg`:""},942397:(e,t,n)=>{function r(e){return!!e?.is_matured_new_user}n.d(t,{IR:()=>a,V0:()=>r,Wn:()=>o,xT:()=>i});let i=e=>!!e&&2===e.login_state,o=e=>!!(e&&e.match(/\/static\/images\/user\/default_\d+\.png$/))||!!(e&&e.match(/\/images\/user\/default_\d+\.png$/));function a(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/80098.es_419-e17f083989561455.mjs.map
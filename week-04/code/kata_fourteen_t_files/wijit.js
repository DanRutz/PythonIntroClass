if(typeof LJT_Lite!="object"){var LJT_Lite=(function(){var b={};try{b={errors:[],guid:function(){var c=new Date().getTime()+(((1+Math.random())*65536)|0).toString(16).substring(1)+(((1+Math.random())*65536)|0).toString(16).substring(1)+(((1+Math.random())*65536)|0).toString(16).substring(1);window.LJT_Lite.guid=function(){return c};return c},legacyBeacon:function(d,c,e){var f={informer_uri:c,image_tracking:LJT.imageTracking,tracker_uri:"res/images/wijitTrack.gif",rr:"",informerID:e.informer,pubCategoryId:e.pubCategoryId,isQuantcastEnabled:e.isQuantcastEnabled,isComscoreEnabled:e.isComscoreEnabled,dataProviders:e.dataProviders,threePTrackers:e.threePTrackers,beacon:e.beacon};if(e.viglink&&e.viglink.apiKey!=="0"){f.viglink={vigLinkCUID:e.viglink.vigLinkCUID,apiKey:e.viglink.apiKey,libURL:e.viglink.urlOfLib}}this.fireBeacon(d,f)},beaconFIRED:false,fireBeacon:function(e,g){try{g=g||this.lastPayload;if(g.informer_uri){var h=new Image();var f="uri="+encodeURIComponent(g.informer_uri);f+="&informer="+encodeURIComponent(g.informerID);f+="&viewId="+this.guid();f+="&rand="+new Date().getTime();if(typeof g.rr!=="undefined"&&g.rr.length>0){f+="&rr="+encodeURIComponent(g.rr)}else{if(document.referrer.length>0){f+="&rr="+encodeURIComponent(document.referrer)}}f+="&type="+e;var d=g.image_tracking+g.tracker_uri+"?"+f;if(!this.beaconFIRED){d+="&beacon=1";this.beaconFIRED=true;this.beaconWijit=e;h.onload=function(){try{LJT_Lite.readerBeacon(e,g)}catch(j){LJT_Lite.errors.push(["readerBeacon",j])}};h.src=d;if(g.viglink){try{this.viglink(g.viglink,g)}catch(c){this.errors.push(["Viglink",c])}}try{this.thirdParty(g)}catch(c){this.errors.push(["ThirdParty",c])}if(g.threePTrackers){try{this.wijit_3p_trackers(g.threePTrackers,g)}catch(c){this.errors.push("3p",c)}}}else{console.debug("Beacon Fired");x.src=url}this.lastPayload=g}}catch(c){this.errors.push(["ThirdParty",c])}},wijit_3p_trackers:function(j,h){var c=document.location.href;var f=h.rr;var g=parseInt(Math.random()*99999);for(i=0;i<j.length;i++){try{var e=new Image();e.src=j[i].replace(/@location@/,c).replace(/@rr@/,f).replace(/@rnd@/,g)}catch(d){this.errors.push(["3p attempt",d])}}},thirdParty:function(e){var d=(Math.floor(Math.random()*999999999+1));try{var g=new Image();g.src="http://b.scorecardresearch.com/b?c1=7&c2=6401037&c3="+e.pubCategoryId+"&c4=&c5=&c6=&c15=&cv=1.3&cj=1&ljt_r="+d;delete g}catch(c){LJT_Lite.errors.push(c)}try{var f=new Image();f.src="http://pixel.quantserve.com/pixel/p-01ujhAj7lIRP-.gif?r="+d;delete f}catch(c){LJT_Lite.errors.push(c)}},viglink:function(d,e){if(typeof d=="object"){var f="http://api.viglink.com";var c=d.libURL+"?key="+d.apiKey+"&sub_id="+d.vigLinkCUID;document.write('<script src="'+c+'"><\/script>');window.vglnk={api_url:"http://api.viglink.com/api",key:d.apiKey,sub_id:""+d.vigLinkCUID}}},readerBeacon:function(e,g){var f="viewId="+LJT_Lite.guid();f+="&rand="+new Date().getTime();f+="&uri="+encodeURIComponent(g.informer_uri);f+="&informer="+g.informerID;f+="&v=1.0";f+="&type="+e;if(typeof g.rr!=="undefined"&&g.rr.length>0){f+="&rr="+encodeURIComponent(g.rr)}else{if(document.referrer.length>0){f+="&rr="+encodeURIComponent(document.referrer)}}var h=false;var c=document.createElement("iframe");if(c.style){c.style.border="0";c.style.width="1px";c.style.height="1px";c.style.display="none";h=true}else{if(typeof c.setAttribute=="function"){c.setAttribute("width","1px");c.setAttribute("height","1px");c.setAttribute("border","0");h=true}}var d="";if(g.beacon_url){c.src=g.beacon_url+"?"+f}else{c.src=g.image_tracking+"beacon?"+f}if(document.body&&h){document.body.appendChild(c)}}}}catch(a){this.errors.push(a)}return b}())}if(typeof LJT=="undefined"){var LJT={}}if(typeof LJT.Util=="undefined"){LJT.Util={header:document.getElementsByTagName("head")[0],didInit:false,domLoaded:false,swfLoaded:false,cssLoaded:false,quantcastLoaded:false,comscoreLoaded:false,listeners:[],existsInArray:function(b,d){if(!Array.indexOf){for(var c=0,a=b.length;c<a;c++){if(b[c]===d){return c}}return -1}else{return b.indexOf(d)}},removeFromArray:function(a,d,c){var b=a.slice((c||d)+1||a.length);a.length=d<0?a.length+d:d;return a.push.apply(a,b)},Events:{addListener:function(d,a,b){var c=LJT.Util.listeners;d.attachEvent(a,b);c[c.length]=[d,a,b]},addLoadEvent:function(b){if(LJT.Util.domLoaded){return b()}var d=window,c=document;if(typeof d.addEventListener!="undefined"){d.addEventListener("load",b,false)}else{if(typeof c.addEventListener!="undefined"){c.addEventListener("load",b,false)}else{if(typeof d.attachEvent!="undefined"){LJT.Util.Events.addListener(d,"onload",b)}else{if(typeof d.onload=="function"){var a=d.onload;d.onload=function(){a();b()}}else{d.onload=b}}}}}},init:function(){if(LJT.Util.didInit){return}LJT.Util.didInit=true;LJT.Util.Events.addLoadEvent(function(){LJT.Util.domLoaded=true})}};LJT.Util.init()}LJT.parseURL=function(b){if(!b){return null}var d={};var a=b.indexOf(":");if(a==-1){return null}a=a+3;var c=b.indexOf("/",a);if(c==-1){d.host=b.substring(a);d.host=d.host.replace(/\?.+/g,"")}else{d.host=b.substring(a,c)}return d};LJT.addWijit=function(a){if(LJT.isFirstLoad){LJT.researchInfo.init();LJT.isFirstLoad=false}if(a.indexOf("/wijitinit")>=0){a=a.replace("/wijitinit","/wijit")}else{a=a.replace("/informers/wijits","/wijit")}if(a.indexOf("delayed=1")>-1){var b=function(){try{LJT.addScript(a,false)}catch(c){return}};LJT.Util.addLoadEvent(b)}else{document.write('<script type="text/javascript" src="'+a+'"><\/script>')}};LJT.firstHeadNode=null;LJT.addCSS=function(a){if(LJT.firstHeadNode==null){LJT.firstHeadNode=LJT.Util.header.firstChild}var b=document.createElement("style");b.type="text/css";if(b.styleSheet){b.styleSheet.cssText=a}else{b.appendChild(document.createTextNode(a))}LJT.Util.header.insertBefore(b,LJT.firstHeadNode)};LJT.buildURL=function(b,d){var c=true;for(var a in d){b+=(c?"?":"&");b+=a+"="+encodeURIComponent(d[a]);c=false}return b};LJT.addScript=function(a,c){var b=document.createElement("script");b.src=a;b.type="text/javascript";if(c){b.defer="true"}LJT.Util.header.appendChild(b)};LJT._ieVersion=null;LJT._checkIEVersion=function(){if(!LJT._ieVersion){var c=1;if(navigator.appName=="Microsoft Internet Explorer"){var a=navigator.userAgent;var b=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");if(b.exec(a)!=null){c=parseFloat(RegExp.$1)}}LJT._ieVersion=c}return LJT._ieVersion};LJT.firePixels=function(h,b){if(!h){return}for(var c=0;c<h.length;c++){var a=h[c];if(a){var e=new Image();var g=a;for(var d in b){var f="";if(b[d]){f=b[d]}g=g.replace("@"+d+"@",encodeURIComponent(f))}e.src=g}}};LJT.fireWijitSearchPixels=function(d,e,a){var c="";if(document.referrer&&document.referrer.length>0){c=document.referrer}var b={query:d,location:document.location.href,rnd:(Math.floor(Math.random()*999999999+1)),rr:c};if(a){for(attrname in a){b[attrname]=a[attrname]}}return LJT.firePixels(e,b)};LJT.fireWijitPixels=function(d,a){var c="";if(document.referrer&&document.referrer.length>0){c=document.referrer}var b={location:document.location.href,rnd:(Math.floor(Math.random()*999999999+1)),rr:c};if(a){for(attrname in a){b[attrname]=a[attrname]}}return LJT.firePixels(d,b)};LJT.browser={isInited:false,quirks:null,isIE:!!(window.attachEvent&&!window.opera),isIE6:!!(window.attachEvent&&!window.opera)&&(typeof window.XMLHttpRequest=="undefined"),isIE7:function(){if(!!(window.attachEvent&&!window.opera)){var a=LJT._checkIEVersion();if(a>=7&&a<8){return true}}return false}(),isIE8:function(){if(!!(window.attachEvent&&!window.opera)){var a=LJT._checkIEVersion();if(a>=8){return true}}return false}(),init:function(){if(this.isInited===true){return}function a(){if(document.compatMode){return document.compatMode}var b=document.createElement("div");b.style.width="1";if(b.style.width=="1px"){return"BackCompat"}else{return"CSS1Compat"}}this.quirks=(a()==="BackCompat");this.isInited=true}};LJT.browser.init();LJT.bindCSS=function(b,c){function a(d){return d.replace(/\.\.\/\.\.\/res/g,LJT.host+"___"+LJT.release+"/res")}LJT.addCSS('#lwp_shb{background:#fff;opacity:.5;-moz-opacity:.50;filter:alpha(opacity=50);z-index:4000;height:100%;width:100%;background-repeat:repeat;position:fixed;top:0;left:0;}#lwp_b{position:fixed;top:0;left:0;z-index:20001;height:100%;width:100%;}#lwp_ds{background:#000;opacity:.5;-moz-opacity:.50;filter:alpha(opacity=50);top:26px;width:1024px;height:90%;position:fixed;left:50%;margin-left:-502px;z-index:20000;}#lwp_sb{top:15px;width:1024px;height:90%;position:fixed;left:50%;margin-left:-512px;z-index:20002;}#lwp_sb table{border:1px solid #000;}#lwp_sbar{font-family:Arial;font-size:15px;text-align:right;padding:0 15px;height:32px;overflow:hidden;}#header_left_image{float:left;margin-top:2px;margin-right:12px;}#lwp_sf{height:100%;width:100%;border:0;background:#fff;}img.CloseBtn{border:0;margin-bottom:-2px;position:relative!important;display:inline;padding:0;}img.ljt_header_logo{margin:0;padding:0;border:none;}#lijit_wijit_pvs_link,#lijitnet_wijit_pvs_link{display:none!important;}html #lwp_main,body #lwp_main,#lwp_main div,#lwp_main span,#lwp_main applet,#lwp_main object,#lwp_main iframe,#lwp_main h1,#lwp_main h2,#lwp_main h3,#lwp_main h4,#lwp_main h5,#lwp_main h6,#lwp_main p,#lwp_main blockquote,#lwp_main pre,#lwp_main abbr,#lwp_main acronym,#lwp_main address,#lwp_main big,#lwp_main cite,#lwp_main code,#lwp_main del,#lwp_main dfn,#lwp_main em,#lwp_main font,#lwp_main img,#lwp_main ins,#lwp_main kbd,#lwp_main q,#lwp_main s,#lwp_main samp,#lwp_main small,#lwp_main strike,#lwp_main strong,#lwp_main sub,#lwp_main sup,#lwp_main tt,#lwp_main var,#lwp_main dl,#lwp_main dt,#lwp_main dd,#lwp_main ol,#lwp_main ul,#lwp_main li,#lwp_main fieldset,#lwp_main form,#lwp_main label,#lwp_main legend,#lwp_main table,#lwp_main caption,#lwp_main tbody,#lwp_main tfoot,#lwp_main thead,#lwp_main tr,#lwp_main th,#lwp_main td{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;vertical-align:baseline;text-align:left;text-decoration:none;text-indent:0;text-transform:none;font-family:Arial,helvetica,sans-serif;background:none;border:none;list-style:none;list-style-image:none;}#lwp_main a{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;vertical-align:baseline;text-align:left;text-decoration:none;text-indent:0;text-transform:none;font-family:Arial,helvetica,sans-serif;border:none;list-style:none;list-style-image:none;}#lwp_main ol,#lwp_main ul{list-style:none;}#lwp_main ul li:before,#lwp_main #lwp_f ul li:before,#lwp_main ul li:after,#lwp_main #lwp_f ul li:after{content:"";}#lwp_main #lwp_f{position:relative;margin:.5em 0 0 0;height:30px;}#lwp_main #lwp_f ul{height:30px;border:none!important;line-height:20px;padding:0;margin:0;white-space:nowrap;list-style:none;clear:none;border:none;background:none;}#lwp_main #lwp_f ul li{padding:0;margin:0;display:inline;white-space:nowrap;clear:none;border:none;background:none;}#lwp_main #lwp_f ul li.explore{position:absolute;left:0;top:0;}#lwp_main #lwp_f ul li.branding{position:absolute;right:0;top:0;text-align:right;}#lwp_main #lwp_f ul li a{font-size:12px;display:inline;white-space:nowrap;clear:none;border:none;background:none;padding:0;margin:0;}#lwp_main #lwp_f #lwp_surprise{margin:4px 0 0 0;}#lwp_main #lwp_f ul li.explore img{float:left;margin:0 5px 0 0;}');if(!b){LJT.addCSS(a('#lwp_main{line-height:1;}#lwp_main :focus{outline:0;}#lwp_main{display:block;}#lwp_main #lwp_sbf{margin:0 0 .4em 0;padding:0;}#lwp_main #lwp_sfd,#lwp_sfd_second_click{float:left;height:15px;padding:2px;margin:0;border-style:solid;border-width:1px;border-right:none;font-size:12px;-moz-border-radius-bottomleft:0;-moz-border-radius-bottomright:0;-moz-border-radius-topleft:0;-moz-border-radius-topright:0;-webkit-border-top-left-radius:0;-webkit-border-top-right-radius:0;-webkit-border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;}#lwp_3_searchbutton_search,#lwp_main #lwp_3_searchbutton,#lwp_3_searchbutton_second_click{height:21px;width:50px;padding:0;margin:0;text-align:center;cursor:pointer;border:solid 1px black;}#lwp_main form.bigRound #lwp_sfd,form.bigRound #lwp_sfd_second_click{height:16px;}#lwp_2_searchbutton_search,#lwp_main form.bigRound #lwp_2_searchbutton,form.bigRound #lwp_2_searchbutton_second_click{border:none;background:none;padding:0;width:47px;}#lwp_main form.bigRound #lwp_2_searchbutton{margin:0;-webkit-border-top-left-radius:0;-webkit-border-top-right-radius:0;-webkit-border-bottom-left-radius:0;-webkit-border-bottom-right-radius:0;}#lwp_wijit_container{font-family:Arial,Helvetica,sans-serif;color:#000;}#lwp_wijit{background:#d3d3d3;padding:4px 0;-moz-border-radius-topleft:4px;-moz-border-radius-topright:4px;-webkit-border-top-left-radius:4px;-webkit-border-top-right-radius:4px;-moz-border-radius-bottomleft:4px;-moz-border-radius-bottomright:4px;-webkit-border-bottom-left-radius:4px;-webkit-border-bottom-right-radius:4px;margin:0;}#lwp_wijit.accordion dt,#lwp_wijit.accordion h5{font-size:12px;line-height:1em;color:#525252;width:auto;}#lwp_wijit.accordion h5{font-size:14px;font-weight:bold;}#lwp_wijit.accordion dt,#lwp_wijit.accordion dd{margin:0;padding:0;border-left:1px solid #D3D3D3;border-right:1px solid #D3D3D3;background:#fff;display:block;width:auto;}#lwp_wijit.accordion dt#lwp_wijit_first{-moz-border-radius-topleft:6px;-moz-border-radius-topright:6px;-webkit-border-top-left-radius:6px;-webkit-border-top-right-radius:6px;background:url("http://www.lijit.com/res/images/accordionWidget/toggleBG.gif") repeat-x top left;}#lwp_wijit.accordion #lwp_wijit_last_dt,#lwp_wijit.accordion #lwp_wijit_last_dd{-moz-border-radius-bottomleft:6px;-moz-border-radius-bottomright:6px;-webkit-border-bottom-left-radius:6px;-webkit-border-bottom-right-radius:6px;}#lwp_wijit.accordion dt{border-top:1px solid #d3d3d3;font-weight:bold;cursor:pointer;padding:3px 10px;background:url("http://www.lijit.com/res/images/accordionWidget/toggleBG.gif") repeat-x top left;}#lwp_wijit.accordion .lwt_content{padding:3px 10px;}#lwp_wijit.accordion .lwt_content.lijitwijit{margin-top:4px;}#lwp_wijit.accordion .lwt_content.visitorsmap{margin-top:2px;}#lwp_wijit.accordion .lwt_content.research{height:316px;}#lwp_wijit.accordion dd{overflow:hidden;}#lwp_wijit #lwpresearchf{display:block;}#lwp_main #lwp_rw{margin:0 0 .5em 0;}#lwp_main #lwp_ps h3{margin:.4em 0;font-weight:bold;font-size:13px;}#lwp_main #lwp_cloud{margin:0 0 .4em 0;font-size:10px;line-height:2.1em;text-align:left;}#lwp_main #lwp_random{text-align:center;margin:.4em 0 0 0;}#lwp_main #lwp_surprise_btn{font-size:11px;padding:1px 5px;cursor:pointer;border:solid 1px black;}#lwp_main img#lwp_surprise{margin:0 auto;}#lwp_main #lwp_includedin{margin:0 0 2px 0;}#lwp_main .slim_content{overflow:auto;}#lwp_main #lwp_mc{font-size:12px;line-height:14px;}#lwp_main #lwp_includedin h3{font-size:13px;font-weight:bold;margin:0 0 .4em 0;}#lwp_main #lwp_mc a{display:inline;}#lwp_main #lwp_mc .profile_person{line-height:14px;min-height:20px;}#lwp_search_header{width:100%;padding:0;}td#lwp_sf_container{height:100%;width:1020px;padding:0;}#lwp_main #lwp_mc a.lijitService{display:block;float:left;width:16px;height:16px;margin:0 3px 3px 0;overflow:hidden;text-indent:-999em;}#lwp_main #lwp_mc img{float:left;margin:0 3px 3px 0;width:16px;height:16px;}#lwp_main #lwp_mc a.amazonIcn{background:url(../../res/images/service/sprites.gif) 0 0 no-repeat;}#lwp_main #lwp_mc a.blinklistIcn{background:url(../../res/images/service/sprites.gif) -20px 0 no-repeat;}#lwp_main #lwp_mc a.bloggerIcn{background:url(../../res/images/service/sprites.gif) -40px 0 no-repeat;}#lwp_main #lwp_mc a.bluedotIcn{background:url(../../res/images/service/sprites.gif) -60px 0 no-repeat;}#lwp_main #lwp_mc a.clipmarksIcn{background:url(../../res/images/service/sprites.gif) -80px 0 no-repeat;}#lwp_main #lwp_mc a.deliciousIcn{background:url(../../res/images/service/sprites.gif) -100px 0 no-repeat;}#lwp_main #lwp_mc a.diggIcn{background:url(../../res/images/service/sprites.gif) -120px 0 no-repeat;}#lwp_main #lwp_mc a.disqusIcn{background:url(../../res/images/service/sprites.gif) -140px 0 no-repeat;}#lwp_main #lwp_mc a.facebookIcn{background:url(../../res/images/service/sprites.gif) -160px 0 no-repeat;}#lwp_main #lwp_mc a.flickrIcn{background:url(../../res/images/service/sprites.gif) -180px 0 no-repeat;}#lwp_main #lwp_mc a.furlIcn{background:url(../../res/images/service/sprites.gif) -200px 0 no-repeat;}#lwp_main #lwp_mc a.intensedebateIcn{background:url(../../res/images/service/sprites.gif) -220px 0 no-repeat;}#lwp_main #lwp_mc a.linkedinIcn{background:url(../../res/images/service/sprites.gif) -240px 0 no-repeat;}#lwp_main #lwp_mc a.livejournalIcn{background:url(../../res/images/service/sprites.gif) -260px 0 no-repeat;}#lwp_main #lwp_mc a.mixxIcn{background:url(../../res/images/service/sprites.gif) -280px 0 no-repeat;}#lwp_main #lwp_mc a.myspaceIcn{background:url(../../res/images/service/sprites.gif) -320px 0 no-repeat;}#lwp_main #lwp_mc a.redditIcn{background:url(../../res/images/service/sprites.gif) -340px 0 no-repeat;}#lwp_main #lwp_mc a.stumbleuponIcn{background:url(../../res/images/service/sprites.gif) -360px 0 no-repeat;}#lwp_main #lwp_mc a.tumblrIcn{background:url(../../res/images/service/sprites.gif) -380px 0 no-repeat;}#lwp_main #lwp_mc a.twitterIcn{background:url(../../res/images/service/sprites.gif) -400px 0 no-repeat;}#lwp_main #lwp_mc a.typepadIcn{background:url(../../res/images/service/sprites.gif) -420px 0 no-repeat;}#lwp_main #lwp_mc a.viddlerIcn{background:url(../../res/images/service/sprites.gif) -440px 0 no-repeat;}#lwp_main #lwp_mc a.vimeoIcn{background:url(../../res/images/service/sprites.gif) -460px 0 no-repeat;}#lwp_main #lwp_mc a.youtubeIcn{background:url(../../res/images/service/sprites.gif) -480px 0 no-repeat;}#lwp_main #lwp_mc a.eggheadIcn{background:url(../../res/images/service/sprites.gif) -500px 0 no-repeat;}#lwp_main #lwp_mc a.twitpicIcn{background:url(../../res/images/service/sprites.gif) -520px 0 no-repeat;}#lwp_main #lwp_mc a.plixiIcn{background:url(../../res/images/service/sprites.gif) -540px 0 no-repeat;}div.lwpnet_main{border:solid 1px #cfcfcf!important;background:#fff!important;-moz-border-radius:5px;-webkit-border-radius:5px;}div.lwpnet_wrapper{padding:4px!important;}#lwp_main #lwpnet_rw{font:bold 12px "Helvetica",Arial,sans-serif;color:#434449;margin:0;padding:5px!important;background:url(../../res/images/networkWidgets/sbn/titleBG.gif) repeat-x;}#lwp_main #lwpnet_network_brand{text-align:center;margin:0 0 5px 0;padding:5px;}#lwp_main #lwpnet_search_title{color:#782121;margin:5px;font:bold 12px "Helvetica",Arial,sans-serif;}#lwp_main #lwpnet_network_footer{background:#999;height:20px;line-height:20px;padding:0 0 0 5px!important;-moz-border-radius-bottomleft:3px;-moz-border-radius-bottomright:3px;-webkit-border-bottom-left-radius:3px;-webkit-border-bottom-right-radius:3px;}#lwp_main #lwpnet_network_footer ul{margin:0;padding:0;list-style:none;}#lwp_main #lwpnet_network_footer ul li{margin:0 5px 0 0;padding:0;height:20px;display:inline;}#lwp_main #lwpnet_network_footer ul li a{font-size:12px;color:#fff;text-decoration:none;}#lwp_main #lwpnet_network_footer ul li a:hover{color:#ccc;}'));if(LJT.browser.isIE6){LJT.addCSS("#lwp_main #lwp_3_searchbutton,#lwp_3_searchbutton_second_click{margin-left:-3px;}#lwp_main form.bigRound #lwp_2_searchbutton,#lwp_2_searchbutton_second_click{margin-left:-3px;}#lwp_main .profile_person{float:left;display:block;width:100%;}")}if(LJT.browser.quirks){LJT.addCSS("#lwp_main #lwp_sfd,#lwp_sfd_second_click{height:21px;}#lwp_main #lwp_3_searchbutton,#lwp_3_searchbutton_second_click{margin:0 0 0 -3px;}#lwp_main form.bigRound #lwp_sfd,#lwp_main_second_click form.bigRound #lwp_sfd_second_click{height:22px;}#lwp_main #lwp_2_searchbutton,#lwp_2_searchbutton_second_click{margin:0 0 0 -3px;}#lwp_shb{width:103%;position:absolute;}#lwp_b{position:absolute;}#lwp_ds{position:absolute;margin-left:-502px;}#lwp_sb{position:absolute;margin-left:-512px;}#lwp_main #lwp_mc .profile_person{overflow:auto;}#lwp_main #lwp_mc .profile_person{overflow-x:hidden;overflow-y:hidden;}")}}};LJT.researchInfo={init:function(){function c(f){var e=0;var d="";if(f.indexOf("/search/web/")>-1){e=f.indexOf("/search/web/")+12}if(f.indexOf("/search/")>-1){e=f.indexOf("/search/")+8}if(f.indexOf("arg=")>-1){e=f.indexOf("arg=")+4}if(f.indexOf("search=")>-1){e=f.indexOf("query=")+7}if(f.indexOf("keyword")>-1){e=f.indexOf("keyword")+8}if(f.indexOf("keywords")>-1){e=f.indexOf("keywords")+9}if(f.indexOf("query=")>-1){e=f.indexOf("query=")+6}if(f.indexOf("encquery")>-1){e=0}if(f.indexOf("&query=")>-1){e=f.indexOf("&query=")+7}if(f.indexOf("&qry=")>-1){e=f.indexOf("qry=")+4}if((f.indexOf("?p=")>-1)&&(f.indexOf("/?p")==-1)){e=f.indexOf("?p=")+3}if(f.indexOf("/p=")>-1){e=f.indexOf("/p=")+3}if(f.indexOf("&p=")>-1){e=f.indexOf("&p=")+3}if(f.indexOf("?q=")>-1){e=f.indexOf("?q=")+3}if(f.indexOf("/q=")>-1){e=f.indexOf("/q=")+3}if(f.indexOf("&q=")>-1){e=f.indexOf("&q=")+3}if(e>0){if(f.indexOf("&",e)>-1){d=f.substr(e,(f.indexOf("&",e)-e))}else{if(f.indexOf("/search")>-1){if(f.indexOf("/",e)>-1){d=(f.substr(e,(f.indexOf("/",e)-e)))}else{d=(f.substr(e))}}else{d=f.substr(e)}}}return decodeURIComponent(d.replace(/\+/gi,"%20"))}var a=c(document.referrer);var b=!!(a&&a.length>0);this.isResearchRequest=b;this.searchPhrase=a;this.getSearchPhrase=c},url:function(b,a){if(!a){a=this.searchPhrase}return LJT.host+"research?uri="+encodeURIComponent(b.informerURI)+"&blogMax=2&contentMax=2&netMax=2&q="+encodeURIComponent(a)+"&view_id="+LJT_Lite.guid()}};LJT.hide=function(a){if(a){a.style.display="none"}};LJT.show=function(a){if(a){a.style.display=""}};LJT.findPat=function(h){var g=h.match(/([a-z]+):(.+)/);if(g){var b=g[1];var c=g[2];if(b==="class"){c=c.split(",")}if(b==="id"||b==="class"){var k=document.getElementsByTagName("div");for(var f=0;f<k.length;f++){var a=k[f];if(b=="id"&&(a.getAttribute("id")!=null&&a.getAttribute("id")!="undefined")&&a.getAttribute("id").indexOf(c)==0){return a}else{if(b=="class"&&(a.className!=null&&a.className!="undefined")){var e=true;for(var d=0;d<c.length;d++){var m=c[d];var l=a.className.indexOf(m);if(l==-1||(l>0&&a.className[l-1]!=" ")){e=false}}if(e){return a}}}}}else{return null}}return document.getElementById(h)};LJT.Research=function(a){if(!LJT.researchInfo.isResearchRequest){return}var e=a.elements.rw;if(e&&document.referrer&&document.referrer.length>0){var f=document.createElement("div");f.appendChild(a.elements.research);if(e.firstChild){e.insertBefore(f,e.firstChild)}else{e.appendChild(f)}var b=document.createElement("iframe");b.src=LJT.researchInfo.url(a)+"&research_display_type=wijit";b.style.height="292px";b.style.width="100%";b.style.margin="0";b.style.padding="0";b.style.border="0";b.style.overflow="hidden";b.style.background="#fff";b.scrolling="no";b.frameborder="0";a.elements.iframe.appendChild(b);var c=a.elements.researchGreeting;if(c){c.innerHTML=c.innerHTML.replace(/\[term\]/g,LJT.researchInfo.searchPhrase)}LJT.show(a.elements.research)}};LJT.FlashObjects=new Array();LJT.FlashObject=function(a){this.element=a;if(this.element&&this.element.nodeName.toLowerCase()!=="iframe"&&this.element.parentNode.nodeName.toLowerCase()!=="body"){this.element=this.element.parentNode}this.hide=function(){if(this.element){this.element.style.visibility="hidden"}};this.show=function(){if(this.element){this.element.style.visibility="visible"}}};LJT.Wijit=function(d,t,f){f.isSearchDisplayOnPage=((f.searchDisplayType=="on_page")&&(!LJT.browser.isIE6));var o=(f.secondClick&&f.secondClick.enabled&&document.referrer&&document.referrer.length>0);this.varname="ljt_"+d;this.informerURI=t;this.options=f;LJT_Lite.legacyBeacon("search",t,f);var q=this;var s=function(v,u,w){if(document.getElementsByClassName&&(w==null||w.getElementsByClassName)){s=function(D,G,C){C=C||document;var y=C.getElementsByClassName(D),F=(G)?new RegExp("\\b"+G+"\\b","i"):null,z=[],B;for(var A=0,E=y.length;A<E;A+=1){B=y[A];if(!F||F.test(B.nodeName)){z.push(B)}}return z}}else{if(document.evaluate){s=function(H,K,G){K=K||"*";G=G||document;var A=H.split(" "),I="",E="http://www.w3.org/1999/xhtml",J=(document.documentElement.namespaceURI===E)?E:null,B=[],y,z;for(var C=0,D=A.length;C<D;C+=1){I+="[contains(concat(' ', @class, ' '), ' "+A[C]+" ')]"}try{y=document.evaluate(".//"+K+I,G,J,0,null)}catch(F){y=document.evaluate(".//"+K+I,G,null,0,null)}while((z=y.iterateNext())){B.push(z)}return B}}else{s=function(J,M,I){M=M||"*";I=I||document;var C=J.split(" "),L=[],y=(M==="*"&&I.all)?I.all:I.getElementsByTagName(M),H,E=[],G;for(var D=0,z=C.length;D<z;D+=1){L.push(new RegExp("(^|\\s)"+C[D]+"(\\s|$)"))}for(var B=0,K=y.length;B<K;B+=1){H=y[B];G=false;for(var A=0,F=L.length;A<F;A+=1){G=L[A].test(H.className);if(!G){break}}if(G){E.push(H)}}return E}}}return s(v,u,w)};var a=document.getElementById(d);var r=s(d,null,a);this.getElementsByClassName=s;var g={};for(var p=0;p<r.length;p++){var b=r[p];var n=b.getAttribute("id");if(n==null||n==""){continue}switch(n){case"lwp_b":g.b=b;break;case"lwp_sbf":g.form=b;break;case"lwp_research":g.research=b;break;case"lwp_rw":g.rw=b;break;case"lwp_researchGreeting":g.researchGreeting=b;break;case"lwp_sb":g.searchBox=b;g.searchBoxTable=b.getElementsByTagName("table")[0];break;case"lwp_sfd":g.primarySearchInput=b;break;case"lwp_sf":g.searchIframe=b;break;case"lwp_sf_container":g.searchIframeContainer=b;break;case"lwp_ds":g.ds=b;break;case"lwp_shb":g.background=b;break;case"lwp_ri":g.iframe=b;break;case"lwp_research_closer":g.imageLoad=b;break;case"lwp_linkcover":g.cover=b;break;case"lwp_explore":g.explore=b;break}}this.elements=g;this.containerContainsSearchIframe=function(){var u=this.elements.searchIframeContainer;var w=this.elements.searchIframe;if(!u||!w){return false}for(var v=0;v<u.childNodes.length;v++){if(u.childNodes[v]==w){return true}}return false};this.removeSearchIFrame=function(){if(this.elements.searchIframeContainer&&this.elements.searchIframe&&this.containerContainsSearchIframe()==true){this.elements.searchIframeContainer.removeChild(this.elements.searchIframe)}};this.addSearchIFrame=function(){if(this.elements.searchIframeContainer&&this.elements.searchIframe&&this.containerContainsSearchIframe()==false){this.elements.searchIframeContainer.appendChild(this.elements.searchIframe)}};this.removeSearchIFrame();if(!this.elements.form&&document.getElementsByTagName){var h=document.getElementsByTagName("form");for(var p=0;p<h.length;p++){var c=h[p];var l=c.getAttribute("class");if(l==null){l=c.className}if(l!=null&&l.indexOf(d)>-1&&c.getAttribute("id")=="lwp_sbf"){this.elements.form=c;break}}}if(f.research){this.elements.toggleResearchDownImage=new Image();this.elements.toggleResearchUpImage=new Image();this.elements.toggleResearchDownImage.src=LJT.host+"___"+LJT.release+"/res/images/down_button.png";this.elements.toggleResearchUpImage.src=LJT.host+"___"+LJT.release+"/res/images/up_button.png";this.toggleResearch=function(){var v=q.elements;var u=v.iframe;var w=v.imageLoad;if(u.style.display.toLowerCase()==="none"){LJT.show(u);w.src=v.toggleResearchUpImage.src}else{LJT.hide(u);w.src=v.toggleResearchDownImage.src}}}this.registerLogoOnSearchBox=function(){var v=this.elements.primarySearchInput;var u=LJT.host+"___"+LJT.release+"/res/images/wijit_logo_search.png";function w(){if(v.value.length>0){v.style.background="#fff"}else{v.style.background="#fff url("+u+") no-repeat scroll left 2px"}}v.value="";w();v.onblur=function(){w()};v.onfocus=function(){v.style.background="#fff"}};this.doSearch=function(v,u){if(u!=null){}this.elements.primarySearchInput.value=v;this.submitForm(u);return false};var j=function(u){q.doSearch(u)};window.lwp_dosearch=j;window.lwpnet_dosearch=j;window.lwp_$=function(u){return document.getElementById(u)};this.submitForm=function(D){var u=this.elements;if(u.primarySearchInput.value.replace(/^\s*/,"").replace(/\s*$/,"")==""){return false}if(f.searchBoxLogo){var H=this.elements.primarySearchInput;H.style.background="#fff"}this.addSearchIFrame();var I=document.getElementById("lwp_flavor");if(I){if(typeof D==undefined){I.value=D}else{I.value=""}}u.form.start_time.value=(new Date()).getTime();if(f.searchDisplayType=="on_site"){var G=document.createElement("input");G.setAttribute("name","lijit_q");G.type="hidden";G.value=u.form.q.value;u.form.appendChild(G)}if(f.isSearchDisplayOnPage){if(f.hideFlashForOverlay){for(var z=0;z<document.embeds.length;z++){var J=new LJT.FlashObject(document.embeds[z]);LJT.FlashObjects.push(J);J.hide()}var K=document.getElementsByTagName("object");for(var z=0;z<K.length;z++){var J=new LJT.FlashObject(K[z]);LJT.FlashObjects.push(J);J.hide()}var A=document.getElementsByTagName("iframe");for(var z=0;z<A.length;z++){if(A[z].src.indexOf("lijit.com")==-1){var J=new LJT.FlashObject(A[z]);LJT.FlashObjects.push(J);J.hide()}}}if(LJT.browser.quirks){this.setScrolledHeightOfOverlay();window.onscroll=this.setScrolledHeightOfOverlay}try{var v=null;try{v=document.width}catch(C){v=document.body.clientWidth}if(!v){throw"Error No Height"}v=Math.ceil(v-30);u.ds.style.marginLeft="0px";u.ds.style.left="25px";u.ds.style.width=v+"px";u.searchBox.style.marginLeft="0px";u.searchBox.style.left="15px";u.searchBox.style.width=v+"px"}catch(C){}document.body.style.overflow="hidden";LJT.show(u.background);LJT.show(u.searchBox);LJT.show(u.ds);if(LJT.browser.isIE){u.ds.style.height=u.searchBoxTable.offsetHeight+"px";var F=window.attachEvent("onresize",this.setBackgroundHeight());if(LJT.browser.isIE6){var E=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;u.ds.style.top=(26+E)+"px";u.searchBox.style.top=(15+E)+"px"}}var w="?";for(var z=0,B=u.form.length;z<B;z++){w+=u.form[z].name+"="+encodeURIComponent(u.form[z].value)+"&"}u.searchIframe.style.visibility="visible";u.searchIframe.src=LJT.host+"loading/search"+w;u.form.target="lwp_sf";u.form.action=LJT.host+"loading/search"}else{u.form.submit()}};this.closeOverlay=function(){var w=this.elements;if(f.hideFlashForOverlay){for(var v=0;v<LJT.FlashObjects.length;v++){LJT.FlashObjects[v].show()}}w.searchIframe.src=LJT.host+"loading.html";this.removeSearchIFrame();document.body.style.overflow="";LJT.hide(w.background);LJT.hide(w.searchBox);LJT.hide(w.ds);LJT.hide(w.b);if(LJT.browser.isIE){var u=window.detachEvent("onresize",this.setBackgroundHeight())}if(LJT.browser.quirks){window.onscroll=null}};this.setBackgroundHeight=function(){var u=this.elements;return function(){u.ds.style.height=u.searchBoxTable.offsetHeight+"px"}};this.setScrolledHeightOfOverlay=function(){var v=q.elements;var u=function(){var w;if(LJT.browser.isIE){w=document.body.scrollTop}else{w=window.pageYOffset}return parseInt(w)}();v.searchBox.style.top=(u+15)+"px";v.ds.style.top=(u+26)+"px"};this.toggleBubbles=function(){};if(!this.elements){return}if(!LJT.Util.cssLoaded){LJT.bindCSS(f.noCSS,o);LJT.Util.cssLoaded=true}if(f.customCSS){LJT.addCSS(f.customCSS)}if(f.searchBoxLogo){this.registerLogoOnSearchBox()}if(f.threePTrackers.length>0){var e={category:f.pubCategoryId,informer:f.informer};var m=new Array();if(f.threePTrackers.length>0){m=m.concat(f.threePTrackers)}LJT.fireWijitPixels(m,e)}if(f.isSearchDisplayOnPage){if(LJT.browser.isIE6){var k=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;this.elements.background.style.top=k+"px"}if(LJT.browser.isIE){(this.setBackgroundHeight())()}}if(f.searchDisplayType!="on_lijit"){this.elements.form.onsubmit=function(){return q.submitForm()}}this.research=null;if(f.research){LJT.Util.Events.addLoadEvent(function(){if(q.research==null){q.research=new LJT.Research(q)}})}if(f.isSearchDisplayOnPage){LJT.hide(this.elements.searchBox);LJT.hide(this.elements.ds);document.body.insertBefore(this.elements.searchBox,document.body.firstChild);document.body.insertBefore(this.elements.ds,document.body.firstChild)}if(LJT.researchInfo.isResearchRequest){LJT.fireWijitSearchPixels(LJT.researchInfo.searchPhrase,f.dataProviders)}};LJT.AccordionWijit=function(b,g,c){var l=this;this.varname=b;this.dllist=null;var a=c.isResearchSet;var o=LJT.researchInfo.isResearchRequest;var f=0;if(a&&(!o)){f++}this.getDllist=function(){if(document.getElementById(this.varname)){this.dllist=document.getElementById(this.varname)}else{window.setTimeout(this.varname+".getDllist()",50)}};this.getDllist();if(!c.isPreview){for(var k=0,m=c.csss.length;k<m;k++){LJT.addCSS(c.csss[k])}}var n="";this.trackClick=function(z){z=z||window.event;var u=null;var v=null;var w="na";if(z&&z.innerHTML){u=/<span>(.*)<\/span>/i.exec(z.innerHTML)[1];if(n===u){w="closing"}else{w="opening"}n=u;v="section"}else{var y=z.target||z.srcElement;u=y.getAttribute("href");v="link"}var A=LJT.imageTracking+"/res/images/swt.gif?url="+encodeURIComponent(u)+"&type="+encodeURIComponent(v)+"&informer="+encodeURIComponent(g)+"&action="+encodeURIComponent(w)+"&r="+Math.random();var t=document.createElement("img");t.src=A};this.accordion=function(){var F=11;var w=4;var A=0;var E="open";var D=false;var C=false;var t=[];var y=false;function v(J,K){var I="lwt_dt ";var H=false;var G=0;if(D){if(J==0){I+="lwt_dt_research "}K-=1;if(C){G--}J--}if(J>-1){I+=" lwt_dt_index_";I+=J}if(J==G){I+=" lwt_first_dt"}if(J==(K-1)){I+=" lwt_last_dt"}return I}function u(G){this.nm=G;this.arr=[];this.sel=""}u.prototype.init=function(O,R,I,P,G,H,S){if(P){D=true}if(G){C=true}if(S){y=S}if(H){t=H}var K=R.getElementsByTagName("dt");var N=R.getElementsByTagName("dd");for(var J=A,M=K.length;J<M;J++){if(LJT.Util.existsInArray(t,J)!==-1){continue}var Q=K[J];this.arr[J]=Q;Q.onclick=new Function(I+"."+this.nm+".process(this)");if(E!==null&&O==J){this.sel=Q.className=E+" "+v(O,K.length)}}for(var J=A,M=N.length;J<M;J++){if(LJT.Util.existsInArray(t,J)!==-1){continue}var L=N[J];L.maxh=L.offsetHeight-30;L.maxh=L.offsetHeight;if(O!=J){L.style.display="none";if(!LJT.browser.isIE6){L.style.height="0"}if(LJT.browser.isIE){L.childNodes[0].display="none"}}else{L.style.display="";if(!LJT.browser.isIE6){L.style.height=L.offsetHeight}}}};u.prototype.process=function(K){if(c.doTrackClicks){l.trackClick(K)}for(var I=A,H=this.arr.length;I<H;I++){if(LJT.Util.existsInArray(t,I)!==-1){continue}var J=this.arr[I];var G=J.nextSibling;if(G.nodeType!=1){G=G.nextSibling}if(!LJT.browser.isIE6){clearInterval(G.timer);if(J==K&&G.style.display=="none"){if(LJT.browser.isIE){G.childNodes[0].style.display=""}if(c.presetHeights&&c.presetHeights[I]!==""&&LJT.browser.isIE7){G.style.display="block";G.style.height=c.presetHeights[I]}else{G.style.display=""}J.className=E+" "+v(I,this.arr.length);z(G,1)}else{J.className=v(I,this.arr.length);z(G,-1)}}else{if(J==K&&G.style.display=="none"){G.style.display="";G.childNodes[0].style.display="";J.className=E+" "+v(I,this.arr.length)}else{G.style.display="none";G.childNodes[0].style.display="none";J.className=v(I,this.arr.length)}}}};function z(H,G){H.timer=setInterval(function(){B(H,G)},F)}function B(K,I){if(LJT.browser.isIE){if(K.childNodes[0]&&K.childNodes[0].style){K.childNodes[0].style.display="none"}}var H=K.offsetHeight;var G,J;G=K.maxh;J=(I==1)?Math.ceil((G-H)/w):Math.ceil(H/w);K.style.height=H+(J*I)+"px";K.style.opacity=H/G;K.style.filter="alpha(opacity="+H*100/G+")";if(I==1&&H>=G){if(LJT.browser.isIE){K.childNodes[0].style.display=""}clearInterval(K.timer)}else{if(I!=1&&H==1){K.style.display="none";if(y&&typeof y=="function"){}clearInterval(K.timer)}}if(y&&typeof y=="function"){y()}}return{slider:u}}();this.slider_wijit=new this.accordion.slider("slider_wijit");this.init_slider=function(){if(this.dllist&&(this.dllist.getElementsByTagName("dd").length==c.pluginCount)){this.slider_wijit.init(f,this.dllist,this.varname,c.isResearchSet,o,c.additionalOpenSlides,c.scrollCallBack)}else{window.setTimeout(this.varname+".init_slider()",50)}};this.init_slider();if(a){if(!o){var e=this.dllist.getElementsByTagName("dt")[0];var j=this.dllist.getElementsByTagName("dd")[0];j.style.display="none";e.style.display="none";j.innerHTML="";j.style.height="0px";e.style.height="0px";j.innerHTML="";e.innerHTML="";j.className=j.className.replace("lwt_first_dd","");e.className=j.className.replace("lwt_first_dt","");var h=this.dllist.getElementsByTagName("dt")[1];var p=this.dllist.getElementsByTagName("dd")[1];h.className+=" lwt_first_dt";p.className+=" lwt_first_dd"}}if(typeof c.isNonBranded=="object"){if(c.isNonBranded.isLogoBW){LJT.addCSS("#lijit_standard_lwt dt.lwt_first_dt.open, #lijit_standard_lwt dt.open{background: #d3d3d3 url("+c.isNonBranded.bwLogoURI+") no-repeat right top;}")}else{LJT.addCSS("#lijit_standard_lwt dt.lwt_first_dt.open, #lijit_standard_lwt dt.open{background: #d3d3d3 url("+c.isNonBranded.colorLogoURI+") no-repeat right top;")}}if(typeof c.isNonBranded=="object"&&c.isResearchSet&&LJT.researchInfo.isResearchRequest){var r="VIEW_ID";if(typeof LJT!="undefined"&&typeof LJT.view_id!="undefined"){r=LJT.view_id}else{if(r=="VIEW_ID"){r=""}}var d=c.baseURL+"/research?uri="+g+"&blogMax=2&contentMax=2&netMax=2&q=[*]&view_id="+LJT_Lite.guid()+"&research_display_type=wijit";document.getElementById("lwpresearchf").src=d.replace(/\[\*\]/g,LJT.researchInfo.searchPhrase);var s=document.getElementById("resultsf");s.innerHTML="Looking for more results on "+LJT.researchInfo.searchPhrase+"?"}if(c.doTrackClicks){var q=document.getElementById(b).getElementsByTagName("a");for(var k=0,m=q.length;k<m;k++){(function(){var t=q[k];if(!t.onclick){t.onclick=l.trackClick}})()}}};LJT.ready();

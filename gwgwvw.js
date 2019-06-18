
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<script type='text/javascript'>
        /*<![CDATA[*/
document.write;
          var e={
                homePage: window.location.origin
                , maxResults: 10
                , numChars: 140
                , thumbWidth: 150
                , thumbHeight: 110
                , navText: "إظهار المزيد"
                , resetToc: "لايوجد المزيد"
                , noImage: "//3.bp.blogspot.com/-Jc__Qnmo0Ls/WrE56gnKytI/AAAAAAAACqI/dERZwqQ3vBQgH7WULIuSwOPgi5ZfHVUcACLcBGAs/s1600/alt.png"
                , loading: "<span>جاري التحميل</span>"
                , counting: "<div class='loader-call'></div>"
                , searching: "<span>جاري البحث</span>"
                , text_label: "الأقسام"
                , text_Latesttopics: "أخر المواضيع"
                , Topics_updated: "أحدث المواضيع"
                , Search_topic: "إبحث عن موضوع"
                , Search_for: "البحث عن"
                , T_Results: "النتائج"
                , T_Total: "المجموع"
               },
               _sitemap=document.getElementById("pagesitemap"),loadToc,loadCategories,_toc={
 init:function(){
t=(window,document),n=function(e){return t.getElementById(e)},i={a:n("feed-order"),b:n("label-sorter").parentNode,c:n("post-searcher"),d:n("feed-q"),e:n("result-desc"),f:n("feed-container"),g:n("feed-nav"),h:t.getElementsByTagName("head")[0],i:0,j:null,k:"published",l:0,m:""},a={a:function(){old=n("temporer-script"),old.parentNode.removeChild(old)},b:function(e){var l=t.createElement("script");l.type="text/javascript",l.id="temporer-script",l.src=e,n("temporer-script")&&a.a(),i.h.appendChild(l);},c:function(t,n,l){i.i++,i.e.innerHTML=e.counting,i.g.innerHTML=e[1==t?"searching":"loading"],0===t?a.b(null!==n?e.homePage+"/feeds/posts/summary/-/"+n+"?alt=json-in-script&start-index="+(i.i*e.maxResults+1)+"&max-results="+e.maxResults+"&orderby="+l+"&callback=loadToc":e.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(i.i*e.maxResults+1)+"&max-results="+e.maxResults+"&orderby="+l+"&callback=loadToc"):1==t&&a.b(e.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(i.i*e.maxResults+1)+"&max-results="+e.maxResults+"&q="+n+"&orderby="+l+"&callback=loadToc"),i.j=null!==n?n:null,i.l=t,i.a.disabled=!0,i.b.children[0].disabled=!0},d:function(n){var l;if(i.g.innerHTML="",i.e.innerHTML=1==i.l?"<span>"+e.Search_for+"<b>&#8220;"+i.m+"&#8221;</b>"+e.T_Results+"<i> ("+n.feed.openSearch$totalResults.$t+") </i></span>":"<span>"+e.T_Total+"<i>"+n.feed.openSearch$totalResults.$t+"</i></span>","entry"in n.feed){for(var r,s,o,d,c=n.feed.entry,u=0;u<e.maxResults&&u!=c.length;u++){r=c[u].title.$t,o="summary"in c[u]?c[u].summary.$t.replace(/<br ?\/?>/gi," ").replace(/<(.*?)>/g,"").replace(/<iframe/gi,"").substring(0,e.numChars):"",d="media$thumbnail"in c[u]?c[u].media$thumbnail.url.replace(/.*?:\/\//g,"//").replace(/\/s[0-9]+\-c/,"/s"+e.thumbWidth):e.noImage.replace(/\/s[0-9]+\-c/,"/s"+e.thumbWidth);for(var m=0,p=c[u].link.length;m<p;m++)s="alternate"==c[u].link[m].rel?c[u].link[m].href:"#";for(var h=0,b=c[u].link.length;h<b;h++)if("replies"==c[u].link[h].rel&&"text/html"==c[u].link[h].type){c[u].link[h].title;break}if (s)(l=t.createElement("div")).className="carousel-index",l.innerHTML='<div class="inner"><div class="imginner"><a href="'+s+'" target="_blank" title="'+r+'"><img src="'+d+'" alt="'+r+'"></a></div><a class="toc-title" href="'+s+'" target="_blank" title="'+r+'">'+r+'</a><p class="news-text">'+o+' ...</p></div>',i.f.appendChild(l),_sitemap.classList.remove("loader-call");}(l=t.createElement("a")).href="#load-more",l.innerHTML=e.navText,l.onclick=function(){return a.c(i.l,i.j,i.k),!1}}else(l=t.createElement("a")).href="#reset-content",l.innerHTML=e.resetToc,l.onclick=function(){return i.i=-1,i.e.innerHTML=e.counting,i.f.innerHTML="",a.c(0,null,"published"),i.a.innerHTML=i.a.innerHTML,i.b.children[0].innerHTML=i.b.children[0].innerHTML,!1};i.g.appendChild(l),i.a.disabled=!1,i.b.children[0].disabled=!1},e:function(t){for(var n=t.feed.category,l='<select id="label-sorter"><option value="" selected disabled>'+e.text_label+'</option>',r=0,s=n.length;r<s;r++)l+='<option value="'+encodeURIComponent(n[r].term)+'">'+n[r].term.toLowerCase()+"</option>";l+="</select>",i.b.innerHTML=l,i.b.children[0].onchange=function(){i.i=-1,i.f.innerHTML="",i.g.innerHTML=e.loading,a.c(0,this.value,i.k)}}};loadToc=a.d,loadCategories=a.e,a.b(e.homePage+"/feeds/posts/summary?alt=json-in-script&start-index="+(i.i+1)+"&max-results="+e.maxResults+"&orderby=published&callback=loadToc"),a.b(e.homePage+"/feeds/posts/summary?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories"),i.a.onchange=function(){i.i=-1,i.f.innerHTML="",i.g.innerHTML=e.counting,i.b.children[0].innerHTML=i.b.children[0].innerHTML,a.c(0,null,this.value),i.k=this.value},i.c.onsubmit=function(){return i.i=-1,i.f.innerHTML="",i.m=i.d.value,a.c(1,i.d.value,i.k),!1}}};if (typeof(_sitemap) != 'undefined' && _sitemap != null){_sitemap.classList.add("loader-call");_sitemap.innerHTML = '<div class="tg-wrap" id="sitemap"><table class="index"> <thead><tr><td><select id="feed-order"><option selected="selected" value="published">'+e.text_Latesttopics+'</option><option value="updated">'+e.Topics_updated+'</option></select></td><td><select id="label-sorter"><option selected="">'+e.text_label+'</option> </select></td><td><form id="post-searcher"><input class="shadow-input" id="feed-q" placeholder="'+e.Search_topic+'" type="text" /></form></td></td></thead> <tbody><tr><td><div id="feed-container"></div></td></tr></tbody> <tfoot><tr><td><div id="feed-nav"></div></td><td><header id="result-desc"></header></td></tr></tfoot></table></div>';_toc.init();}
  /*]]>*/
 </script>
</b:if>

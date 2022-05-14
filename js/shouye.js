var dz2=document.getElementById("dz2");
var ssk=document.getElementById("ssk");
dz2.onmouseover=function(){
	dz2.style.backgroundImage="url(images/首页/fvujhg.png)"
}
dz2.onmouseout=function(){
	dz2.style.backgroundImage="url(images/首页/搜索.png)"
}
dz2.onclick=function(){
	ssk.style.display="block"
}
ssk.onmouseover=function(){
	ssk.style.display="block"
}
ssk.onmouseout=function(){
	ssk.style.display="none"
}
//var zairu=document.referrer;
var zairu =history.length;
console.log(zairu);
var deng=document.getElementById("deng")
var dz=document.getElementById("dz")
var deng2=document.getElementById("deng2")
	dz.onmouseover=function(){
			dz.style.backgroundImage="url(images/首页/1225506拷贝.png)"	
}
dz.onmouseout=function(){
	dz.style.backgroundImage="url(images/首页/1225506.png)"
}
dz.onclick=function(){
	if(zairu==1){
	deng.style.display="block"
		}else{
			deng2.style.display="block"
		}
}
if(zairu==1){
	deng.onmouseover=function(){
	deng.style.display="block"
}
}else{
	deng2.onmouseover=function(){
	deng2.style.display="block"
}}
console.log(zairu==1);
if(zairu==1){
	deng.onmouseout=function(){
	deng.style.display="none"
}
}else{
	deng2.onmouseout=function(){
	deng2.style.display="none"
}
}

	

/* 轮播图 */
var lunbo=document.getElementById('lunbo');
var lb=document.getElementById("lb");
var test=0;
function bian(){
	test-=1920
	lb.style.left=test+"px"
	if(test==-5760){
		test=0
		lb.style.left=test+"px"
	}
}
setInterval("bian()",3000)
var dl=document.getElementById("dl")
dl.onclick=function(){
	window.open("html/登录注册页.html")
}

var gd=document.getElementById("gd").onclick=function(){
	location.href="html/订票/html/dp.html"
}
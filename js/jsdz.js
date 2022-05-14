/* 登陆注册特效 */
function denglu(){
				var a = document.getElementById("zhang").value;
				var b = document.getElementById("mima").value;
				if(a=="zijincheng"&&b=="12345678"){
					alert("登录成功，正在为您开启故宫大门！")
					setTimeout("javascript:location.href='../index.html'",1000)
				}else if(a==""){
					document.getElementById("yiy").innerText="账号不能为空"
				}else if(b==""){
					document.getElementById("san").innerText="密码不能为空"
				}else{
					document.getElementById("san").innerText="账号或密码错误"
				}
			}
			
var anniu=document.getElementById("xia");
var ye=document.getElementById("zhu");
var body=document.getElementsByTagName("body")
anniu.onclick=function(){
	ye.style.display="block"
	body[0].style.backgroundImage="url(../images/登陆注册页/gugong_shenwumen-0012.jpg)"
	
}
anniu.onmousemove=function(){
	body[0].style.backgroundImage="url(../images/登陆注册页/gugong_shenwumen-002.jpg)"
	body[0].style.transition="background-image 3s linear 0s"
}
var guan=document.getElementById("guan");
guan.onclick=function(){
	ye.style.display="none"
}
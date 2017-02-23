$(function(){
// 头部下拉框
function head(){
	// 送至
		var navgud1=$(".navguding1")[0];
		var navgud1img=$("img",navgud1)[0]; 
		var navgutu1=$(".topnavboxguding1")[0];
		 navgud1.onmouseover=function(){  
		            navgutu1.style.height="201px";
                    navgud1img.src="images/1.1.png";
		        }
		 navgud1.onmouseout=function(){  
		            navgutu1.style.height="0px";
		            navgud1img.src="images/1.png";
		        };
    // 我的京东
		var navgud2=$(".navguding2")[0];
		var navgud2img=$("img",navgud2)[0]; 
		var navgutu2=$(".topnavboxguding2")[0];
		 navgud2.onmouseover=function(){  
		            navgutu2.style.height="200px";
                    navgud2img.src="images/1.1.png";
		        }
		 navgud2.onmouseout=function(){  
		            navgutu2.style.height="0px";
		            navgud2img.src="images/1.png";
		        }
   // 手机京东
		var navgud3=$(".navguding3")[0];
		var navgud3img=$("img",$(".navguding4")[0])[0]; 
		var navgutu3=$(".topnavboxguding3")[0];
		 navgud3.onmouseover=function(){  
		            navgutu3.style.height="195px";
                    navgud3img.src="images/1.1.png";
		        }
		 navgud3.onmouseout=function(){  
		            navgutu3.style.height="0px";
		            navgud3img.src="images/1.png";
		        }
    // 关注京东
		var navgud5=$(".navguding5")[0];
		var navgud5img=$("img",navgud5)[0]; 
		var navgutu4=$(".topnavboxguding4")[0];
		 navgud5.onmouseover=function(){  
		            navgutu4.style.height="100px";
                    navgud5img.src="images/1.1.png";
		        }
		 navgud5.onmouseout=function(){  
		            navgutu4.style.height="0px";
		            navgud5img.src="images/1.png";
		        }
 // 客户服务
		var navgud6=$(".navguding6")[0];
		var navgud6img=$("img",navgud6)[0]; 
		var navgutu5=$(".topnavboxguding5")[0];
		 navgud6.onmouseover=function(){  
		            navgutu5.style.height="180px";
                    navgud6img.src="images/1.1.png";
		        }
		 navgud6.onmouseout=function(){  
		            navgutu5.style.height="0px";
		            navgud6img.src="images/1.png";
		        }
   // 网站导航
		var navgud7=$(".navguding7")[0];
		var navgud7img=$("img",navgud7)[0]; 
		var navgutu6=$(".topnavboxguding6")[0];
		 navgud7.onmouseover=function(){  
		            navgutu6.style.height="188px";
                    navgud7img.src="images/1.1.png";
		        }
		 navgud7.onmouseout=function(){  
		            navgutu6.style.height="0px";
		            navgud7img.src="images/1.png";
		        }
}
head();
// 导航消失
function headclear(){
        var navheadclear=$(".topnavlogoclose")[0];
		    var navclearbox=$(".topnavlogo")[0];
		    navheadclear.onclick=function(){  
		            navclearbox.style.display="none";
		        }
}
headclear();
// banner
function banner(){
  var father=getClass("bannermiddle")[0];
  var tu=father.getElementsByTagName("a"); 
  var btn=$("li",$(".circle")[0]);
 
  var num=0;
     function move(type){
        type=type||"right";
         if(type=="right"){
            num++;
          if(num>=tu.length){
             num=0;
          }
        }else if(type=="left"){
                    num--;
                if(num<0){
               num=tu.length-1;
                     }
          }
          for (var i = 0; i < tu.length; i++) {
            tu[i].style.opacity=0;
            btn[i].className="";
          };
          animate(tu[num],{opacity:1},300);
          btn[num].className="action";
          // banner.style.background=bannerbg[num];
              }
   var t=setInterval(move,2500);                
  // 点击1、2、3等按钮效果
      for(var h=0;h<btn.length;h++){
           btn[h].aa=h;
           btn[h].onmouseover=function(){
           	clearInterval(t);
            for(var j=0;j<tu.length;j++)
            {
               tu[j].style.opacity=0;
                 btn[j].className="";
            }
              animate(tu[this.aa],{opacity:1},1000);
               btn[this.aa].className="action";
              // banner.style.background=bannerbg[this.aa];
               num=this.aa;
           }
      }  
 // banner左右俩边按钮 点击效果
  var leftan=getClass("banner-bottonleft")[0];
  leftan.onclick=function(){
    	  	move("left");
    	  }
  var rightan=getClass("banner-bottonright")[0];
  rightan.onclick=function(){
    	  	move("right");
                  }
  // 鼠标悬停效果
      father.onmouseover=function(){
      	animate(leftan,{opacity:0.6},800);
        animate(rightan,{opacity:0.6},800);
        clearInterval(t);
      }
      father.onmouseout=function(){
      	animate(leftan,{opacity:0},100);
     	animate(rightan,{opacity:0},100);
        t=setInterval(move,2500);
      }
  leftan.onmouseover=function(){
   animate(leftan,{opacity:0.8},300);
   animate(rightan,{opacity:0.8},300);
  }
  rightan.onmouseover=function(){
  	animate(leftan,{opacity:0.8},300);
      animate(rightan,{opacity:0.8},300);
  }
  leftan.onmouseout=function(){
   animate(leftan,{opacity:0},100);
   animate(rightan,{opacity:0},100);
  }
  rightan.onmouseout=function(){
    animate(leftan,{opacity:0},100);
      animate(rightan,{opacity:0},100);
  }
}
banner();
// 跑马车
function floorbanner(){
  var imgbox=$(".tuijieimgbox");//获取盒子
  for(var i=0;i<imgbox.length;i++){//遍历每一个盒子做轮播效果
    lunbo(i)
  }
  function lunbo(i){
      var imgs=$(".tuijieimg",imgbox[i]);//获得图片
      var lbtn=$(".pao-bottonleft",imgbox[i])[0];//获得左边按钮
      var rbtn=$(".pao-bottonright",imgbox[i])[0];//获得右边按钮
      var now=0;
      var next=0;
      var ow=imgbox[0].offsetWidth;
      //让不显示的图片全放到盒子右边隐藏起来
      for(var j=1;j<imgs.length;j++){
        imgs[j].index=j;
        imgs[j].style.left=1000+"px";
      }
      function huantu(type){
        var type=type||"right";
        if(type=="right"){
          next++;
          if(next>=imgs.length){
            next=0;
          }
          imgs[now].style.left=0;
          imgs[next].style.left=ow+"px";
          animate(imgs[now],{left:-ow})
          animate(imgs[next],{left:0});
        }else if(type=="left"){
          next--;
          if(next<=-1){
            next=imgs.length-1;
          }
          imgs[now].style.left=0;
          imgs[next].style.left=-ow+"px";
          animate(imgs[now],{left:ow})
          animate(imgs[next],{left:0});
        }else if(type=="now"){
          if(next==imgs[now].index){
            return false;
          }
          imgs[now].style.left=0;
          imgs[next].style.left=(-ow)+"px";
          animate(imgs[now],{left:ow})
          animate(imgs[next],{left:0});
        }
        now=next;
      }
      //鼠标移入图片盒子的效果
      hover(imgbox[i],function(){
          animate(lbtn,{opacity:0.6},200);//让左右标题显示出来
          animate(rbtn,{opacity:0.6},200);
          lbtn.onclick=function(){
            huantu("left");
        }
          rbtn.onclick=function(){
            huantu("right");
          }

        },function(){
          animate(lbtn,{opacity:0},200);//让左右标题消失
          animate(rbtn,{opacity:0},200);
      })
    }
}
floorbanner();
// banner左侧划出栏
function bannerleft(){
    var nu=$(".bannerleft")[0];
    var nv=$("li",nu);
    var lefthuachu=$(".bannerguding");
    for(var m=0;m<nv.length;m++){
         nv[m].aa=m;
        nv[m].onmouseover=function(){
           for(var n=0;n<lefthuachu.length;n++){
          lefthuachu[n].style.width="0px"; 
            }
         lefthuachu[num=this.aa].style.width="1000px";
          }
          nv[m].onmouseout=function(){
           for(var n=0;n<lefthuachu.length;n++){
              lefthuachu[n].style.width="0px";
                }
         }
     }
} 
bannerleft();
    












	
})
$(function(){  
// 标题栏下边划出效果
function bannertop(){
    var title=$(".biaoti2",$("biaoti")[0]); 
    var con=getClass("biaotiguding");     
    for(var i=0;i<title.length;i++){       
            title[i].aa=i;
            title[i].onmouseover=function(){  
                for(var j=0;j<con.length;j++){
                    con[j].style.height="0px";  
                }
                con[this.aa].style.height="40px";             
             }
            title[i].onmouseout=function(){ 
                for(var j=0;j<con.length;j++){
                    con[j].style.height="0px";  
                }
             }
    };
}
bannertop();
// 时间函数 自动换页
function banner(){
    var banner=$(".banna-middle")[0];
    var tu=$("a",$(".banna-middle")[0]);
    var btn=$(".btn");
    var width=parseInt(getStyle(tu[0],"width"));
    var now=0;
    var next=0;
    var flag=true;
    for (var i = 1; i < tu.length; i++) {    
              tu[i].style.left="740px";
    };    
    function leftmove(type){
            type=type||"right";
            if(type=="right"){
                  next++;
                if(next>=tu.length){   
                  next=0;
                  }
                tu[next].style.left=width+"px";
                animate(tu[now],{left:-width},500);
                animate(tu[next],{left:0},500,function(){ flag=true;});
            }else if(type=="left"){
                    next--;
                if(next<=-1){    
                  next=tu.length-1;
                  }
                  tu[next].style.left=-width+"px";
                  animate(tu[now],{left:width},500);
                  animate(tu[next],{left:0},500,function(){flag=true;});
            }else if(type=="over"){
                return;   
            }
            // tu[next].style.left="740px";      
            // tu[now].style.left="0px";
            // animate(tu[now],{left:-740},500);  //图的位置 循环位置
            // animate(tu[next],{left:0},500);
            btn[now].className="btn";           //其他按钮的始终样式
            btn[next].className="btn action";   //当前选中按钮的样式
                now=next;                   //循环给now赋值    
    };
    var  t=setInterval(leftmove,1000);
    // 单击左右按钮
    var rightbotton=$(".banna-middle-rightbtn")[0];
    var leftbotton=$(".banna-middle-leftbtn")[0];
    leftbotton.onclick=function(){
        if(flag){
            flag=false;
            leftmove("left");
        }       
    }
    rightbotton.onclick=function(){
        if(flag){
            flag=false;
            leftmove("right");
        }       
    }
    // 鼠标悬停效果
    banner.onmouseover=function(){
      clearInterval(t);
         animate(leftbotton,{opacity:0.8},500);
        animate(rightbotton,{opacity:0.8},500);    
    }
    banner.onmouseout=function(){
      t=setInterval(leftmove,1000);
       animate(leftbotton,{opacity:0},500);
        animate(rightbotton,{opacity:0},500);
    }
    // 划入下边1-7按钮
    for (var i = 0; i < btn.length; i++) {
      btn[i].index=i;
      btn[i].onmouseover=function(){
           next=this.index;
           leftmove("over");
       }
    };
}
banner();
// banner下边右移效果
function bannerbottom(){
    var flag=true;
    var leftbtn1=$(".zhong4g-btn")[0];
    var rightbtn1=$(".zhong4g-btn2")[0];
    var tingzhi=$(".zhong4g-shang")[0];
    var box=$(".zhong4g-shangboth");
    var lookwindow=$(".zhong4g-bigbox")[0];
    var width=parseInt(getStyle(box[0],"width"));
    function hchange(){
        animate(lookwindow,{left:-width},450,function(){
            first=getFirst(lookwindow);
            lookwindow.style.left="0";
            lookwindow.appendChild(first);
            flag=true;
        });
    }
    var g=setInterval(hchange,2000);
    // 划入停止效果
    tingzhi.onmouseover=function(){
         clearInterval(g);
    }
    tingzhi.onmouseout=function(){
        g=setInterval(hchange,2000);
    }
    // 点击按钮
    leftbtn1.onclick=function(){
        if (flag) {
            flag=false;  
            first=getFirst(lookwindow);
            last=getLast(lookwindow);
            lookwindow.style.left=-width+"px";
            lookwindow.insertBefore(last,first);    
           animate(lookwindow,{left:0},450,function(){
            flag=true;
        });
        };
    };
    rightbtn1.onclick=function(){
        if(flag){
            flag=false;
          hchange();
        }
    };
}
bannerbottom();
// banner右边小图变大
function changebig(a){
    var change=$("img",$(".banna-right1")[a]);
    for (var i = 0; i < change.length; i++) {
        change[i].aa=i;
        change[i].onmouseover=function(){
            animate(change[this.aa],{width:58,height:51},300);
        }
    }
    for (var i = 0; i < change.length; i++) {
        change[i].onmouseout=function(){
            animate(change[this.aa],{width:48,height:41},300);
        }
    }
};
for (var h = 0; h <6;h++) {
  changebig(h);
};
// 4G专区图片移动
function fourG(a){
    var img=$("img",$(".h4g-buttomboth-2")[a]);
    for (var i = 0; i < img.length; i++) {
        img[i].aa=i;
        img[i].onmouseover=function(){
            animate(img[this.aa],{right:15},500);
        }
    }
    for (var i = 0; i < img.length; i++) {
        img[i].onmouseout=function(){
            animate(img[this.aa],{right:0},300);
        }
    }
};
for (var i = 0; i <6;i++) {
 fourG(i);
};
// 右边固定栏
function guding1(){
    var fox1=$(".fox1")[0];
    fox1.onmouseover=function(){
        animate(fox1,{right:59},300);
    }
    fox1.onmouseout=function(){
        animate(fox1,{right:0},300);
    }
};
guding1();
function guding2(){
    var fox2=$(".fox2")[0];
    fox2.onmouseover=function(){
        animate(fox2,{right:59},300);
    };
    fox2.onmouseout=function(){
        animate(fox2,{right:0},300);
    };
};
guding2();
function guding3(){
    var fox3=$(".fox3")[0];
    fox3.onmouseover=function(){
        animate(fox3,{right:59},600);
    };
    fox3.onmouseout=function(){
        animate(fox3,{right:0},300);
    };
};
guding3();

// 头部导航下拉
var topnav1=$(".topxiala1")[0];
var topnav2=$(".topxiala2")[0];
var topnavfix1=$(".topxialafix1")[0];
var topnavfix2=$(".topxialafix2")[0];
topnav1.onmouseover=function(){
    topnav1.style.background="white";
    topnavfix1.style.height="120px";
     topnavfix1.style.display="block";
}
topnav1.onmouseout=function(){
    topnav1.style.background="";
    topnavfix1.style.height="0px";
     topnavfix1.style.display="none";
}
topnav2.onmouseover=function(){
    topnav2.style.background="white";
    topnavfix2.style.height="160px";
}
topnav2.onmouseout=function(){
    topnav2.style.background="";
    topnavfix2.style.height="0px";
}
// 晋中点击效果
var city=$(".city")[0];
var allcity=$(".allcity")[0];
city.onclick=function(){
    allcity.style.display="block";
}
document.body.onclick=function(e){
    var e=e||window.event;
    var obj=e.target||e.srcElement;
    if(obj.className==="returncy"){
        allcity.style.display="block";
    }else if(obj.className==="city"){
        allcity.style.display="block"; 
    }else{
        allcity.style.display="none";
    }
    
}

function gonggao(){
  var rbtn=$(".dibubtnr")[0];
  var lbtn=$(".dibubtnl")[0];
  var gong=$(".gonggao");
  var now=0;
rbtn.onclick=function(){
    for (var i = 0; i < gong.length; i++) {
      gong[i].style.display="none";
    };
    next=now+1; 
    if (next>=gong.length) {
         next=0;
    };
     gong[now].style.display="none";
    gong[next].style.display="inline-block";
     now=next;  
    }
lbtn.onclick=function(){
    for (var i = 0; i < gong.length; i++) {
      gong[i].style.display="none";
    };
    next=now-1;  
    if (next<0) {
     next=gong.length-1;
    };
    gong[now].style.display="none";
    gong[next].style.display="inline-block";
     now=next;
    }
}
gonggao();

// 结束
});
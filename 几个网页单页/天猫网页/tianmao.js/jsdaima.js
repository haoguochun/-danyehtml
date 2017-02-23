$(function(){
function topnav(){
  // 头部右边下拉框 固定
  var navgud1=$(".gudingnav")[0];
  var a1=$("a",navgud1)[0];
  var navgud1img=$(".gudingnavimg",navgud1)[0]; 
  var aa=$("b")[0];
   navgud1.onmouseover=function(){  
             navgud1img.style.height="61px";  
            aa.style="transform:rotate(180deg);transition:all 0.2s;";
             a1.style.color="#c40000";                                        
          }
   navgud1.onmouseout=function(){  
              navgud1img.style.height="0px"; 
              aa.style="transform:rotate(0deg);transition:all 0.2s;";
               a1.style.color="#888888";          
          };
  var navgud2=$(".gudingnav2")[0];
   var a2=$("a",navgud2)[0];
  var navgud2img=$(".gudingnav2img",navgud2)[0]; 
  var bb=$("b")[1];
   navgud2.onmouseover=function(){  
             navgud2img.style.height="61px";  
               bb.style="transform:rotate(180deg);transition:all 0.2s;";
             a2.style.color="#c40000";                                        

          }
   navgud2.onmouseout=function(){  
              navgud2img.style.height="0px";
               bb.style="transform:rotate(0deg);transition:all 0.2s;";
               a2.style.color="#888888";                     
          };
  var navgud3=$(".gudingnav3")[0];
  var a3=$("a",navgud3)[0];
  var navgud3img=$(".gudingnav3img",navgud3)[0]; 
  var cc=$("b")[2];
   navgud3.onmouseover=function(){  
             navgud3img.style.height="215px";
             navgud3.style.background="white" ;   
             cc.style="transform:rotate(180deg);transition:all 0.2s;";
             a3.style.color="#c40000";            
          }
   navgud3.onmouseout=function(){  
              navgud3img.style.height="0px"; 
               navgud3.style.background="#f5f5f5";
               cc.style="transform:rotate(0deg);transition:all 0.2s;"; 
               a3.style.color="#888888";          
          };
  var navgud4=$(".gudingnav4")[0];
  var a4=$("a",navgud4)[0];
  var navgud4img=$(".gudingnav4img",navgud4)[0]; 
  var dd=$("b")[3];
   navgud4.onmouseover=function(){  
             navgud4img.style.height="180px";
             navgud4.style.background="white" ;  
            dd.style="transform:rotate(180deg);transition:all 0.2s;"; 
             a4.style.color="#c40000";                                       
          }
   navgud4.onmouseout=function(){  
              navgud4img.style.height="0px"; 
               navgud4.style.background="#f5f5f5";
               dd.style="transform:rotate(0deg);transition:all 0.2s;"; 
               a4.style.color="#888888";          
          };
  var navgud5=$(".gudingnav5")[0];
  var a5=$("a",navgud5)[0];
  var navgud5img=$(".gudingnav5img",navgud5)[0]; 
  var ff=$("b")[4];
   navgud5.onmouseover=function(){  
             navgud5img.style.height="250px";
             navgud5img.style.border="1px solid #eee";
             navgud5.style.background="white" ;
             ff.style="transform:rotate(180deg);transition:all 0.2s;";
             a5.style.color="#c40000";                                                                    
          }
   navgud5.onmouseout=function(){  
              navgud5img.style.height="0px"; 
               navgud5.style.background="#f5f5f5";   
               navgud5img.style.border="0"; 
               ff.style="transform:rotate(0deg);transition:all 0.2s;";
               a5.style.color="#888888";          

          };
}
topnav();
// 时间函数自动换页效果
function banner(){
  var father=getClass("bannerbox")[0];
  var tu=father.getElementsByTagName("a"); 
  var btn=$("li",$(".circle")[0]);
  var banner=getClass("bannerbigbox")[0];
  var bannerbg=["#a21607","#26e9e5","#6231fe","#e8e8e8","#fcc5ca","#fed130"];
  var num=0;
  function move(type){
      type=type||"right";
      if(type=="right"){
            num++;
          if(num>=tu.length){
             num=0;
          };
      }else if(type=="left"){
                    num--;
          if(num<0){
             num=tu.length-1;
          };
      };
      for (var i = 0; i < tu.length; i++) {
            tu[i].style.opacity=0;
            btn[i].className="";
      };
      animate(tu[num],{opacity:1},300);
      btn[num].className="action";
      banner.style.background=bannerbg[num];
  };
  var t=setInterval(move,1000);             
  // 鼠标悬停效果
  banner.onmouseover=function(){
        clearInterval(t);
  };
  banner.onmouseout=function(){
        t=setInterval(move,1000);
  };
  // 点击1、2、3等按钮效果
  for(var h=0;h<btn.length;h++){
        btn[h].aa=h;
      btn[h].onclick=function(){
            for(var j=0;j<tu.length;j++){
               tu[j].style.opacity=0;
                 btn[j].className="";
            };
            animate(tu[this.aa],{opacity:1},300);
            btn[this.aa].className="action";
            banner.style.background=bannerbg[this.aa];
            num=this.aa;
      };
  };
    // banner左边的划出效果
  var nv=$("li",$(".bannerleft")[0]);
  var lefthuachu=$(".yangshi-bigbox",$(".bannerbigbox")[0]);
  for(var m=0;m<nv.length;m++){
       nv[m].aa=m;
      nv[m].onmouseover=function(){
        for(var n=0;n<lefthuachu.length;n++){
            lefthuachu[n].style.width="0px"; 
         }
         // animate(lefthuachu[num=this.aa],{width:910},100);
          lefthuachu[num=this.aa].style.width="910px";
        }
        nv[m].onmouseout=function(){
        for(var n=0;n<lefthuachu.length;n++){
            lefthuachu[n].style.width="0px"; 
         }
       }
  }
};
banner();
// 楼层跳转 
// 头部弹出条
var leftguding=$(".floorguding")[0];
var box1=$(".toububox")[0];
var flag=true;
var flag2=true;
// 楼层跳转的取值
var floor=$(".leftfixd");
var btn=$("li",$(".floorguding")[0]);
var arr=["green","blue","red","plum","yellow","orange","green","blue","yellow","yellowgreen"]
var now=0;
document.documentElement.scrollTop=1;
window.onscroll=function(){   //检测滚动条变化事件  滚动条位置改变时触发
var tops=document.documentElement.scrollTop?  //获取滚动条位置 兼容问题
     document.documentElement.scrollTop:document.body.scrollTop; 
   // 头部弹出搜索
   if(tops>=800){
      if(flag){
        animate(box1,{top:0},300);
        animate(leftguding,{opacity:1},300);
        flag=false;
        flag2=true;
      };
   }else{
      if(flag2){
        animate(box1,{top:-50},300);
        animate(leftguding,{opacity:0},300);
        flag2=false;
      };
        flag=true;
   };
   // 楼层跳转
   for (var i = 0; i < floor.length; i++) {
      var  fh=floor[i].offsetTop;
      if(tops>=fh){
        now=i;
        for (var j = 0; j < btn.length; j++) {
          btn[j].style.background="#444";
        }
        btn[i].style.background=arr[i];
      }
   }
};
  //楼层跳转中 鼠标划上按钮效果
  var gao=document.documentElement.scrollTop?document.documentElement:document.body;
  for (var i = 0; i < btn.length; i++) {
    btn[i].aa=i;
    btn[i].onmouseover=function(){
     for (var j = 0; j < btn.length; j++){
        if(now!=j){
         btn[j].style.background="#444";
        }

      };
      this.style.background=arr[this.aa];
    }
  //楼层跳转中 鼠标划出效果
    btn[i].onmouseout=function(){
      for (var j = 0; j < btn.length; j++) {
        if(now!=this.aa){           
        this.style.background="#444";
        }
      };        
    }
    // 楼层跳转中 单击按钮效果
    btn[i].onclick=function(){
      animate(gao,{scrollTop:floor[this.aa].offsetTop},300);
    }
  };
function rightguding(){
  // 右边固定划出框
  var titleF=getClass("gudingbox")[0];
    var title=titleF.getElementsByClassName("leftsmallimg");
    var  righttan=titleF.getElementsByClassName("righthua");
    var title1=titleF.getElementsByClassName("leftsmallimg1")[0];
    var  righttan1=titleF.getElementsByClassName("lefthuachu6")[0];  
      for(var i=0;i<title.length;i++){
            title[i].aa=i;
            title[i].onmouseover=function(){
              for(var j=0;j<righttan.length;j++){
               righttan[j].style.right="60px";
               righttan[j].style.opacity=0;
                righttan[j].style.display="none";
              }
             animate(righttan[this.aa],{right:23,opacity:1},300);
               righttan[this.aa].style.display="block";
            }
            title[i].onmouseout=function(){
                for(var j=0;j<righttan.length;j++){
                animate(righttan[j],{right:60,opacity:0},100);
                righttan[this.aa].style.display="none";
                }
            }
      }
       title1.onmouseover=function(){
            righttan1.style.display="block";
       }
        title1.onmouseout=function(){
            righttan1.style.display="none";
       }
}
rightguding();
//热门品牌黑色遮罩
var box=$("li",$(".brandbottom-right")[0]);
var zhezhao=getClass("guanzhu");
for(var i=0;i<box.length;i++){
    box[i].aa=i;
  box[i].onmouseover=function(){
      //zhezhao[this.aa].style.display="block";
      animate(zhezhao[this.aa],{opacity:1},400)
  };
  box[i].onmouseout=function(){
      //zhezhao[this.aa].style.display="none";
      animate(zhezhao[this.aa],{opacity:0},200)
  };
}; 
// 标题栏划出天猫座效果
var tianmaozi=$("a",$(".biaoti")[0]);
function xingzuo(a){
  var tianmaozuo=$(".hover-pic",tianmaozi[m])[0];
    tianmaozi[m].onmouseover=function(){
           tianmaozuo.style.display="block";
         animate(tianmaozuo,{top:-22},100);      
      }
      tianmaozi[m].onmouseout=function(){
         animate(tianmaozuo,{top:-13},100);
          tianmaozuo.style.display="none";  
     }
   }
for(var m=0;m<tianmaozi.length;m++){
    xingzuo(m);
}
// 楼层大图图片上白色遮罩
var lifezhezhao1=$(".lifezhezhao1");
var lifezhezhao=$(".lifezhezhao");
for (var i = 0; i < lifezhezhao.length; i++) {
    lifezhezhao[i].aa=i;
      lifezhezhao[i].onmouseover=function(){
        for (var j = 0; j < lifezhezhao1.length; j++) {
            lifezhezhao1[j].style.opacity=0;
        };
          animate(lifezhezhao1[this.aa],{opacity:0.4},300);
      }
       lifezhezhao[i].onmouseout=function(){
          for(var n=0;n<lifezhezhao1.length;n++){
             lifezhezhao1[n].style.opacity=0; 
           }
      }
};

// 结束
});
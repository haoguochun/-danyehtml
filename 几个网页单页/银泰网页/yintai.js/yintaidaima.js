$(function(){
// 头部下拉框
function topnav(){
  // 房子
  var fang=$(".topnavsmall")[0]
  var fangzi=$(".topnavsmallimg")[0];
  var fangziword=$(".topnavsmallword")[0];
  fang.onmouseover=function(){
    fangzi.style.background="url(images./背景.png) no-repeat -225px -27px";
    fangziword.style.color="#e5004f";
  }
  fang.onmouseout=function(){
    fangzi.style.background="url(images./1.png) no-repeat";
    fangziword.style.color="";
  }
  // 微信
    var navgud1=$(".navguding1")[0];
    var tu1=$(".topnavsmallimg1")[0];
    var word=$(".topnavsmallword1")[0];
    var ff=$(".icon-arrow-right-copy")[0];
    var navgutu1=$(".topnavboxguding2")[0];
    navgud1.onmouseover=function(){ 
        ff.style="transform:rotate(360deg);transition:all 0.2s;";  
        tu1.style.background="url(images./背景.png) no-repeat -225px -88px";
        navgud1.style.background="white";
        navgud1.style.color="#e5004f";
        word.style.width="104px";
        word.style.background="white";
         navgutu1.style.height="125px";
    }
      navgud1.onmouseout=function(){ 
       ff.style="transform:rotate(0deg);transition:all 0.2s;";
        tu1.style.background="url(images./背景.png) no-repeat -225px -58px";
        navgud1.style.background="";
        navgud1.style.color="";
        word.style.width="54px"
        word.style.background="";
       navgutu1.style.height="0px";
    }
    // 手机
    var navgud2=$(".navguding2")[0];
    var tu2=$(".topnavsmallimg2")[0];
    var word2=$(".topnavsmallword2")[0];
    var ff2=$(".icon-arrow-right-copy")[1];
    var navgutu2=$(".topnavboxguding1")[0];
    navgud2.onmouseover=function(){ 
        ff2.style="transform:rotate(360deg);transition:all 0.2s;";  
        tu2.style.background="url(images./phone.png) no-repeat 0px -20px";
        navgud2.style.background="white";
        navgud2.style.color="#e5004f";
        word2.style.width="109px";
        word2.style.background="white";
         navgutu2.style.height="150px";

    }
      navgud2.onmouseout=function(){ 
       ff2.style="transform:rotate(0deg);transition:all 0.2s;";
        tu2.style.background="url(images./phone.png) no-repeat";
        navgud2.style.background="";
        navgud2.style.color="";
        word2.style.width="54px"
        word2.style.background="";
       navgutu2.style.height="0px";
    }
  // 右边
    var tou1=$(".topnavrightbox");
    var word=$("a",$(".topnavsmallrightword")[2])[0];
    var tou2=$(".erji");
    var rff=$(".icon-arrow-right-copy")[2];
    for (var i = 0; i < tou1.length; i++) {
      tou1[i].aa=i;
      hover(tou1[i],function(){   
        var lis=$("li",tou2[this.aa])
        var h=lis[0].offsetHeight*lis.length;
        rff.style="transform:rotate(360deg);transition:all 0.2s;"; 
        animate(tou2[this.aa],{height:h},300); 
         word.style.color="rgb(229, 0, 79)";
      },function(){
        rff.style="transform:rotate(0deg);transition:all 0.2s;"; 
        animate(tou2[this.aa],{height:0},200);  
         word.style.color="#333";

      });   
    };
}
topnav();
// banner轮波效果	
function banner(){
	var tus=getClass("bannermiddle")[0];
	var tu=tus.getElementsByTagName("a"); 
  var an=getClass("circles");
  var bannerbig=getClass("bannerbigbox")[0];
  var bannerbg=["url(images/15.jpg) no-repeat center top","url(images/15.1.jpg) no-repeat center top","url(images/17.jpg) no-repeat center top","url(images/18.jpg) no-repeat center top"];
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
			an[i].className="circles";
		};
		animate(tu[num],{opacity:1});
		an[num].className="circles action";
    bannerbig.style.background=bannerbg[num];
  }
  var t=setInterval(move,3000);
  // 点击按钮效果
  for(var h=0;h<an.length;h++){
    	an[h].aa=h;
    	an[h].onclick=function(){
    	 	for(var j=0;j<tu.length;j++){
    	 		 tu[j].style.opacity=0;
           	 an[j].className="circles";
    	 	}
    	 	animate(tu[num=this.aa],{opacity:1},300);
        an[this.aa].className="circles action";
        bannerbig.style.background=bannerbg[num];
        num;
        clearInterval(t);
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
  // 鼠标悬停效果 停止banner和移入移出效果
  tus.onmouseover=function(){
  	animate(leftan,{opacity:0.6},800);
    animate(rightan,{opacity:0.6},800);
  	clearInterval(t);
  }
  tus.onmouseout=function(){
  	animate(leftan,{opacity:0},100);
  	animate(rightan,{opacity:0},100);
  	t=setInterval(move,3000);
  }
  leftan.onmouseover=function(){
   animate(leftan,{opacity:1},300);
   animate(rightan,{opacity:1},300);
  }
  rightan.onmouseover=function(){
  	animate(leftan,{opacity:1},300);
      animate(rightan,{opacity:1},300);
  }
  leftan.onmouseout=function(){
   animate(leftan,{opacity:0},100);
   animate(rightan,{opacity:0},100);
  }
  rightan.onmouseout=function(){
    animate(leftan,{opacity:0},100);
      animate(rightan,{opacity:0},100);
  }  
  // banner右边的移动
  var baright=$(".bannerright")[0];
  baright.onmouseover=function(){
    animate(baright,{right:10},300);
        }
  baright.onmouseout=function(){
    animate(baright,{right:0},300);
        }
  // banner左边的划出效果
  var nv=$(".bannerleftbox");
  var bannerleftimg=$(".imgsame");
  var lefthuachu=$(".bannerguding");
  var bannersamll=["url(images/20.png) no-repeat 0px -129px","url(images/20.png) no-repeat -17px -129px","url(images/20.png) no-repeat -34px -129px","url(images/20.png) no-repeat -51px -129px","url(images/20.png) no-repeat -68px -129px","url(images/20.png) no-repeat -85px -129px","url(images/20.png) no-repeat -102px -129px","url(images/20.png) no-repeat -119px -129px","url(images/20.png) no-repeat -136px -129px","url(images/20.png) no-repeat -153px -129px",];
  for(var m=0;m<nv.length;m++){
         nv[m].aa=m;
      nv[m].onmouseover=function(){
           for(var n=0;n<lefthuachu.length;n++){
             lefthuachu[n].style.width="0px"; 
           }
        bannerleftimg[num=this.aa].style.background=bannersamll[num];
          // animate(lefthuachu,{width:620},300);
          // lefthuachu.style.width="620px";
          // animate(lefthuachu[num=this.aa],{display:"inline-block"},300);
        lefthuachu[num=this.aa].style.width="620px";
      }
      nv[m].onmouseout=function(){
           for(var n=0;n<lefthuachu.length;n++){
              lefthuachu[n].style.width="0px";
           }
        bannerleftimg[num=this.aa].style.background="";
      }
  }
}
banner();
// 选项卡效果  第一个手机专享
function shouji(){
 // 选项卡效果  第一个手机专享
  var title=$(".xuanxiangkaleftword",$(".xuanxiangkaleft")[0]); 
  var photo=getClass("xuanxiangkaleftimgs"); 
  var sanjiao=getClass("xuanxiangkasanjiao"); 
  for(var i=0;i<title.length;i++){       
          title[i].aa=i;
     title[i].onmouseover=function(){  
        for(var j=0;j<photo.length;j++){
            photo[j].style.display="none"; 
            title[j].className="xuanxiangkaleftword";
            sanjiao[j].style.display="none";
        }
        photo[this.aa].style.display="inline-block"; 
        title[this.aa].className="xuanxiangkaleftword chuxian";
        sanjiao[this.aa].style.display="inline-block";
     }
     title[i].onmouseout=function(){ 
        for(var j=0;j<photo.length;j++){
            photo[j].style.display="none"; 
            title[j].className="xuanxiangkaleftword";
            sanjiao[j].style.display="none";
        }
        photo[this.aa].style.display="inline-block";
        title[this.aa].className="xuanxiangkaleftword chuxian"
        sanjiao[this.aa].style.display="inline-block";
     }
  }
  // 选项卡下的边框动画  手机专享
  var box1=$(".xuanxiangkaleftimg");
  var line_top1=$(".line-top1");
  var line_left1=$(".line-left1");
  var line_right1=$(".line-right1");
  var line_bottom1=$(".line-bottom1");
  for (var i = 0; i < box1.length; i++) {
        box1[i].index=i;
    hover(box1[i],function(){
        animate(line_top1[this.index],{width:box1[this.index].offsetWidth},500)
        animate(line_left1[this.index],{height:box1[this.index].offsetHeight},500)
        animate(line_right1[this.index],{height:box1[this.index].offsetHeight},500)
        animate(line_bottom1[this.index],{width:box1[this.index].offsetWidth},500)
    },function(){
        animate(line_top1[this.index],{width:0},300)
        animate(line_left1[this.index],{height:0},300)
        animate(line_right1[this.index],{height:0},300)
        animate(line_bottom1[this.index],{width:0},300)
    });
  };
}
shouji();
//选项卡效果  第二个选项卡 热门品牌
function hotbrand(){
  // 第二个选项卡 热门品牌
  var hot=$(".hotboxrighttopsmall",$(".hotboxrighttop")[0]); 
  var cap=getClass("hotboxrightbottom"); 
  var hotsanjiao=getClass("hotboxsanjiao");   
  for(var i=0;i<hot.length;i++){       
          hot[i].aa=i;
      hot[i].onmouseover=function(){  
          for(var j=0;j<cap.length;j++){
                cap[j].style.display="none"; 
                hot[j].className="hotboxrighttopsmall";
                hotsanjiao[j].style.display="none";
          }
          cap[this.aa].style.display="block"; 
          hot[this.aa].className="hotboxrighttopsmall bold";
          hotsanjiao[this.aa].style.display="inline-block";
      }
      hot[i].onmouseout=function(){ 
          for(var j=0;j<cap.length;j++){
                cap[j].style.display="none"; 
                hot[j].className="hotboxrighttopsmall";
                hotsanjiao[j].style.display="none";
          }
          cap[this.aa].style.display="block";
          hot[this.aa].className="hotboxrighttopsmall bold"
          hotsanjiao[this.aa].style.display="inline-block";
      }
  }
  // 选项卡下的边框动画 线  热门品牌
  var box=$(".hotboxrightbottomsmall");
  var line_top=$(".line-top");
  var line_left=$(".line-left");
  var line_right=$(".line-right");
  var line_bottom=$(".line-bottom");
  for (var i = 0; i < box.length; i++) {
        box[i].index=i;
    hover(box[i],function(){
        animate(line_top[this.index],{width:box[this.index].offsetWidth},500)
        animate(line_left[this.index],{height:box[this.index].offsetHeight},500)
        animate(line_right[this.index],{height:box[this.index].offsetHeight},500)
        animate(line_bottom[this.index],{width:box[this.index].offsetWidth},500)
    },function(){
        animate(line_top[this.index],{width:0},300)
        animate(line_left[this.index],{height:0},300)
        animate(line_right[this.index],{height:0},300)
        animate(line_bottom[this.index],{width:0},300)
    });
  };
}
hotbrand();
// 热门品牌选项卡白色遮罩
function zhuanguicard1(){
  var box=$("li",$(".hotboxrightbottom")[0]);
  var zhezhao=$(".hotboximg-zhezhao");
  for(var i=0;i<box.length;i++){
       box[i].index=i;
    box[i].className="hotboximgs-"+(i+1);
    box[i].onmouseover=function(){
      zhezhao[this.index].style.height=this.offsetHeight;
      zhezhao[this.index].style.width=this.offsetWidth;
      animate(zhezhao[this.index],{opacity:0.4});
    }
    box[i].onmouseout=function(){
      animate(zhezhao[this.index],{opacity:0});
    }
  }
}
zhuanguicard1();
//楼层中的banner点击效果
function flooryinwen(){
 //楼层中的英文字母点击效果
   var faimgs=$(".fashionbottomleftimg");//获取盒子
   for(var i=0;i<faimgs.length;i++){//遍历每一个盒子做轮播效果
    lunbo(i);
   };
  function lunbo(i){
   var faimg=$(".fashionbottomleftimgs",faimgs[i]);
   var leftsanjiao=$(".fashionboxsanjiao1",faimgs[i])[0];
   var rightsanjiao=$(".fashionboxsanjiao2",faimgs[i])[0];
      for (var i = 1; i < faimg.length; i++) {    //图片初始放好的位置
          faimg[i].style.left="194px";
      };
   //用俩个下标 
   var now=0;
   var next=0;
      leftsanjiao.onclick=function(){
            next--;
          if(next<=-1){                  //一波结束 循环转动
              next=faimg.length-1;
          };
          faimg[next].style.left="-194px";   //让图瞬间回到右边的初始位置准备好
          faimg[now].style.left="0px";
          animate(faimg[now],{left:194},500);  //图的位置 循环位置
          animate(faimg[next],{left:0},500);
              now=next;     
      };
      rightsanjiao.onclick=function(){
            next++;
          if(next>=faimg.length){    //一波结束 循环转动
              next=0;
          };
          faimg[next].style.left="194px";       //让图瞬间回到右边的初始位置准备好
          faimg[now].style.left="0px";
          animate(faimg[now],{left:-194},500);  //图的位置 循环位置
          animate(faimg[next],{left:0},500);
          now=next;  
      };
  };
};
flooryinwen();
function floorbanner(){
  var imgbox=$(".fashionbottommiddle");//获取盒子
  for(var i=0;i<imgbox.length;i++){//遍历每一个盒子做轮播效果
    lunbo(i)
  };
  function lunbo(i){
    var imgs=$(".fashionbottommiddleimg",imgbox[i]);//获得图片
    var btns=$(".imgbtn",imgbox[i]);//获得下边按钮
    var lbtn=$(".fashionbtnleft",imgbox[i])[0];//获得左边按钮
    var rbtn=$(".fashionbtnright",imgbox[i])[0];//获得右边按钮
    var now=0;
    var next=0;
    var ow=imgbox[0].offsetWidth;
      //让不显示的图片全放到盒子右边隐藏起来
    for(var j=1;j<imgs.length;j++){
        imgs[j].index=j;
        imgs[j].style.left=390+"px";
    };
    function huantu(type){
        var type=type||"right";
        if(type=="right"){
          next++;
          if(next>=imgs.length){
            next=0;
          };
          imgs[now].style.left=0;
          imgs[next].style.left=ow+"px";
          btns[now].className="imgbtn";
          btns[next].className="imgbtn btnact";
          animate(imgs[now],{left:-ow-5})
          animate(imgs[next],{left:0});
        }else if(type=="left"){
          next--;
          if(next<=-1){
            next=imgs.length-1;
          };
          imgs[now].style.left=0;
          imgs[next].style.left=-ow+"px";
          btns[now].className="imgbtn";
          btns[next].className="imgbtn btnact";
          animate(imgs[now],{left:ow})
          animate(imgs[next],{left:0});
        }else if(type=="now"){
          if(next==imgs[now].index){
            return false;
          };
          imgs[now].style.left=0;
          imgs[next].style.left=(-ow-5)+"px";
          btns[now].className="imgbtn";
          btns[next].className="imgbtn btnact";
          animate(imgs[now],{left:ow})
          animate(imgs[next],{left:0});
        };
        now=next;
    };
    //鼠标移入图片盒子的效果
    hover(imgbox[i],function(){
        animate(lbtn,{opacity:0.6},200);//让左右标题显示出来
        animate(rbtn,{opacity:0.6},200);
        lbtn.onclick=function(){
            huantu("left");
        };
        rbtn.onclick=function(){
            huantu("right");
        };

    },function(){
          animate(lbtn,{opacity:0},200);//让左右标题消失
          animate(rbtn,{opacity:0},200);
    });
    //下边按钮点击效果
    for(var k=0;k<btns.length;k++){
        btns[k].index=k;
      btns[k].onclick=btns[k].onmouseover=function(){
        if(this.index==now){
            return false;
        };
        next=this.index;
        if(next>now){
            next++;
            huantu("left");
        };
        if(next<now){
            next--;
            huantu("right");
        };
      };
    };
  };
};
floorbanner();
// 楼层中的边框动画 线  时尚名品
function floorline(){
  var box2=$(".fashionbottomrights");
  var line_top2=$(".line-top2");
  var line_left2=$(".line-left2");
  var line_right2=$(".line-right2");
  var line_bottom2=$(".line-bottom2");
  for (var i = 0; i < box2.length; i++) {
        box2[i].index=i;
    hover(box2[i],function(){
        animate(line_top2[this.index],{width:box2[this.index].offsetWidth-1},500)
        animate(line_left2[this.index],{height:box2[this.index].offsetHeight-1},500)
        animate(line_right2[this.index],{height:box2[this.index].offsetHeight-1},500)
        animate(line_bottom2[this.index],{width:box2[this.index].offsetWidth-1},500)
    },function(){
        animate(line_top2[this.index],{width:0},300)
        animate(line_left2[this.index],{height:0},300)
        animate(line_right2[this.index],{height:0},300)
        animate(line_bottom2[this.index],{width:0},300)
    });
  };
}
 floorline()
// 底部图标变换
function dibu(a){
  var dibuimg=$(".dibuimg")[a];
  var dibuimgs=$("img",dibuimg)[0]; 
  dibuimg.onmouseover=function(){  
            dibuimgs.style.top="-165px";
  };
  dibuimg.onmouseout=function(){  
            dibuimgs.style.top="0px";
  };
};
for (var i = 0; i <3;i++) {
       dibu(i);
};
// 楼层 右固定
function floorrightgu(){
  var rightguding=$(".floorguding")[0];
  var flag=true;
  var flag2=true;
  // 楼层跳转的取值
  var floor=$(".floorfasionfixed");
  var btn=$(".same",$(".floorguding")[0]);
  var span=$("span",$(".floorguding")[0]);
  var now=0;
  document.documentElement.scrollTop=1;
  window.onscroll=function(){   //检测滚动条变化事件  滚动条位置改变时触发
    var tops=document.documentElement.scrollTop?
    document.documentElement.scrollTop:document.body.scrollTop;//获取滚动条位置 兼容问题
    // 右边下拉弹出导航
      if(tops>=1600){
          if(flag){
            animate(rightguding,{opacity:0.8},300);
            flag=false;
            flag2=true;
          };
      }else{
          if(flag2){
            animate(rightguding,{opacity:0},300);
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
              btn[j].style.background="";
              span[j].style.display="none";
          };
          btn[i].style.background="#e50452";
          span[i].style.display="block";
        };
    };
    // 图片按需加载
    for (var i = 0; i < floor.length; i++) {
      if( floor[i].offsetTop<=tops+document.documentElement.clientHeight){
        var imgs=$("img",floor[i]); //集合
        for (var j = 0; j < imgs.length; j++) {
           imgs[j].src=imgs[j].getAttribute("src-data");
        };
      };
    };
  };
  //楼层跳转中 鼠标划上按钮效果
  var gao=document.documentElement.scrollTop?document.documentElement:document.body;
  for (var i = 0; i < btn.length; i++) {
      btn[i].aa=i;
    btn[i].onmouseover=function(){
      for (var j = 0; j < btn.length; j++){
         if(now!=j){
           btn[j].style.background="";
           span[j].style.display="none";
         };
      };
      this.style.background="#e50452";
      span[this.aa].style.display="block";
    }
    //楼层跳转中 鼠标划出效果
    btn[i].onmouseout=function(){
      for (var j = 0; j < btn.length; j++) {
          if(now!=this.aa){           
            this.style.background="";
            span[this.aa].style.display="none";
          };
      };        
    };
    // 楼层跳转中 单击按钮效果
    btn[i].onclick=function(){
       animate(gao,{scrollTop:floor[this.aa].offsetTop},300);
    };
  };
};
floorrightgu();






// 结束
});
      

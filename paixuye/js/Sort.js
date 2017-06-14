

function Sort(seleoter){
	this.ele=$(seleoter).get(0);
	this.oClick();
	this.oChang();
	this.oBuy();
	this.oJump();
	this.fige1=false;
    this.fige2=false;
}

Sort.prototype.oClick=function(){
	var oSelf=this;
	function oHov(a,b){
		$(oSelf.ele).find(a).on({
			"mouseenter mouseleave":function(){
				$(oSelf.ele).find(b).toggle();	
			}
		});
	};
	
	oHov('.model4_1','.place-hide1');
	oHov('.pet-active','.action-slider');
	oHov('.e1','.bagBox');
	oHov('.e2','.bagBox1');
	oHov('.e4','.lab1');
	oHov('.e6','.bagBox2');
	oHov('.e7','.lab2');
	oHov('.d1','.probox');
	oHov('.d2','.myec_tc');
	oHov('.pointer1','.place-hide');
	oHov('.h1','.dm1');
	oHov('.h2','.dm2');
	oHov('.h3','.dm3');
	
	$(oSelf.ele).find('.d3').mouseenter(function(){
		$(oSelf.ele).find('.pet-cate').css('display','block');
		$(oSelf.ele).find('.dogType').css('display','none');
	});
	$(oSelf.ele).find('.d3').mouseleave(function(){
		$(oSelf.ele).find('.pet-cate').css('display','none');
	});
	$(oSelf.ele).find('.d4').mouseenter(function(){
		$(oSelf.ele).find('.dogType').css('display','block');
		$(oSelf.ele).find('.pet-cate').css('display','none');
	});
	$(oSelf.ele).find('.d4').mouseleave(function(){
		$(oSelf.ele).find('.dogType').css('display','none');
	});
	
	$(window).resize(function(){
		$(oSelf.ele).find('.rtbar1').css('height',$(window).height());
		
	});
	$(oSelf.ele).find('.rtbar1').css('height',$(window).height());
	$(oSelf.ele).find('.e7').on({
		click:function(){
			$(window).scrollTop(0);
		}
	});
	
	
	$(window).scroll(function(){
		
		if($(window).scrollTop()>600){
			$('.lis_pl').css({
				'z-index':99,
				'position':'fixed',
				'top':0,
			});
		}
		if($(window).scrollTop()<600){
			
			$('.lis_pl').css({
				'position':'relative',
				'top':0
			});
		}
	});
}


Sort.prototype.oChang=function(){
	var oSelf=this;
	var a=[];

	for(var i=0;i<$(oSelf.ele).find('.box').length;i++){
		a.push($(oSelf.ele).find('.box').eq(i).html());
	};
    $(oSelf.ele).find('.lis_pl ul li').eq(0).click(function(){
        //console.log(111);
		// $(oSelf.ele).find('.box').remove();
		// for(var j=0;j<a.length;j++){
         //    var b='<div class="box">'+a[j]+'</div>';
        	// var $div=b;
		// 	$('.main_m_r_b').append($div);
        // }
         location.reload();
	});

    $(oSelf.ele).find('.lis_pl ul li').eq(5).click(function(){
        oSelf.arr=$('.box');
		if(oSelf.fige1==false){
			for(var i=0;i<oSelf.arr.length;i++){
				for (var j=0;j < oSelf.arr.length - i - 1; j++){
					if(parseFloat($(oSelf.arr[j]).find('.gprice p').html())<parseFloat($(oSelf.arr[j+1]).find('.gprice p').html())){
                        var temp = oSelf.arr[j];
                        $(oSelf.arr[j]).before($(oSelf.arr[j + 1]));
                        oSelf.arr[j] = oSelf.arr[j + 1];
                        oSelf.arr[j + 1] = temp;
					}
				}
			}
            oSelf.fige1=true;
		}else if(oSelf.fige1==true){
            for(var i=0;i<oSelf.arr.length;i++){
                for (var j=0;j < oSelf.arr.length - i - 1; j++){
                    if(parseFloat($(oSelf.arr[j]).find('.gprice p').html())>parseFloat($(oSelf.arr[j+1]).find('.gprice p').html())){
                        var temp = oSelf.arr[j];
                        $(oSelf.arr[j]).before($(oSelf.arr[j + 1]));
                        oSelf.arr[j] = oSelf.arr[j + 1];
                        oSelf.arr[j + 1] = temp;
                    }
                }
            }
            oSelf.fige1=false;
        }
	});
  // console.log(b);
	$(oSelf.ele).find('td').on({
		click:function(){
            $(oSelf.ele).find('td').css('background-color','#fff');
			$(this).css('background-color','pink');
		}
	});
    $(oSelf.ele).find('.brswt').on({
        click:function(){
            if(oSelf.fige2==false){
				for(var i=$(oSelf.ele).find('.box').length;i>0;i--){
					if(($('.box').eq(i-1).find('h4 span').html()).indexOf('贝尔思味特')==-1){
						// console.log($(oSelf.ele).find('.box').eq(i-1));
                        $(oSelf.ele).find('.box').eq(i-1).remove();
					}
				}
                oSelf.fige2=true;
			}else if(oSelf.fige2==true){
            	location.reload();
			}
        }
	})
	
	
}

Sort.prototype.oBuy=function(){
	var oSelf=this;
	var a=0;
	var b=0;
	var arr = [];
	$(oSelf.ele).find('.ap2').on({
		
		click:function(){
			$(oSelf.ele).find('.gw').css('display','block');
			
			if(Cookies.get("oNum")){
				a=parseInt(Cookies.get("oNum"));
				a=a+1;
				Cookies.set("oNum",a,{ expires: 7,path:'/' });	
				$(oSelf.ele).find('.gw1_2 h2 span').html(a);
			}else{
				Cookies.set("oNum",a,{ expires: 7,path:'/' });	
				a=parseInt(Cookies.get("oNum"));
				a=a+1;
				Cookies.set("oNum",a,{ expires: 7,path:'/' });	
				$(oSelf.ele).find('.gw1_2 h2 span').html(a);
			}
			if(Cookies.get("oTotal")){
				b=parseFloat(Cookies.get("oTotal"));
				b=1*($(this).parent('.buy-ctrld').prev().find('.gprice p').html())+b;
				Cookies.set("oTotal",b,{ expires: 7,path:'/'});
				$(oSelf.ele).find('.gw1_2 h2 b').html(b);
			}else{
				Cookies.set("oTotal",b,{ expires: 7,path:'/'});
				b=parseFloat(Cookies.get("oTotal"));
				b=1*($(this).parent('.buy-ctrld').prev().find('.gprice p').html())+b;
				Cookies.set("oTotal",b,{ expires: 7,path:'/'});
				$(oSelf.ele).find('.gw1_2 h2 b').html(b);
			}
			var obj={};
			if(Cookies.get('productList')){
				arr=JSON.parse(Cookies.get('productList'));				
				obj.name=$(this).parent('.buy-ctrld').prev().find('h4 span').html();
				obj.price=$(this).parent('.buy-ctrld').prev().find('.gprice p').html();
				obj.img=$(this).parent('.buy-ctrld').prev().find('.gd-photo img').attr('src');
				arr.push(obj);	
				Cookies.set('productList',JSON.stringify(arr),{ expires:7,path:'/'});
				$(oSelf.ele).find('.cart-t a b').html(JSON.parse(Cookies.get('productList')).length);
                $(oSelf.ele).find('.go-buy a span').html(JSON.parse(Cookies.get('productList')).length);
				$(oSelf.ele).find('.rto').html(JSON.parse(Cookies.get('productList')).length);
			}else{							
				obj.name=$(this).parent('.buy-ctrld').prev().find('h4 span').html();
				obj.price=$(this).parent('.buy-ctrld').prev().find('.gprice p').html();
				obj.img=$(this).parent('.buy-ctrld').prev().find('.gd-photo img').attr('src');
				arr.push(obj);				
				Cookies.set('productList',JSON.stringify(arr),{ expires:7,path:'/'});
			}
			
			//console.log(JSON.parse(Cookies.get('productList')));			
			
			
			
		},
		
		
	});
	if(Cookies.get('productList')){
		$(oSelf.ele).find('.cart-t a b').html(JSON.parse(Cookies.get('productList')).length);
		$(oSelf.ele).find('.rto').html(JSON.parse(Cookies.get('productList')).length);
        $(oSelf.ele).find('.go-buy a span').html(JSON.parse(Cookies.get('productList')).length);
		
	}
//	$(oSelf.ele).find('.gw1_2 h2 span').html(Cookies.get("oNum"));	
//	$(oSelf.ele).find('.gw1_2 h2 b').html(Cookies.get("oTotal"));
//	console.log(Cookies.get("oNum"));
	
	
	$(oSelf.ele).find('.gw3').click(function(){
		$(oSelf.ele).find('.gw').css('display','none');
	});
	$(oSelf.ele).find('.gw1_2 p a').eq(0).click(function(){
		$(oSelf.ele).find('.gw').css('display','none');
	})
	
}


Sort.prototype.oJump=function(){
	var oSelf=this;
	$(oSelf.ele).find('.dl').on({
		click:function(){
			window.open('http://10.20.152.34/xiangmu1-Epet.com/denglu/html/Londing.html')
		}
	});
    $(oSelf.ele).find('.bagBox a').on({
        click:function(){
            window.open('http://10.20.152.34/xiangmu1-Epet.com/denglu/html/Londing.html')
        }
    });
	$(oSelf.ele).find('.zc').on({
		click:function(){
			window.open('http://10.20.152.34/xiangmu1-Epet.com/zhuce/html/Register.html')
		}
	});
	$(oSelf.ele).find('.logo').on({
		click:function(){
			window.open('http://10.20.152.34/xiangmu1-Epet.com/shouye/html/Epet.html');
		}
	});
	$(oSelf.ele).find('.gw1_2 p a').eq(1).on({
		click:function(){
			window.open('http://10.20.152.34/xiangmu1-Epet.com/gouwuche/html/ShoppingCart.html')
		}
	});
	$(oSelf.ele).find('.cart-t').on({
		click:function(){
			window.open('http://10.20.152.34/xiangmu1-Epet.com/gouwuche/html/ShoppingCart.html')
		}
	});
    $(oSelf.ele).find('.e2').on({
        click:function(){
            window.open('http://10.20.152.34/xiangmu1-Epet.com/gouwuche/html/ShoppingCart.html')
        }
    });
    $(oSelf.ele).find('.go-buy').on({
        click:function(){
            window.open('http://10.20.152.34/xiangmu1-Epet.com/gouwuche/html/ShoppingCart.html')
        }
    });
}




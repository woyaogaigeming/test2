

function AddHover(selector){
	this.ele = $(selector).get(0);
	this.oHover();
	this.oJump();
	this.lunBo();
	this.oLunBo();
	this.oSpan();

}
AddHover.prototype.oHover=function(){
	var oSelf=this;
	oHov('.d1','.probox');
	oHov('.d2','.myec_tc');
	oHov('.pointer1','.place-hide');
	
	$(oSelf.ele).find('.d3').mouseenter(function(){
		$(oSelf.ele).find('.pet-cate').css('display','block');
		$(oSelf.ele).find('.dogType').css('display','none');
	});
	$(oSelf.ele).find('.d4').mouseenter(function(){
		$(oSelf.ele).find('.dogType').css('display','block');
		$(oSelf.ele).find('.pet-cate').css('display','none');
	});
	oHov('.pet-active','.action-slider');
	oHov('.e1','.bagBox');
	oHov('.e2','.bagBox1');
	oHov('.e4','.lab1');
	oHov('.e6','.bagBox2');
	oHov('.e7','.lab2');
	
	$(oSelf.ele).find('.e7').on({
		click:function(){
			$(window).scrollTop(0);
		}
	});	
	$(oSelf.ele).find('.rtbar1').css('height',$(window).height());		
	$(window).resize(function(){
		$(oSelf.ele).find('.rtbar1').css('height',$(window).height());		
	});
	$(oSelf.ele).find('.c1').on({
		click:function(){
			$('.hide_b1').css('display','block');
			$('.hide_b2').css('display','none');
		}		
	});
	$(oSelf.ele).find('.c2').on({
		click:function(){
			$('.hide_b2').css('display','block');
			$('.hide_b1').css('display','none');
		}		
	});
	
	function oHov(a,b){
		$(oSelf.ele).find(a).on({
			"mouseenter mouseleave":function(){
				$(oSelf.ele).find(b).toggle();	
			}
		});
	}
}

AddHover.prototype.oJump=function(){
	var oSelf=this;
	$(oSelf.ele).find('.dl').on({
		click:function(){
			window.location.href='../../denglu/html/Londing.html'
		}
	});
    $(oSelf.ele).find('.bagBox a').on({
        click:function(){
            window.location.href='../../denglu/html/Londing.html'
        }
    });
	$(oSelf.ele).find('.zc').on({
		click:function(){
            window.location.href='../../zhuce/html/Register.html'
		}
	});
	$(oSelf.ele).find('.g1').on({
		click:function(){
            window.location.href='../../xiangqing/html/Detail.html'
		}
	});
	$(oSelf.ele).find('.nav1 .hover').on({
		click:function(){
            window.location.href='../../paixuye/html/Sort.html'
		}
	});
    $(oSelf.ele).find('.cart-t').on({
        click:function(){
            window.location.href='../../gouwuche/html/ShoppingCart.html'
        }
    });
    $(oSelf.ele).find('.e2').on({
        click:function(){
            window.location.href='../../gouwuche/html/ShoppingCart.html'
        }
    });
    $(oSelf.ele).find('.go-buy').on({
        click:function(){
            window.location.href='../../gouwuche/html/ShoppingCart.html'
        }
    });
	
}

AddHover.prototype.lunBo=function(){
	var oSelf=this;
	var cound=0;
	var cound1=0;
	$(oSelf.ele).find('.playpic a').click(function(){
		var index=$(this).index();
		$(oSelf.ele).find('.sensor').eq(index).siblings().fadeOut();
		$(oSelf.ele).find('.sensor').eq(index).fadeIn();
		$(oSelf.ele).find('.playpic a').removeClass();
		$(this).addClass('hov');	
	});	
	var timer=setInterval(aaaa,3000);
	$(oSelf.ele).find('.sensor').mouseenter(function(){
		clearInterval(timer);
		//console.log(111);
	});
	$(oSelf.ele).find('.sensor').mouseleave(function(){
		timer=setInterval(aaaa,3000);
		//console.log(222);
	});
	function aaaa(){
		cound++;
		$(oSelf.ele).find('.sensor').eq(cound-1).fadeToggle();
		$(oSelf.ele).find('.sensor').eq(cound).fadeToggle();
		$(oSelf.ele).find('.playpic a').removeClass();
		$(oSelf.ele).find('.playpic a').eq(cound).addClass('hov');
		if(cound==7){
			cound=-1;
		};
		
	}
	$(oSelf.ele).find('.timeproleft').click(function(){
		
		--cound1;
		if(cound1<=0){
			cound1=0;
		}
		$(oSelf.ele).find('.time-procon').animate({
			left:-211*cound1
		})
		//console.log(cound1)
	});
	$(oSelf.ele).find('.timeproright').click(function(){
		++cound1;
		
		if(cound1>=7){
			cound1=7;
		}
		$(oSelf.ele).find('.time-procon').animate({
			left:-211*cound1
		})
        //console.log(cound1)
	});
	
}

AddHover.prototype.oLunBo=function(){
	var oSelf=this;
	var cound=0;
	$(oSelf.ele).find('.btndiv span').mouseenter(function(){
		var index = $(this).index();
		$(oSelf.ele).find('.pic ul').animate({
			left:-286*index
		});
		$(oSelf.ele).find('.btndiv span').removeClass();
		$(this).addClass('on');
		clearInterval(oSelf.timer);
	});
	function bbbb(){
		cound++;
		if(cound==3){
			cound=0;
		};
		$(oSelf.ele).find('.pic ul').animate({
			left:-286*cound
		});
		$(oSelf.ele).find('.btndiv span').removeClass();
		$(oSelf.ele).find('.btndiv span').eq(cound).addClass('on');
	};
	this.timer=setInterval(bbbb,2000);
	$(oSelf.ele).find('.pic ul').mouseenter(function(){
		clearInterval(oSelf.timer);
	});
	$(oSelf.ele).find('.pic ul').mouseleave(function(){
		oSelf.timer=setInterval(bbbb,2000);
	});
	$(oSelf.ele).find('.btndiv').mouseleave(function(){
		oSelf.timer=setInterval(bbbb,2000);
	})
}

AddHover.prototype.oSpan=function(){
	var oSelf=this;
    if(Cookies.get('productList')){
        $(oSelf.ele).find('.cart-t a b').html(JSON.parse(Cookies.get('productList')).length);
        $(oSelf.ele).find('.rto').html(JSON.parse(Cookies.get('productList')).length);
        $(oSelf.ele).find('.go-buy a span').html(JSON.parse(Cookies.get('productList')).length);

    }
}




function Detail(seleoter){
	this.ele=$(seleoter).get(0);
	this.selectNode = $(this.ele).find('.select').get(0);
	this.ZoomAction();
	this.oClick();
	this.oJump();
	this.addFunc();
}

Detail.prototype.ZoomAction = function(){
	var oSelf=this;
	
	$(oSelf.ele).find('.hide').on({
		'mouseenter mouseleave':function(){
			//显示隐藏大图和移动框
			$(oSelf.ele).find('.goodslogo1,.select').toggle();
		},
		'mousemove':function(oEvent){
			var left = oEvent.offsetX - $(oSelf.selectNode).width() / 2;
			var top = oEvent.offsetY - $(oSelf.selectNode).height() / 2;
			
			if(left <= 0){
				left = 0;
			}else if(left >= $(this).width() - $(oSelf.selectNode).width() ){
				left = $(this).width() - $(oSelf.selectNode).width()
			}
			
			if(top <= 0){
				top = 0;
			}else if(top >= $(this).height() - $(oSelf.selectNode).height() ){
				top = $(this).height() - $(oSelf.selectNode).height()
			}
			
			//修改移动框的位置
			$(oSelf.selectNode).css({
				left:left,
				top:top
			})
			
			//修改大图的位置
			var scale = $(oSelf.ele).find('.goodslogo1').width() / $(oSelf.selectNode).width();
			
			$(oSelf.ele).find('.goodslogo1').css({
				backgroundPositionX: -left * scale,
				backgroundPositionY: -top * scale,
			})
			
		}
		
	});
}

Detail.prototype.oClick=function(){
	var oSelf=this;
	$(oSelf.ele).find('.model2 a').click(function(){
		var index=$(this).index();
		
		$('.goodslogo').css('background-image','url(../../images/xq'+index+'.jpg)');
		$('.goodslogo1').css('background-image','url(../../images/xq'+index+'.jpg)');
		$('.picroll img').attr({src:'../../images/xq'+index+'_1.jpg'});
		$(oSelf.ele).find('.model2 a span').css('display','none');
		$(this).find('span').css('display','block');
		console.log(index);
	});
	$(oSelf.ele).find('.model a').click(function(){
		$(oSelf.ele).find('.model a span').css('display','none');
		$(this).find('span').css('display','block');
	});
	function oHov(a,b){
		$(oSelf.ele).find(a).on({
			"mouseenter mouseleave":function(){
				$(oSelf.ele).find(b).toggle();	
			}
		});
	};
	oHov('.tbrandsBox','.bigbfr');
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
	
	
	$(oSelf.ele).find('.e7').on({
		click:function(){
			$(window).scrollTop(0);
		}
	});
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
	$(window).scroll(function(){
		
		if($(window).scrollTop()>980){
			$('.tbrandsBox').css({
				'position':'fixed',
				'top':0,
			});
			$('.main_b_r_t').css({
				'position':'fixed',
				'top':0,
				'background-color':'#F7FBEC'
			});	
		}
		if($(window).scrollTop()<980){
			$('.main_b_r_t').css({
				'position':'relative',
				'top':0
			});
			$('.tbrandsBox').css({
				'position':'relative',
				'top':0
			});
		}
	});
	$(window).resize(function(){
		$(oSelf.ele).find('.rtbar1').css('height',$(window).height());
		console.log($(window).height());
	});
	$(oSelf.ele).find('.rtbar1').css('height',$(window).height());
	
	
}

Detail.prototype.oJump=function(){
	var oSelf=this;
	$(oSelf.ele).find('.dl').on({
		click:function(){
            window.location.href='../../denglu/html/Londing.html'
		}
	});
    $(oSelf.ele).find('.bagBox a').on({
        click:function(){
            window.open('http://10.20.152.34/xiangmu1-Epet.com/denglu/html/Londing.html')
        }
    });
	$(oSelf.ele).find('.zc').on({
		click:function(){
            window.location.href='../../zhuce/html/Register.html'
		}
	});
	$(oSelf.ele).find('.logo').on({
		click:function(){
            window.location.href='../../shouye/html/Epet.html'
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

Detail.prototype.addFunc=function(){
	var oSelf=this;
	$(oSelf.ele).find('.model3 div span').click(function(){
		var index=$(this).index();
		console.log(index);
		if(index==2){
			var a=$(oSelf.ele).find('.model3 div i').html();
			a=parseInt(a);
			a+=1;
			$(oSelf.ele).find('.model3 div i').html(a);
		};
		if(index==0){
			var a=$(oSelf.ele).find('.model3 div i').html();
			a=parseInt(a);
			a-=1
			if(a<=0){
				$(oSelf.ele).find('.model3 div i').html(0);
			}else{
				$(oSelf.ele).find('.model3 div i').html(a);
			}
		}
		
	});
}



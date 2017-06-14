


function ShoppingCart(seleoter){
	this.ele=$(seleoter).get(0);
	this.oClick();
	this.oShop();
	this.oJump();
}

ShoppingCart.prototype.oClick=function(){
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
			
}


ShoppingCart.prototype.oShop=function(){
	var oSelf=this;
	var $div='<div class="cart-order"><input type="checkbox" checked="checked"/><img src=""/><b>贝尔思味特 犬用蔬菜营养小号磨牙棒 12g 小号(12g) </b><i>1</i><em>￥<span>12.00</span></em><strong><a>[收藏]</a><a class="delete">[删除]</a></strong></div>';
				
				
	if(JSON.parse(Cookies.get('productList')).length){
		$(oSelf.ele).find('.cart-t a b').html(JSON.parse(Cookies.get('productList')).length);
		$(oSelf.ele).find('.rto').html(JSON.parse(Cookies.get('productList')).length);
		$('.add_node').css('display','block');
		$('.null-shopcart').css('display','none');
		var a=JSON.parse(Cookies.get('productList'));
		$('.oul li').eq(0).find('span').html(a.length);
		$('.balance2 b').html(parseFloat(Cookies.get("oTotal")));

		for(var i=0;i<a.length;i++){
			$('.add_node2').append($div);
			$('.cart-order').eq(i).find('img').attr('src',JSON.parse(Cookies.get('productList'))[i].img);
			$('.cart-order').eq(i).find('b').html(JSON.parse(Cookies.get('productList'))[i].name);
			$('.cart-order').eq(i).find('span').html(JSON.parse(Cookies.get('productList'))[i].price);
		}
	}else{
		$('.null-shopcart').css('display','block');
		$('.add_node').css('display','none');
	}
	
	$(oSelf.ele).find('.delete').click(function(){
		var index=$(this).parents('.cart-order').index();
		console.log(index);
		$('.cart-order').eq(index-1).remove();
		var arr=JSON.parse(Cookies.get('productList'));
		var a=parseFloat(Cookies.get("oTotal"))-arr[index-1].price;
		a=a.toPrecision(4); 
		Cookies.set("oTotal",a,{ expires: 7,path:'/'});
		$('.balance2 b').html(parseFloat(Cookies.get("oTotal")));
		var b=parseInt(Cookies.get("oNum"));
		b=b-1;
		Cookies.set("oNum",b,{ expires: 7,path:'/' });
		arr.splice(index-1,1);		
		Cookies.set('productList',JSON.stringify(arr),{ expires:7,path:'/'});
		$('.oul li').eq(0).find('span').html(arr.length);
		if(JSON.parse(Cookies.get('productList')).length==0){
			$('.null-shopcart').css('display','block');
			$('.add_node').css('display','none');
			$(oSelf.ele).find('.cart-t a b').html(0);
		    $(oSelf.ele).find('.rto').html(0);
		}else{
			$('.null-shopcart').css('display','none');
			$('.add_node').css('display','block');
			$(oSelf.ele).find('.cart-t a b').html(JSON.parse(Cookies.get('productList')).length);
		    $(oSelf.ele).find('.rto').html(JSON.parse(Cookies.get('productList')).length);
		}
	})
	
}

ShoppingCart.prototype.oJump=function(){
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
    $(oSelf.ele).find('.logoleft img').on({
        click:function(){
            window.location.href='../../shouye/html/Epet.html'
        }
    });
	$(oSelf.ele).find('.cart-t').on({
		click:function(){
            window.location.href='../../gouwuche/html/ShoppingCart.html'
		}
	});
	$(oSelf.ele).find('.null-shopcart p span').eq(1).on({
		click:function(){
            window.location.href='../../shouye/html/Epet.html'
		}
	});
}

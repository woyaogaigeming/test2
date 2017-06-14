

function Register(seleoter){
	this.ele=$(seleoter).get(0);
	
	this.oVerify();
	this.oJump();
	
}

Register.prototype.oVerify=function(){
	var oSelf=this;	
	var ret1 = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[05-9]))\d{8}$/;
	var ret2 = /^[a-zA-Z_]\w{5,19}$/;
	var ret3 = /^[a-z0-9_-]{7,19}$/;
	this.flag=[0,0,0,0,0,0,0]
	$(oSelf.ele).find('.phone1 input').blur(function(){
		
		if(ret1.test($(this).val())){
			$('.phone3').css('display','block');
			$('.phone2').css('display','none');
			oSelf.flag[0]=1;
			console.log(oSelf.flag);
		}else{
			$('.phone2').css('display','block');
			$('.phone3').css('display','none');
			
		}
	});
	//console.log(oSelf.flag);
	//console.log($(oSelf.ele).find('.phone1 input').blur());
	$(oSelf.ele).find('.loginname1 input').blur(function(){
		
		if(ret2.test($(this).val())){
			$('.loginname3').css('display','block');
			$('.loginname2').css('display','none');
			oSelf.flag[1]=1;
		}else{
			$('.loginname2').css('display','block');
			$('.loginname3').css('display','none');
			
		}
	});
	$(oSelf.ele).find('.loginword1 input').blur(function(){
		
		if(ret3.test($(this).val())){
			$('.loginword3').css('display','block');
			$('.loginword2').css('display','none');
			oSelf.flag[2]=1;
		}else{
			$('.loginword2').css('display','block');
			$('.loginword3').css('display','none');
			
		}
	});
	
	$(oSelf.ele).find('.ologinword1 input').blur(function(){
		if($(this).val()==$(oSelf.ele).find('.loginword1 input').val()&&$(oSelf.ele).find('.loginword1 input').val()!=''){
			$('.ologinword3').css('display','block');
			$('.ologinword2').css('display','none');
			oSelf.flag[3]=1;
		}else{
			$('.ologinword2').css('display','block');
			$('.ologinword3').css('display','none');
			
		}
	})
	
	var arr=['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	var a=arr[parseInt(Math.random()*36)];
	var b=arr[parseInt(Math.random()*36)];
	var c=arr[parseInt(Math.random()*36)];
	var d=arr[parseInt(Math.random()*36)];
	$('.loginico2').find('p').eq(0).html(a+b+c+d);
	$('.loginico2').find('p').eq(1).click(function(){
		a=arr[parseInt(Math.random()*36)];
		b=arr[parseInt(Math.random()*36)];
		c=arr[parseInt(Math.random()*36)];
		d=arr[parseInt(Math.random()*36)];
		$('.loginico2').find('p').eq(0).html(a+b+c+d);
	});
	$(oSelf.ele).find('.loginico1 input').blur(function(){
		if($(this).val()==$('.loginico2').find('p').eq(0).html()){
			$('.loginico4').css('display','block');
			$('.loginico3').css('display','none');
			oSelf.flag[4]=1;
		}else{
			$('.loginico3').css('display','block');
			$('.loginico4').css('display','none');
		}
		
	});
	$('.phoneico2').click(function(){		
		a=arr[parseInt(Math.random()*36)];
		b=arr[parseInt(Math.random()*36)];
		c=arr[parseInt(Math.random()*36)];
		d=arr[parseInt(Math.random()*36)];
		$('.phoneico1').find('input').val(a+b+c+d);
		oSelf.flag[5]=1;
	});
	
	if($('.chk input:checked')){
		oSelf.flag[6]=1;		
	};
	console.log(oSelf.flag);
//	if(oSelf.flag.indexOf(0)==-1){
//		console.log(1212121212)
//		$('.btn input').css('background-color','#459d36');
//	}
	
	$('.btn input').click(function(){
		if(oSelf.flag.indexOf(0)==-1){
			//console.log(1212121212)
			$('.btn input').css('background-color','#459d36');
			
			$.ajax({
				url:'../../PHP/Register.php',
                dataType:'json',
                data:{
                    username:$('.loginname1 input').val(),
                    password:$('.loginword1 input').val(),
                    phonenumber:$('.phone1 input').val()
                },
                success:function(data){
                    //显示后台返回的结果
                    confirm(data.content);
                    window.location.href='../../shouye/html/Epet.html';
                },
                error:function(xhr){
                   document.write(xhr.responseText);
                }
			})

			
		};
	})
}


Register.prototype.oJump=function(){
	var oSelf=this;
    $(oSelf.ele).find('.header_r a').on({
        click:function(){
            //console.log(121212);
            window.location.href='../../denglu/html/Londing.html'
        }
    });
    $(oSelf.ele).find('.foot_t a').eq(0).on({
        click:function(){
            //console.log(121212);
            window.location.href='../../shouye/html/Epet.html'
        }
    });

}

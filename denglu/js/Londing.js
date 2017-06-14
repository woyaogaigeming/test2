
function Londing(selector){
	this.ele=$(selector).get(0);
	this.onLoad();
	this.onIco();
	this.oJump();
	this.olond();
}

Londing.prototype.onLoad=function(){
	var oSelf=this;
	$(oSelf.ele).find('.a1').click(function(){
		$(oSelf.ele).find('.load_l_t p').removeClass('on1');
		$(this).addClass('on1');
		$(oSelf.ele).find('.login_1').css('display','block');
		$(oSelf.ele).find('.login_2').css('display','none');
	});
	$(oSelf.ele).find('.a2').click(function(){
		$(oSelf.ele).find('.load_l_t p').removeClass('on1');
		$(this).addClass('on1');
		$(oSelf.ele).find('.login_2').css('display','block');
		$(oSelf.ele).find('.login_1').css('display','none');
	})
}

Londing.prototype.onIco=function(){
	var oSelf=this;
	var arr=['1','2','3','4','5','6','7','8','9','0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
	$(oSelf.ele).find('.loginico2').css('fontSize',18);
	
	$(oSelf.ele).find('.loginico2').click(function(){
		var a=arr[parseInt(Math.random()*36)];
		var b=arr[parseInt(Math.random()*36)];
		var c=arr[parseInt(Math.random()*36)];
		var d=arr[parseInt(Math.random()*36)];
		$(this).html(a+b+c+d);
	})
	$(oSelf.ele).find('.phoneico2').click(function(){
		var a=arr[parseInt(Math.random()*36)];
		var b=arr[parseInt(Math.random()*36)];
		var c=arr[parseInt(Math.random()*36)];
		var d=arr[parseInt(Math.random()*36)];
		$('.phoneico').find('input').val(a+b+c+d);
	})
}


Londing.prototype.oJump=function () {
	var oSelf=this;

    $(oSelf.ele).find('.hz_r a').on({
        click:function(){
            console.log(121212);
            window.open('http://10.20.152.34/xiangmu1-Epet.com/zhuce/html/Register.html');
        }
    });
    $(oSelf.ele).find('.foot_t a').eq(0).on({
        click:function(){
            //console.log(121212);
            window.open('http://10.20.152.34/xiangmu1-Epet.com/shouye/html/Epet.html');
        }
    });
}

Londing.prototype.olond=function () {
	var oSelf=this;
	$('.login_1').find('.loginbtn input').on({
		click:function () {
            if($('.login_1').find('.loginnext input').is(":checked")){
               // console.log(111)
                Cookies.set('oName', $('.loginname input').val(), { expires: 7 });
                Cookies.set('oPassword', $('.loginword input').val(), { expires: 7 });
            }
			$.ajax({
				url:'../../PHP/Londing1.php',
                dataType:'json',
                data:{
                    username:$('.loginname input').val(),
                    password:$('.loginword input').val()
                    //phonenumber:$('.phone1 input').val()
                },
                success:function(data){
					//console.log(111111);
                    confirm(data.content);
                    location.href='http://10.20.152.34/xiangmu1-Epet.com/shouye/html/Epet.html';
				},
				error:function(xhr){
					document.write(xhr.responseText);
				}
			});
            if ($('.login_1').find('.loginnext input').attr('checked')) {
                var str_username = $(".loginname input").val();
                var str_password = $(".loginword input").val();
                Cookies.set("oName", str_username, { expires: 7 });
                Cookies.set("oPassword", str_password, { expires: 7 });
            }else {
                Cookies.set("oName", '', { expires: -1 });
                Cookies.set("oPassword", '', { expires: -1 });
			}

		}
	});
	if(Cookies.get('oName')&&Cookies.get('oPassword')){
        $('.loginname input').val(Cookies.get('oName'));
        $('.loginword input').val(Cookies.get('oPassword'));
	}


	oSelf.flag=[0,0];
    $('.phoneico2').click(function(){
        oSelf.flag[0]=1;
        console.log(typeof(oSelf.flag[0]))
	});
    $('.loginico2').click(function(){
        $(oSelf.ele).find('.loginico1 input').blur(function(){

            if($(this).val()==$('.loginico2').html()){
                oSelf.flag[1]=1;
                console.log(oSelf.flag[1])
            }
        });
	});


        //console.log(oSelf.flag[0]==1 && oSelf.flag[1]==1);
        $('.login_2').find('.loginbtn input').on({
            click: function () {
                if($('.login_2').find('.loginnext input').is(":checked")){
                    Cookies.set('oPhone', $('.phone input').val(), { expires: 7 });

                }
                if(oSelf.flag[0]==1 && oSelf.flag[1]==1) {

					$.ajax({
						url: '../../PHP/Londing2.php',
						dataType: 'json',
						data: {
							//username:$('.loginname input').val(),
							//password:$('.loginword input').val()
							phonenumber: $('.phone input').val()
						},
						success: function (data) {
							//console.log(111111);
							confirm(data.content);
							location.href = 'http://10.20.152.34/xiangmu1-Epet.com/shouye/html/Epet.html';
						},
						error: function (xhr) {
							document.write(xhr.responseText);
						}
					})
            	}
                if ($('.login_2').find('.loginnext input').attr('checked')) {
                    var str_phone = $(".phone input").val();
                    Cookies.set("oPhone", str_phone, { expires: 7 });
                }else{
                    Cookies.set("oPhone", '', { expires: -1 });
				}

            }
        })
    if(Cookies.get('oPhone')){
        $('.phone input').val(Cookies.get('oPhone'));

    }

}



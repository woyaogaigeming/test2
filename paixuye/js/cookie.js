
//保存cookie
function setCookie(name,value,expiresDate){
	
	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
	//instanceof判断一个对象是否属于日期类型
	if(expiresDate instanceof Date){
		cookieText += ';expires=' + expiresDate;
	}
	//保存到cookie中
	document.cookie = cookieText;
}

//获取cookie
function getCookie(name){
	
	var cookieText = decodeURIComponent(document.cookie);
	//分割
	var arr1 = cookieText.split('; ');
	//遍历2次分割
	for(var i = 0; i < arr1.length;i++){
		
		var arr2 = arr1[i].split('=');
		if(arr2[0] == name){
			
			return arr2[1];
		}
	}
	
	//没找到返回空串
	return '';
}

//删除cookie
function removeCookie(name){
	
	document.cookie = encodeURIComponent(name) + '=;expires=' + new Date();
}

function $(id) {
	return document.getElementById(id);
}
var user = $("user"),
    password = $("password"),
    confirmPass = $("confirmPass"),
    email = $("email"),
    cellphone = $("cellphone"),
    check = $("check");
    result = true;

function checkName(str) {
	if(str === null) {
		result = false;
		return 0;	//名称不能为空
	} else {
		// 一个中文字符占用2个英文字符，此处做下转换
		var re = /[^x00-xff]/g;
		str = str.replace(re, "aa");
		if (str.length >=4 && str.length <= 16) {
			result = false;
			return 1;	//长度为4~16个字符
		} else {
			return 2;	//名称正确
		}
	}
}

function checkPsw(str) {
	// 校验密码：只能输入6-16个字母、数字、下划线
	var re = /^(\w){6,16}$/;
	if (!str) {
		result = false;
		return 3;	//密码不能为空
	} else {
		if (!re.test(str)) {
			result = false;
			return 4;	//密码应为6-16个字母、数字或下划线组成
		} else {
			return 5;	//密码格式正确
		}
	}
}

function checkRpsw(str) {
	var psw = password.value;
	if (!psw) {
		result = false;
		return 3;
	}
	if (str !== psw) {
		result = false;
		return 6;	//密码输入不一致
	}
	return 5;
}

function checkEmail(str) {
	var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
	if (!reg.test(str)) {
		result = false;
		return 7;	//邮箱格式错误
	}
	return 8;	//邮箱格式正确
}

function checkTelNum(str) {
	var reg= /^1[3578]\d{9}$/;
	if (!reg.test(str)) {
		result = false;
		return 9;	//请输入正确的手机号码
	}
	return 10;	//手机号码正确
}

//显示提示信息
function showMsg(elem, num) {
	var next = elem.nextElementSibling;
	next.style.display = "block";
	switch(num) {
		case 0:
			next.innerHTML = "名称不能为空";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 1:
			next.innerHTML = "长度应为4~16个字符";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 2:
			next.innerHTML = "名称格式正确";
			next.style.color = "#51B039";
			next.style.borderColor = "#51B039";
			break;
		case 3:
			next.innerHTML = "密码不能为空";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 4:
			next.innerHTML = "密码应为6-16个字母、数字或下划线组成";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 5:
			next.innerHTML = "密码格式正确";
			next.style.color = "#51B039";
			next.style.borderColor = "#51B039";
			break;
		case 6:
			next.innerHTML = "密码输入不一致";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 7:
			next.innerHTML = "邮箱格式错误";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 8:
			next.innerHTML = "邮箱格式正确";
			next.style.color = "#51B039";
			next.style.borderColor = "#51B039";
			break;
		case 9:
			next.innerHTML = "请输入正确的手机号码";
			next.style.color = "#D30910";
			next.style.borderColor = "#D30910";
			break;
		case 10:
			next.innerHTML = "手机号码正确";
			next.style.color = "#51B039";
			next.style.borderColor = "#51B039";
			break;
	}
}

function proof(elem, fn, num) {
	var str = elem.value;
	var num = fn(str);
	showMsg(elem, num);
}

user.onblur = function() {
	proof(user, checkName);
}
// user.addEventListener("blur", function(event) {
// 	proof(event.target, checkName)
// });


// var user = $("user"),
//     password = $("password"),
//     confirmPass = $("confirmPass"),
//     email = $("email"),
//     cellphone = $("cellphone"),
//     check = $("check");

check.onclick = function() {

}
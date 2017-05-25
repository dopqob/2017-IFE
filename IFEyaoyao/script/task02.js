var user = document.getElementById("user"),
    password = document.getElementById("password"),
    confirmPass = document.getElementById("confirmPass"),
    email = document.getElementById("email"),
    cellphone = document.getElementById("cellphone"),
    check = document.getElementById("check");

//获取焦点时显示提示信息
// function onfocusHint(elem) {
//     var next = elem.nextElementSibling;
//     next.style.display = "block";
// }

//失去焦点时校验表单内容
function onblurHint(elem) {
    var next = elem.nextElementSibling;
    next.style.display = "block";
    switch (elem) {
        case user:
            var str = user.value;
            if (!str) {
                next.innerHTML = "名称不能为空";
                next.style.color = "#D30910";
                elem.style.borderColor = "#D30910";
            } else {
                /**
                 * 一个中文字符占用2个英文字符，此处做下转换
                 * 如果有中文字符，就将每个中文字符转换成 "aa"
                 */
                var re = /[^x00-xff]/g;
                str = str.replace(re, "aa");
                if (str.length < 4 || str.length > 16) {
                    next.innerHTML = "长度应为4~16个字符";
                    next.style.color = "#D30910";
                    elem.style.borderColor = "#D30910";
                } else {
                    next.innerHTML = "名称格式正确";
                    next.style.color = "#51B039";
                    elem.style.borderColor = "#51B039";
                }
            }
            break;
        case password:
            var str = password.value;
            // 校验密码：只能输入6-16个字母、数字、下划线
            var re = /^(\w){6,16}$/;
            if (!str) {
                next.innerHTML = "密码不能为空";
                next.style.color = "#D30910";
                elem.style.borderColor = "#D30910";
            } else {
                if (!re.test(str)) {
                    next.innerHTML = "密码应为6-16个字母、数字或下划线组成";
                    next.style.color = "#D30910";
                    elem.style.borderColor = "#D30910";
                } else {
                    next.innerHTML = "密码格式正确";
                    next.style.color = "#51B039";
                    elem.style.borderColor = "#51B039";
                }
            }
            break;
        case confirmPass:
            var str = confirmPass.value;
            var psw = password.value;
            if (!psw) {
                next.innerHTML = "密码不能为空";
                next.style.color = "#D30910";
                elem.style.borderColor = "#D30910";
            } else if (str !== psw) {
                next.innerHTML = "密码输入不一致";
                next.style.color = "#D30910";
                elem.style.borderColor = "#D30910";
            } else {
                next.innerHTML = "密码格式正确";
                next.style.color = "#51B039";
                elem.style.borderColor = "#51B039";
            }
            break;
        case email:
            var str = email.value;
            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            if (!reg.test(str)) {
                next.innerHTML = "邮箱格式错误";
                next.style.color = "#D30910";
                elem.style.borderColor = "#D30910";
            } else {
                next.innerHTML = "邮箱格式正确";
                next.style.color = "#51B039";
                elem.style.borderColor = "#51B039";
            }
            break;
        case cellphone:
            var str = cellphone.value;
            var reg = /^1[3578]\d{9}$/;
            if (!reg.test(str)) {
                next.innerHTML = "请输入正确的手机号码";
                next.style.color = "#D30910";
                elem.style.borderColor = "#D30910";
            } else {
                next.innerHTML = "手机号码正确";
                next.style.color = "#51B039";
                elem.style.borderColor = "#51B039";
            }
            break;
    }
}

function onfocusTag(tag) {
    var tags = document.getElementsByTagName(tag);
    for (var i = 0; i < tags.length; i++) {
        tags[i].onfocus = function() {
            var next = this.nextElementSibling;
            next.style.display = "block";
        }
    }
}
// 输入框绑定获取焦点事件
onfocusTag("input"); 

//输入框绑定失去焦点事件
user.onblur = function() {
    onblurHint(user);
}
password.onblur = function() {
    onblurHint(password);
}
confirmPass.onblur = function() {
    onblurHint(confirmPass);
}
email.onblur = function() {
    onblurHint(email);
}
cellphone.onblur = function() {
    onblurHint(cellphone);
}


check.onclick = function() {
    onblurHint(user);
    onblurHint(password);
    onblurHint(confirmPass);
    onblurHint(email);
    onblurHint(cellphone);

    var inputBox = document.getElementsByTagName("input");
    for (var i = 0; i < inputBox.length; i++) {
        //  #D30910 = reg(211, 9, 16)
        if (inputBox[i].style.borderColor == "rgb(211, 9, 16)") {
            alert("提交失败");
            return false;
        }
    }
    alert("提交成功");
}

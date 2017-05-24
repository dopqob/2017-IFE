var user = document.getElementById("user"),
    password = document.getElementById("password"),
    confirmPass = document.getElementById("confirmPass"),
    email = document.getElementById("email"),
    cellphone = document.getElementById("cellphone"),
    check = document.getElementById("check");

var hintInfo = document.getElementsByClassName("hintInfo"),
    errorInfo = document.getElementsByClassName("errorInfo"),
    correctInfo = document.getElementsByClassName("correctInfo");

// 重置
function reset() {
    var spans = document.getElementsByTagName("span");
    for (var i = 0; i < spans.length; i++) {
        spans[i].style = "";
    }
    user.style = "";
    password.style = "";
    confirmPass.style = "";
    email.style = "";
    cellphone.style = "";
}

//获取焦点时显示提示信息
function onfocusHint(elem) {
    // reset()
        switch(elem) {
            case user:
                hintInfo[0].style.display = "block";
                break;
            case password:
                hintInfo[1].style.display = "block";
                break;
            case confirmPass:
                hintInfo[2].style.display = "block";
                break;
            case email:
                hintInfo[3].style.display = "block";
                break;
            case cellphone:
                hintInfo[4].style.display = "block";
                break;
        }
    // }
}


//失去焦点时校验表单内容
function onblurHint(elem) {
    // reset();
    switch(elem) {
        case user:
            if (!elem.value) {
                elem.style.borderColor = "#D30910";
                errorInfo[0].style.display = "block";
                return false;
                // elem.focus();
            } else {
                elem.style.borderColor = "#51B039";
                correctInfo[0].style.display = "block";
            }
            break;
        case password:
            if (elem.value.length < 6 || elem.value.length > 16) {
                elem.style.borderColor = "#D30910";
                errorInfo[1].style.display = "block";
                return false;
                // elem.focus();
            } else {
                elem.style.borderColor = "#51B039";
                correctInfo[1].style.display = "block";
            }
            break;
        case confirmPass:
            if (!elem.value || elem.value !== password.value) {
                elem.style.borderColor = "#D30910";
                errorInfo[2].style.display = "block";
                return false;
                // elem.focus();
            } else {
                elem.style.borderColor = "#51B039";
                correctInfo[2].style.display = "block";
            }
            break;
        case email:
            var reg=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
            if (!reg.test(elem.value)) {
                elem.style.borderColor = "#D30910";
                errorInfo[3].style.display = "block";
                return false;
                // elem.focus();
            } else {
                elem.style.borderColor = "#51B039";
                correctInfo[3].style.display = "block";
            }
            break;
        case cellphone:
            var reg= /^1[3578]\d{9}$/;
            if (!reg.test(elem.value)) {
                elem.style.borderColor = "#D30910";
                errorInfo[4].style.display = "block";
                return false;
                // elem.focus();
            } else {
                elem.style.borderColor = "#51B039";
                correctInfo[4].style.display = "block";
            }
            break;
    }
}

//输入框绑定获取焦点事件
user.onfocus = function() {
    onfocusHint(user);
}
password.onfocus = function() {
    onfocusHint(password);
}
confirmPass.onfocus = function() {
    onfocusHint(confirmPass);
}
email.onfocus = function() {
    onfocusHint(email);
}
cellphone.onfocus = function() {
    onfocusHint(cellphone);
}

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
}



百度前端技术学院课程任务
-------


* 把字符串按空格（一个或多个）或者Tab分隔成数组:
```javascript
var str, arr;
arr = str.split(/\s+/);   // \s+即表示一个或多个字符
```

* 如果只想去掉字符串首尾空格：
```javascript
str = str.replace(/(^\s*)|(\s*$)/g, "");
//  ^\s* 串首空格
//  \s*$ 串尾空格
```
* 预览html页面效果

        前面加上htmlpreview.github.io/?

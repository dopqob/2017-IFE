百度前端技术学院课程任务



此处在IFE斌斌-Task06中涉及到正则表达式的地方做个笔记：

把字符串按空格（一个或多个）或者Tab分隔成数组:
var str, arr;
arr = str.split(/\s+/);
\s+即表示一个或多个字符

如果只想去掉字符串首尾空格：
str = str.replace(/(^\s*)|(\s*$)/g, "");
^\s*  ---  前方空格
\s*$  ---  后方空格

htmlpreview.github.io/?

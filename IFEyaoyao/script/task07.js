var tbl = document.getElementById("tbl"),
	uparrows = document.querySelectorAll(".up-arrow"),
	downarrows = document.querySelectorAll("down-arrow");

var arr = [];
for (var i = 0; i < tbl.rows.length; i++) {
	arr.push(tbl.rows[i]);
}
console.log(arr);


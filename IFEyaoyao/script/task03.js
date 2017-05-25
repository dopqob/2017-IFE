var inputs = document.getElementsByTagName("input");
var selects = document.getElementsByTagName("select");
var college = document.getElementById("college");
var company = document.getElementById("company");

function addCollege(str) {
	selects[1].options.length = 0;
	switch(str) {
		case "北京":
			selects[1].add(new Option("北京大学"));
			selects[1].add(new Option("清华大学"));
			selects[1].add(new Option("人民大学"));
			selects[1].add(new Option("北京电影学院"));
			selects[1].add(new Option("北京政法大学"));
			selects[1].add(new Option("北京邮电大学"));
			selects[1].add(new Option("中国传媒大学"));
			break;
		case "湖北":
			selects[1].add(new Option("武汉大学"));
			selects[1].add(new Option("武汉理工大学"));
			selects[1].add(new Option("华中科技大学"));
			selects[1].add(new Option("华中师范大学"));
			selects[1].add(new Option("华中农业大学"));
			selects[1].add(new Option("中国地质大学"));
			selects[1].add(new Option("中南财经政法大学"));
			break;
		case "湖南":
			selects[1].add(new Option("国防科学技术大学"));
			selects[1].add(new Option("中南大学"));
			selects[1].add(new Option("湖南大学"));
			selects[1].add(new Option("湖南师范大学"));
			selects[1].add(new Option("湘潭大学"));
			selects[1].add(new Option("长沙理工大学"));
			break;
		case "浙江":
			selects[1].add(new Option("浙江大学"));
			selects[1].add(new Option("宁波大学"));
			selects[1].add(new Option("浙江工业大学"));
			selects[1].add(new Option("浙江师范大学"));
			selects[1].add(new Option("浙江理工大学"));
			selects[1].add(new Option("浙江海洋学院"));
			selects[1].add(new Option("浙江工商大学"));
			break;
	}
}

inputs[0].onchange = function() {
	company.style = "";
	college.style.display = "block";
}

inputs[1].onchange = function() {
	college.style.display = "none";
	company.style.display = "block";
}

selects[0].onchange = function() {
	addCollege(this.value);
}
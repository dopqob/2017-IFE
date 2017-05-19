/**
 * 冒泡排序法(最基本的方法)
 * 1.比较相邻的两个元素，如果前一个比后一个大，则交换位置。
 * 2.第一轮的时候最后一个元素应该是最大的一个。
 * 3.按照步骤一的方法进行相邻两个元素的比较，这个时候由于最后一个元素已经是最大的了，所以最后一个元素不用比较。
 */
function bubbleSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if(arr[j]>arr[j+1]) {
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
}

/**
 * 快速排序法(最常用的方法)
 * 1.找基准（一般是以中间项为基准）
 * 2.遍历数组，小于基准的放在left，大于基准的放在right
 * 3.递归
 */
function quickSort(arr) {
	//如果数组<=1，则直接返回
	if(arr.length <= 1) {
		return arr;
	}
	var pivotIndex = Math.floor(arr.length/2);
	//找基准，并把基准从原数组删除
	var pivot = arr.splice(pivotIndex, 1)[0];
	// console.log(arr.splice(pivotIndex, 1));
	//定义左右数组
	var left = [];
	var right = [];
	//比基准小的放在left，比基准大的放在right
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	//递归
	return quickSort(left).concat([pivot], quickSort(right));
}

/**
 * 选择排序法
 * 首先在未排序序列中找到最小(大)元素，存放到排序序列的起始位置
 * 然后再从剩余未排序元素中继续寻找最小(大)元素，然后放到已排序序列的末尾
 * 以此类推，直到所有元素均排序完毕
 */
function selectionSort(arr) {
	var minIndex, temp;
	for (var i = 0; i < arr.length - 1; i++) {
		minIndex = i;
		for (var j = i + 1; j < arr.length; j++) {
			if(arr[j] < arr[minIndex]) {	/*寻找最小的数*/
				minIndex = j;	/*将最小数的索引保存*/
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

/**
 * 插入排序法
 * 1.从第一个元素开始，该元素可以认为已经被排序
 * 2.取出下一个元素，在已经排序的元素序列中从后向前扫描
 * 3.如果该元素(已排序)大于新元素，将该元素移到下一位置
 * 4.重复步骤3，知道找到已排序的元素小于或等于新元素的位置
 * 5.将新元素插入到下一位置中
 * 6.重复步骤2
 */
function insertionSort(arr) {
	var preIndex, current;
	/*假设第一个元素(索引为0)是一个有序的数列，第一个以后的是无序的数列
	  从第二个元素(索引为1)开始将无序数列的元素插入到有序数列中*/
	for (var i = 1; i < arr.length; i++) {
		var current = arr[i];	/*依次取出无序数列中的元素作为要插入的元素*/
		preIndex = i - 1;		/*有序数列索引的长度*/
		while(preIndex >= 0 && arr[preIndex] > current) {
			arr[preIndex+1] = arr[preIndex];
			preIndex--;
		}
		arr[preIndex+1] = current;
	}
	return arr;
}

var arr = [1,3,5,7,9,2,4,6,8,10];
console.log(insertionSort(arr));
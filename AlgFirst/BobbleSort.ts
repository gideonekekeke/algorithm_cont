const bubbleSortData = (arr: number[]) => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j--) {
			if (arr[j] > arr[i]) {
				console.log("sort iteration", arr, arr[j], arr[i]);
				let temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}

	return arr;
};
console.log(bubbleSortData([4, 1, 5, -6, 9, -8]));

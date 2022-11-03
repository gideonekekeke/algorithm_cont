const mergeSort = (arr1: number[], arr2: number[]) => {
	let res: number[] = [];
	let i: number = 0;
	let j: number = 0;

	while (i < arr1.length && j < arr2.length) {
		if (arr1[i] < arr2[j]) {
			res.push(arr1[i]);

			i++;
		} else {
			res.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		res.push(arr1[i]);
		i++;
	}
	while (j < arr1.length) {
		res.push(arr1[j]);

		j++;
	}

	return res;
};

const ourSort = (arr: number[]) => {
	if (arr.length <= 1) {
		return arr;
	}

	let mid: number = Math.floor(arr.length / 2);
	let left: number[] = ourSort(arr.slice(0, mid));
	let right: number[] = ourSort(arr.slice(mid));

	return mergeSort(right, left);
};

console.log(mergeSort([4, 2, 7], [0, 6, 1]));
console.log("this is merge salt", ourSort([4, 2, 7, 0, 6, 1]));

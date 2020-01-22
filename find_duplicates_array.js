let sample_array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

let find_duplicates = arr => {

    let unique_array = [];
    let all_duplicates_array = [];

    for (let i = 0; i < arr.length; i++) {

        // add all unique elements to one array
        if (unique_array.indexOf(arr[i]) === -1) {
            unique_array.push(arr[i]);
        }

        // add all duplicates to another array
        else {
            all_duplicates_array.push(arr[i]);
        }
    }

    return `Duplicates: ${all_duplicates_array}`;
}

console.log(find_duplicates(sample_array)); // Duplicates: a,a,3,a,3,a,2,3
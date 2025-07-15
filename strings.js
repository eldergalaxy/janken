const numberContainer = [9,10,15,2,13,83,4,3,12];
let strLength = 'how long is this string?'.length;
let rplString = 'lets-replace-all-the-hypens'.replace(/-/g, '');  //using regex
let replString ='lets-try-and-use-the-split-join-tech'.split("-").join(""); //using split().join()

filterRange = function (arr, a, b) {
    return arr.filter(elem =>(a <= elem && b >= elem));
}

const sum = numberContainer.reduce((accumulator, current) => accumulator + current, 0);

console.log(strLength);
console.log(rplString);
console.log(replString);
console.log(filterRange(numberContainer, 5,15));
console.log(sum);
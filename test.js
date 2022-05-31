// // // // // // // // const arr = new Array(7);
// // // // // // // // const arr1 = new Array(1,2,3);
// // // // // // // // console.log(arr,arr1)
// // // // // // // // const arr2 = Array.of();
// // // // // // // // console.log(arr2)
// // // // // // // let nums = [1,2,3];
// // // // // // // nums.push(4,5);
// // // // // // // console.log(nums);//[1,2,3,4,5]
// // // // // // const arr1 = [1,2,3,4];
// // // // // // const initialValue = 3;
// // // // // // //计算arr1中所有元素的累加和
// // // // // // const res1 = arr1.reduce((value1,value2)=>value1 + value2);
// // // // // // console.log(res1);
// // // // // // //计算arr1中所有元素加上initialValue的累加和
// // // // // // const res2 = arr1.reduce((value1,value2)=>value1 + value2,initialValue);
// // // // // // console.log(res2);
// // // // // //
// // // // // // const getMax = (a,b)=>Math.max(a,b);
// // // // // // console.log([1,100,110,60].reduce(getMax,50));//110
// // // // // // console.log([].reduce(getMax,60));//60
// // // // // // // console.log([].reduce(getMax));//TypeError
// // // // // //计算数组的累加和
// // // // // const arr1 = [1,2,3,4];
// // // // // const initialValue = 3;
// // // // // //计算arr1中所有元素的累加和
// // // // // const res1 = arr1.reduceRight((value1,value2)=>value1 + value2,initialValue);
// // // // // console.log(res1);//13
// // // // // const arr2 = [[0,1],[2,3],[4,5]];
// // // // // const res2 = arr2.reduceRight((value1,value2)=>value1.concat(value2));
// // // // // console.log(res2);
// // // // const arr1 = [1,2,3,4,5,6];
// // // // const arr2 = arr1.slice();
// // // // const arr3 = arr1.slice(0,2);
// // // // const arr4 = arr1.slice(1);
// // // // console.log(arr2,arr3,arr4);
// // // // const arr1 = [3,1,5,4,6,7];
// // // // console.log(arr1.sort((a,b)=>{return a - b}));
// // // var items = [
// // //     { name: 'Edward', value: 21 },
// // //     { name: 'Sharpe', value: 37 },
// // //     { name: 'And', value: 45 },
// // //     { name: 'The', value: -12 },
// // //     { name: 'Magnetic' },
// // //     { name: 'Zeros', value: 37 }
// // // ];
// // //
// // // // sort by value
// // // items.sort(function (a, b) {
// // //     return (a.value - b.value)
// // // });
// // // // console.log(items);
// // // // sort by name
// // // items.sort(function(a, b) {
// // //     const nameA = a.name.toUpperCase(); // ignore upper and lowercase
// // //     const nameB = b.name.toUpperCase(); // ignore upper and lowercase
// // //     // console.log(nameA,nameB)
// // //     if (nameA < nameB) {
// // //         return -1;
// // //     }
// // //     if (nameA > nameB) {
// // //         return 1;
// // //     }
// // //
// // //     // names must be equal
// // //     return 0;
// // // });
// // // console.log(items);
// // const nums = [1,2,3,4,5,6];
// // //从1位置开始添加新元素
// // // nums.splice(1,0,-1);
// // // console.log(nums);//[1,-1,2,3,4,5,6]
// // // nums.splice(1,0,-1,-1,-1);
// // // console.log(nums)//[1,-1,-1,-1,2,3,4,5,6];
// //
// // //将4位置的元素进行替换
// // // nums.splice(4,1,0);
// // // console.log(nums)//[1,2,3,4,0,6]
// //
// // //从1位置开始删除2个元素
// // nums.splice(1,2);
// // console.log(nums)//[1,4,5,6]
// //字符串String的ascii码值
// // let res = 0;
// // let s = 'ax'
// // for(let i = s.length - 1; i >= 0; i--){
// //     res += s[i].charCodeAt(0) * 10 ^ i;
// //     res = res % 9999991;
// // }
// // console.log(res);
// let str = 'The quick brown fox jumps over the lazy dog.'
// console.log(str[36] + ':' + str.charCodeAt(36))
// let hello = 'Hello';
// console.log(hello.concat(' Kevin','. Have a nice day.'));
//
// let greetList = ['Hello',' ','Venkat','!'];
// console.log(''.concat(...greetList));
// let str1 = 'Cats are the best!';
// console.log(str1.endsWith('s'));
// console.log(str1.endsWith('best',17));//true
// console.log(String.fromCharCode(189,43,190,61));
// let str = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// console.log(str.indexOf('dog'));//40
// console.log(str.indexOf('dog',str.indexOf('dog') + 1));
// console.log('a'.localeCompare('c'));
// console.log('check'.localeCompare('against'));//
// console.log('a'.localeCompare('a'));//
// console.log('c'.localeCompare('a'));
// const str = 'The quick brown fox jumps over the lazy dog. It barked.';
// console.log(str.match(/[A-Z]/g));
// const str2 = 'For more information, see Chapter 3.4.5.1';
// const regexp = /see (chapter \d+(\.\d)*)/i;
// console.log(str2.match(regexp));//
// const str1 = 'test1test2';
// const regexp = /t(e)(st(\d?))/g;
// // let res = str1.matchAll(regexp)
// // console.log(...res);
// const arr = [...str1.matchAll(regexp)];
// console.log(arr[0]);
// const str1 = 'abc';
// console.log(str1.padEnd(5,'.'));
// console.log(str1)
// console.log(String.raw`Hi\n${2+3}!`)
// const str1 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
// //使用monkey替换掉str1中的第一个dog
// console.log(str1.replace('dog', 'monkey'));//"The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
// //匹配dog的正则表达式
// const regex = /Dog/i;
// console.log(str1.replace(regex,'ferret'));//"The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"
// console.log(str1)
// const str1 = 'The quick brown fox jumps over the lazy dog.';
// console.log(str1.slice());//'the lazy dog.'
// console.log('   hello   '.trimEnd());
// const strObj = new String('foo');
// console.log(strObj);
// console.log(strObj.valueOf())


//找两个正序数组的中位数
//给定两个大小分别为 m 和 n 的正序（从小到大）数组nums1和nums2
// 请你找出并返回这两个正序数组的中位数
// 算法的时间复杂度应该为 O(log (m+n))

function findMedianSortedArrays(nums1,nums2){
    if(nums1 === null || nums2 === null){
        return;
    }
    let allLength = nums1.length + nums2.length;
    let midIndex = -1, midIndex1 = -1, midIndex2 = -1
    if(allLength % 2 === 1){
        midIndex = allLength >> 1;
    }else{
        midIndex1 = (allLength >> 1) - 1;
        midIndex2 = allLength >> 1;
    }
    // console.log(midIndex,midIndex1,midIndex2);
    let p1 = 0, p2 = 0, i = 0;
    let tempArr = [];
    while (p1 < nums1.length && p2 < nums2.length){
        // console.log(i,midIndex,midIndex2)
        tempArr[i] = nums1[p1] <= nums2[p2] ? nums1[p1++] : nums2[p2++];
        if((allLength % 2 === 1) && (i === midIndex)){
            return tempArr[i];
        }
        if((allLength % 2 === 0) && (i === midIndex2)){
            return (tempArr[i] + tempArr[i - 1]) / 2;
        }
        i++;
    }
    while (p1 < nums1.length){
        tempArr[i] = nums1[p1++];
        if((allLength % 2 === 1) && (i === midIndex)){
            return tempArr[i];
        }
        if((allLength % 2 === 0) && (i === midIndex2)){
            return (tempArr[i] + tempArr[i - 1]) / 2;
        }
        i++;
    }
    while (p2 < nums2.length){
        tempArr[i] = nums2[p2++];
        if((allLength % 2 === 1) && (i === midIndex)){
            return tempArr[i];
        }
        if((allLength % 2 === 0) && (i === midIndex2)){
            return (tempArr[i] + tempArr[i - 1]) / 2;
        }
        i++;
    }

}


console.log(findMedianSortedArrays([1,3],[2]));
// 1 1 2 2 3 3 4 4
//1 2 2 3 4 5 7 9
//1 2 3



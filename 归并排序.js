// 核心思想 ： 归并排序就是先把左半边数组排好序，再把右半边数组排好序，然后把两半数组合并。
// merge sort关键在 merge 步骤，而 merge 就是合并两个有序数组

// 伪代码框架
// 定义：排序 nums[lo..hi]
function sort(nums, lo, hi) {
  if (lo == hi) {
    return;
  }
  let mid = (lo + hi) / 2;
  // 利用定义，排序 nums[lo..mid]
  sort(nums, lo, mid);
  // 利用定义，排序 nums[mid+1..hi]
  sort(nums, mid + 1, hi);

  /****** 后序位置 ******/
  // 此时两部分子数组已经被排好序
  // 合并两个有序数组，使 nums[lo..hi] 有序
  merge(nums, lo, mid, hi);
  /*********************/
}

// 将有序数组 nums[lo..mid] 和有序数组 nums[mid+1..hi]
// 合并为有序数组 nums[lo..hi]
function merge(nums, lo, mid, hi) {}

// ============================= 代码实现 =======================================

function mergeSort(nums, lo, hi) {
  if (lo === hi) return;
  let mid = Math.floor((lo + hi) / 2);
  mergeSort(nums, lo, mid);
  mergeSort(nums, mid + 1, hi);
  merge(nums, lo, mid, hi);
}

// 合并，相当于合并两个有序数组
// 使用额外的空间 + 双指针技巧
function merge(nums, lo, mid, hi) {
  let temp = [];
  for (let i = lo; i <= hi; i++) {
    // temp.push(nums[i]);
    temp[i] = nums[i]; // 注意点： temp 和 nums 的坐标要对的上
  }

  let i = lo;
  let j = mid + 1;

  // 考虑数组的第 p个位置，取哪个数
  for (let p = lo; p <= hi; p++) {
    if (i > mid) {
      nums[p] = temp[j++];
      continue;
    }
    if (j > hi) {
      nums[p] = temp[i++];
      continue;
    }

    if (temp[i] < temp[j]) {
      nums[p] = temp[i++];
    } else {
      nums[p] = temp[j++];
    }
  }
}

let arr = [1, 8, 2, 6, 15, 4];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);

const codeSnippets = {
    c: `#include <stdio.h>

int majorityElement(int* nums, int numsSize) {
    int candidate = nums[0];  // Initialize candidate to the first element
    int count = 1;  // Initialize count for the candidate

    // Traverse the array and apply Boyer-Moore Voting Algorithm
    for (int i = 1; i < numsSize; i++) {
        if (count == 0) {
            candidate = nums[i];  // Change candidate if count is 0
            count = 1;  // Reset count for the new candidate
        } else if (nums[i] == candidate) {
            count++;  // Increment count if the current element matches candidate
        } else {
            count--;  // Decrement count if the current element is different
        }
    }

    return candidate;  // Return the majority element
}

`,
  
    java: `class Solution {
    public int majorityElement(int[] nums) {
        int candidate = nums[0];  // Initialize candidate to the first element
        int count = 1;  // Initialize count for the candidate

        // Traverse the array and apply Boyer-Moore Voting Algorithm
        for (int i = 1; i < nums.length; i++) {
            if (count == 0) {
                candidate = nums[i];  // Change candidate if count is 0
                count = 1;  // Reset count for the new candidate
            } else if (nums[i] == candidate) {
                count++;  // Increment count if the current element matches candidate
            } else {
                count--;  // Decrement count if the current element is different
            }
        }

        return candidate;  // Return the majority element
    }
}
`,
  
    cpp: ` #include <vector>
#include <iostream>
using namespace std;

class Solution {
public:
    int majorityElement(vector<int>& nums) {
        int candidate = nums[0];  // Initialize candidate to the first element
        int count = 1;  // Initialize count for the candidate

        // Traverse the array and apply Boyer-Moore Voting Algorithm
        for (int i = 1; i < nums.size(); i++) {
            if (count == 0) {
                candidate = nums[i];  // Change candidate if count is 0
                count = 1;  // Reset count for the new candidate
            } else if (nums[i] == candidate) {
                count++;  // Increment count if the current element matches candidate
            } else {
                count--;  // Decrement count if the current element is different
            }
        }

        return candidate;  // Return the majority element
    }
};
`,
    chash: ` public class Solution {
    public int MajorityElement(int[] nums) {
        int candidate = nums[0];  // Initialize candidate to the first element
        int count = 1;  // Initialize count for the candidate

        // Traverse the array and apply Boyer-Moore Voting Algorithm
        for (int i = 1; i < nums.Length; i++) {
            if (count == 0) {
                candidate = nums[i];  // Change candidate if count is 0
                count = 1;  // Reset count for the new candidate
            } else if (nums[i] == candidate) {
                count++;  // Increment count if the current element matches candidate
            } else {
                count--;  // Decrement count if the current element is different
            }
        }

        return candidate;  // Return the majority element
    }
}

`,
    python: `class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        candidate = nums[0]
        count = 1

        for i in range(1, len(nums)):
            if count == 0:
                candidate = nums[i]
                count = 1
            elif nums[i] == candidate:
                count += 1
            else:
                count -= 1

        return candidate

            `,
  
    kotlin: `class Solution {
    fun majorityElement(nums: IntArray): Int {
        var count = 0
        var candidate = 0

        for (num in nums) {
            if (count == 0) {
                candidate = num
            }

            if (num == candidate) {
                count++
            } else {
                count--
            }
        }

        return candidate
    }
}
`,

    rust: `impl Solution {
    pub fn majority_element(nums: Vec<i32>) -> i32 {
        let mut count = 0;
        let mut candidate = 0;

        for num in nums.iter() {
            if count == 0 {
                candidate = *num;
            }

            if *num == candidate {
                count += 1;
            } else {
                count -= 1;
            }
        }

        candidate
    }
}

`,

      go:`func majorityElement(nums []int) int {
    count := 0
    candidate := 0

    for _, num := range nums {
        if count == 0 {
            candidate = num
        }
        if num == candidate {
            count++
        } else {
            count--
        }
    }

    return candidate
}

`,

    js: `/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
};

`
  };
  
  function showCode(langKey, prismLang) {
    const codeDisplay = document.getElementById("codeDisplay");
    codeDisplay.className = `language-${prismLang}`;
    codeDisplay.textContent = codeSnippets[langKey];
    Prism.highlightElement(codeDisplay);
  }
  
  // Show default
  showCode('c', 'c');
  
  // Resizing logic
const leftPanel = document.querySelector('.left-panel');
const splitter = document.querySelector('.splitter');
let isDragging = false;

splitter.addEventListener('mousedown', (e) => {
  isDragging = true;
  document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const newWidth = e.clientX;
  if (newWidth > 200 && newWidth < window.innerWidth - 300) {
    leftPanel.style.width = newWidth + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});
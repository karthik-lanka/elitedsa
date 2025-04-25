const codeSnippets = {
    c: `#include <limits.h>

int minSubArrayLen(int target, int* nums, int numsSize) {
    int minLength = INT_MAX;
    int left = 0, sum = 0;

    for (int right = 0; right < numsSize; right++) {
        sum += nums[right];

        while (sum >= target) {
            int currentLength = right - left + 1;
            if (currentLength < minLength) {
                minLength = currentLength;
            }
            sum -= nums[left];
            left++;
        }
    }

    return (minLength == INT_MAX) ? 0 : minLength;
}

`,
  
    java: `class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int n = nums.length;
        int minLen = Integer.MAX_VALUE;
        int left = 0;
        int sum = 0;

        for (int right = 0; right < n; right++) {
            sum += nums[right];

            while (sum >= target) {
                minLen = Math.min(minLen, right - left + 1);
                sum -= nums[left];
                left++;
            }
        }

        return (minLen == Integer.MAX_VALUE) ? 0 : minLen;
    }
}
`,
  
    cpp: `class Solution {
public:
    int minSubArrayLen(int target, vector<int>& nums) {
        int left = 0, sum = 0, minLen = INT_MAX;

        for (int right = 0; right < nums.size(); right++) {
            sum += nums[right];
            while (sum >= target) {
                minLen = min(minLen, right - left + 1);
                sum -= nums[left++];
            }
        }

        return minLen == INT_MAX ? 0 : minLen;
    }
};

`,
    chash: `public class Solution {
    public int MinSubArrayLen(int target, int[] nums) {
        int left = 0, sum = 0, minLen = int.MaxValue;

        for (int right = 0; right < nums.Length; right++) {
            sum += nums[right];
            while (sum >= target) {
                minLen = Math.Min(minLen, right - left + 1);
                sum -= nums[left++];
            }
        }

        return minLen == int.MaxValue ? 0 : minLen;
    }
}

`,
    python: `class Solution(object):
    def minSubArrayLen(self, target, nums):
        left = 0
        total = 0
        min_len = float('inf')

        for right in range(len(nums)):
            total += nums[right]
            while total >= target:
                min_len = min(min_len, right - left + 1)
                total -= nums[left]
                left += 1

        return 0 if min_len == float('inf') else min_len
            `,
  
    kotlin: `class Solution {
    fun minSubArrayLen(target: Int, nums: IntArray): Int {
        var left = 0
        var sum = 0
        var minLen = Int.MAX_VALUE

        for (right in nums.indices) {
            sum += nums[right]
            while (sum >= target) {
                minLen = minOf(minLen, right - left + 1)
                sum -= nums[left++]
            }
        }

        return if (minLen == Int.MAX_VALUE) 0 else minLen
    }
}
`,

    rust: `impl Solution {
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let (mut left, mut sum, mut min_len) = (0, 0, usize::MAX);

        for right in 0..nums.len() {
            sum += nums[right];
            while sum >= target {
                min_len = min_len.min(right - left + 1);
                sum -= nums[left];
                left += 1;
            }
        }

        if min_len == usize::MAX {
            0
        } else {
            min_len as i32
        }
    }
}

`,

      go:`func minSubArrayLen(target int, nums []int) int {
    left, sum, minLen := 0, 0, len(nums)+1

    for right := 0; right < len(nums); right++ {
        sum += nums[right]
        for sum >= target {
            if minLen > right-left+1 {
                minLen = right - left + 1
            }
            sum -= nums[left]
            left++
        }
    }

    if minLen == len(nums)+1 {
        return 0
    }
    return minLen
}

`,

    js: `var minSubArrayLen = function(target, nums) {
    let left = 0, sum = 0, minLen = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }

    return minLen === Infinity ? 0 : minLen;
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
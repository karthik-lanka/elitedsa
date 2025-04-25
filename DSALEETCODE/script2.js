const codeSnippets = {
    c: `int removeElement(int* nums, int numsSize, int val) {
    int k = 0; // Counter for elements not equal to val

    for (int i = 0; i < numsSize; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i]; // Place non-val elements at the beginning
            k++;
        }
    }

    return k;
}

`,
  
    java: `class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0;  // k is the index for the next position of valid elements
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];  // Place the non-val element at the next available position
                k++;  // Move the k pointer forward
            }
        }
        return k;  // Return the new length of the array
    }
}
    `,
  
    cpp: `class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int k = 0; // Count of elements not equal to val
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
};

`,
    chash: `public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int k = 0; // Count of elements not equal to val

        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }

        return k;
    }
}

`,
    python: `class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        k = 0  # Count of elements not equal to val

        for i in range(len(nums)):
            if nums[i] != val:
                nums[k] = nums[i]
                k += 1

        return k

            `,
  
    kotlin: `  class Solution {
    fun removeElement(nums: IntArray, value: Int): Int {
        var k = 0 // Count of elements not equal to value

        for (i in nums.indices) {
            if (nums[i] != value) {
                nums[k] = nums[i] // Move non-value elements to the front
                k++
            }
        }

        return k
    }
}
   `,

    rust: `impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> usize {
        let mut k = 0; // Count of elements not equal to val

        for i in 0..nums.len() {
            if nums[i] != val {
                nums[k] = nums[i]; // Move non-val elements to the front
                k += 1;
            }
        }

        k // Return usize type
    }
}

`,

      go:`func removeElement(nums []int, val int) int {
    k := 0 // Count of elements not equal to val

    for i := 0; i < len(nums); i++ {
        if nums[i] != val {
            nums[k] = nums[i] // Move non-val elements to the front
            k++
        }
    }

    return k
}

`,

    js: `/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // Count of elements not equal to val

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
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
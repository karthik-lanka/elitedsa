const codeSnippets = {
    c: `int removeDuplicates(int* nums, int numsSize){
    if (numsSize <= 2) return numsSize;

    int k = 2;
    for (int i = 2; i < numsSize; i++) {
        if (nums[i] != nums[k - 2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

`,
  
    java: `class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length <= 2) return nums.length;
        
        int k = 2; // First two elements can always stay
        for (int i = 2; i < nums.length; i++) {
            if (nums[i] != nums[k - 2]) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
`,
  
    cpp: `class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.size() <= 2) return nums.size();
        int k = 2;
        for (int i = 2; i < nums.size(); ++i) {
            if (nums[i] != nums[k - 2]) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
};
`,
    chash: `public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length <= 2) return nums.Length;
        int k = 2;
        for (int i = 2; i < nums.Length; i++) {
            if (nums[i] != nums[k - 2]) {
                nums[k] = nums[i];
                k++;
            }
        }
        return k;
    }
}
`,
    python: `class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) <= 2:
            return len(nums)
        
        k = 2  # Start from index 2, since first two elements are always allowed
        for i in range(2, len(nums)):
            if nums[i] != nums[k - 2]:
                nums[k] = nums[i]
                k += 1
        return k
            `,
  
    kotlin: `class Solution {
    fun removeDuplicates(nums: IntArray): Int {
        if (nums.size <= 2) return nums.size
        var k = 2
        for (i in 2 until nums.size) {
            if (nums[i] != nums[k - 2]) {
                nums[k] = nums[i]
                k++
            }
        }
        return k
    }
}
`,

    rust: `impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let len = nums.len();
        if len <= 2 {
            return len as i32;
        }

        let mut k = 2;
        for i in 2..len {
            if nums[i] != nums[k - 2] {
                nums[k] = nums[i];
                k += 1;
            }
        }
        k as i32
    }
}
`,

      go:`func removeDuplicates(nums []int) int {
    if len(nums) <= 2 {
        return len(nums)
    }

    k := 2
    for i := 2; i < len(nums); i++ {
        if nums[i] != nums[k-2] {
            nums[k] = nums[i]
            k++
        }
    }
    return k
}

`,

    js: `var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length;
    let k = 2;
    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[k - 2]) {
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
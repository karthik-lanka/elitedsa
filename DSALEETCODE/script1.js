const codeSnippets = {
    c: `void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n) {
    int i = m - 1;           // Last index of valid elements in nums1
    int j = n - 1;           // Last index of nums2
    int k = m + n - 1;       // Last index of nums1 (total space)

    // Merge nums1 and nums2 from the end
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
}
`,
  
    java: `class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        // Create a new array to store the merged result
        int[] merged = new int[m + n];
        int i = 0, j = 0, k = 0;

        // Merge the arrays from the beginning
        while (i < m && j < n) {
            if (nums1[i] <= nums2[j]) {
                merged[k] = nums1[i];
                i++;
            } else {
                merged[k] = nums2[j];
                j++;
            }
            k++;
        }

        // Copy remaining elements from nums1 (if any)
        while (i < m) {
            merged[k] = nums1[i];
            i++;
            k++;
        }

        // Copy remaining elements from nums2 (if any)
        while (j < n) {
            merged[k] = nums2[j];
            j++;
            k++;
        }

        // Copy the merged array back to nums1
        for (int x = 0; x < merged.length; x++) {
            nums1[x] = merged[x];
            System.out.println(nums1[x]);
        }
    }
}`,
  
    cpp: `class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        int i = m - 1;           // Pointer to last element in initial nums1
        int j = n - 1;           // Pointer to last element in nums2
        int k = m + n - 1;       // Pointer to last position in nums1

        // Merge from the end of nums1 and nums2
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }
};
`,
    chash: `public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m - 1;           // Pointer for end of initialized part of nums1
        int j = n - 1;           // Pointer for end of nums2
        int k = m + n - 1;       // Pointer for end of total nums1

        // Merge from back to front
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }
    }
}
`,
    python: `class Solution(object):
    def merge(self, nums1, m, nums2, n):
        """
        :type nums1: List[int]
        :type m: int
        :type nums2: List[int]
        :type n: int
        :rtype: None Do not return anything, modify nums1 in-place instead.
        """
        # Start merging from the end
        i = m - 1  # Pointer for nums1
        j = n - 1  # Pointer for nums2
        k = m + n - 1  # Pointer for position in nums1

        # Merge in reverse to avoid overwriting
        while j >= 0:
            if i >= 0 and nums1[i] > nums2[j]:
                nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1
            k -= 1
            `,
  
    kotlin: `class Solution {
    fun merge(nums1: IntArray, m: Int, nums2: IntArray, n: Int) {
        var i = m - 1    // Pointer for the last element in the initialized part of nums1
        var j = n - 1    // Pointer for the last element in nums2
        var k = m + n - 1  // Pointer for the last element in nums1 (after merging)

        // Merge nums1 and nums2 from the back
        while (j >= 0) {
            if (i >= 0 && nums1[i] > nums2[j]) {
                nums1[k] = nums1[i]
                i--
            } else {
                nums1[k] = nums2[j]
                j--
            }
            k--
        }
    }`,

    rust: `impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let mut i = (m - 1) as isize;
        let mut j = (n - 1) as isize;
        let mut k = (m + n - 1) as isize;

        while j >= 0 {
            if i >= 0 && nums1[i as usize] > nums2[j as usize] {
                nums1[k as usize] = nums1[i as usize];
                i -= 1;
            } else {
                nums1[k as usize] = nums2[j as usize];
                j -= 1;
            }
            k -= 1;
        }
    }
}
`,

      go:`func merge(nums1 []int, m int, nums2 []int, n int) {
    i := m - 1         // Pointer for end of actual elements in nums1
    j := n - 1         // Pointer for end of nums2
    k := m + n - 1     // Pointer for end of nums1 (final merged array)

    // Merge nums1 and nums2 from the back
    for j >= 0 {
        if i >= 0 && nums1[i] > nums2[j] {
            nums1[k] = nums1[i]
            i--
        } else {
            nums1[k] = nums2[j]
            j--
        }
        k--
    }
}
`,

    js: `/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;         // Pointer to last element in nums1's initial part
    let j = n - 1;         // Pointer to last element in nums2
    let k = m + n - 1;     // Pointer to last element in nums1 (with buffer)

    // Merge from the end
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
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
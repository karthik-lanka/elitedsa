const codeSnippets = {
    c: `int jump(int* nums, int numsSize) {
    int jumps = 0, current_end = 0, farthest = 0;
    for (int i = 0; i < numsSize - 1; ++i) {
        if (i + nums[i] > farthest)
            farthest = i + nums[i];
        if (i == current_end) {
            jumps++;
            current_end = farthest;
        }
    }
    return jumps;
}

`,
  
    java: `class Solution {
    public int jump(int[] nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;

        for (int i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
            }
        }

        return jumps;
    }
}

`,
  
    cpp: `class Solution {
public:
    int jump(vector<int>& nums) {
        int jumps = 0, current_end = 0, farthest = 0;

        for (int i = 0; i < nums.size() - 1; ++i) {
            farthest = max(farthest, i + nums[i]);
            if (i == current_end) {
                jumps++;
                current_end = farthest;
            }
        }

        return jumps;
    }
};


`,
    chash: `public class Solution {
    public int Jump(int[] nums) {
        int jumps = 0, currentEnd = 0, farthest = 0;

        for (int i = 0; i < nums.Length - 1; i++) {
            farthest = Math.Max(farthest, i + nums[i]);
            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
            }
        }

        return jumps;
    }
}


`,
    python: `class Solution:
    def jump(self, nums: List[int]) -> int:
        jumps = 0
        current_end = 0
        farthest = 0

        for i in range(len(nums) - 1):
            farthest = max(farthest, i + nums[i])
            if i == current_end:
                jumps += 1
                current_end = farthest

        return jumps

            `,
  
    kotlin: `class Solution {
    fun jump(nums: IntArray): Int {
        var jumps = 0
        var currentEnd = 0
        var farthest = 0

        for (i in 0 until nums.size - 1) {
            farthest = maxOf(farthest, i + nums[i])
            if (i == currentEnd) {
                jumps++
                currentEnd = farthest
            }
        }

        return jumps
    }
}


`,

    rust: `impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        let (mut jumps, mut current_end, mut farthest) = (0, 0, 0);

        for i in 0..nums.len() - 1 {
            farthest = farthest.max(i + nums[i] as usize);
            if i == current_end {
                jumps += 1;
                current_end = farthest;
            }
        }

        jumps
    }
}


`,

      go:`func jump(nums []int) int {
    jumps, currentEnd, farthest := 0, 0, 0

    for i := 0; i < len(nums)-1; i++ {
        if i+nums[i] > farthest {
            farthest = i + nums[i]
        }
        if i == currentEnd {
            jumps++
            currentEnd = farthest
        }
    }

    return jumps
}

`,

    js: `var jump = function(nums) {
    let jumps = 0, currentEnd = 0, farthest = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }

    return jumps;
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
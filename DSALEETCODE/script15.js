const codeSnippets = {
    c: `int candy(int* ratings, int ratingsSize) {
    if (ratingsSize == 0) return 0;

    int* left = (int*)malloc(ratingsSize * sizeof(int));
    int* right = (int*)malloc(ratingsSize * sizeof(int));
    int result = 0;

    left[0] = 1;
    for (int i = 1; i < ratingsSize; i++) {
        left[i] = (ratings[i] > ratings[i - 1]) ? left[i - 1] + 1 : 1;
    }

    right[ratingsSize - 1] = 1;
    for (int i = ratingsSize - 2; i >= 0; i--) {
        right[i] = (ratings[i] > ratings[i + 1]) ? right[i + 1] + 1 : 1;
    }

    for (int i = 0; i < ratingsSize; i++) {
        result += (left[i] > right[i]) ? left[i] : right[i];
    }

    free(left);
    free(right);

    return result;
}
`,
  
    java: `class Solution {
    public int candy(int[] ratings) {
        int n = ratings.length;
        int[] left = new int[n];
        int[] right = new int[n];
        int result = 0;

        Arrays.fill(left, 1);
        Arrays.fill(right, 1);

        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
        }

        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
        }

        for (int i = 0; i < n; i++) {
            result += Math.max(left[i], right[i]);
        }

        return result;
    }
}
`,
  
    cpp: `class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        vector<int> left(n, 1), right(n, 1);
        int result = 0;

        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
        }

        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
        }

        for (int i = 0; i < n; i++) {
            result += max(left[i], right[i]);
        }

        return result;
    }
};
`,
    chash: `public class Solution {
    public int Candy(int[] ratings) {
        int n = ratings.Length;
        int[] left = new int[n];
        int[] right = new int[n];
        int result = 0;

        Array.Fill(left, 1);
        Array.Fill(right, 1);

        for (int i = 1; i < n; i++) {
            if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
        }

        for (int i = n - 2; i >= 0; i--) {
            if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
        }

        for (int i = 0; i < n; i++) {
            result += Math.Max(left[i], right[i]);
        }

        return result;
    }
}
`,
    python: `class Solution:
    def candy(self, ratings: List[int]) -> int:
        n = len(ratings)
        left = [1] * n
        right = [1] * n
        result = 0

        for i in range(1, n):
            if ratings[i] > ratings[i - 1]:
                left[i] = left[i - 1] + 1

        for i in range(n - 2, -1, -1):
            if ratings[i] > ratings[i + 1]:
                right[i] = right[i + 1] + 1

        for i in range(n):
            result += max(left[i], right[i])

        return result
            `,
  
    kotlin: `class Solution {
    fun candy(ratings: IntArray): Int {
        val n = ratings.size
        val left = IntArray(n) { 1 }
        val right = IntArray(n) { 1 }
        var result = 0

        for (i in 1 until n) {
            if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1
        }

        for (i in n - 2 downTo 0) {
            if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1
        }

        for (i in 0 until n) {
            result += maxOf(left[i], right[i])
        }

        return result
    }
}
`,

    rust: `impl Solution {
    pub fn candy(ratings: Vec<i32>) -> i32 {
        let n = ratings.len();
        let mut left = vec![1; n];
        let mut right = vec![1; n];
        let mut result = 0;

        for i in 1..n {
            if ratings[i] > ratings[i - 1] {
                left[i] = left[i - 1] + 1;
            }
        }

        for i in (0..n - 1).rev() {
            if ratings[i] > ratings[i + 1] {
                right[i] = right[i + 1] + 1;
            }
        }

        for i in 0..n {
            result += left[i].max(right[i]);
        }

        result
    }
}
`,

      go:`func candy(ratings []int) int {
    n := len(ratings)
    left := make([]int, n)
    right := make([]int, n)
    result := 0

    for i := 1; i < n; i++ {
        if ratings[i] > ratings[i-1] {
            left[i] = left[i-1] + 1
        } else {
            left[i] = 1
        }
    }

    for i := n - 2; i >= 0; i-- {
        if ratings[i] > ratings[i+1] {
            right[i] = right[i+1] + 1
        } else {
            right[i] = 1
        }
    }

    for i := 0; i < n; i++ {
        result += max(left[i], right[i])
    }

    return result
}
`,

    js: `var candy = function(ratings) {
    const n = ratings.length;
    const left = Array(n).fill(1);
    const right = Array(n).fill(1);
    let result = 0;

    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
    }

    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
    }

    for (let i = 0; i < n; i++) {
        result += Math.max(left[i], right[i]);
    }

    return result;
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
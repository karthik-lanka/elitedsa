const codeSnippets = {
    c: `int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int hIndex(int* citations, int citationsSize) {
    qsort(citations, citationsSize, sizeof(int), compare);
    for (int i = 0; i < citationsSize; i++) {
        if (citations[i] >= citationsSize - i)
            return citationsSize - i;
    }
    return 0;
}
`,
  
    java: `class Solution {
    public int hIndex(int[] citations) {
        Arrays.sort(citations);
        int n = citations.length;
        for (int i = 0; i < n; i++) {
            if (citations[i] >= n - i) {
                return n - i;
            }
        }
        return 0;
    }
}
`,
  
    cpp: `class Solution {
public:
    int hIndex(vector<int>& citations) {
        sort(citations.begin(), citations.end());
        int n = citations.size();
        for (int i = 0; i < n; i++) {
            if (citations[i] >= n - i) {
                return n - i;
            }
        }
        return 0;
    }
};
`,
    chash: `public class Solution {
    public int HIndex(int[] citations) {
        Array.Sort(citations);
        int n = citations.Length;
        for (int i = 0; i < n; i++) {
            if (citations[i] >= n - i)
                return n - i;
        }
        return 0;
    }
}
`,
    python: `class Solution:
    def hIndex(self, citations):
        """
        :type citations: List[int]
        :rtype: int
        """
        citations.sort(reverse=True)
        for i, c in enumerate(citations):
            if c < i + 1:
                return i
        return len(citations)

            `,
  
    kotlin: `class Solution {
    fun hIndex(citations: IntArray): Int {
        citations.sortDescending()
        for (i in citations.indices) {
            if (citations[i] < i + 1) return i
        }
        return citations.size
    }
}

`,

    rust: `impl Solution {
    pub fn h_index(mut citations: Vec<i32>) -> i32 {
        citations.sort_unstable_by(|a, b| b.cmp(a));
        for (i, &c) in citations.iter().enumerate() {
            if c < (i as i32 + 1) {
                return i as i32;
            }
        }
        citations.len() as i32
    }
}
`,

      go:`import "sort"

func hIndex(citations []int) int {
    sort.Sort(sort.Reverse(sort.IntSlice(citations)))
    for i, c := range citations {
        if c < i+1 {
            return i
        }
    }
    return len(citations)
}
`,

    js: `var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] < i + 1) return i;
    }
    return citations.length;
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
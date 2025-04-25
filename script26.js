const codeSnippets = {
    c: ` #include <stdbool.h>

bool isSubsequence(char* s, char* t) {
    int i = 0, j = 0;
    while (s[i] && t[j]) {
        if (s[i] == t[j]) i++;
        j++;
    }
    return s[i] == '\0';
}

`,
  
    java: ` class Solution {
    public boolean isSubsequence(String s, String t) {
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) {
                i++;
            }
            j++;
        }
        return i == s.length();
    }
}
`,
  
    cpp: `class Solution {
public:
    bool isSubsequence(string s, string t) {
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s[i] == t[j]) i++;
            j++;
        }
        return i == s.length();
    }
};

`,
    chash: ` public class Solution {
    public bool IsSubsequence(string s, string t) {
        int i = 0, j = 0;
        while (i < s.Length && j < t.Length) {
            if (s[i] == t[j]) i++;
            j++;
        }
        return i == s.Length;
    }
}

`,
    python: `class Solution(object):
    def isSubsequence(self, s, t):
        i, j = 0, 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                i += 1
            j += 1
        return i == len(s)

            `,
  
    kotlin: ` class Solution {
    fun isSubsequence(s: String, t: String): Boolean {
        var i = 0
        var j = 0
        while (i < s.length && j < t.length) {
            if (s[i] == t[j]) i++
            j++
        }
        return i == s.length
    }
}
`,

    rust: ` impl Solution {
    pub fn is_subsequence(s: String, t: String) -> bool {
        let (mut i, mut j) = (0, 0);
        let s_bytes = s.as_bytes();
        let t_bytes = t.as_bytes();

        while i < s_bytes.len() && j < t_bytes.len() {
            if s_bytes[i] == t_bytes[j] {
                i += 1;
            }
            j += 1;
        }

        i == s_bytes.len()
    }
}

`,

      go:` func isSubsequence(s string, t string) bool {
    i, j := 0, 0
    for i < len(s) && j < len(t) {
        if s[i] == t[j] {
            i++
        }
        j++
    }
    return i == len(s)
}

`,

    js: ` /**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0, j = 0;
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) i++;
        j++;
    }
    return i === s.length;
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
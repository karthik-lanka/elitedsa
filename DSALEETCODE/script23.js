const codeSnippets = {
    c: `int strStr(char* haystack, char* needle) {
    int lenH = strlen(haystack);
    int lenN = strlen(needle);

    if (lenN == 0) return 0;

    for (int i = 0; i <= lenH - lenN; i++) {
        int j = 0;
        while (j < lenN && haystack[i + j] == needle[j]) {
            j++;
        }
        if (j == lenN) return i;
    }

    return -1;
}

`,
  
    java: `class Solution {
    public int strStr(String haystack, String needle) {
        // Edge case: if needle is empty, return 0 as per problem description
        if (needle.isEmpty()) {
            return 0;
        }

        // Edge case: if needle is longer than haystack, it cannot be part of haystack
        if (needle.length() > haystack.length()) {
            return -1;
        }

        // Iterate through haystack to find the first occurrence of needle
        for (int i = 0; i <= haystack.length() - needle.length(); i++) {
            // Check if the substring of haystack matches needle
            if (haystack.substring(i, i + needle.length()).equals(needle)) {
                return i; // Found needle at index i
            }
        }

        return -1; // Needle not found
    }
}
`,
  
    cpp: `class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) return 0;

        for (int i = 0; i <= haystack.size() - needle.size(); i++) {
            int j = 0;
            while (j < needle.size() && haystack[i + j] == needle[j]) {
                j++;
            }
            if (j == needle.size()) return i;
        }

        return -1;
    }
};

`,
    chash: `public class Solution {
    public int StrStr(string haystack, string needle) {
        if (needle.Length == 0) return 0;

        for (int i = 0; i <= haystack.Length - needle.Length; i++) {
            int j = 0;
            while (j < needle.Length && haystack[i + j] == needle[j]) {
                j++;
            }
            if (j == needle.Length) return i;
        }

        return -1;
    }
}

`,
    python: `class Solution(object):
    def strStr(self, haystack, needle):
        if not needle:
            return 0

        for i in range(len(haystack) - len(needle) + 1):
            match = True
            for j in range(len(needle)):
                if haystack[i + j] != needle[j]:
                    match = False
                    break
            if match:
                return i

        return -1

            `,
  
    kotlin: `class Solution {
    fun strStr(haystack: String, needle: String): Int {
        if (needle.isEmpty()) return 0

        for (i in 0..haystack.length - needle.length) {
            var match = true
            for (j in needle.indices) {
                if (haystack[i + j] != needle[j]) {
                    match = false
                    break
                }
            }
            if (match) return i
        }

        return -1
    }
}
`,

    rust: `impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        let h = haystack.as_bytes();
        let n = needle.as_bytes();

        if n.is_empty() {
            return 0;
        }

        for i in 0..=h.len() - n.len() {
            let mut match_found = true;
            for j in 0..n.len() {
                if h[i + j] != n[j] {
                    match_found = false;
                    break;
                }
            }
            if match_found {
                return i as i32;
            }
        }

        -1
    }
}

`,

      go:`func strStr(haystack string, needle string) int {
    if len(needle) == 0 {
        return 0
    }

    for i := 0; i <= len(haystack)-len(needle); i++ {
        match := true
        for j := 0; j < len(needle); j++ {
            if haystack[i+j] != needle[j] {
                match = false
                break
            }
        }
        if match {
            return i
        }
    }

    return -1
}

`,

    js: `/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;
    return haystack.indexOf(needle);
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
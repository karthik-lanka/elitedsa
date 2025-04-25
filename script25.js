const codeSnippets = {
    c: ` #include <ctype.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* s) {
    int len = strlen(s);
    char filtered[len + 1];
    int idx = 0;

    for (int i = 0; i < len; ++i) {
        if (isalnum(s[i])) {
            filtered[idx++] = tolower(s[i]);
        }
    }
    filtered[idx] = '\0';

    int left = 0, right = idx - 1;
    while (left < right) {
        if (filtered[left++] != filtered[right--]) return false;
    }
    return true;
}

`,
  
    java: ` class Solution {
    public boolean isPalindrome(String s) {
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            if (Character.isLetterOrDigit(c)) {
                sb.append(Character.toLowerCase(c));
            }
        }
        String filtered = sb.toString();
        int left = 0, right = filtered.length() - 1;
        while (left < right) {
            if (filtered.charAt(left++) != filtered.charAt(right--)) return false;
        }
        return true;
    }
}
`,
  
    cpp: ` class Solution {
public:
    bool isPalindrome(string s) {
        string filtered;
        for (char c : s) {
            if (isalnum(c)) {
                filtered += tolower(c);
            }
        }
        int left = 0, right = filtered.size() - 1;
        while (left < right) {
            if (filtered[left++] != filtered[right--]) return false;
        }
        return true;
    }
};

`,
    chash: ` public class Solution {
    public bool IsPalindrome(string s) {
        var filtered = new System.Text.StringBuilder();
        foreach (char c in s) {
            if (char.IsLetterOrDigit(c)) {
                filtered.Append(char.ToLower(c));
            }
        }
        string str = filtered.ToString();
        int left = 0, right = str.Length - 1;
        while (left < right) {
            if (str[left++] != str[right--]) return false;
        }
        return true;
    }
}

`,
    python: ` class Solution(object):
    def isPalindrome(self, s):
        filtered = ''.join(c.lower() for c in s if c.isalnum())
        return filtered == filtered[::-1]

            `,
  
    kotlin: `class Solution {
    fun isPalindrome(s: String): Boolean {
        val filtered = s.filter { it.isLetterOrDigit() }.lowercase()
        return filtered == filtered.reversed()
    }
}
`,

    rust: ` impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let filtered: Vec<char> = s.chars()
            .filter(|c| c.is_alphanumeric())
            .map(|c| c.to_ascii_lowercase())
            .collect();
        
        let (mut left, mut right) = (0, filtered.len() as isize - 1);
        while (left as isize) < right {
            if filtered[left] != filtered[right as usize] {
                return false;
            }
            left += 1;
            right -= 1;
        }
        true
    }
}

`,

      go:` import "unicode"

func isPalindrome(s string) bool {
    filtered := []rune{}
    for _, c := range s {
        if unicode.IsLetter(c) || unicode.IsDigit(c) {
            filtered = append(filtered, unicode.ToLower(c))
        }
    }
    left, right := 0, len(filtered)-1
    for left < right {
        if filtered[left] != filtered[right] {
            return false
        }
        left++
        right--
    }
    return true
}

`,

    js: ` var isPalindrome = function(s) {
    let filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = filtered.length - 1;
    while (left < right) {
        if (filtered[left++] !== filtered[right--]) return false;
    }
    return true;
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
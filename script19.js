const codeSnippets = {
    c: `int lengthOfLastWord(char * s){
    int len = strlen(s);
    int count = 0;
    
    // Skip trailing spaces
    while (len > 0 && s[len - 1] == ' ') len--;
    
    // Count the last word's length
    while (len > 0 && s[len - 1] != ' ') {
        count++;
        len--;
    }
    
    return count;
}
`,
  
    java: `class Solution {
    public int lengthOfLastWord(String s) {
        int i = s.length() - 1, len = 0;
        
        while (i >= 0 && s.charAt(i) == ' ') i--;
        while (i >= 0 && s.charAt(i) != ' ') {
            len++;
            i--;
        }
        
        return len;
    }
}
`,
  
    cpp: `class Solution {
public:
    int lengthOfLastWord(string s) {
        int i = s.size() - 1, len = 0;
        
        while (i >= 0 && s[i] == ' ') i--;  // skip trailing spaces
        while (i >= 0 && s[i] != ' ') {
            len++;
            i--;
        }
        
        return len;
    }
};
`,
    chash: `public class Solution {
    public int LengthOfLastWord(string s) {
        int i = s.Length - 1;
        int len = 0;
        
        while (i >= 0 && s[i] == ' ') i--;
        while (i >= 0 && s[i] != ' ') {
            len++;
            i--;
        }
        
        return len;
    }
}
`,
    python: `class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        return len(s.rstrip().split()[-1])
            `,
  
    kotlin: `class Solution {
    fun lengthOfLastWord(s: String): Int {
        var i = s.length - 1
        var len = 0
        
        while (i >= 0 && s[i] == ' ') i--
        while (i >= 0 && s[i] != ' ') {
            len++
            i--
        }
        
        return len
    }
}
`,

    rust: `impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let s = s.trim_end();
        let mut len = 0;
        
        for c in s.chars().rev() {
            if c == ' ' {
                break;
            }
            len += 1;
        }
        
        len
    }
}
`,

      go:`func lengthOfLastWord(s string) int {
    i := len(s) - 1
    length := 0
    
    for i >= 0 && s[i] == ' ' {
        i--
    }
    
    for i >= 0 && s[i] != ' ' {
        length++
        i--
    }
    
    return length
}
`,

    js: `/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let i = s.length - 1, len = 0;
    
    while (i >= 0 && s[i] === ' ') i--;
    while (i >= 0 && s[i] !== ' ') {
        len++;
        i--;
    }
    
    return len;
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
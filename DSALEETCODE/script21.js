const codeSnippets = {
    c: `char* reverseWords(char* s) {
    // Allocate space for the final result
    int len = strlen(s);
    char* result = (char*)malloc(len + 1);
    int i = len - 1, j = len - 1, pos = 0;

    // Trim trailing spaces
    while (i >= 0 && s[i] == ' ') i--;

    // Loop to find words in reverse order
    while (i >= 0) {
        if (s[i] == ' ' || i == 0) {
            int wordStart = (i == 0) ? 0 : i + 1;
            for (int k = wordStart; k <= j; k++) {
                result[pos++] = s[k];
            }
            if (i != 0) result[pos++] = ' '; // Add space between words
            j = i - 1;
        }
        i--;
    }
    result[pos] = '\0';
    return result;
}

`,
  
    java: `class Solution {
    public String reverseWords(String s) {
        int n = s.length();
        StringBuilder result = new StringBuilder();
        StringBuilder word = new StringBuilder();
        
        // Step 1: Traverse the string from right to left
        for (int i = n - 1; i >= 0; i--) {
            char c = s.charAt(i);
            if (c != ' ') {
                word.append(c); // Build the current word
            } else if (word.length() > 0) {
                // If we encounter a space and have a word, add it in reverse to the result
                result.append(word.reverse()).append(" ");
                word.setLength(0); // Reset the word
            }
        }
        
        // Add the last word (if any) to the result
        if (word.length() > 0) {
            result.append(word.reverse());
        }
        
        // Remove the trailing space, if any
        if (result.length() > 0 && result.charAt(result.length() - 1) == ' ') {
            result.setLength(result.length() - 1);
        }
        
        return result.toString();
    }
}
`,
  
    cpp: `class Solution {
public:
    string reverseWords(string s) {
        // Trim leading/trailing spaces, split by spaces, reverse, and join back
        stringstream ss(s);
        string word, result;
        vector<string> words;
        
        while (ss >> word) {
            words.push_back(word);
        }

        for (int i = words.size() - 1; i >= 0; i--) {
            result += words[i];
            if (i > 0) result += " "; // Add space between words
        }

        return result;
    }
};

`,
    chash: `public class Solution {
    public string ReverseWords(string s) {
        // Trim leading and trailing spaces, split by spaces, reverse, and join back
        return string.Join(" ", s.Trim().Split(new[] {' '}, StringSplitOptions.RemoveEmptyEntries).Reverse());
    }
}

`,
    python: `class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        # Strip leading/trailing spaces, split by spaces, reverse and join back
        return ' '.join(s.strip().split()).split()[::-1]

            `,
  
    kotlin: `class Solution {
    fun reverseWords(s: String): String {
        // Trim leading/trailing spaces, split by spaces, reverse, and join back
        return s.trim().split("\\s+".toRegex()).reversed().joinToString(" ")
    }
}
`,

    rust: `impl Solution {
    pub fn reverse_words(s: String) -> String {
        // Trim leading/trailing spaces, split by spaces, reverse, and join back
        let words: Vec<&str> = s.trim().split_whitespace().collect();
        words.into_iter().rev().collect::<Vec<&str>>().join(" ")
    }
}

`,

      go:`func reverseWords(s string) string {
    // Trim leading/trailing spaces, split by spaces, reverse, and join back
    words := strings.Fields(s)
    for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
        words[i], words[j] = words[j], words[i]
    }
    return strings.Join(words, " ")
}

`,

    js: `var reverseWords = function(s) {
    // Trim leading and trailing spaces, split by one or more spaces, filter empty strings, reverse, and join back
    return s.trim().split(/\s+/).reverse().join(' ');
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
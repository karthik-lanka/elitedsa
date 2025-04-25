const codeSnippets = {
    c: `char * longestCommonPrefix(char ** strs, int strsSize){
    if (strsSize == 0) return "";
    for (int i = 0; ; i++) {
        char c = strs[0][i];
        if (c == '\0') return strs[0];
        for (int j = 1; j < strsSize; j++) {
            if (strs[j][i] != c || strs[j][i] == '\0') {
                strs[0][i] = '\0';
                return strs[0];
            }
        }
    }
}
`,
  
    java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String prefix = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (!strs[i].startsWith(prefix)) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        return prefix;
    }
}
`,
  
    cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        if (strs.empty()) return "";
        string prefix = strs[0];
        for (int i = 1; i < strs.size(); i++) {
            while (strs[i].find(prefix) != 0) {
                prefix = prefix.substr(0, prefix.length() - 1);
                if (prefix.empty()) return "";
            }
        }
        return prefix;
    }
};
`,
    chash: `public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        if (strs.Length == 0) return "";
        string prefix = strs[0];
        for (int i = 1; i < strs.Length; i++) {
            while (!strs[i].StartsWith(prefix)) {
                prefix = prefix.Substring(0, prefix.Length - 1);
                if (prefix == "") return "";
            }
        }
        return prefix;
    }
}
`,
    python: `class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        if not strs:
            return ""

        prefix = strs[0]

        for word in strs[1:]:
            while not word.startswith(prefix):
                prefix = prefix[:-1]
                if not prefix:
                    return ""

        return prefix
            `,
  
    kotlin: `class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        if (strs.isEmpty()) return ""
        var prefix = strs[0]
        for (i in 1 until strs.size) {
            while (!strs[i].startsWith(prefix)) {
                prefix = prefix.dropLast(1)
                if (prefix.isEmpty()) return ""
            }
        }
        return prefix
    }
}
`,

    rust: `impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        if strs.is_empty() {
            return "".to_string();
        }
        let mut prefix = strs[0].clone();
        for word in &strs[1..] {
            while !word.starts_with(&prefix) {
                prefix.pop();
                if prefix.is_empty() {
                    return "".to_string();
                }
            }
        }
        prefix
    }
}
`,

      go:`func longestCommonPrefix(strs []string) string {
    if len(strs) == 0 {
        return ""
    }
    prefix := strs[0]
    for _, str := range strs[1:] {
        for !strings.HasPrefix(str, prefix) {
            prefix = prefix[:len(prefix)-1]
            if prefix == "" {
                return ""
            }
        }
    }
    return prefix
}
`,

    js: `var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
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
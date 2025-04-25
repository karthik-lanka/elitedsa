const codeSnippets = {
    c: `char** fullJustify(char** words, int wordsSize, int maxWidth, int* returnSize) {
    char** result = malloc(sizeof(char*) * 1000);
    int resIndex = 0, i = 0;

    while (i < wordsSize) {
        int lineLen = strlen(words[i]), j = i + 1;
        while (j < wordsSize && lineLen + strlen(words[j]) + (j - i) <= maxWidth) {
            lineLen += strlen(words[j]);
            j++;
        }

        int numWords = j - i;
        int totalSpaces = maxWidth - lineLen;
        char* line = malloc(maxWidth + 1);
        line[0] = '\0';

        if (numWords == 1 || j == wordsSize) {
            strcat(line, words[i]);
            for (int k = i + 1; k < j; k++) {
                strcat(line, " ");
                strcat(line, words[k]);
            }
            int remaining = maxWidth - strlen(line);
            while (remaining--) strcat(line, " ");
        } else {
            int spaceBetween = totalSpaces / (numWords - 1);
            int extraSpaces = totalSpaces % (numWords - 1);
            for (int k = i; k < j - 1; k++) {
                strcat(line, words[k]);
                int spaces = spaceBetween + (k - i < extraSpaces ? 1 : 0);
                for (int s = 0; s < spaces; s++) strcat(line, " ");
            }
            strcat(line, words[j - 1]);
        }

        result[resIndex++] = line;
        i = j;
    }

    *returnSize = resIndex;
    return result;
}

`,
  
    java: `class Solution {
    public List<String> fullJustify(String[] words, int maxWidth) {
        List<String> res = new ArrayList<>();
        int i = 0;

        while (i < words.length) {
            int lineLen = words[i].length();
            int j = i + 1;

            while (j < words.length && lineLen + words[j].length() + (j - i) <= maxWidth) {
                lineLen += words[j].length();
                j++;
            }

            int numWords = j - i;
            int totalSpaces = maxWidth - lineLen;
            StringBuilder line = new StringBuilder();

            if (numWords == 1 || j == words.length) {
                line.append(words[i]);
                for (int k = i + 1; k < j; k++) {
                    line.append(" ").append(words[k]);
                }
                while (line.length() < maxWidth) line.append(" ");
            } else {
                int spacesBetween = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);

                for (int k = i; k < j - 1; k++) {
                    line.append(words[k]);
                    line.append(" ".repeat(spacesBetween + (k - i < extraSpaces ? 1 : 0)));
                }
                line.append(words[j - 1]);
            }
            res.add(line.toString());
            i = j;
        }
        return res;
    }
}
`,
  
    cpp: `class Solution {
public:
    vector<string> fullJustify(vector<string>& words, int maxWidth) {
        vector<string> res;
        int i = 0;
        int n = words.size();

        while (i < n) {
            int lineLen = words[i].size();
            int j = i + 1;

            while (j < n && lineLen + words[j].size() + (j - i) <= maxWidth) {
                lineLen += words[j].size();
                ++j;
            }

            int numWords = j - i;
            int totalSpaces = maxWidth - lineLen;
            string line;

            if (numWords == 1 || j == n) {
                line = words[i];
                for (int k = i + 1; k < j; ++k)
                    line += " " + words[k];
                line += string(maxWidth - line.size(), ' ');
            } else {
                int spacesBetween = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                for (int k = i; k < j - 1; ++k) {
                    line += words[k];
                    line += string(spacesBetween + (k - i < extraSpaces ? 1 : 0), ' ');
                }
                line += words[j - 1];
            }
            res.push_back(line);
            i = j;
        }
        return res;
    }
};

`,
    chash: `public class Solution {
    public IList<string> FullJustify(string[] words, int maxWidth) {
        var res = new List<string>();
        int i = 0;

        while (i < words.Length) {
            int lineLen = words[i].Length;
            int j = i + 1;

            while (j < words.Length && lineLen + words[j].Length + (j - i) <= maxWidth) {
                lineLen += words[j].Length;
                j++;
            }

            int numWords = j - i;
            int totalSpaces = maxWidth - lineLen;
            string line = "";

            if (numWords == 1 || j == words.Length) {
                line = string.Join(" ", words[i..j]);
                line = line.PadRight(maxWidth);
            } else {
                int spacesBetween = totalSpaces / (numWords - 1);
                int extraSpaces = totalSpaces % (numWords - 1);
                for (int k = i; k < j - 1; k++) {
                    line += words[k];
                    line += new string(' ', spacesBetween + (k - i < extraSpaces ? 1 : 0));
                }
                line += words[j - 1];
            }

            res.Add(line);
            i = j;
        }

        return res;
    }
}

`,
    python: `class Solution(object):
    def fullJustify(self, words, maxWidth):
        res = []
        i = 0
        n = len(words)

        while i < n:
            line_len = len(words[i])
            j = i + 1
            # Try to fit as many words as possible in the line
            while j < n and line_len + len(words[j]) + (j - i) <= maxWidth:
                line_len += len(words[j])
                j += 1

            line = ''
            num_words = j - i
            is_last_line = j == n

            if num_words == 1 or is_last_line:
                # Left-justified
                line = ' '.join(words[i:j])
                line += ' ' * (maxWidth - len(line))
            else:
                # Fully justified
                total_spaces = maxWidth - line_len
                space_between = total_spaces // (num_words - 1)
                extra_spaces = total_spaces % (num_words - 1)

                for k in range(i, j - 1):
                    line += words[k]
                    line += ' ' * (space_between + (1 if k - i < extra_spaces else 0))
                line += words[j - 1]

            res.append(line)
            i = j

        return res

            `,
  
    kotlin: `class Solution {
    fun fullJustify(words: Array<String>, maxWidth: Int): List<String> {
        val res = mutableListOf<String>()
        var i = 0

        while (i < words.size) {
            var lineLen = words[i].length
            var j = i + 1
            while (j < words.size && lineLen + words[j].length + (j - i) <= maxWidth) {
                lineLen += words[j].length
                j++
            }

            val numWords = j - i
            val totalSpaces = maxWidth - lineLen
            val line = StringBuilder()

            if (numWords == 1 || j == words.size) {
                line.append(words[i])
                for (k in i + 1 until j) {
                    line.append(" ").append(words[k])
                }
                while (line.length < maxWidth) {
                    line.append(" ")
                }
            } else {
                val spacesBetween = totalSpaces / (numWords - 1)
                val extraSpaces = totalSpaces % (numWords - 1)

                for (k in i until j - 1) {
                    line.append(words[k])
                    line.append(" ".repeat(spacesBetween + if (k - i < extraSpaces) 1 else 0))
                }
                line.append(words[j - 1])
            }

            res.add(line.toString())
            i = j
        }

        return res
    }
}
`,

    rust: `impl Solution {
    pub fn full_justify(words: Vec<String>, max_width: i32) -> Vec<String> {
        let mut res = Vec::new();
        let mut i = 0;
        let max_width = max_width as usize;

        while i < words.len() {
            let mut line_len = words[i].len();
            let mut j = i + 1;

            while j < words.len() && line_len + words[j].len() + (j - i) <= max_width {
                line_len += words[j].len();
                j += 1;
            }

            let num_words = j - i;
            let total_spaces = max_width - line_len;
            let mut line = String::new();

            if num_words == 1 || j == words.len() {
                line.push_str(&words[i]);
                for k in i + 1..j {
                    line.push(' ');
                    line.push_str(&words[k]);
                }
                line.push_str(&" ".repeat(max_width - line.len()));
            } else {
                let space_between = total_spaces / (num_words - 1);
                let extra_spaces = total_spaces % (num_words - 1);

                for k in i..j - 1 {
                    line.push_str(&words[k]);
                    line.push_str(&" ".repeat(space_between + if k - i < extra_spaces { 1 } else { 0 }));
                }
                line.push_str(&words[j - 1]);
            }

            res.push(line);
            i = j;
        }

        res
    }
}

`,

      go:`func fullJustify(words []string, maxWidth int) []string {
    var res []string
    n := len(words)
    i := 0

    for i < n {
        lineLen := len(words[i])
        j := i + 1
        for j < n && lineLen + len(words[j]) + (j - i) <= maxWidth {
            lineLen += len(words[j])
            j++
        }

        numWords := j - i
        totalSpaces := maxWidth - lineLen
        var line string

        if numWords == 1 || j == n {
            line = words[i]
            for k := i + 1; k < j; k++ {
                line += " " + words[k]
            }
            line += strings.Repeat(" ", maxWidth - len(line))
        } else {
            spacesBetween := totalSpaces / (numWords - 1)
            extraSpaces := totalSpaces % (numWords - 1)

            for k := i; k < j - 1; k++ {
                line += words[k]
                line += strings.Repeat(" ", spacesBetween)
                if k - i < extraSpaces {
                    line += " "
                }
            }
            line += words[j - 1]
        }
        res = append(res, line)
        i = j
    }

    return res
}

`,

    js: `/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const res = [];
    let i = 0;

    while (i < words.length) {
        let lineLen = words[i].length;
        let j = i + 1;

        // Try to fit as many words as possible in the current line
        while (j < words.length && lineLen + words[j].length + (j - i) <= maxWidth) {
            lineLen += words[j].length;
            j++;
        }

        const numWords = j - i;
        const totalSpaces = maxWidth - lineLen;
        let line = '';

        if (numWords === 1 || j === words.length) {
            // Last line or line with one word: left-justify
            line = words[i];
            for (let k = i + 1; k < j; k++) {
                line += ' ' + words[k];
            }
            line += ' '.repeat(maxWidth - line.length);
        } else {
            // Fully justify the line
            const spacesBetween = Math.floor(totalSpaces / (numWords - 1));
            let extraSpaces = totalSpaces % (numWords - 1);

            for (let k = i; k < j - 1; k++) {
                line += words[k];
                line += ' '.repeat(spacesBetween + (extraSpaces-- > 0 ? 1 : 0));
            }
            line += words[j - 1];
        }

        res.push(line);
        i = j;
    }

    return res;
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
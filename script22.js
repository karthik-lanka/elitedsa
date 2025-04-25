const codeSnippets = {
    c: `char* convert(char* s, int numRows) {
    if (numRows == 1) return strdup(s);

    int len = strlen(s);
    char** rows = (char**)malloc(sizeof(char*) * numRows);
    int* pos = (int*)calloc(numRows, sizeof(int));
    for (int i = 0; i < numRows; i++)
        rows[i] = (char*)calloc(len + 1, sizeof(char));

    int row = 0, down = 1;
    for (int i = 0; i < len; i++) {
        rows[row][pos[row]++] = s[i];
        if (row == 0) down = 1;
        else if (row == numRows - 1) down = 0;
        row += down ? 1 : -1;
    }

    char* result = (char*)malloc(len + 1);
    int idx = 0;
    for (int i = 0; i < numRows; i++) {
        strcpy(result + idx, rows[i]);
        idx += pos[i];
        free(rows[i]);
    }

    free(rows);
    free(pos);
    result[len] = '\0';
    return result;
}

`,
  
    java: `class Solution {
    public String convert(String s, int numRows) {
        if (numRows == 1 || s.length() <= numRows) return s;

        StringBuilder[] rows = new StringBuilder[Math.min(numRows, s.length())];
        for (int i = 0; i < rows.length; i++) rows[i] = new StringBuilder();

        int curRow = 0;
        boolean goingDown = false;

        for (char c : s.toCharArray()) {
            rows[curRow].append(c);
            if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
            curRow += goingDown ? 1 : -1;
        }

        StringBuilder result = new StringBuilder();
        for (StringBuilder row : rows) result.append(row);
        return result.toString();
    }
}
`,
  
    cpp: `class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows == 1 || s.length() <= numRows) return s;

        vector<string> rows(min(numRows, int(s.length())));
        int curRow = 0;
        bool goingDown = false;

        for (char c : s) {
            rows[curRow] += c;
            if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
            curRow += goingDown ? 1 : -1;
        }

        string result;
        for (string& row : rows) result += row;
        return result;
    }
};

`,
    chash: `public class Solution {
    public string Convert(string s, int numRows) {
        if (numRows == 1 || s.Length <= numRows) return s;

        List<string> rows = new List<string>(new string[Math.Min(numRows, s.Length)]);
        for (int i = 0; i < rows.Capacity; i++) rows[i] = "";

        int curRow = 0;
        bool goingDown = false;

        foreach (char c in s) {
            rows[curRow] += c;
            if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
            curRow += goingDown ? 1 : -1;
        }

        return string.Join("", rows);
    }
}

`,
    python: `class Solution(object):
    def convert(self, s, numRows):
        if numRows == 1 or len(s) <= numRows:
            return s

        rows = [''] * min(numRows, len(s))
        curRow, goingDown = 0, False

        for c in s:
            rows[curRow] += c
            if curRow == 0 or curRow == numRows - 1:
                goingDown = not goingDown
            curRow += 1 if goingDown else -1

        return ''.join(rows)

            `,
  
    kotlin: `class Solution {
    fun convert(s: String, numRows: Int): String {
        if (numRows == 1 || s.length <= numRows) return s

        val rows = Array(minOf(numRows, s.length)) { StringBuilder() }
        var curRow = 0
        var goingDown = false

        for (c in s) {
            rows[curRow].append(c)
            if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown
            curRow += if (goingDown) 1 else -1
        }

        return rows.joinToString("") { it.toString() }
    }
}
`,

    rust: `impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        let num_rows = num_rows as usize;
        if num_rows == 1 || s.len() <= num_rows {
            return s;
        }

        let mut rows = vec![String::new(); num_rows];
        let mut cur_row = 0;
        let mut going_down = false;

        for c in s.chars() {
            rows[cur_row].push(c);
            if cur_row == 0 || cur_row == num_rows - 1 {
                going_down = !going_down;
            }
            if going_down {
                cur_row += 1;
            } else {
                cur_row -= 1;
            }
        }

        rows.concat()
    }
}

`,

      go:`func convert(s string, numRows int) string {
    if numRows == 1 || len(s) <= numRows {
        return s
    }

    rows := make([]string, min(numRows, len(s)))
    curRow, goingDown := 0, false

    for _, c := range s {
        rows[curRow] += string(c)
        if curRow == 0 || curRow == numRows-1 {
            goingDown = !goingDown
        }
        if goingDown {
            curRow++
        } else {
            curRow--
        }
    }

    result := ""
    for _, row := range rows {
        result += row
    }

    return result
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

`,

    js: `var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => '');
    let curRow = 0, goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');
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
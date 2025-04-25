const codeSnippets = {
    c: `int romanToInt(char * s){
    int roman[26] = {0};
    roman['I'-'A'] = 1;
    roman['V'-'A'] = 5;
    roman['X'-'A'] = 10;
    roman['L'-'A'] = 50;
    roman['C'-'A'] = 100;
    roman['D'-'A'] = 500;
    roman['M'-'A'] = 1000;

    int total = 0, prev = 0;
    for (int i = strlen(s) - 1; i >= 0; --i) {
        int curr = roman[s[i] - 'A'];
        if (curr < prev)
            total -= curr;
        else
            total += curr;
        prev = curr;
    }

    return total;
}



`,
  
    java: `class Solution {
    public int romanToInt(String s) {
        Map<Character, Integer> roman = Map.of(
            'I', 1, 'V', 5, 'X', 10,
            'L', 50, 'C', 100, 'D', 500, 'M', 1000
        );

        int total = 0, prev = 0;
        for (int i = s.length() - 1; i >= 0; i--) {
            int curr = roman.get(s.charAt(i));
            if (curr < prev)
                total -= curr;
            else
                total += curr;
            prev = curr;
        }

        return total;
    }
}

`,
  
    cpp: `class Solution {
public:
    int romanToInt(string s) {
        unordered_map<char, int> roman {
            {'I', 1}, {'V', 5}, {'X', 10},
            {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}
        };

        int total = 0, prev = 0;
        for (int i = s.length() - 1; i >= 0; --i) {
            int curr = roman[s[i]];
            if (curr < prev)
                total -= curr;
            else
                total += curr;
            prev = curr;
        }

        return total;
    }
};


`,
    chash: `public class Solution {
    public int RomanToInt(string s) {
        Dictionary<char, int> roman = new() {
            {'I', 1}, {'V', 5}, {'X', 10},
            {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}
        };

        int total = 0, prev = 0;
        for (int i = s.Length - 1; i >= 0; i--) {
            int curr = roman[s[i]];
            if (curr < prev)
                total -= curr;
            else
                total += curr;
            prev = curr;
        }

        return total;
    }
}


`,
    python: `class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50,
                 'C': 100, 'D': 500, 'M': 1000}
        total = 0
        prev = 0

        for c in reversed(s):
            val = roman[c]
            if val < prev:
                total -= val
            else:
                total += val
            prev = val

        return total

            `,
  
    kotlin: `class Solution {
    fun romanToInt(s: String): Int {
        val roman = mapOf(
            'I' to 1, 'V' to 5, 'X' to 10,
            'L' to 50, 'C' to 100, 'D' to 500, 'M' to 1000
        )

        var total = 0
        var prev = 0

        for (i in s.length - 1 downTo 0) {
            val curr = roman[s[i]]!!
            if (curr < prev) total -= curr else total += curr
            prev = curr
        }

        return total
    }
}

`,

    rust: `impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let roman = |c: char| match c {
            'I' => 1, 'V' => 5, 'X' => 10,
            'L' => 50, 'C' => 100,
            'D' => 500, 'M' => 1000,
            _ => 0
        };

        let mut total = 0;
        let mut prev = 0;

        for c in s.chars().rev() {
            let curr = roman(c);
            if curr < prev {
                total -= curr;
            } else {
                total += curr;
            }
            prev = curr;
        }

        total
    }
}


`,

      go:`func romanToInt(s string) int {
    roman := map[byte]int{
        'I': 1, 'V': 5, 'X': 10,
        'L': 50, 'C': 100, 'D': 500, 'M': 1000,
    }

    total, prev := 0, 0
    for i := len(s) - 1; i >= 0; i-- {
        curr := roman[s[i]]
        if curr < prev {
            total -= curr
        } else {
            total += curr
        }
        prev = curr
    }

    return total
}

`,

    js: `var romanToInt = function(s) {
    const roman = {
        'I': 1, 'V': 5, 'X': 10,
        'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };

    let total = 0, prev = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const curr = roman[s[i]];
        if (curr < prev) {
            total -= curr;
        } else {
            total += curr;
        }
        prev = curr;
    }

    return total;
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
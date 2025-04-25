const codeSnippets = {
    c: `char* intToRoman(int num){
    int val[] = {1000,900,500,400,100,90,50,40,10,9,5,4,1};
    char *syms[] = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};
    char *res = malloc(20);
    res[0] = '\0';

    for(int i = 0; i < 13; i++) {
        while(num >= val[i]) {
            strcat(res, syms[i]);
            num -= val[i];
        }
    }

    return res;
}

`,
  
    java: `class Solution {
    public String intToRoman(int num) {
        int[] val = {1000, 900, 500, 400,
                     100, 90, 50, 40,
                     10, 9, 5, 4, 1};
        String[] syms = {"M", "CM", "D", "CD",
                         "C", "XC", "L", "XL",
                         "X", "IX", "V", "IV", "I"};

        StringBuilder res = new StringBuilder();
        for (int i = 0; i < val.length; i++) {
            while (num >= val[i]) {
                num -= val[i];
                res.append(syms[i]);
            }
        }
        return res.toString();
    }
}

`,
  
    cpp: `class Solution {
public:
    string intToRoman(int num) {
        vector<int> val = {1000, 900, 500, 400,
                           100, 90, 50, 40,
                           10, 9, 5, 4, 1};
        vector<string> syms = {"M", "CM", "D", "CD",
                               "C", "XC", "L", "XL",
                               "X", "IX", "V", "IV", "I"};
        string res;
        for (int i = 0; i < val.size(); ++i) {
            while (num >= val[i]) {
                num -= val[i];
                res += syms[i];
            }
        }
        return res;
    }
};



`,
    chash: `public class Solution {
    public string IntToRoman(int num) {
        int[] val = {1000, 900, 500, 400,
                     100, 90, 50, 40,
                     10, 9, 5, 4, 1};
        string[] syms = {"M", "CM", "D", "CD",
                         "C", "XC", "L", "XL",
                         "X", "IX", "V", "IV", "I"};
        StringBuilder res = new StringBuilder();

        for (int i = 0; i < val.Length; i++) {
            while (num >= val[i]) {
                num -= val[i];
                res.Append(syms[i]);
            }
        }
        return res.ToString();
    }
}


`,
    python: `class Solution:
    def intToRoman(self, num: int) -> str:
        val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4, 1
        ]
        syms = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV", "I"
        ]
        res = ""
        for i in range(len(val)):
            while num >= val[i]:
                num -= val[i]
                res += syms[i]
        return res


            `,
  
    kotlin: `class Solution {
    fun intToRoman(num: Int): String {
        val valArr = arrayOf(1000,900,500,400,100,90,50,40,10,9,5,4,1)
        val syms = arrayOf("M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I")

        var n = num
        val sb = StringBuilder()

        for (i in valArr.indices) {
            while (n >= valArr[i]) {
                sb.append(syms[i])
                n -= valArr[i]
            }
        }

        return sb.toString()
    }
}


`,

    rust: `impl Solution {
    pub fn int_to_roman(mut num: i32) -> String {
        let val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4, 1,
        ];
        let syms = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV", "I",
        ];

        let mut res = String::new();

        for i in 0..val.len() {
            while num >= val[i] {
                num -= val[i];
                res.push_str(syms[i]);
            }
        }

        res
    }
}



`,

      go:`func intToRoman(num int) string {
    val := []int{1000,900,500,400,100,90,50,40,10,9,5,4,1}
    syms := []string{"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"}
    res := ""

    for i := 0; i < len(val); i++ {
        for num >= val[i] {
            num -= val[i]
            res += syms[i]
        }
    }

    return res
}

`,

    js: `var intToRoman = function(num) {
    const val = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const syms = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = '';

    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            res += syms[i];
        }
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
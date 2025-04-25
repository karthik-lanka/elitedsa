const codeSnippets = {
    c: `int canCompleteCircuit(int* gas, int gasSize, int* cost, int costSize) {
    int totalGas = 0, totalCost = 0, currentGas = 0, start = 0;
    
    for (int i = 0; i < gasSize; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        if (currentGas < 0) {
            start = i + 1;
            currentGas = 0;
        }
    }

    return totalGas >= totalCost ? start : -1;
}
`,
  
    java: `class Solution {
    public int canCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0, currentGas = 0, start = 0;

        for (int i = 0; i < gas.length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
            currentGas += gas[i] - cost[i];

            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }

        return totalGas >= totalCost ? start : -1;
    }
}
`,
  
    cpp: `class Solution {
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) {
        int totalGas = 0, totalCost = 0, currentGas = 0, start = 0;

        for (int i = 0; i < gas.size(); i++) {
            totalGas += gas[i];
            totalCost += cost[i];
            currentGas += gas[i] - cost[i];

            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }

        return totalGas >= totalCost ? start : -1;
    }
};
`,
    chash: `public class Solution {
    public int CanCompleteCircuit(int[] gas, int[] cost) {
        int totalGas = 0, totalCost = 0, currentGas = 0, start = 0;

        for (int i = 0; i < gas.Length; i++) {
            totalGas += gas[i];
            totalCost += cost[i];
            currentGas += gas[i] - cost[i];

            if (currentGas < 0) {
                start = i + 1;
                currentGas = 0;
            }
        }

        return totalGas >= totalCost ? start : -1;
    }
}
`,
    python: `class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gas, total_cost, current_gas, start = 0, 0, 0, 0

        for i in range(len(gas)):
            total_gas += gas[i]
            total_cost += cost[i]
            current_gas += gas[i] - cost[i]

            if current_gas < 0:
                start = i + 1
                current_gas = 0

        return start if total_gas >= total_cost else -1
            `,
  
    kotlin: `class Solution {
    fun canCompleteCircuit(gas: IntArray, cost: IntArray): Int {
        var totalGas = 0
        var totalCost = 0
        var currentGas = 0
        var start = 0

        for (i in gas.indices) {
            totalGas += gas[i]
            totalCost += cost[i]
            currentGas += gas[i] - cost[i]

            if (currentGas < 0) {
                start = i + 1
                currentGas = 0
            }
        }

        return if (totalGas >= totalCost) start else -1
    }
}
`,

    rust: `impl Solution {
    pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
        let mut total_gas = 0;
        let mut total_cost = 0;
        let mut current_gas = 0;
        let mut start = 0;

        for i in 0..gas.len() {
            total_gas += gas[i];
            total_cost += cost[i];
            current_gas += gas[i] - cost[i];

            if current_gas < 0 {
                start = i + 1;
                current_gas = 0;
            }
        }

        if total_gas >= total_cost {
            start as i32
        } else {
            -1
        }
    }
}
`,

      go:`func canCompleteCircuit(gas []int, cost []int) int {
    totalGas, totalCost, currentGas, start := 0, 0, 0, 0

    for i := 0; i < len(gas); i++ {
        totalGas += gas[i]
        totalCost += cost[i]
        currentGas += gas[i] - cost[i]

        if currentGas < 0 {
            start = i + 1
            currentGas = 0
        }
    }

    if totalGas >= totalCost {
        return start
    }

    return -1
}
`,

    js: `var canCompleteCircuit = function(gas, cost) {
    let totalGas = 0, totalCost = 0, currentGas = 0, start = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        currentGas += gas[i] - cost[i];

        if (currentGas < 0) {
            start = i + 1;
            currentGas = 0;
        }
    }

    return totalGas >= totalCost ? start : -1;
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
const codeSnippets = {
    c: `#include <stdlib.h>
#include <stdbool.h>
#include <string.h>

#define MAX_SIZE 200005

typedef struct {
    int val[MAX_SIZE];
    int index[1000001];
    int size;
} RandomizedSet;

RandomizedSet* randomizedSetCreate() {
    RandomizedSet* obj = (RandomizedSet*)malloc(sizeof(RandomizedSet));
    memset(obj->index, -1, sizeof(obj->index));
    obj->size = 0;
    return obj;
}

bool randomizedSetInsert(RandomizedSet* obj, int val) {
    if (obj->index[val + 500000] != -1) return false;
    obj->val[obj->size] = val;
    obj->index[val + 500000] = obj->size;
    obj->size++;
    return true;
}

bool randomizedSetRemove(RandomizedSet* obj, int val) {
    int idx = obj->index[val + 500000];
    if (idx == -1) return false;
    int last = obj->val[obj->size - 1];
    obj->val[idx] = last;
    obj->index[last + 500000] = idx;
    obj->index[val + 500000] = -1;
    obj->size--;
    return true;
}

int randomizedSetGetRandom(RandomizedSet* obj) {
    return obj->val[rand() % obj->size];
}

void randomizedSetFree(RandomizedSet* obj) {
    free(obj);
}
`,
  
    java: `import java.util.*;

class RandomizedSet {
    private Map<Integer, Integer> map;
    private List<Integer> nums;

    public RandomizedSet() {
        map = new HashMap<>();
        nums = new ArrayList<>();
    }

    public boolean insert(int val) {
        if (map.containsKey(val)) return false;
        nums.add(val);
        map.put(val, nums.size() - 1);
        return true;
    }

    public boolean remove(int val) {
        if (!map.containsKey(val)) return false;
        int idx = map.get(val);
        int last = nums.get(nums.size() - 1);
        nums.set(idx, last);
        map.put(last, idx);
        nums.remove(nums.size() - 1);
        map.remove(val);
        return true;
    }

    public int getRandom() {
        Random rand = new Random();
        return nums.get(rand.nextInt(nums.size()));
    }
}
`,
  
    cpp: `#include <unordered_map>
#include <vector>
#include <cstdlib>

class RandomizedSet {
    std::unordered_map<int, int> map;
    std::vector<int> nums;

public:
    bool insert(int val) {
        if (map.count(val)) return false;
        nums.push_back(val);
        map[val] = nums.size() - 1;
        return true;
    }

    bool remove(int val) {
        if (!map.count(val)) return false;
        int idx = map[val];
        int last = nums.back();
        nums[idx] = last;
        map[last] = idx;
        nums.pop_back();
        map.erase(val);
        return true;
    }

    int getRandom() {
        return nums[rand() % nums.size()];
    }
};

`,
    chash: `using System;
using System.Collections.Generic;

public class RandomizedSet {
    private Dictionary<int, int> map = new Dictionary<int, int>();
    private List<int> nums = new List<int>();
    private Random rand = new Random();

    public bool Insert(int val) {
        if (map.ContainsKey(val)) return false;
        map[val] = nums.Count;
        nums.Add(val);
        return true;
    }

    public bool Remove(int val) {
        if (!map.ContainsKey(val)) return false;
        int idx = map[val];
        int last = nums[nums.Count - 1];
        nums[idx] = last;
        map[last] = idx;
        nums.RemoveAt(nums.Count - 1);
        map.Remove(val);
        return true;
    }

    public int GetRandom() {
        return nums[rand.Next(nums.Count)];
    }
}
`,
    python: `import random

class RandomizedSet:

    def __init__(self):
        self.map = {}     # Stores value -> index in nums
        self.nums = []    # Stores values

    def insert(self, val):
        if val in self.map:
            return False
        self.map[val] = len(self.nums)
        self.nums.append(val)
        return True

    def remove(self, val):
        if val not in self.map:
            return False
        idx = self.map[val]
        last_element = self.nums[-1]
        
        # Move last element to the place of the element to remove
        self.nums[idx] = last_element
        self.map[last_element] = idx
        
        # Remove last element
        self.nums.pop()
        del self.map[val]
        return True

    def getRandom(self):
        return random.choice(self.nums)
            `,
  
    kotlin: `class RandomizedSet {
    private val map = mutableMapOf<Int, Int>()
    private val nums = mutableListOf<Int>()

    // Insert function
    fun insert(value: Int): Boolean {
        if (map.containsKey(value)) return false
        nums.add(value)
        map[value] = nums.size - 1
        return true
    }

    // Remove function
    fun remove(value: Int): Boolean {
        if (!map.containsKey(value)) return false
        val idx = map[value]!!
        val last = nums[nums.size - 1]
        nums[idx] = last
        map[last] = idx
        nums.removeAt(nums.size - 1)
        map.remove(value)
        return true
    }

    // Get random function
    fun getRandom(): Int {
        return nums.random()  // Kotlin's built-in random() function is used here
    }
}

`,

    rust: `use rand::prelude::*;
use std::collections::HashMap;

struct RandomizedSet {
    nums: Vec<i32>,
    map: HashMap<i32, usize>,
}

impl RandomizedSet {
    fn new() -> Self {
        Self {
            nums: Vec::new(),
            map: HashMap::new(),
        }
    }

    fn insert(&mut self, val: i32) -> bool {
        if self.map.contains_key(&val) {
            return false;
        }
        self.nums.push(val);
        self.map.insert(val, self.nums.len() - 1);
        true
    }

    fn remove(&mut self, val: i32) -> bool {
        if let Some(&idx) = self.map.get(&val) {
            let last = *self.nums.last().unwrap();
            self.nums[idx] = last;
            self.map.insert(last, idx);
            self.nums.pop();
            self.map.remove(&val);
            return true;
        }
        false
    }

    fn get_random(&self) -> i32 {
        let mut rng = thread_rng();
        *self.nums.choose(&mut rng).unwrap()
    }
}
`,

      go:`import (
    "math/rand"
)

type RandomizedSet struct {
    nums []int
    idx  map[int]int
}

func Constructor() RandomizedSet {
    return RandomizedSet{idx: make(map[int]int)}
}

func (this *RandomizedSet) Insert(val int) bool {
    if _, exists := this.idx[val]; exists {
        return false
    }
    this.idx[val] = len(this.nums)
    this.nums = append(this.nums, val)
    return true
}

func (this *RandomizedSet) Remove(val int) bool {
    idx, exists := this.idx[val]
    if !exists {
        return false
    }
    last := this.nums[len(this.nums)-1]
    this.nums[idx] = last
    this.idx[last] = idx
    this.nums = this.nums[:len(this.nums)-1]
    delete(this.idx, val)
    return true
}

func (this *RandomizedSet) GetRandom() int {
    return this.nums[rand.Intn(len(this.nums))]
}
`,

js: `class RandomizedSet {
    constructor() {
        this.map = new Map();
        this.list = [];
    }

    insert(val) {
        if (this.map.has(val)) return false;
        this.map.set(val, this.list.length);
        this.list.push(val);
        return true;
    }

    remove(val) {
        if (!this.map.has(val)) return false;
        const idx = this.map.get(val);
        const last = this.list[this.list.length - 1];
        this.list[idx] = last;
        this.map.set(last, idx);
        this.list.pop();
        this.map.delete(val);
        return true;
    }

    getRandom() {
        return this.list[Math.floor(Math.random() * this.list.length)];
    }
}
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
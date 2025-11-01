var romanToInt = function (s) {
  const roman = [
    { name: "I", value: 1 },
    { name: "V", value: 5 },
    { name: "X", value: 10 },
    { name: "L", value: 50 },
    { name: "C", value: 100 },
    { name: "D", value: 500 },
    { name: "M", value: 1000 },
  ];
  return s.split("").reduce((acc, curr, i, arr) => {
    const currentValue = roman.find((r) => r.name === curr).value;
    const nextValue = roman.find((r) => r.name === arr[i + 1])?.value || 0;
    if (currentValue < nextValue) {
      return acc - currentValue;
    } else {
      return acc + currentValue;
    }
  }, 0);
};

var longestCommonPrefix = function (strs) {
  const text = strs.join("");
  // console.log(text.split(/\s+/).filter((str) => /(.).*?\1/.test(str)));
  for (let i = 0; i < strs[0].length; i++) {
    console.log(strs[0][i] === text[i]);
  }
};

longestCommonPrefix(["flow", "flight", "flower"]);

function groupSameWords(wordsList) {
  const uniqueArr = wordsList.reduce((total, words) => {
    const sortedStr = words.split("").sort().join("");
    if (!total.includes(sortedStr)) {
      total.push(sortedStr);
    }
    return total;
  }, []);

  const resultArr = [];

  for (let i = 0; i < uniqueArr.length; i++) {
    resultArr.push([]);
  }

  for (const words of wordsList) {
    const sortedStr = words.split("").sort().join("");
    const index = uniqueArr.findIndex((w) => {
      return w.split("").sort().join("") === sortedStr;
    });
    resultArr[index].push(words);
  }

  const resultStr = resultArr
    .map((arr) => arr.join("-"))
    .reduce((total, str) => total + str + "\n", "");
  return resultStr;
}

const wordsList = [
  "AMOR",
  "XISELA",
  "JAMON",
  "ROMA",
  "OMAR",
  "MORA",
  "ESPONJA",
  "RAMO",
  "JAPONES",
  "ARMO",
  "MOJAN",
  "MARO",
  "ORAM",
  "MONJA",
  "ALEXIS",
];

const result = groupSameWords(wordsList);
console.log(result);

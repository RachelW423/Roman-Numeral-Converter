const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

const convertToRoman = (number) => {
  if (number === 0) {
    return '';
  }
  for (let i = 0; i < romanMatrix.length; i++) {
    if (number >= romanMatrix[i][0]) {
      return romanMatrix[i][1] + convertToRoman(number - romanMatrix[i][0]);
    }
  }
}

const checkAlert = (str, int) => {
  let alertText = '';

  if (!str || str.match(/[e.]/g)) {
    alertText = 'Please enter a valid number';
  } else if (int < 1) {
    alertText = 'Please enter a number greater than or equal to 1';
  } else if (int > 3999) {
    alertText = 'Please enter a number less than or equal to 3999';
  } else {
    return true;
  }
   output.innerText = alertText;
  return false;
};

convertButton.addEventListener('click', () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr);

  if (checkAlert(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
});


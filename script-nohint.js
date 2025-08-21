// 전역 변수 선언
let currentInput = "0"; // 현재 입력된 값
let previousInput = ""; // 이전 값
let operation = null; // 현재 연산자
let previousInputType = null;
let shouldResetScreen = false; // 화면을 리셋해야 하는지 여부
let hasDecimal = false;
let allPrevResults = [];
let prevResultIndex = -1;

// 디스플레이 업데이트 함수
function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent = currentInput;
}

// 입력 값 삭제 버튼 기능
function clearDisplay() {
  currentInput = "0";
  previousInput = "";
  operation = null;
  shouldResetScreen = false;
  hasDecimal = false;
  updateDisplay();
}

// JS-1: 숫자 입력 함수 구현
function appendNumber(number) {
  // 여기에 코드 작성
  if (shouldResetScreen) {
    currentInput = "0";
    shouldResetScreen = false;
  }
  currentInput = currentInput === "0" ? number : (currentInput += number);
  previousInputType = "number";
  updateDisplay();
}

// JS-2: 연산자 입력 함수 구현
function appendOperator(op) {
  // 여기에 코드 작성
  if (operation && previousInputType === "number") {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  previousInputType = "op";
  hasDecimal = false;
  shouldResetScreen = true;
}

// JS-3: 계산 함수 구현
function calculate() {
  // 여기에 코드 작성
  let left = Number(previousInput);
  let right = Number(currentInput);

  switch (operation) {
    case "+":
      currentInput = `${left + right}`;
      break;
    case "-":
      currentInput = `${left - right}`;
      break;
    case "*":
      currentInput = `${left * right}`;
      break;
    case "/":
      currentInput = `${left / right}`;
      break;
  }
  allPrevResults.push(`${left} ${operation} ${right} = ${currentInput}`);
  operation = null;
  shouldResetScreen = true;
  updateDisplay();
}

// JS-4: 소수점 추가 함수 구현 (도전 과제)
function appendDecimal() {
  // 여기에 코드 작성
  if (hasDecimal) {
    currentInput = 0;
    hasDecimal = false;
  } else {
    currentInput += ".";
    hasDecimal = true;
  }
  updateDisplay();
}

function showPrevResult() {
  if (
    !allPrevResults.length ||
    allPrevResults.length < Math.abs(prevResultIndex)
  ) {
    currentInput = "계산이 없습니다.";
    prevResultIndex = -1;
  } else {
    currentInput = allPrevResults.at(prevResultIndex);
    prevResultIndex--;
  }
  shouldResetScreen = true;
  updateDisplay();
}

// 초기 디스플레이 설정
updateDisplay();

// 전역 변수 선언
let currentInput = "0"; // 현재 입력된 값
let previousInput = ""; // 이전 값
let operation = null; // 현재 연산자
let shouldResetScreen = false; // 화면을 리셋해야 하는지 여부

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
  updateDisplay();
}

// JS-1: 숫자 입력 함수 구현
function appendNumber(number) {
  // 힌트:
  // 1. shouldResetScreen이 true면 currentInput을 리셋
  //    if (shouldResetScreen) {
  //        currentInput = '0';
  //        shouldResetScreen = false;
  //    }
  // 2. currentInput이 '0'이면 number로 교체
  //    그렇지 않으면 currentInput에 number를 추가
  //    예시: currentInput = currentInput === '0' ? number : currentInput + number;
  // 3. updateDisplay() 호출하여 화면 업데이트
  // 여기에 코드 작성
}

// JS-2: 연산자 입력 함수 구현
function appendOperator(op) {
  // 힌트:
  // 1. 이미 연산자가 있고 shouldResetScreen이 false면 먼저 계산 수행
  //    if (operation !== null && !shouldResetScreen) {
  //        calculate();
  //    }
  // 2. previousInput에 currentInput 저장
  //    previousInput = currentInput;
  // 3. operation에 연산자 저장
  //    operation = op;
  // 4. shouldResetScreen을 true로 설정
  //    shouldResetScreen = true;
  // 여기에 코드 작성
}

// JS-3: 계산 함수 구현
function calculate() {
  // 힌트:
  // 1. operation이 없거나 previousInput이 없으면 return
  //    if (operation === null || previousInput === '') return;
  // 2. parseFloat()를 사용해 문자열을 숫자로 변환
  //    const prev = parseFloat(previousInput);
  //    const current = parseFloat(currentInput);
  // 3. switch문이나 if-else로 연산 수행
  //    let result;
  //    switch(operation) {
  //        case '+': result = prev + current; break;
  //        case '-': result = prev - current; break;
  //        case '*': result = prev * current; break;
  //        case '/':
  //            if (current === 0) {
  //                alert('0으로 나눌 수 없습니다!');
  //                return;
  //            }
  //            result = prev / current;
  //            break;
  //    }
  // 4. 결과를 currentInput에 저장하고 초기화
  //    currentInput = result.toString();
  //    operation = null;
  //    previousInput = '';
  //    shouldResetScreen = true;
  // 5. updateDisplay() 호출
  // 여기에 코드 작성
}

// JS-4: 소수점 추가 함수 구현 (도전 과제)
function appendDecimal() {
  // 힌트:
  // 1. shouldResetScreen이 true면 '0.'으로 시작
  //    if (shouldResetScreen) {
  //        currentInput = '0';
  //        shouldResetScreen = false;
  //    }
  // 2. currentInput에 이미 '.'이 있는지 확인
  //    if (currentInput.includes('.')) return;
  // 3. 없으면 '.' 추가
  //    currentInput += '.';
  // 4. updateDisplay() 호출
  // 여기에 코드 작성
}

// 초기 디스플레이 설정
updateDisplay();

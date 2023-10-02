// textというidを持つHTML要素を取得し、定数に代入
const afterText = document.getElementById('text');

// btnというidを持つHTML要素を取得し、定数に代入
const afterBtn = document.getElementById('btn');

// ボタンがクリックされたときにイベントを実行する
afterBtn.addEventListener('click', () => {
  
  afterText.innerHTML = 'ボタンをクリックしました';
});
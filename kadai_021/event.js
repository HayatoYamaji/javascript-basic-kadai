// id(text)を取得し、定数に代入
const afterText = document.getElementById('text');
// id(btn)を取得し、定数に代入
const afterBtn = document.getElementById('btn');

// ボタンクリックでイベント実行
afterBtn.addEventListener('click', () => {
  // 非同期処理(2秒後に実行)
  setTimeout(() => {
    // h2の「ボタンをクリックして下さい」を書き換え
    afterText.innerHTML = 'ボタンをクリックしました';
  }, 2000);
});
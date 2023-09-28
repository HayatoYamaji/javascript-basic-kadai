// 変数numを宣言
let num = 1+Math.floor(Math.random()*99);

// ３と5の倍数
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}

// 5の倍数
else if (num % 5 ===0) {
  console.log('5の倍数です');
}

// 3の倍数
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

// それ以外のときnumを出力
else {
  console.log(num);
}


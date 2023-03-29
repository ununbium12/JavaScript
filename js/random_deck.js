const values = ['사드', '참기', '스프', '킹', '데스피안', '군관', '토커', '스프트라게', '상검', '유성', 'HSR', 'RR', '용피팬', '테라', '진룡', '@ㅣ그니스터', '갤아', '세리사드'];

const generateNum = document.querySelector('.countNumber');
const button = document.querySelector('.generate');

function generator(){
  const randomIndex = Math.floor(Math.random() * values.length);
  generateNum.innerHTML = values[randomIndex];
}

button.addEventListener('click', generator);
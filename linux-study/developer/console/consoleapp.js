let count = 0;
let quiz = [
	{ question: "犬は英語でなんというでしょうか", 
	answer: "dog"
	},
	{ question: "鳥は英語でなんというでしょうか",
	answer: "bird"
	},
	{ question: "クジラは英語でなんというでしょうか",
	answer: "whale"
	},
];

//クイズを繰り返し表示
for(let i = 0; i < quiz.length; i++){
	let your_answer = prompt(quiz[i].qustion);
	if (your_answer === quiz[i].answer){
		alert("正解!");
		count++;
	} else {
		alert("残念");
	}
}

//gameの結果を表示
alert(quiz.length + "問中" + count + "問正解です!");


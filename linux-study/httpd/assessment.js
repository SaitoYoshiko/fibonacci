'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');

/* 指定した要素の子要素を全て削除
* @param{HTMLElement} element HTML要素
*/
function removeAllChildren(element){
	while(element.firstChild){
	//子要素のあるかぎり削除
	element.removeChild(element.firstChild);
	}
}

assessmentButton.onclick = () => {
	const userName = userNameInput.value;
	if (userName.length === 0){
	//名前がからの時は処理を中断
		return;
	}

	//診断結果表示エリア
	removeAllChildren(resultDivided);
	const header = document.createElement('h3');
	header.innerText = '診断結果';
	resultDivided.appendChild(header);
	
	const paragraph = document.createElement('p');
	const result = assessment(userName);
	paragraph.innerText = result;
	resultDivided.appendChild(paragraph);
	
	//ツイートエリアの作成
	removeAllChildren(tweetDivided);
	const anchor = document.createElement('a');
	const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag=' + encodeURIComponet('あなたのいいところ') + '&ref_src=twsrc%5Etfw';
	anchor.setAttribute('href', hrefValue);
	anchor.className = 'twitter-hashtag-button';
	anchor.setAttribute('data-text', result);
	anchor.innerText = 'Tweet #あなたのいいところ';
	tweetDivided.appendChild(anchor);

	//widgets.jsの設定
	const script = document.createElement('script');
	script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
	tweetDivided.appedChild(script);
};

const answers = [
'{userName}のいいところは声です。{userName}の特徴的な声は皆を引きつけ、心に残ります。',
'{userName}のいいところは眼差しです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されています。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に多くの人が助けられています。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気にかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかり合うことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。ピンチだと感じた時、しっかりと衝動を抑えられる{userName}が皆から評価されています。' 
];

/**
 * 入力された名前を渡すと文字列から診断結果を返す関数
 * @param {String} userName
 * @return {String} 診断結果
 */
function assessment(userName){
//文字列の全てのコードをハッシュ値へ変換し、全て足し合わせる
	let sumOfcharCode = 0;
	for(let i = 0; i < userName.length; i++){
		sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
	}

	//文字コードの合計を回答数で割って添字の番号を計算
	const index = sumOfcharCode % answers.length;
	let result = answers[index];

	result = result.replaceAll('{userName}', userName);
	return result;

}

//テストコード
console.assert(
	assessment('太郎') === '太郎のいいところは決断力です。太郎がする決断にいつも助けられる人がいます。',
	'診断結果の名前の置き換えがうまく動作していません'
	);

console.assert(
	assessment('太郎') === assessment('太郎'),'診断結果がいつも同じではありません'
	);

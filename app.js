//2章　JSの基本文法

// 1から10までの足し算

// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です');


//下記確認問題

//足し算
// alert(4 + 3);

//引き算
// alert(8 - 5);

//掛け算
// alert(2 * 6);

//割り算
// alert(10 / 2);


//3章　関数

//メイン部分
// let alertString;

// //作成した関数を呼び出し、変数へ格納
// alertString = addString("WebCamp");

// //変数の中身をアラートで表示する
// alert(alertString);

// //作成した関数
// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }

//入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力して下さい。');

// alert(promptStr);

//複数の関数を定義する
//じゃんけんの手を入力していもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

//グー、チョキ、パー以外の文字列が入力された時に「グー・チョキ・パーのいずれかを入力して下さい」とアラートウィンドウにエラー表示
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}

//じゃんけんの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

//ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

//アラートウィンドウにエラーが表示された後、もう一度プロンプト入力欄が表示されて入力できるように設定
//キャンセルボタン(null)が押された時には、「またチャレンジしてね」とアラートメッセージが出力せれるよう設定
if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね")
}


//ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

//ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}
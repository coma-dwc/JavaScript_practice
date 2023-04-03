//青の長方形

// $(function(){
//   $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//   });
// });


//上から下へスライド(app.cssファイルにdisplay: none;を追加)

// $(function(){
//   $('.box1').slideDown();
// });


//下から上へスライド(app.cssファイルのdisplay: none;を削除)

// $(function(){
//   $('.box1').slideUp();
// });


//非表示の要素をjQueryで表示させる(cssファイルにdisplay: none;を追加)

// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000FF'});
// });


//表示されている要素をjQueryで非表示(app.cssファイルのdisplay: none;を削除)

// $(function(){
//   $('.box1').hide();
// });


//確認問題

//要素を上から下へスライドさせた後、赤色の正方形を青色の長方形(幅200px、高さ100px)に変更　その後下から上にスライドさせる

// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px'
//     }).slideUp();
//   });
// });


//「マウスオーバー」イベントの設定　赤色から青色に変わるように設定
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000FF'});  //イベント発生時に行われる処理(マウスオーバーで赤から青)
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#FF0000'});  //マウスアウトで青から赤
//   });
// });


//class属性を追加・解除する

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');　　　//class属性の追加(addClass)
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');  //class属性の削除(removeClass)
//   });
// });


//「マウスクリック」イベントの設定

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');　　//クリックすると黒枠が表示
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');　　//マウスアウトすると黒枠が消える
  });
});







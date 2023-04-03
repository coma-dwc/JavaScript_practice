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

//要素を上から下へスライドさせた後、赤色の正方形を青色の長方形(幅200px、高さ100px)に変更

$(function(){
  $('.box1').slideDown(function(){
    $('.box1').css({
     'background-color': '#0000FF',
     'height': '100px'
    }).slideUp();
  });
});




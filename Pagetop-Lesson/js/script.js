$(function(){
  $('#back a').on('click',function(event){
    $('body, html').animate({　　// #back内のaタグがクリックされたときの処理
      scrollTop:0　　//変化対象のプロパティ名:変化値　(scrollTop:0は最上部に移動する　の意味)
    }, 800);　　　　 //アニメーションの動作時間
    event.preventDefault();　　//aタグの機能を無効にするメソッド
  });
});
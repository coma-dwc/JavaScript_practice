$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active');      // .menu-triggerクリック時に行われる処理
    $('#sp-menu').fadeToggle();　　　// .fadeToggleフェードイン・フェードアウトを切り替えるメソッド
    event.preventDefault();
  });
});
$('#tab-contents .tab[id != "tab1"]').hide();   //属性 != "値"で、属性値が特定の値に等しくない要素だけを取得(tab1だけ取得)

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();                 //イベント発生時に行われる処理
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});
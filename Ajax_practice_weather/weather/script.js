// (API_KEYもは、"取得したAPIキー"を記述)
const API_KEY = "d6ec15460434ed0add8fa6fe81c92d85";

$(function(){
  $('#btn').on('click', function() {
    //入力された都市名でWebAPIに天気情報をリクエスト
    //$.ajax()は、Ajaxを実装するメソッド(今回はurlとdataTypeの2つを設定)
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,      //val()は、HTMLのvalue属性を取得するメソッド
      dataType : 'jsonp',
      //以下、成功時と失敗時の処理の追記
    }).done(function (data){
      //通信成功

      //以下通信成功時の処理の追記

      //位置
      $('#place').text(data.name);
      //最高気温
      $('#temp_max').text(data.main.temp_max);
      //最低気温
      $('#temp_min').text(data.main.temp_min);
      //湿度
      $('#humidity').text(data.main.humidity);
      //風速
      $('#speed').text(data.wind.speed);
      //天気
      $('#weather').text(data.weather[0].main);
      //天気アイコン
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);


    }).fall(function(data){
      //通信失敗
      //以下通信失敗時の処理の追記
      alert('通信に失敗しました。');
    })
  });
});
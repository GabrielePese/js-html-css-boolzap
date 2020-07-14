$(document).ready(function(){
  $("#btn").click(function() {

    var testo = $(".chat-input input").val();


    $(".chat-input input").val(" ");
      //QST SERVE PER AZZERARE LA SCRITTA DOPO AVER PREMUTPO


    var clone = $(".perClone .msg").clone();
    clone.text(testo);
    var target = $(".chat-main-border");
    target.append(clone);

    setTimeout (function(){
      var clone2 = $(".perClone2 .msg").clone();
      clone2.text("ok");
      var target = $(".chat-main-border");
      target.append(clone2);
    } ,1000)
})

});

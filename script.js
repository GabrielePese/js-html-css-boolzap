$(document).ready(function(){
  $("#btn").click(function() {
    // console.log("prova");
    var testo = $(".chat-input input").val();
    // console.log("testo inserito: " + testo);


    var clone = $(".chat-main-border .msg").clone();
    clone.text(testo);
    var target = $(".chat-main-border");
    target.append(clone);

})
});

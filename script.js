$(document).ready(function(){
  $("#btn").click(function() {

    var testo = $(".chat-input input").val();


    $(".chat-input input").val("");
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


    var target = $(".chat-input input")
    target.keydown(function(){

      var key = event.which
      console.log(key);

      if (key == 13) {
        console.log("hai premuto invio");
      }
      else {
        console.log("premuto un tasto nON INVIO");
      }
  });


  $("#ricerca").click(function(){

    var testoRicerca = $(".cont-ricerca input").val();
    console.log("la lettera inseria è : "+ testoRicerca);
    $(".cont-ricerca input").val("");


    var contacts  = $(".cont-elenco-chat")
    contacts.each(function(){
        var contact = $(this)
        var nome = contact.find("h5").text()

        console.log(nome);

        if (nome.toLowerCase().includes(testoRicerca.toLowerCase())) {
          contact.show();
        }
        else {
          contact .hide();
        }
    })



  });

});

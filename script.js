$(document).ready(function(){

// AL CLICK  INSERISCE IL MESSAGGIO NELLA CHAT
  $("#btn").click(function() {

    var testo = $(".chat-input input").val();


    $(".chat-input input").val("");     //QST SERVE PER AZZERARE LA SCRITTA DOPO AVER PREMUTPO


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

  // ALL'INVIO SU INVIO INSERISCE IL MESSAGGIO NELLA CHAT

    var target = $(".chat-input input")
    target.keyup( tastoPremuto)

    function tastoPremuto (){
      var key = event.which


      if (key == 13) {
        var testo = $(".chat-input input").val();


        $(".chat-input input").val("");
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
      }
      else {

      }
    }

// ALL'INIVIO FA LA RICERCA DEI CONTATTI NELL'ELENCO CONTATTI
    var target2 = $("#inputchat")
    target2.keyup(tastoPremuto2)

    function tastoPremuto2 (){
      var key = event.which
      console.log(event.which);

      if (key == 13) {

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


      }
    }

    // ALL'CLCIK FA LA RICERCA DEI CONTATTI NELL'ELENCO CONTATTI

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

// AL CLICK SUL CONTATTO APRE LA CONVERSAZIONE A DESTRA

$(".cont-elenco-chat").click(function (){
  console.log("cliccato sul contatto -- e ora cosa faccio? =/");


});

});

function sayThatWasEasy() {
    var thatWasEasy = new Audio("feels_bad_man_k.mp3");
    thatWasEasy.play();
}
$("#easy").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress)

function delegateKeypress(event){
    if (event.charcode ==32){
        $(easy).trigger("click")
    }
}
let myChoosenWords = ["eraser", "ruler", "pencil", "book", "pen"];
let optionWords = ["eraser", "ruler", "pencil", "book", "pen", "bag", "penncil case", "scissors"];

var clickedWord, wordIndex, btnIndex, clickedWordIndex;


/** loading page */


$("document").ready(function(){

$(".loader-cover").fadeOut(1000)

});



/*  this one click to catch the word from btns */
$(".btn").click(function () {

    $(this).css("backgroundColor", "rgb(15, 160, 197)").css("color", "white");
    $(this).siblings().css("backgroundColor", "white").css("color", "black");

    clickedWord = $(this).text();  // to hold the clicked word
    btnIndex = $(".btn").index(this); //to clear the btn by its index later


});

/* this function when set the word in inputs and see if correct or wrong */
$(".answers-cont").click(function () {


    $(this).find(".the-answer-place").css("opacity", "1");
    $(this).find(".wrong-icon").css("opacity", "1");

    if (myChoosenWords.includes(`${clickedWord}`) == true) {
        $(this).find(".the-answer-place").text(clickedWord);
        $(".btn").eq(btnIndex).css("visibility", "hidden");
        $(this).find(".right-icon").css("display", "block");
        $(this).find(".wrong-icon").css("display", "none");
        clickedWord = "";
    }
    else {
        if (clickedWord !== "") {
            $(this).find(".the-answer-place").text(clickedWord);
            $(this).find(".right-icon").css("display", "none");
            $(this).find(".wrong-icon").css("display", "block").animate({ opacity: "0" }, 1000);
            $(this).find(".the-answer-place").animate({ opacity: "0" }, 1000);
            clickedWord = "";
        }


    }

});


/*show all answers */
$(".footer-show").click(function () {

    showAllAnswers();
    hideBtns();

});

function showAllAnswers() {
    $(".answers-cont").find(".right-icon").css("display", "block");
    $(".answers-cont").find(".the-answer-place").animate({ opacity: "1" },1)
    $(".the-answer-place").eq(0).text(myChoosenWords[0]);
    $(".the-answer-place").eq(1).text(myChoosenWords[1]);
    $(".the-answer-place").eq(2).text(myChoosenWords[2]);
    $(".the-answer-place").eq(3).text(myChoosenWords[3]);
    $(".the-answer-place").eq(4).text(myChoosenWords[4]);

}
function hideBtns() {
    let checkword;
    for (let i = 0; i < $(".btn").length; i++) {
        checkword = $(".btn").eq(i).text();
        for (let j = 0; j < myChoosenWords.length; j++) {
            if (checkword == myChoosenWords[j]) {
                $(".btn").eq(i).css("visibility", "hidden");

            }

        }
    }


}


/** reply the test */
$(".footer-reply").click(function () {
    $(".answers-cont").find(".right-icon").css("display", "none");
    $(".btn").css("visibility", "visible");
    $(".btn").css("backgroundColor", "white").css("color", "black");
    $(".the-answer-place").eq(0).text("");
    $(".the-answer-place").eq(1).text("");
    $(".the-answer-place").eq(2).text('');
    $(".the-answer-place").eq(3).text('');
    $(".the-answer-place").eq(4).text("");

});
$(document).ready(function(){
    var playing = true;
    var score = 0;
    var wordCard = 'noneSelected';
    var pictureCard = 'noneSelected';
    var clickSound = new Audio("clickSound.wav"); // buffers automatically when created
    var coinSound = new Audio("coin.wav"); // buffers automatically when created 
    var noMatchSound = new Audio("noMatchSound.wav"); // buffers automatically when created 
    
    // Upon a mismatch of cards, this function resets opacity of cards and the user's saved selection
    var resetCardsAndSelections = function(){
        console.log('at total reset, values are ' + pictureCard + " " + wordCard);
        $(".pictureCard").css("opacity", "");
        $(".wordCard").css( "opacity", "");
        console.log('Cards opacities were reset.');
        wordCard = 'noneSelected';
        pictureCard = 'noneSelected';
        console.log('Cards selections were reset: ' + pictureCard + ' '+ wordCard);
    };

    

    
    // The program listens for a click on a wordCard
    $('.wordCard').click(function() {
        clickSound.play();
        $(this).css( "opacity", ".3" );
        wordCard = $(this).attr('id');
        console.log(wordCard);
        console.log('current match =' + pictureCard + wordCard);
        
        // after one is clicked it checks to see if both kinds have been clicked
        if(pictureCard != "noneSelected" && wordCard != "noneSelected"){
            // then, it checks to see if they are equal and gives a point, removing the cards from the document
            if(pictureCard === wordCard){
                score+=1;
                console.log('they match!');
                $('#score').html(score);
                coinSound.play();
                $('#' + wordCard).remove();
                $('#' + pictureCard).remove();
                resetCardsAndSelections();
                console.log('Cards were reset: ' + pictureCard + ' '+ wordCard);
            }
            // if the card names don't match, then the picture card should go back to full opacity
            else {
                console.log('No Match');
                noMatchSound.play();
                resetCardsAndSelections();

            }
        }
        else{
            console.log('Only one card has been selected, ' + wordCard);
        }
        
        
    });
    
    
    // The program listens for a click on a pictureCard
    $('.pictureCard').click(function() {
        clickSound.play();
        $(this).css( "opacity", ".3" );
        pictureCard = $(this).attr('id');
        console.log(pictureCard);
        console.log('current match =' + pictureCard + wordCard);
           
        if(pictureCard != "noneSelected" && wordCard != "noneSelected"){
            if(pictureCard === wordCard){
                console.log('Match!')
                score+=1;
                console.log('You get a point!')
                $('#score').html(score);
                coinSound.play();
                $('#' + wordCard).remove();
                $('#' + pictureCard).remove();
                resetCardsAndSelections();
                console.log('Cards were reset: ' + pictureCard + ' '+ wordCard);
            }
            else {
                resetCardsAndSelections();
                noMatchSound.play();
                console.log('No Match');
            }
        }
        else{
            console.log('Only one card has been selected, ' + pictureCard);
        }
    });
    
});
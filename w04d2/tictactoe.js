// Front-end Javascript (with jQuery calls) go here.
const thisMoveCausedRowVictory = function($cell){
  let victory = true;
  let candidateWinner = '';

  if ($cell.hasClass('X')){
    candidateWinner = 'X';
  } else {
    candidateWinner = 'O';
  }

  const $parent = $cell.parent();
  $parent.find('td').each(function(){
    if (!$(this).hasClass(candidateWinner)){
      victory = false;
    }
  });  

  return victory;
};


$(document).ready(function(){
  $('td').click(function(){
    console.log('td was clicked while it was this players turn', $('#player').html());
    $(this).addClass($('#player').html());
    $(this).off();

    // test for whether we have a winner
    if (thisMoveCausedRowVictory($(this))) {
      $('table').off();
      $('h2').html('We have a winner. Click <a href="">here</a> to play again.');
    }

    if ($('#player').html() === 'X') {
      $('#player').html('O');
    } else {
      $('#player').html('X');
    }
  });
});

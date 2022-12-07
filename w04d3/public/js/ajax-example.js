$(document).ready(function(){

  $('form').on('submit', function(event){
    event.preventDefault();

    $.ajax({
      url: 'https://api2.binance.com/api/v3/ticker/24hr',
      method: 'GET'
    })
    .then((data) => {
      // console.log('data', data);

      let headerFinished = false;
      for (let pair of data) {
        console.log('pair', pair);
        // create new DOM element
        // const $newRow = $(`<tr><td>${pair.symbol}</td><td>${pair.openPrice}</td><td>${pair.lastPrice}</td></tr>`);

        if (!headerFinished) {
          const $header = $('<tr></tr>');
          for (let name in pair) {
            const $td = $(`<th>${name}</th>`);
            $header.append($td);
          }
          $('#display').append($header);
          headerFinished = true;
        }

        const $nextRowOfData = $('<tr></tr>');
        for (let name in pair) {
          const $td = $(`<td>${pair[name]}</td>`);
          $nextRowOfData.append($td);
        }

        // insert the new DOM element into the HTML page
        $('#display').append($nextRowOfData);
      }

    })
    .catch((error) => {
      console.log('error', error);
    });


  });


});

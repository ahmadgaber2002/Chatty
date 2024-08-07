/*
  File Namw: index.js
  Purpose: Client side of the simple chatty application.
            It manages the exchange of messages between
            the client and the server using get and post methods.
  Author: Ahmad Gaber
  Class: CSC 337
 */


// get all messages history from the server/DB
function getMessagesHistory() {
  $.ajax({
    url: '/chats',
    method: 'GET',
    success: function(result)  {
        let allMessages = '';
        let messages_arr = JSON.parse(result);
        for (i in messages_arr) {
          let one_message = messages_arr[i];  
          allMessages += `<b>${one_message.alias}</b>: ${one_message.message}<br>`;
        }
        $('#msgContainerId').html(allMessages);
        
        /*
          "setTimeout" will execute "getMessagesHistory" method
          one second after the end of prev.execution
        */
        
        setTimeout(getMessagesHistory, 1000);
      }
    
  });  
};


// send the new message record to the server
function sendMessage() {
  let aliasText =  $('#alias').val();
  let messageText= $('#Message').val() ;
  console.log('aliasText ' + aliasText);
  console.log('messageText ' + messageText );

  $.ajax({
    url: '/chats/post',
    data: { alias: aliasText,
            message: messageText
          },
    method: 'POST'
  });
  $('#Message').val('')
}


/* 
  Timer Interval
  I intentionally changed setInterval to setTimeout
  because the resources in the digital ocean server
  in not enough to get the messages every one second.

  setinterval was working perfectly in my PC
  but after deploy the server in digital ocean,
  it raised lots of network erros because of lack
  of resources.

  so as a workaround i used "setTimeout" to be run
  one time when the server starts, then will re-run
  every time the method "getMessagesHistory" execute
  at the end of execution.
*/

setTimeout(getMessagesHistory, 1000);
//setInterval(function() {getMessagesHistory(), 1000});

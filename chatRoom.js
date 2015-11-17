var ChatRoom = function() {
    this._allDialog = [];
};

 ChatRoom.prototype.onMessage = function(message) {
     if (message.message !== '') {
         this._allDialog.push(message.author.name + ": " + message.message);
     }


     function renderUI(allDialog) {
         var chat = document.getElementById('chatAreaText');
         var allText = '';
         for (var i = 0; i < allDialog.length; i++) {
             allText += allDialog[i] + "\n";
         }
         chat.innerHTML = allText;
     }

     renderUI(this._allDialog);
 };
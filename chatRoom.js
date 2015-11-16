var ChatRoom = function() {
    this._allDialog = [];
};

 ChatRoom.prototype.onMessage = function(message) {
     this._allDialog.push(message.author.name + ": " + message.message + "\n");
     alert(this._allDialog);
     function renderUI(allDialog) {
         var chat = document.getElementById('chatArea');
         chat.innerHTML = allDialog;
     }
     renderUI(this._allDialog);
 };
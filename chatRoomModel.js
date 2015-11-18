var ChatRoomModel = function(eb, users) {
    this._eb = eb;
    this._allDialogs = [];
    usersOfDialogs = users;
};

 ChatRoomModel.prototype.validatedToPush = function(message) {
     if (message.message !== '') {
         for (var i = 0; i < usersOfDialogs.length; i++) {
             if(message.userId == usersOfDialogs[i].userId) {
                 this._allDialogs.push(usersOfDialogs[i].name + ": " + message.message);
             }
         }

         this._eb.postMessage("RERENDER_UI", this._allDialogs);
     }
 };


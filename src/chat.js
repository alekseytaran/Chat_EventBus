var chat = function(rootDivId) {

    var eb = new EventBus();
    var users = [new User('stas', 0), new User('ira', 1), new User('dasha', 2)];

    var chatRoomModel = new ChatRoomModel(eb, users);

    var chatRoomView = new ChatRoomView(users);
    chatRoomView.init();

    chatRoomView.listnerClick(eb, function(message) {
        eb.postMessage("ADDED_MESSAGE", message);
    });
    eb.registerConsumer("ADDED_MESSAGE", chatRoomModel.validatedToPush.bind(chatRoomModel));
    eb.registerConsumer("RERENDER_UI", chatRoomView.renderUI);
}

$(function() {
    new chat('Main_chat');
});
//describe("check render chat room view", function() {
//    var users = [new User('vasya', 0), new User('masha', 1)];
//    new chat('Test_chat', users);
//    var chatRoomView = new ChatRoomView(users);
//    var eb = new EventBus();
//    var chatRoomModel = new ChatRoomModel(eb, users);
//    chatRoomView.init();
//
//    it("check empty bd until first message", function() {
//        assert(chatRoomModel.getAllDialogs().length === 0, "!==0");
//    });
//
//    it("add message after click on button", function() {
//        chatRoomView.listnerClick(eb);
//        //var testName = users[0].name;
//        debugger;
//        $('#vasya_textarea').val('test_value');
//        $('#vasya_button').click();
//        assert(chatRoomModel.getAllDialogs().length === 1, "!==1");
//    });
//
//    //it("check not add empty string", function () {
//    //    chatRoomView.listnerClick(eb);
//    //    var testName = users[0].name;
//    //    assert($('#' + testName + '_textarea').val(''), 1);
//    //    assert($('#' + testName + '_button').click(), 1);
//    //    setTimeout(function() {
//    //        assert(1, 2);
//    //    }, 500);
//    //})
//});
//

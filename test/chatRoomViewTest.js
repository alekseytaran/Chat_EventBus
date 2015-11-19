describe("check render chat room view", function() {
    var users = [new User('vasya', 0), new User('masha', 1)];
    var chatRoomView = new ChatRoomView(users);
    var eb = new EventBus();
    var chatRoomModel = new ChatRoomModel(eb, users);
    it("create init view", function() {

        assert($('#' + users[0].name + '_textarea'), 0);
        assert($('#' + users[1].name + '_textarea'), 0);
        assert($('#' + users[0].name + '_button'), 0);
        assert($('#' + users[1].name + '_button'), 0);
        assert($('#chatAreaDialog'), 0);

        chatRoomView.init();

        assert($('#' + users[0].name + '_textarea'), 1);
        assert($('#' + users[1].name + '_textarea'), 1);
        assert($('#' + users[0].name + '_button'), 1);
        assert($('#' + users[1].name + '_button'), 1);
        assert($('#chatAreaDialog'), 1);
    });

    it("add message after click on button", function() {
        chatRoomView.listnerClick(eb);
        var testName = users[0].name;
        assert($('#' + testName + '_textarea').val('sdvdfjvbd'), 1);
        assert($('#' + testName + '_button').click(), 1);
        setTimeout(function() {
            assert(chatRoomModel.getAllDialogs().length, 1);
        }, 500);

    });
});


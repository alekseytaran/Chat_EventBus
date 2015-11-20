describe("check save data in store", function() {
    var users = [new User('vasya', 0), new User('masha', 1)];
    var eb = new EventBus();
    var message = new Message(0, "test_value");
    var invalidMessage = new Message(2, "test_value");

    var chatRoomModel = new ChatRoomModel(eb, users);

    it("check empty bd until first message", function() {
        assert(chatRoomModel.getAllDialogs().length === 0, "!==0");
    });

    it("check adding message after click on button", function() {
        chatRoomModel.validatedToPush(message);
        assert(chatRoomModel.getAllDialogs().length === 1, "!==1");
    });

    it("check adding message with invalid userId", function() {
        chatRoomModel.validatedToPush(invalidMessage);
        assert(chatRoomModel.getAllDialogs().length === 1, "===2");
    });
});

describe("check event model", function() {
    var eb = new EventBus();
    var message = new Message(0, "test_value");

    var counterVisit = 0;

    eb.registerConsumer("TEST_TOPIC", function () {
        counterVisit++;
    });

    it("check event model with valid data", function() {
        eb.postMessage('TEST_TOPIC', message);
        setTimeout(function() {
            assert(counterVisit === 1, "counterVisit !== 1");
        }, 10);
    });

    it("check event model with invalid data", function() {
        eb.postMessage('INVALID_TEST_TOPIC', message);
        setTimeout(function() {
            assert(counterVisit === 1, "counterVisit !== 1");
        }, 10);
    });

});



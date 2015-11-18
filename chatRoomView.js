var ChatRoomView = function(users) {
    return {
        "init": function () {
            for(var i = 0; i < users.length; i++) {
                var textarea = users[i].name + '_textarea';
                var button = users[i].name + '_button';
                var innerHtml = '<textarea id="' + textarea + '" userId = "' + users[i].userId + '" rows="1" cols="15" maxlength="55"></textarea>' +
                    '<button id="' + button + '"> Send! </button>';

                $("#" + users[i].name).html(innerHtml);
            }

            var innerHtmlChat = '<div id="chatAreaDialog" rows="5" cols="30" maxlength="200"></div>';

            $("#chatArea").html(innerHtmlChat);
        },

        "listnerClick": function(eb, callback) {
            var text = '';
            for(var i = 0, len = users.length; i < len; i++) {
                var catchIndex = (function(x) {
                    var currentName = users[x].name;
                    $('#' + currentName + '_button').click(function(){
                        text = $('#' + currentName + '_textarea').val();
                        var userId = $('#' + currentName + '_textarea').attr('userId');
                        eb.postMessage("ADDED_MESSAGE", (new Message(userId, text)));
                        //callback(new Message(userId, text));
                    });
                })(i);
            }
        },

        "renderUI": function(allDialogs) {
            var chat = document.getElementById('chatAreaDialog');
            var allText = '';
            for (var i = 0; i < allDialogs.length; i++) {
                allText += allDialogs[i] + "</br>";
            }
            chat.innerHTML = allText;
        }
    };
};

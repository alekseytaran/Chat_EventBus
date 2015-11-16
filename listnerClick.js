function listnerClick(users, callback) {
	var text = '';
	for(var i = 0, len = users.length; i < len; i++) {
        var catchIndex = (function(x) {
            var currentName = users[x].name;
            $('#' + currentName + '_button').click(function(){
				text = $('#' + currentName + '_textarea').val();
				callback(new Message(users[x], text));
			});
		})(i);
	}
	
}
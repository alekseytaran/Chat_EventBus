function listnerClick(names, callback) {
	var text = '';
	for(var i = 0, len = names.length; i < len; i++) {
		var catchIndex = (function(x) {
			var currentName = names[x];
			$('#' + names[i] + '_button').click(function(){
				text = currentName + ": " + $('#' + currentName + '_textarea').val();
				callback(text);
			});
		})(i);
	}
	
};
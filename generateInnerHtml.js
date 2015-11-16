var generateHtml = function(name) {
	var textareaId = name + '_textarea';
	var buttonId = name + '_button';    
    return {
		innerCode : function() {
			var innerHtml = '<textarea id="' + textareaId + '" rows="1" cols="15" maxlength="55"></textarea>' +
			'<button id="' + buttonId + '"> Send! </button>';
			
			$("#" + name).html(innerHtml);
		},
		chatArea : function() {
			var innerHtml = '<textarea id="chatArea" rows="5" cols="30" maxlength="200"></textarea>';
			
			$("#chatArea").html(innerHtml);
		}
	}
		
}
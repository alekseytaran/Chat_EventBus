 function ChatRoom() {
	this.allDialog = '';
	this.onMessage = function(message) {
		this.allDialog += message;
		var chat = document.getElementById('chatArea');
		chat.innerHTML = this.allDialog;
	}
} 
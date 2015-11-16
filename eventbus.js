var EventBus = function() {
	this._consumers = [];
}

EventBus.prototype.registerConsumer = function(topic, context){
	var ctx = context || null;
	this._consumers.push({topic: topic, context: ctx});		
};

EventBus.prototype.postMessage = function(message){
	for(var i = 0; i < this._consumers.length; i++) {
		var callback = this._consumers[i];
		setTimeout(function() {
			callback.topic.call(callback.context, message); 
		}, 0);
	}
};



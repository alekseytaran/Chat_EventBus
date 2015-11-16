var EventBus = function() {
    this._consumers = [];
};

EventBus.prototype.registerConsumer = function(context, topic){
    var ctx = context || null;
    this._consumers.push({topic: topic, context: ctx});
};

EventBus.prototype.postMessage = function(message){
    for(var i in this._consumers) {
        if (message.author === this._consumers[i].context) {
            var callback = this._consumers[i];
            setTimeout(function () {;
                //callback.topic.call(callback.context, message.message);
                callback.topic(message);
            }, 0);
        }
    }
};



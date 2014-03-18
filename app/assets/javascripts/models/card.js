window.Trellino.Models.Card = Backbone.Model.extend({
	urlRoot: '/cards',
	
	initialize : function(options) {
		this.list = options.list;
	}
	
	// sync : function(method, model, options) {
	// 	debugger
	// 	var that = this;
	// 	options.data = _.extend({ list_id: this.list.id }, options.data)
	// 	Backbone.sync.call(method, model, options);
	// }
});
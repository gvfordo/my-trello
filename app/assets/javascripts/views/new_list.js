window.Trellino.Views.NewListForm = Backbone.View.extend({
	
	initialize: function(options){
		this.board = options.board;
		this.rank = options.rank;
	},
	
	className : 'list-div',
	
	events: {
		"submit form" : "createList"
	},
	
	template: JST['lists/new'],
	
	render: function() {
		var renderedContent = this.template({ 
				board: this.board,
			  rank: this.rank
		})
		this.$el.html(renderedContent)
		return this;
	},
	
	createList: function(event) {
		event.preventDefault()
		var $form = $(event.target);
		var data = $form.serializeJSON();
		var that = this;
		data = _.extend({ board: this.board }, data)
		var list = new window.Trellino.Models.List(data);
		list.save({}, {
			success: function (newList) {
				that.board.lists().add(newList)
			}
		});
	}
	
});
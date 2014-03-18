window.Trellino.Views.NewBoardForm = Backbone.View.extend({
	
	events: {
		"blur input" : "addBoard"
	},
	
	className: "board board-form",
	
	template: JST['boards/new_board'],
	
	render: function() {
		var renderedContent = this.template();
		this.$el.html(renderedContent);
		return this;
	},
	
	addBoard: function(event) {
		event.preventDefault();
		$form = $(event.target);
		var data = $form.serializeJSON();
		var newBoard = Trellino.boards.add(data);
		newBoard.save(data);
		this.remove();
	}
});
window.Trellino.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    ''              : 'boardsIndex',
    'boards/new'    : 'boardsNew',
    'boards/:id'  : 'boardsShow'
  },
  
  boardsIndex : function(){
		var boards = window.Trellino.boards;
		var boardsIndexView = new Trellino.Views.BoardsIndexView({ 
			  collection: Trellino.boards });
				
		Trellino.boards.fetch();
		
		this._swapView(boardsIndexView);
  },
  
  boardsNew : function(){
    
  },
  
  boardsShow : function(id){
		var board = Trellino.boards.get_or_fetch(id)
    var boardShowView = new Trellino.Views.BoardShowView({
    	model: board
    });
		this._swapView(boardShowView);
  },
	
	_swapView: function(view) {
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		
		$('#content').html(view.render().$el);
	}
  
});
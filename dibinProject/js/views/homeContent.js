define([
'jquery',
'underscore',
'backbone',
'bootstrap',
'text!templates/homeContent.html'
],function(
$,
_,
Backbone,
Bootstrap,
homeContentTemplate){

	var homeContentView = Backbone.View.extend({
		el:"#homeBody",
		template:_.template(homeContentTemplate),
		events: {},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
			$('.carousel').carousel({  
			  interval: 2000 // in milliseconds  
			});
			this.animate();
      	},
      	animate:function(){
      		console.log("animate function");
      		// for(var i=0;i<=2;i++){
      			
      		// }
      		var ind = $(".indicators p a");
      		
      		setTimeout(function(){

      		},2000);
      	},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return homeContentView;
});
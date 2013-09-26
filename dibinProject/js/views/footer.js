define([
'jquery',
'underscore',
'backbone',
'text!templates/footer.html'
],
function(
$,
_,
Backbone,
footerTemplate){

	var footerView = Backbone.View.extend({
		el:"#footerContent",
		template:_.template(footerTemplate),
		events:{},

		initialize:function(){
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
		},
		show:function(){
			this.$el.show();
		},
		hide:function(){
			this.$el.hide();
		}
	});
	return footerView;
});
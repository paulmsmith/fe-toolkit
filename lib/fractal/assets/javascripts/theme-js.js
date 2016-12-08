(function(){
	var $ = jQuery;
	var docs = {};

	docs.accordion = {

		config: {
			selector: ".js-accordion",
			itemSel: ".js-accordion-item",
			toggleSel: ".js-accordion-item-toggler",
			contentSel: ".js-accordion-item-content",
			hideClass: "js-hide",
			activeClass: 'js-active'
		},

		makeAccordion: function makeAccordion($accordion) {

			var $items = $accordion.find(this.config.itemSel);

			if(!!$items.length) {
				$items.each(function(index, item){

					var $currentItem = $(item);
					var $toggler = $currentItem.find(this.config.toggleSel);
					var $content = $currentItem.find(this.config.contentSel);

					$toggler.on('click', function(e){

						$toggler.toggleClass(this.config.activeClass);
						$content.toggleClass(this.config.hideClass);

					}.bind(this))

				}.bind(this));
			}

		},

		init: function init() {

			var $accordions = $(this.config.selector);

			if($accordions.length > 0) {

				$accordions.each(function(index, currentAccordion){

					this.makeAccordion($(currentAccordion));

				}.bind(this));

			}

		}
	}

	docs.init = function() {
		docs.accordion.init();
	}

	docs.init();

}());

<<<<<<< HEAD
(function(){
	var $ = jQuery;
	var docs = {};
=======
/**
 * Quick and dirty for the DWP Fractal Trial/Proof-of-concept
 */
(function(){

	var $ = jQuery,
		docs = {};
>>>>>>> dev

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
<<<<<<< HEAD

			var $items = $accordion.find(this.config.itemSel);

			if(!!$items.length) {
				$items.each(function(index, item){

					var $currentItem = $(item);
					var $toggler = $currentItem.find(this.config.toggleSel);
					var $content = $currentItem.find(this.config.contentSel);

					$toggler.on('click', function(e){

						$toggler.toggleClass(this.config.activeClass);
						$content.toggleClass(this.config.hideClass);

=======
			var $items = $accordion.find(this.config.itemSel);
			if(!!$items.length) {
				$items.each(function(index, item){
					var $currentItem = $(item),
						$toggler = $currentItem.find(this.config.toggleSel),
						$content = $currentItem.find(this.config.contentSel);
					$toggler.on('click', function(e){
						$toggler.toggleClass(this.config.activeClass);
						$content.toggleClass(this.config.hideClass);
>>>>>>> dev
					}.bind(this))

				}.bind(this));
			}
<<<<<<< HEAD

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

=======
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

	/**
	 * init stuff
	 * @method init
	 */
>>>>>>> dev
	docs.init = function() {
		docs.accordion.init();
	}

	docs.init();

}());

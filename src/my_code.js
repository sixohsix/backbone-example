// This file implements backbone MVC components.

/* When coding JavaScript, you MUST follow JSLint quality
 * conventions. The easiest way to do this is to install js2-mode for
 * emacs. It will highlight your code well and underline any linty code
 * in red.
 */


/* All JS files should have this jQuery container to prevent global
 * scope leakage.
 */
(function($) {

    /* For this example we'll build an incrementing counter. Boring,
     * right? Too bad. Deal with it.
     */

    var CounterModel = Backbone.Model.extend({

        // Include sensible defaults for your model.
        defaults: {
            count: 0
        },

        // Define any custom model functions here.
        increment: function () {
            // Whenever we change the model we MUST use .get and .set
            // methods. Altering model.count does NOTHING.
            this.model.set({
                count: this.model.get("count") + 1
            });
        }
    });
 


    /* The view renders the model to HTML/DOM stuff. When a View is
     * instantiated, it is given a model to observe, and a DOM node
     * called `el` that it can change.
     */
    
    var CounterView = Backbone.View.extend({
        initialize: function (attributes, options) {
            // This super call sets this.model and this.el.
            Backbone.View.prototype.initialize.call(this, attributes, options);

            // This is what almost always happens in View
            // initialize. We bind our `render` to the model's change
            // event. Whenever the model changes, render is called.
            this.model.bind("change", this.render, this);
            this.render();
        },
        render: function () {
            $(this.el).html("Count: " + this.model.get("count"));
        }
    });


    /*
     * To make our code clean, we hide the Model and View inside a
     * jQuery plugin. Calling $(dom_elt).setup_counter() will set up dom_elt
     * as the view element, and create a new model behind the scenes.
     */
    $.fn.setup_counter = function () {
        this.each(function (idx, el) {
            var model = new CounterModel();
            var view = new CounterView({ model: model, el: el });
            $(el).data("counter_model", model);
            $(el).data("counter_view", view);
        });
    };

})(jQuery);

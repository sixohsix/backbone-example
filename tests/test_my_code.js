/* All JS files should have this jQuery container to prevent global
 * scope leakage.
 */
(function($) {

    // Define a QUnit module section for what you're testing.
    module("Counter tests");


    // Write some tests!

    test("can set up a counter with jQuery plugin", function () {
        var el = $("<div />");
        $(el).setup_counter();

        var model = $(el).data("counter_model");
        var view = $(el).data("counter_view");

        // The `ok` function verifies that an expression is true.
        ok(model !== undefined, "The model is accessible");
        ok(view !== undefined, "The view is accessible");
    });

    test("counter shows count in el", function () {
        var el = $("<div />");
        $(el).setup_counter();

        // The equal function tests that things are equal.
        equal("Count: 0", $(el).html(), "The counter el shows a zero count");
    });

    test("counter model can be incremented and view reflects the count", function () {
        var el = $("<div />");
        $(el).setup_counter();

        var model = $(el).data("counter_model");
        model.increment();

        equal(1, model.get("count"), "The model's count is one");
        equal("Count: 1", $(el).html(), "The counter el shows a one count");        
    });

})(jQuery);

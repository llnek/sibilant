//# sourceMappingURL=/javascripts/sibilant.info.map
;
var lineCount = (function lineCount$(text) {
  /* line-count /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:4:0 */

  return (text.split("\n"))["length"];
});
var resize = (function resize$(textarea, pre) {
  /* resize /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:6:0 */

  var lines = {
    textarea: lineCount(textarea.val()),
    pre: lineCount(pre.text())
  };
  return $(textarea.add(pre)).css("height", ((Math.max(lines.textarea, lines.pre)) + "em"));
});
$((function() {
  /* /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:13:3 */

  return sibilant.loadMacros((function() {
    /* /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:15:5 */
  
    var trim = (function trim$(item) {
      /* trim /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:16:6 */
    
      return item.replace((new RegExp("^\\s*|\\s*$", "g")), "");
    });
    $("textarea").wrap("<div class=\"example\"/>")
      .after($("<pre/>"))
      .keyup((function() {
        /* /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:21:16 */
      
        var textarea = $(this),
            pre = textarea.siblings("pre");
        (function() {
          if ((!(textarea.get(0) === document.activeElement))) {
            return textarea.val(trim(textarea.val()));
          }
        })();
        (sibilant)["file"] = ("examples/" + textarea.attr("id") + ".sibilant");
        (function() {
          try {
            return $(pre).text(trim(sibilant.sibilize(textarea.val())))
              .removeClass("error");
          } catch (e) {
            return $(pre).text(e.message)
              .addClass("error");
          }
        })();
        return resize(textarea, pre);
      }))
      .trigger("keyup")
      .blur((function() {
        /* /Users/jbr/code/sibilant/public/javascripts/sibilant.info.sibilant:39:15 */
      
        return $(this).trigger("keyup");
      }))
      .show();
    return $("article").scrollNav({ titleText: null });
  }));
}));
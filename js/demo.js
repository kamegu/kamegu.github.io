/* js for demo */
(function($) {
	if (!$) {
		return;
	}
	if ($('script[src="/lib/colorbox/jquery.colorbox-min.js"]').length == 0) {
		$('head').append($('<link>').attr('href','/lib/colorbox/colorbox.css').attr('rel','stylesheet'));
		$('head').append($('<script>').attr('src','/lib/colorbox/jquery.colorbox-min.js'));
	}
	if ($('script[src="/lib/syntaxhighlighter/scripts/shCore.js"]').length == 0) {
		$('head').append($('<link>').attr('href','/lib/syntaxhighlighter/styles/shCore.css').attr('rel','stylesheet'));
		$('head').append($('<link>').attr('href','/lib/syntaxhighlighter/styles/shThemeDefault.css').attr('rel','stylesheet'));
		$('head').append($('<script>').attr('src','/lib/syntaxhighlighter/scripts/shCore.js'));
		$('head').append($('<script>').attr('src','/lib/syntaxhighlighter/scripts/shBrushJScript.js'));
		$('head').append($('<script>').attr('src','/lib/syntaxhighlighter/scripts/shBrushCss.js'));
	}
})($);
function initDemoPage($) {
	if (!$) {
		return;
	}
	$('div.demo-block').each(function(){
		$block = $(this);
		$js = $block.find('script');
		$css = $block.find('style');
		if ($js.length != 0) {
			$block.append('<p>javascript:</p>')
				.append($('<pre>').addClass("brush: js").html($js.html()));
		}
		if ($css.length != 0) {
			$block.append('<p>CSS:</p>')
				.append($('<pre>').addClass("brush: css").html($css.html()));
		}
	});
	SyntaxHighlighter.all();
	$.ajax({
		url: "/demo/demo.html",
		dataType: "html",
		success: function(data) {
			$('body').after(data);
			$('div#main').append($('body').children());
			$('body').append($('div#demo-container'));
			$('#demo-menu').appendTo('div#sidebar').menu();
			$('.info').appendTo('div#sidebar');
		}
	});
}

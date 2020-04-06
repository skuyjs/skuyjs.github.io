$(document).ready(function() {
    // var elements = $('.sticky');
    // Stickyfill.add(elements);

    /* Activate scrollspy menu */
    $('body').scrollspy({target: '#doc-menu', offset: 100});

    /* Smooth scrolling */
	$('a.scrollto').on('click', function(e){
        //store hash
        var target = this.hash;
        e.preventDefault();
		$('body').scrollTo(target, 800, {offset: 0, 'axis':'y'});

	});

    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(e) {
        e.preventDefault();
        $(this).ekkoLightbox();
    });

    $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
    $('.tree li.parent_li > span').on('click', function (e) {
        var children = $(this).parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            children.hide('fast');
            $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        } else {
            children.show('fast');
            $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
        }
        e.stopPropagation();
    });

});

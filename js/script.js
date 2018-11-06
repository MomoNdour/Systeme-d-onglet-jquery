$(document).ready(function(){
    $('ul.onglets').each(function(){
        var active, content;
        links = $(this).find('a');

        active = links.first().addClass('active');
        content = $(active.attr('href'));

        links.not(':first').each(function(){
            $($(this).attr('href')).hide();
        });

        $(this).on('click', 'a', function(){
            active.removeClass('active');
            content.hide();

            active = $(this);
            content = $($(this).attr('href'));

            active.addClass('active');
            content.show();

            return false;
        });
    });
});
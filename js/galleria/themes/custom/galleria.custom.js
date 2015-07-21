/**
* Based on
* Galleria Classic Theme 2012-08-08
* http://galleria.io
*
* Licensed under the MIT license
* https://raw.github.com/aino/galleria/master/LICENSE
*
*/

(function ($) {

    /*global window, jQuery, Galleria */

    Galleria.addTheme({
        name: 'custom',
        author: 'Wesley Heung',
        version: 0.1,
        css: 'galleria.custom.css',
        defaults: {
            transition: 'slide',
            thumbCrop: 'height',

            // set this to false if you want to show the caption all the time:
            _toggleInfo: true
        },
        init: function (options) {
            var gallery = this;
            var touch = Galleria.TOUCH;
            var isFullscreen = false;

            Galleria.requires(1.4, 'This theme requires Galleria 1.4 or later');

            // Move the info element into the stage
            gallery.$('info').detach().appendTo(gallery.$('stage'));
            // add elements
            gallery.addElement('info-link', 'info-close');
            gallery.append({
                'info': ['info-link', 'info-close']
            });
            // Bind click
            gallery.$('info-text,info-close').bind('click:fast', function () {
                gallery.$('info-text,info-close').fadeOut();
                gallery.$('info-link').fadeIn();
            });
            gallery.$('info-link').bind('click:fast', function () {
                gallery.$('info-text,info-close').fadeIn();
                gallery.$('info-link').fadeOut();
            });


            // Full screen button
            gallery.addElement('fscr');
            gallery.$('fscr').click(function () {
                gallery.toggleFullscreen();
            });
            gallery.appendChild('stage', 'fscr');

            // show loader & counter
            this.$('loader,counter').show();

            // some stuff for non-touch browsers
            if (!touch) {
                gallery.addIdleState(gallery.get('image-nav-left'), { left: -50 });
                gallery.addIdleState(gallery.get('image-nav-right'), { right: -50 });
                gallery.addIdleState(gallery.get('info-close'), { opacity: 0 });
                gallery.addIdleState(gallery.get('info-link'), { opacity: 0 })
            }

            // bind some stuff
            this.bind('thumbnail', function (e) {
                if (!touch) {
                    // fade thumbnails
                    $(e.thumbTarget).css('opacity', 0.6).parent().hover(function () {
                        $(this).not('.active').children().stop().fadeTo(100, 1);
                    }, function () {
                        $(this).not('.active').children().stop().fadeTo(400, 0.6);
                    });

                    if (e.index === this.getIndex()) {
                        $(e.thumbTarget).css('opacity', 1);
                    }
                } else {
                    $(e.thumbTarget).css('opacity', this.getIndex() ? 1 : 0.6).bind('click:fast', function () {
                        $(this).css('opacity', 1).parent().siblings().children().css('opacity', 0.6);
                    });
                }
            });

            var activate = function (e) {
                $(e.thumbTarget).css('opacity', 1).parent().siblings().children().css('opacity', 0.6);
            };
            gallery.bind('loadstart', function (e) {
                if (!e.cached) {
                    gallery.$('loader').show().fadeTo(200, 0.4);
                }
                window.setTimeout(function () {
                    activate(e);
                }, touch ? 300 : 0);
                gallery.$('info').toggle(gallery.hasInfo());
            });

            gallery.bind('loadfinish', function (e) {
                gallery.$('loader').fadeOut(200);
            });
            // Idle
            gallery.bind('idle_enter', function () {
                gallery.$('fscr').fadeOut();
                gallery.$('counter').fadeOut();
                if (isFullscreen) {
                    gallery.$('thumbnails-container').animate({ bottom: '-50px', opacity: 0 }, { queue: false });
                    gallery.$('info').animate({ bottom: '0px', opacity: 0 }, { queue: false });
                }
            });
            gallery.bind('idle_exit', function () {
                gallery.$('fscr').fadeIn();
                gallery.$('counter').fadeIn();
                if (isFullscreen) {
                    gallery.$('thumbnails-container').animate({ bottom: '0px', opacity: 1 }, { queue: false });
                    gallery.$('info').animate({ bottom: '60px', opacity: 1 }, { queue: false });
                }
            });
            // Enter and exit fullscreen
            gallery.bind('fullscreen_enter', function () {
                isFullscreen = true;
                gallery.$('fscr').addClass('active');
                gallery.$('thumbnails-container').css('position', 'fixed');
                gallery.$('stage').css('bottom', '0px');
                gallery.$('info').css('bottom', '60px');
            });
            gallery.bind('fullscreen_exit', function () {
                isFullscreen = false;
                gallery.$('fscr').removeClass('active');
                gallery.$('thumbnails-container').css('position', 'absolute');
                gallery.$('stage').css('bottom', '60px');
                gallery.$('info').css('bottom', '0px');
            });
        }
    });

} (jQuery));

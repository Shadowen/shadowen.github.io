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
            Galleria.requires(1.4, 'This theme requires Galleria 1.4 or later');

            // Move the info element into the stage
            gallery.$('info').detach().appendTo(gallery.$('stage'));
            // add some elements
            gallery.addElement('info-link', 'info-close');
            gallery.append({
                'info': ['info-link', 'info-close']
            });
            // cache some stuff
            var info = gallery.$('info-link,info-close,info-text'),
            touch = Galleria.TOUCH;

            // Full screen button
            gallery.addElement('fscr');
            gallery.$('fscr').click(function () {
                gallery.toggleFullscreen();
            });
            gallery.appendChild('stage', 'fscr');

            // show loader & counter with opacity
            this.$('loader,counter').show().css('opacity', 0.4);

            // some stuff for non-touch browsers
            if (!touch) {
                gallery.addIdleState(gallery.get('image-nav-left'), { left: -50 });
                gallery.addIdleState(gallery.get('image-nav-right'), { right: -50 });
                gallery.addIdleState(gallery.get('counter'), { opacity: 0 });
            }

            // toggle info
            if (options._toggleInfo === true) {
                info.bind('click:fast', function () {
                    info.toggle();
                });
            } else {
                info.show();
                this.$('info-link, info-close').hide();
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
                    activate(e)
                }, touch ? 300 : 0);
                gallery.$('info').toggle(gallery.hasInfo());
            });

            gallery.bind('loadfinish', function (e) {
                gallery.$('loader').fadeOut(200);
            });
            // Idle
            gallery.bind('idle_enter', function () {
                gallery.$('fscr').fadeOut();
            });
            gallery.bind('idle_exit', function () {
                gallery.$('fscr').fadeIn();
            });
            // Enter and exit fullscreen
            gallery.bind('fullscreen_enter', function () {
                gallery.$('fscr').addClass('active');
            });
            gallery.bind('fullscreen_exit', function () {
                gallery.$('fscr').removeClass('active');
            });
        }
    });

} (jQuery));

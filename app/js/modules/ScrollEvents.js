import $ from 'jquery'

export default class ScrollEvents {
    constructor() {
        this.arrowDown = $('.feed__arrow-down')
        this.header = $('.header')
        this.feed = $('.feed')
        this.breakPoint = 120

        this.events()
    }


    events() {
        this.scrollListener()

        
    }

    scrollListener() {
        $(window).scroll(function() {
             let scrollLength = $(document).scrollTop();

             this.arrowEvents(scrollLength)
             this.stickyHeaderEvents(scrollLength)

        }.bind(this))
    }

    arrowEvents(scrollLength) {
        const breakPoint = 100

        let opacity = 1-(scrollLength / breakPoint)

        this.arrowDown.css('opacity', opacity);

        if (scrollLength > breakPoint) {
            this.arrowDown.css('display', 'none');
        }

    }

    stickyHeaderEvents(scrollLength) {
        const breakPoint = 120

        if (scrollLength > breakPoint) {
            this.header.addClass('header--sticky-is-active')
            this.feed.addClass('feed--sticky-is-active')
        } else {
            this.header.removeClass('header--sticky-is-active')
            this.feed.removeClass('feed--sticky-is-active')
        }
    }

} 
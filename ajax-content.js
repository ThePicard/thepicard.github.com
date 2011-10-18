window.addEvent('domready', function() {
    document.id('nav').getElements('a').addEvent('click', function() {
        document.id('content').load(this.href);
        return false;
    });
});

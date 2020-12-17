var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function (direction) {
        console.log('Scrolled to waypoint!')
    }
})

$('.top-content').backstretch("assets/img/background.png");
'use strict';

$(function () {

    // get all events from json --> synchronously!!!
    var events = [];
    $.ajax({
        url: 'data/events.json'
        , async: false
        , dataType: 'json'
        , success: function (data) {
            $.each(data, function (key, val) {
                val.startDate = new Date(val.startDate.substring(6, 10), val.startDate.substring(3, 5) - 1, val.startDate.substring(0, 2));
                val.endDate = new Date(val.endDate.substring(6, 10), val.endDate.substring(3, 5) - 1, val.endDate.substring(0, 2));
                events.push(val);
            });
        }
    });

    $('#calendar').calendar({
        enableContextMenu: false
        , enableRangeSelection: true
        , contextMenuItems: []
        , selectRange: function (e) {}
        , mouseOnDay: function (e) {
            if (e.events.length > 0) {
                var content = '';
                for (var i in e.events) {
                    content += '<div class="event-tooltip-content">' + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>' + '<div class="event-location">' + e.events[i].location + '</div>' + '</div>';
                }
                $(e.element).popover({
                    trigger: 'manual'
                    , container: 'body'
                    , html: true
                    , content: content
                });
                $(e.element).popover('show');
            }
        }
        , mouseOutDay: function (e) {
            if (e.events.length > 0) {
                $(e.element).popover('hide');
            }
        }
        , dayContextMenu: function (e) {
            $(e.element).popover('hide');
        }
        , dataSource: events
    });

});
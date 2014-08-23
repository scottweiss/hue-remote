var hueIP;

function getHueIP(DOMcallback) {
    $.ajax({
        cache: false,
        type: 'GET',
        Origin: 'http://sttwss.com',
        url: 'https://www.meethue.com/api/nupnp',
        dataType: 'json',
        success: function(data) {
            var list = data === null ? [] : (data instanceof Array ? data  : [data]);

            console.group('getHueIP');
                console.log(list);
            console.groupEnd();

                    
            DOMcallback(list);
        }, error: function() {
            console.log('error on getHueIP');
        }
    });
}

function colorloop() {
    var DataToSend = new Object();
    DataToSend = {
        "on": true,
        "hue": 2000,
        "sat": 255,
        "effect": "colorloop"
    };

    $.ajax({
        cache: false,
        type: "PUT",
        Origin: 'http://sttwss.com',
        contentType: "application/json; charset=utf-8",
        url: '//10.0.0.40/api/scottweiss/groups/0/action',
        data: JSON.stringify(DataToSend),
        dataType: "json",
        success: function(data) {
            var list = data === null ? [] : (data instanceof Array ? data  : [data]);

            console.group('colorloop');
                console.log(list);
            console.groupEnd();
       
            // DOMcallback(list);
        }, error: function() {
            console.log('error on colorloop');
        }
    });
}

function lightsOff() {
    var DataToSend = new Object();
    DataToSend = {
        "on":false,
        "effect": "none"
    };

    $.ajax({
        cache: false,
        type: "PUT",
        Origin: 'http://sttwss.com',
        contentType: "application/json; charset=utf-8",
        url: '//10.0.0.40/api/scottweiss/groups/0/action',
        data: JSON.stringify(DataToSend),
        dataType: "json",
        success: function(data) {
            var list = data === null ? [] : (data instanceof Array ? data  : [data]);

            console.group('lightsOff');
                console.log(list);
            console.groupEnd();
       
            // DOMcallback(list);
        }, error: function() {
            console.log('error on lightsOff');
        }
    });
}

function lightsOn() {
    var DataToSend = new Object();
    DataToSend = {
        "on":true,
        "effect": "none"
    };

    $.ajax({
        cache: false,
        type: "PUT",
        Origin: 'http://sttwss.com',
        contentType: "application/json; charset=utf-8",
        url: '//10.0.0.40/api/scottweiss/groups/0/action',


        data: JSON.stringify(DataToSend),
        dataType: "json",
        success: function(data) {
            var list = data === null ? [] : (data instanceof Array ? data  : [data]);

            console.group('lightsOn');
                console.log(list);
            console.groupEnd();
       $('body').append("lightsOn was a success");
            // DOMcallback(list);
        }, error: function() {
            console.log('error on lightsOn');
            $('body').append("lightsOn was a failure");
        }
    });
}


function getGroups(DOMcallback) {

    $.ajax({
        
        type: 'GET',
        Origin: 'http://sttwss.com',
        url: '//10.0.0.40/api/scottweiss/groups/0',
        dataType: 'json',
        success: function(data) {
            var list = data === null ? [] : (data instanceof Array ? data  : [data]);

            console.group('getGroups');
                console.log(list);
            console.groupEnd();

                    
            DOMcallback(list);
        }, error: function() {
            console.log('error on getGroups');
        }
    });
}


function blue() {
    var DataToSend = new Object();
    DataToSend = {
        "on": true,
        "hue": 46920,
        "sat": 255,
        "effect": "none"
        
    };

    $.ajax({
        cache: false,
        type: "PUT",
        Origin: 'http://sttwss.com',
        contentType: "application/json; charset=utf-8",
        url: '//10.0.0.40/api/scottweiss/groups/0/action',
        data: JSON.stringify(DataToSend),
        dataType: "json",
        success: function(data) {
            var list = data === null ? [] : (data instanceof Array ? data  : [data]);

            console.group('blue');
                console.log(list);
            console.groupEnd();
       
            // DOMcallback(list);
        }, error: function() {
            console.log('error on blue');
        }
    });
}

//========================================================
// wakeup project
//========================================================

//========================================================
// function: acquireTime
// description: acquire date and time via Date object 
//     and return current time
//========================================================
var acquireTime = function () {
    
    var currentTime = new Date();
    // verify the time format
    var strCurrentTime = currentTime.toLocaleTimeString();
    if (strCurrentTime.length < 11)
        strCurrentTime = appendZeroFront(strCurrentTime);
    return strCurrentTime;
}

//========================================================
// function: appendZeroFront
// description: + 0 in front of a data
//========================================================
var appendZeroFront = function (data)
{
    return "0" + data;
}

//========================================================
// function: clockUI
// description: create elements on fly with jquery
//========================================================
var clockUI = function (strTime) {

    // clock    
    var clockTimeFormat = $('<div>')
        .addClass('clocktimeformat')
        .text(strTime);

    var clockScreen = $('<div>')
        .addClass('clockscreen')
        .append(clockTimeFormat);

    // alarm button
    var btnAlarm = $('<button>')
        .addClass("btnalarm")
        .text("Alarm"); //.text("Alarm OFF")

    var btnAlarmCenter = $('<p align="center">').
        append(btnAlarm);
    
    // inner box = clock and alarm button
    var innerShell = $('<div>')
        .addClass('innershell')
        .append(clockScreen)
        .append(btnAlarmCenter);

    //============================================
    // form
    var createAlarmForm = $('<form>')
        .addClass('formalarm')
        .html(
            "<table> \
            <tr> \
            <td>Hour:</td> \
            <td><input id='hrvalue' type='text' /></td>\
            </tr>\
            <tr>\
            <td>Minutes:</td>\
            <td><input id='minvalue' type='text' /><td>\
            </tr>\
            <tr>\
            <td>AM/PM:</td>\
            <td><input id='ampmvalue' type='text' /><td>\
            </tr>\
            <tr>\
            <td colspan='2'>\
            <input type='submit' value='set'>\
            </td>\
            </tr>\
            </table>"
            );

    var createAlarmFormDiv = $('<div>') 
        .addClass('formalarmdiv')
        .append(createAlarmForm)
        .hide();

    //============================================
    var outerShell = $('<div>')
        .addClass('outershell')
        .append(innerShell)
        .append(createAlarmFormDiv);


    $('body').append(outerShell)
}

//========================================================
// function: timeUpdate
// description: update the time on screen
//========================================================
var timeUpdate = function (){

    setInterval(function(){
        $('.clocktimeformat').text(acquireTime());
    }, 1000);   
}

//========================================================
// function: verify Alarm
// description: compare current time vs. alarm time
//========================================================
var verifyAlarm = function(strAlarm) {
    setInterval(function() {     
        
        var strCurrentTime = acquireTime();
        var strCurrentTimeCompare = 
                strCurrentTime.slice(0,5) +
                strCurrentTime.slice(8,11);
        console.log(strCurrentTimeCompare);
        var strAlarmCompare = 
                strAlarm.slice(0,5) +  
                strAlarm.slice(8,11);
        var playMusic = new Audio('dogbark.wav');    
        if (strCurrentTimeCompare === strAlarmCompare) {
            $('.btnalarm').text("Alarm");
            playMusic.play();
        }
    }, 1000);    
}

//========================================================
// function: showAlarm
// description: set alarm time
//========================================================
var setAlarm = function () {
    $('.formalarmdiv').show();    
    
    $('.formalarm').on('submit', function(e) {  
        e.preventDefault();

        var hr = $('#hrvalue').val(); 
        if (hr.length!=2) 
            hr = appendZeroFront(hr);
        var min = $('#minvalue').val();
        if (min.length!=2) 
            min=appendZeroFront(min);
        var sec = "00";
        var ampm = $('#ampmvalue').val().toUpperCase();
        var strAlarm = hr + ":" + min + ":" + sec + " " + ampm;
        
        $('.btnalarm').text("Alarm Set @ " + strAlarm);
        $('.formalarmdiv').hide();

        verifyAlarm(strAlarm)
    });
}

$(document).on('ready', function() {
    //load UI
    clockUI(acquireTime()); 
 
    //update time
    timeUpdate();
    
    // set the alarm
    $('.btnalarm').on('click', setAlarm);
});


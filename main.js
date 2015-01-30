// create a clock
var alarmTime = "-0:-0";

//========================================================
// function: acquireTime
// parameter: none
// return: a string with current time
// description: acquire date and time via Date object 
//     and return current time
//========================================================
function acquireTime()
{
    var currentTime = new Date();

    var hr = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    
    hr = appendZero(hr);
    min = appendZero(min);
 
    return hr + ":" + min;
}

//========================================================
// function: appendZero
// parameter: hour | minute | second
// return: a string with 0 in front of a digit
// description: + 0 in front of hour/min/sec if less than 0 
//========================================================
function appendZero(num)
{
    if (num < 10) 
        num = "0" + num
    
    return num;
}

//========================================================
// function: clockUI
// parameter: none
// return: none
// description: create elements on fly with jquery
//========================================================
function clockUI() {
    

    // Clock    
    var clockTimeFormat = $('<div>')
        .addClass('clocktimeformat')
        .text(acquireTime());

    var clockScreen = $('<div>')
        .addClass('clockscreen')
        .append(clockTimeFormat);

    // Alarm Button
    var btnAlarm = $('<button>')
        .addClass("btnalarm")
        .text("Alarm");

    var btnAlarmCenter = $('<p align="center">').
        append(btnAlarm);
    
    // inner box = clock and alarm button
    var innerShell = $('<div>')
        .addClass('innershell')
        .append(clockScreen)
        .append(btnAlarmCenter);

    //============================================
    // Form
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
// function: clockTimeUpate
// parameter: none
// return: none
// description: update the time on screen and check alarm
//========================================================
function clockAlarmCheck() {

    setInterval(function(){
        var currentTime = acquireTime();
        $('.clocktimeformat').text(currentTime);
        if (currentTime === alarmTime) {
            $('.btnalarm').text("Alarm");
            var playMusic = new Audio('dogbark.wav');
            playMusic.play();
        }

    }, 1000);   
}

//========================================================
// function: showAlarm
// parameter: none
// return: none
// description: show the form, when submit button is clicked, 
//      take hour and minute inputs and save to global variable
//      hide the form and change the button text to alarm on
//========================================================
function showAlarm() {
    // display the alarm form
    $('.formalarmdiv').show();    
    $('.formalarm').on('submit', function(e) {  
        e.preventDefault();

        var hr = $('#hrvalue').val();
        var min = $('#minvalue').val();
        alarmTime = hr +":" + min;
        
        $('.formalarmdiv').hide();
        $('.btnalarm').text("Alarm ON");
    });
}

$(document).on('ready', function() {
    
    //load UI
    clockUI(); 
 
    //update
    clockAlarmCheck();
    
    // set the alarm by calling showAlarm
    $('.btnalarm').on('click', showAlarm);
});


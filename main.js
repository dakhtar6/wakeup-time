// Project: Wakeup Time
// Open Date: 01/27
// Objective: Render a clock using jQuery DOM creation

// Requirements
// 1. Create a blank HTML document with only a container div in the body.
// 2. Include the latest version of jQuery.
// 3. Include your own js file.
// 4. When the document is ready, create DOM elements for each of the following components to approximate the clock pictured above:
        // Outer Shell (dark gray)
        // Inner Shell (black)
        // Left AM/PM & Auto Labels (white)
        // Clock Screen (dark red)
        // Clock AM/PM indicator (red)
        // Clock Text (red)
        // Bottom AM Label & Frequencies (white)
        // Bottom FM Label & Frequencies (white)
// 5. Create each component individually
// 6. Use append or other DOM manipulation methods to add the elements to the DOM.
// 7. Style the elements appropriately using an external CSS file.
// 8. Make the clock functional!

// Version 1.00
// Date: 01/27
$(document).on('ready', function() {
    
    //=======================//
    // create all components //
    //=======================//


    var outerShell = $('<div>')
        .addClass('outerShell');
    
        var innerShell = $('<div>')
            .addClass('innerShell');

            // Left Labels
            // leftLabels includes leftLabelAMPM and leftLabelAuto
            var leftLabels = $('<div>')
                .addClass('leftLabels');
                    
                var leftLabelAMPM = $('<div>')
                    .addClass("leftLabelAMPM")
                    .text("PM");

                var leftLabelAuto = $('<div>')  
                    .text("AUTO");

    
            // Clock Screen
            // clockScreen includes 
            // clockScreenLeft(clockScreenLeftAMPM and clockScreenLeftAuto) 
            // and clockScreenTime shows the current time   
            var clockScreen = $('<div>')
                .addClass('clockScreen');

                var clockScreenLeft = $('<div>')
                    .addClass('clockScreenLeft');
                            
                    var clockScreenLeftAMPM = $('<div>')
                        .addClass('clockScreenLeftAMPM')
                        .html('<img src="circleRed.png" width="20px" height=20px />');

                    var clockScreenLeftAuto = $('<div>')
                        .addClass('clockScreenLeftAuto')
                        .html('<img src="circleRed.png" width="20px" height="20px"/>');
                        
                var clockScreenTime = $('<div class="clockScreenTime">')
                        .html('<h1>11:11</h1>');    

            // AM & FM Frequency Labels
            // frequency labels includes an empty box and AM & FM frequencies in tables
            var bottomLabels = $('<div>')
                .addClass("bottomLabels");

                var bottomLabelEmpty = $('<div>')
                    .addClass("bottomLabelEmpty");

                var bottomLabelFrequency = $('<div>')
                    .addClass("bottomLabelFrequency");

                    var frequencyAM = $('<div><table width="100%"><tr><td>AM</td><td>53</td><td>60</td><td>70</td><td>90</td><td>110</td><td>140</td><td>170</td><td>KHz</td></tr></table>');

                    var frequencyFM = $('<div><table width="100%"><tr><td>FM</td><td>88</td><td>92</td><td>96</td><td>100</td><td>104</td><td>108</td><td>MHz</td></tr></table>');

    // append all components in html page
    $('.container')
        .append(outerShell);
        
        $('.outerShell')        
            .append(innerShell);
        
            $('.innerShell')        
                .append(leftLabels)
                .append(clockScreen)
                .append(bottomLabels);
        
                $('.leftLabels')
                    .append(leftLabelAMPM)
                    .append(leftLabelAuto);
        

                $('.clockScreen')
                    .append(clockScreenLeft)
                    .append(clockScreenTime);   

                    $('.clockScreenLeft')
                        .append(clockScreenLeftAMPM)
                        .append(clockScreenLeftAuto);   

                $('.bottomLabels')
                    .append(bottomLabelEmpty)
                    .append(bottomLabelFrequency);
        
                    $('.bottomLabelFrequency')
                        .append(frequencyAM)
                        .append(frequencyFM);           
    
});
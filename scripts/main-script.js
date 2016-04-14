$(document).ready(function(){

  
  initSliders(); 

// =================================================================================
// pollinfo: running number 
// =================================================================================

  $('.stats').counter({
    autoStart: false
  })

  $('.stats').horizon({
   recurring: true, 

    // Start counter once element is in view
    inView:  function(){ 
      $('.stats').each( function(){
      var counter = $( this ).data('counter')
        counter.startCounter()
      })
    },

    // Clear counter once element is out of view
    outOfView: function(){ 
      $('.stats').each( function(){
      var counter = $( this ).data('counter')
        counter.clearCounter()
      })
    }
  })

// =================================================================================
// pollinfo: chart.js
// =================================================================================

  var ctx = $("#myChart").get(0).getContext("2d")
  var ctxvote = $("#myChartVote").get(0).getContext("2d")
  var ctxstatus = $("#myChartStatus").get(0).getContext("2d")

  var data = [
    {
        value: 92,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "Hilary Clinton"
    },
    {
        value: 29,
        color: "#442271",
        highlight: "#442271",
        label: "Donald Trump"
    },
    {
        value: 112,
        color: "#591E66",
        highlight: "#591E66",
        label: "Bernie Sanders"
    },
    {
        value: 15,
        color: "#6B1B5D",
        highlight: "#6B1B5D",
        label: "Ted Cruz"
    },
    {
        value: 17,
        color: "#821851",
        highlight: "#821851",
        label: "John Kasich"
    },
    {
        value: 32,
        color: "#941548",
        highlight: "#941548",
        label: "Undecided"
    }

  ]

  var data2 = [
    {
        value: 118,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "Male"
    },
    {
        value: 108,
        color: "#BA0F35",
        highlight: "#BA0F35",
        label: "Female"
    }
  ]

var data3 = [
    {
        value: 9,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "Under 18"
    },
    {
        value: 1,
        color: "#442271",
        highlight: "#442271",
        label: "Undocumented Res"
    },
    {
        value: 20,
        color: "#591E66",
        highlight: "#591E66",
        label: "Int Students"
    },
    {
        value: 233,
        color: "#6B1B5D",
        highlight: "#6B1B5D",
        label: "US Territory Res"
    },
    {
        value: 13,
        color: "#821851",
        highlight: "#821851",
        label: "Foreigners"
    },
    {
        value: 13,
        color: "#941548",
        highlight: "#941548",
        label: "Int Workers"
    },
    {
        value: 0,
        color: "#AA113D",
        highlight: "#AA113D",
        label: "Convicted Felons"
    },
    {
        value: 23,
        color: "#BA0F35",
        highlight: "#BA0F35",
        label: "Other"
    }
  ]

  new Chart(ctx).Doughnut(data, {
     percentageInnerCutout : 70,
     animateRotate : true
  })

  new Chart(ctxvote).Doughnut(data2, {
     percentageInnerCutout : 70,
     animateRotate : true
  })

  new Chart(ctxstatus).Doughnut(data3, {
     percentageInnerCutout : 70,
     animateRotate : true
  })

// =================================================================================
// snap scroll down
// =================================================================================

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });  

// =================================================================================
// Filter.js
// =================================================================================

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var FJS = FilterJS(voices, '#voice', {
    template: '#voice-template',
    search: {ele: '#searchbox'},
    //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
    callbacks: {
      afterFilter: function(result){
        $('#total_voices').text(result.length);
      }
    }
    //appendToContainer: appendToContainer
  });

  FJS.addCallback('beforeAddRecords', function(){
    if(this.recordsCount >= 450){
      this.stopStreaming();
    }
  });

  FJS.addCallback('afterAddRecords', function(){
    var percent = (this.recordsCount - 250)*100/250;

    $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');

    if (percent == 100){
      $('#stream_progress').parent().fadeOut(1000);
    }
  });

  // FJS.addCriteria({field: 'year', ele: '#year_filter', type: 'range', all: 'all'}); --> this is for drop down options
  FJS.addCriteria({field: 'age', ele: '#age_filter', type: 'range'});
  FJS.addCriteria({field: 'group', ele: '#status_criteria input:checkbox'});
  FJS.addCriteria({field: 'issue', ele: '#issue_criteria input:checkbox'});
  FJS.addCriteria({field: 'gender', ele: '#gender_criteria input:checkbox'});
  FJS.addCriteria({field: 'vote', ele: '#vote_criteria input:checkbox'});

  window.FJS = FJS;

// =================================================================================
// sliders and checkbox event functions.
// =================================================================================  

  function initSliders(){

    //set variables for slider
    var $ageSlider = $("#age_slider");

    //apply slider
    $ageSlider.slider({
      min: 15,
      max: 100,
      values:[15, 100],
      step: 1,
      range:true,
      slide: function( event, ui ) {
        $("#age_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
        $('#age_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
      }
    });  
  }/*end quote of function initSliders*/

  //set variables for checkboxs
  var $voteCheckbox   = $('#vote_criteria :checkbox');
  var $genderCheckbox = $('#gender_criteria :checkbox');
  var $statusCheckbox = $('#status_criteria :checkbox');
  var $genderCheckbox = $('#issue_criteria :checkbox'); 

  //apply checkboxs
  $genderCheckbox.prop('checked', false);
  $statusCheckbox.prop('checked', false);
  $voteCheckbox.prop('checked', false);  
  
  //set round buttons toggle opacity.
  $('.round').click(function(){
    var $voteChecked = $(this);
    $voteChecked.animate({
    opacity:($voteChecked.css('opacity')== 0.5) ? 1 : 0.5});
  })

  // $issueCheckbox.prop('checked', false); 
  // $('#all_issue').on('click', function(){
  //   $('#issue_criteria :checkbox').prop('checked', $(this).is(':checked'));
  // });


});



$(document).ready(function(){

  initSliders();

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


});

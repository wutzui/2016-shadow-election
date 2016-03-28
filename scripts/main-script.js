$(document).ready(function(){

  initSliders();

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

  // FJS.setStreaming({
  //   data_url: '../data/stream_voices.json',
  //   stream_after: 1,
  //   batch_size: 50
  // });

  // FJS.addCriteria({field: 'year', ele: '#year_filter', type: 'range', all: 'all'}); --> this is for drop down options
  FJS.addCriteria({field: 'age', ele: '#age_filter', type: 'range'});
  FJS.addCriteria({field: 'group', ele: '#status_criteria input:checkbox'});
  FJS.addCriteria({field: 'issue', ele: '#issue_criteria input:checkbox'});


  /*
   * Add multiple criterial.
    FJS.addCriteria([
      {field: 'issue', ele: '#issue_criteria input:checkbox'},
      {field: 'year', ele: '#year_filter', type: 'range'}
    ])
  */

  window.FJS = FJS;
});

// sliders and checkbox event functions.
function initSliders(){
  $("#age_slider").slider({
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

  $('#status_criteria :checkbox').prop('checked', false);

  $('#issue_criteria :checkbox').prop('checked', false);
  $('#all_issue').on('click', function(){
    $('#issue_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}

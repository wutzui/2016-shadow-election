$(document).ready(function(){

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
      animateRotate: true;
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
        value: 112,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "Hilary Clinton"
    },
    {
        value: 31,
        color: "#442271",
        highlight: "#442271",
        label: "Donald Trump"
    },
    {
        value: 129,
        color: "#591E66",
        highlight: "#591E66",
        label: "Bernie Sanders"
    },
    {
        value: 17,
        color: "#6B1B5D",
        highlight: "#6B1B5D",
        label: "Ted Cruz"
    },
    {
        value: 18,
        color: "#821851",
        highlight: "#821851",
        label: "John Kasich"
    },
    {
        value: 40,
        color: "#941548",
        highlight: "#941548",
        label: "Undecided"
    }

  ]

  var data2 = [
    {
        value: 218,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "Male"
    },
    {
        value: 130,
        color: "#BA0F35",
        highlight: "#BA0F35",
        label: "Female"
    }
  ]

  var data3 = [
    {
        value: 10,
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
        value: 21,
        color: "#591E66",
        highlight: "#591E66",
        label: "Int Students"
    },
    {
        value: 273,
        color: "#6B1B5D",
        highlight: "#6B1B5D",
        label: "US Territory Res"
    },
    {
        value: 14,
        color: "#821851",
        highlight: "#821851",
        label: "Foreigners"
    },
    {
        value: 16,
        color: "#941548",
        highlight: "#941548",
        label: "Int Workers"
    },
    {
        value: 2,
        color: "#AA113D",
        highlight: "#AA113D",
        label: "Convicted Felons"
    },
    {
        value: 29,
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


});

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


});

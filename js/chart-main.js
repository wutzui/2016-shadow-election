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
        value: 112,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "HILARY CLINTON"
    },
    {
        value: 27,
        color: "#442271",
        highlight: "#442271",
        label: "DONALD TRUMP"
    },
    {
        value: 126,
        color: "#591E66",
        highlight: "#591E66",
        label: "BERNIE SANDERS"
    },
    {
        value: 17,
        color: "#6B1B5D",
        highlight: "#6B1B5D",
        label: "TED CRUZ"
    },
    {
        value: 17,
        color: "#821851",
        highlight: "#821851",
        label: "JOHN KASICH"
    },
    {
        value: 40,
        color: "#941548",
        highlight: "#941548",
        label: "UNDECIDED"
    }

  ]

  var data2 = [
    {
        value: 207,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "MALE"
    },
    {
        value: 131,
        color: "#BA0F35",
        highlight: "#BA0F35",
        label: "FEMALE"
    }
  ]

  var data3 = [
    {
        value: 2,
        color:"#1A2986",
        highlight: "#1A2986",
        label: "FELONS"
    },
    {
        value: 10,
        color: "#442271",
        highlight: "#442271",
        label: "NON-US CITIZEN"
    },
    {
        value: 9,
        color: "#591E66",
        highlight: "#591E66",
        label: "PERMANENT RESIDENT"
    },
    {
        value: 27,
        color: "#6B1B5D",
        highlight: "#6B1B5D",
        label: "INTERNATIONAL STUDENT"
    },
    {
        value: 13,
        color: "#821851",
        highlight: "#821851",
        label: "INTERNATIONAL WORKER"
    },
    {
        value: 3,
        color: "#941548",
        highlight: "#941548",
        label: "UNDOCUMENTED RESIDENT"
    },
    {
        value: 7,
        color: "#AA113D",
        highlight: "#AA113D",
        label: "UNDER 18"
    },
    {
        value: 268,
        color: "#BA0F35",
        highlight: "#BA0F35",
        label: "IN US TERITORIES"
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

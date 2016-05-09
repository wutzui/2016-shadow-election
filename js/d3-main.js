$("document").ready(function(){

    d3.json("data/relation-viz.json", function(error, json) {
        if (error) throw error;
 
        update();
    });

    function update(){
    	
    }


});
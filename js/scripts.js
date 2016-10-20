$(document).ready(function() {
  var animalselection = "";

  $("#elephant-button").click(function() {
     animalselection = "elephant";
     $(".homepage").hide();
     console.log(animalselection);
  });
  $("#hippo-button").click(function() {
     animalselection = "hippo";
     $(".homepage").hide();
     console.log(animalselection);
  });
   $("#giraffe-button").click(function() {
     animalselection = "giraffe";
     $(".homepage").hide();
      console.log(animalselection);
   });

   $(document).click(function() {
     console.log("page running" + animalselection)

      if (animalselection === "elephant") {
       $("#elephantpage").show();
     }
     else if (animalselection === "hippo") {
       $("#hippopage").show();
     }
     else if (animalselection === "giraffe") {
       $("#giraffepage").show();
       console.log(animalselection + "text");
     }
    else {
    }
  });

});

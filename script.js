var closeBtn= $(".close");
var modal = $("#portfolio-modal");
var modalImage = $("#modal-image");
var modalCaption = $("#caption");

closeBtn.on("click", function(){
   var modalID= $(this).attr("data-project");
   $("#" + modalID).attr("class", "modal d-none");
})

var portfolioImage = $(".portfolio-image");

portfolioImage.on("click", function() {
    var modalOpenID = $(this).attr("data-project");
    $("#" + modalOpenID).attr("class", "modal d-block");
})

var closeBottom = $(".closeBtn");

closeBottom.on("click", function() {
    var modalID= $(this).attr("data-project");
   $("#" + modalID).attr("class", "modal d-none");
})

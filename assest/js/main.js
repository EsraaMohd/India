$(document).ready(function () {
    $("ul.dropdown li").hover(function () {
        $(this).find(".subList").slideDown(300);
    }, function () {
        $(this).find(".subList").slideUp(300);
    });

    $("ul.dropdown li").hover(function () {
        $(this).find(".subForm").slideDown(300);
    }, function () {
        $(this).find(".subForm").slideUp(300);
    });

    //select operator
    function displayListFunction(){

        document.getElementsByClassName("list").setAttribute('style', 'display:block');
    }
    $(document).click(function(){
        $(".dropdown-menu").hide();
      });
      
      /* Clicks within the dropdown won't make
         it past the dropdown itself */
      $(".dropdown-menu").click(function(e){
        e.stopPropagation();
      });

    
});
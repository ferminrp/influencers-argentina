url = "https://influencersargentina.xyz/values.json"

console.log(url);

 //connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    //var obj = data.feed.entry;
    var obj = data;
    $(obj).each(function(){
      // breaking out columns to more easily interpret
      var followers = parseInt(this.Followers);
      var engagement = parseFloat(this["Engagement Rate"]);
      if (engagement > 10) {
        var entry = '<tr class="selectable eng10 eng5 eng3 eng1">';
      }
      else if (engagement > 5) {
        var entry = '<tr class="selectable eng5 eng3 eng1">';
      }
      else if (engagement > 3) {
        var entry = '<tr class="selectable eng3 eng1">';
      }
      else if (engagement > 1) {
        var entry = '<tr class="selectable eng1">';
      }
      else {
        var entry = '<tr class="selectable">';
      }
      //$("#filterable tr").not(".eng3").css("display","none");


      entry+= '<td>'+this.Nombre+'</td>';
      entry+= '<td><a target="_blank" href="'+ this.Cuenta +'">'+'<i class="fas fa-external-link-alt"></i> '+this.Username+'</a></td>';
      entry+='<td>'+this.Followers+'</td>';
      entry+='<td>'+this["Engagement Rate"]+'</td>';
      entry+='</tr>';
      $('#filterable').append(entry);
   });
  });

  $(document).ready(function() {
      $('*[data-href]').on('click', function() {
        console.log($(this).data("href"))
           window.location = ($(this).data("href"));
      });
  });


  /**
   * Disable right-click of mouse, F12 key, and save key combinations on page
   * By Arthur Gareginyan (arthurgareginyan@gmail.com)
   * For full source code, visit https://mycyberuniverse.com
*/

 window.onload = function() {
   document.addEventListener("contextmenu", function(e){
     e.preventDefault();
   }, false);
   document.addEventListener("keydown", function(e) {
   //document.onkeydown = function(e) {
     // "I" key
     if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
       disabledEvent(e);
     }
     // "J" key
     if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
       disabledEvent(e);
     }
     // "C" key
     if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
       disabledEvent(e);
     }
     if (e.ctrlKey && e.keyCode == 67) {
       disabledEvent(e);
     }

     // "S" key + macOS
     if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
       disabledEvent(e);
     }
     // "U" key
     if (e.ctrlKey && e.keyCode == 85) {
       disabledEvent(e);
     }
     // "F12" key
     if (event.keyCode == 123) {
       disabledEvent(e);
     }
   }, false);
   function disabledEvent(e){
     if (e.stopPropagation){
       e.stopPropagation();
     } else if (window.event){
       window.event.cancelBubble = true;
     }
     e.preventDefault();
     return false;
   }
 };

// Function that powers the search filter

 $(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#filterable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});





function eng1() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".eng1").addClass("hidden");
}

function eng3() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".eng3").addClass("hidden");
}

function eng5() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".eng5").addClass("hidden");
}

function eng10() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".eng10").addClass("hidden");
}

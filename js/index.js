url = "https://api.sheety.co/1c1a4fd6-5f9d-47ee-94df-fad4d21ca619"

console.log(url);

 //connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    //var obj = data.feed.entry;
    var obj = data;
    $(obj).each(function(){
      // breaking out columns to more easily interpret
      var followers = parseInt(this.followers.replace(',','').replace(',',''));
      //console.log(followers);
      var engagement = parseFloat(this.engagementRate);
      var classes = "";


      if (engagement > 10) {
        classes += 'eng10 eng5 eng3 eng1';
      }
      else if (engagement > 5) {
        classes += 'eng5 eng3 eng1';
      }
      else if (engagement > 3) {
        classes += 'eng3 eng1';
      }
      else if (engagement > 1) {
        classes += 'eng1';
      }

      if (followers > 1000000) {
        classes += ' millon'
      }
      else if (followers > 750000 && followers < 1000000) {
        classes += ' 750-1000';
      }
      else if (followers > 500000 && followers < 750000) {
        classes += ' 500-750';
      }
      else if (followers > 300000 && followers < 500000) {
        classes += ' 300-500';
      }
      else if (followers > 100000 && followers < 300000) {
        classes += ' 100-300';
      }
      else if (followers < 100000) {
        classes += ' 100';
      }

      var entry = '<tr class="selectable '+classes+'">';
      entry+= '<td>'+this.nombre+'</td>';
      entry+= '<td><a target="_blank" href="'+ this.cuenta +'">'+'<i class="fas fa-external-link-alt"></i> '+this.username+'</a></td>';
      entry+='<td>'+this.followers+'</td>';
      entry+='<td>'+this["engagementRate"]+'</td>';
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

function mill() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".millon").addClass("hidden");
}

function up750() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".750-1000").addClass("hidden");
}

function up500() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".500-750").addClass("hidden");
}

function up300() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".300-500").addClass("hidden");
}

function up100() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".100-300").addClass("hidden");
}
function down100() {
  $("#filterable tr").removeClass("hidden");
  $("#filterable tr").not(".100").addClass("hidden");
}

var darkMode = false;

$( "#darkmode" ).click(function() {
  if (darkMode === false) {
    darkMode = true;
    $("body").css("background-color","#2F3437");
    $("#results-table").css("color","white");
    $("h2").css("color","white");
    $("#darkmode").html('<i class="fas fa-sun"></i>');
  }
  else {
    darkMode = false;
    $("body").css("background-color","white");
    $("#results-table").css("color","black");
    $("h2").css("color","black");
    $("#darkmode").html('<i class="fas fa-moon"></i>');
  }

});

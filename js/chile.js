// ID of the Google Spreadsheet
 var spreadsheetID = "1RQvxaaJp_SwzxkSu3Ay12qBGBlIp3MPRPCGr4_aSmW8";

// Make sure it is public or set to Anyone with link can view
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/2/public/values?alt=json";

console.log(url);

 //connecting to spreadsheet and then parsing the data
  $.getJSON(url, function(data) {
    var obj = data.feed.entry;
    $(obj).each(function(){
      // breaking out columns to more easily interpret

      var entry = '<tr id="selectable">'
      entry+= '<td>'+this.gsx$nombre.$t+'</td>';
      entry+= '<td><a target="_blank" href="'+ this.gsx$cuenta.$t +'">'+'<i class="fas fa-external-link-alt"></i> '+this.gsx$username.$t+'</a></td>';
      entry+='<td>'+this.gsx$followers.$t+'</td>';
      entry+='<td>'+this.gsx$engagementrate.$t+'</td>';
      entry+='</tr>';
      $('#results-table tr:last').after(entry);
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

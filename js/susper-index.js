 var suggestMatcher = function() {
       return function opensearch(q, cb) {
         $.getJSON(suggestUrl + "&q="+ q, function(data) {
            var parsed = [];
            for (var i = 0; i < data[0][1].length; i++) {
                var row = data[0][1][i];
                if (row) {
                    parsed[parsed.length] = {
                        data: [row],
                        value: row,
                        result: row
                    };
                };
            };
            cb(parsed);
          });
        };
      };
    $(document).ready(function() {
      $('#search').typeahead({hint:false,highlight:true,minLength:1}, {
      name: 'states',
      displayKey: 'value',
      source: suggestMatcher()
      });
    });
//modify content according to query url attributes 
document.getElementById("title").appendChild(document.createTextNode(headline));
document.getElementById("topmenu").appendChild(document.createTextNode(headline));
document.getElementById("greeting").appendChild(document.createTextNode(greeting));
document.getElementById("navbar-homepage").setAttribute("href", homepage);
document.getElementById("homepage").setAttribute("href", homepage);
document.getElementById("logo").setAttribute("src", logo.replace("../",""));
document.getElementById("biglogo").setAttribute("src", logo.replace("../",""));
document.getElementById("search").setAttribute("placeholder", queryplaceholder);
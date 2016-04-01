$(window).load(function(){
  var xmlhttp = new XMLHttpRequest();
    var url = "css/test.txt";

    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            myFunction(myArr);

            console.log("xmlhttp Request Asepted");
        }


    }

        xmlhttp.open("GET", url, true);
        xmlhttp.send();


        function myFunction(arr) {
            var out = "";
            var i;
            var row = 0;

        for(i = 0; i < arr.length; i++) {
           // console.log( arr[1].data); change data to what every you have in  your file
           // out +=  arr[i].data + '<br>' + arr[i].data2 ;
            document.getElementById("div1").innerHTML = out;

        }

    }
});//]]> 

 
function loadHTML(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.write(allText);
            }
        }
    }
    rawFile.send(null);
}

// parameter 값 가져오는 코드 
function getParam(sname) {

    var idx = location.search.indexOf("?");
    
    if(idx == -1){
        return "pages/main.html";
    }

    var params = location.search.substr(location.search.indexOf("?") + 1);
    
    var sval = "";
    params = params.split("&");

    for (var i = 0; i < params.length; i++) {    
        temp = params[i].split("=");

        if ([temp[0]] == sname) 
        { 
            sval = temp[1]; 
        }
    }

    return "pages/" + sval + ".html";
}

function getParamForFlow(sname){
    var params = location.search.substr(location.search.indexOf("?") + 1);
    
    var sval = "";
    params = params.split("&");

    for (var i = 0; i < params.length; i++) {    
        temp = params[i].split("=");

        if ([temp[0]] == sname) 
        { 
            sval = temp[1]; 
        }
    }

    return sval;
}
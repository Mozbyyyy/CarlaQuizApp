function getinputvalue(){
    var finalresult;
     var firstnum = document.getElementById("result").value;
     var secondnum = document.getElementById("result2").value;
     var convertfirstnum = parseInt(firstnum);
     var convertsecondnum = parseInt(secondnum)
    
    var operation = document.getElementById("operation_one").value;
    if(operation == "+"){
        finalresult = convertfirstnum + convertsecondnum;
    }
    else if(operation == "-"){
        finalresult = convertfirstnum - convertsecondnum;
    }
    else if(operation == "*"){
        finalresult = convertfirstnum * convertsecondnum;
    }
    else{
        finalresult = convertfirstnum / convertsecondnum;
    }
    document.getElementById("presult").innerHTML = finalresult;
    
    }
    
    
    
    
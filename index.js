const cal = () =>{
    const weigth = document.getElementById("Weight").value;
    document.getElementById("Weight").value="";
    if(weigth==""){
        alert("Enter weigth vaule");
        return;
    }
    let pound = weigth*2.2046;
    document.getElementById("output").innerHTML="Value of "+weigth+" is "+pound;
    //console.log(weigth,pound)
}

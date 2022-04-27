var a;

function toggle(){
    if(a==1){
        document.getElementById("menu").style.display = "none";
        document.getElementById("open").style.display = "block";
        document.getElementById("close").style.display = "none";
        return a=0;
    }else{
        document.getElementById("menu").style.display = "block";
        document.getElementById("open").style.display = "none";
        document.getElementById("close").style.display = "block";
        return a=1;
        
    }

}
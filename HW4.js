function showProperties(element){
    document.getElementById('message').innerHTML = element.alt;
    if(element.alt=='Cat'){
        document.getElementById('message').style.backgroundImage="url('Cat.PNG')";
    }
    else if(element.alt=='Happy-dog'){
        document.getElementById('message').style.backgroundImage="url('Happy-dog.PNG')"; 
    }
    else if(element.alt=='Eating-rabbit'){
        document.getElementById('message').style.backgroundImage="url('Eating-rabbit.PNG')"; 
    }
}

function showMyPicture(){
    document.getElementById('message').style.backgroundImage = "url('myPic.PNG')";
    document.getElementById('message').innerHTML ="Hover over an image";
}

function closeMe(){
    x=document.getElementById("message");
    x.className="closed";
}

function openMe(){
    x=document.getElementById("message");
    x.className="open";
}

function closeClass(){
    x=document.getElementById("message");
    x.className="closed";
}

function openClass(){
    x=document.getElementById("message");
    x.style.backgroundImage="url('課表.PNG')";
    document.getElementById('message').innerHTML = "課表";
    x.className="open";
}
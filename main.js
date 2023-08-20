function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/a2siF4stT/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
  if(error){
    console.error(error);
  }
  else{
    console.log(results)
    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear you- '+ results[0].label;
    document.getElementById("result_label").style.color = "rgb(" +random_number_r+","+random_number_g+","+random_number_b+")";

    if(results[0].label == "Barking Dog"){
        img.src='853506.png';
    }
    else if(results[0].label == "Meowing Cat"){
        img.src='istockphoto-1317495176-612x612.jpg';
    }
    else if(results[0].label == "Mooing Cow"){
        img.src='cute-cow-cartoon-clipart-png.webp';
    }
    else if(results[0].label == "Roaring Loin"){
        img.src='download.png';
    }
  }
}
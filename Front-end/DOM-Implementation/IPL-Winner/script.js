var box  = document.querySelector('#box');
var btn = document.querySelector('button');
var h2 = document.querySelector('h2');

const iplTeams = [
    { name: "Mumbai Indians", primaryColor: "#004BA0", secondaryColor: "#FFFFFF" },
    { name: "Chennai Super Kings", primaryColor: "#F7C026", secondaryColor: "#1B4D3E" },
    { name: "Royal Challengers Bangalore", primaryColor: "#A60D2B", secondaryColor: "#000000" },
    { name: "Kolkata Knight Riders", primaryColor: "#3A225D", secondaryColor: "#D4AF37" },
    { name: "Delhi Capitals", primaryColor: "#17449B", secondaryColor: "#E4252A" },
    { name: "Sunrisers Hyderabad", primaryColor: "#F26522", secondaryColor: "#000000" },
    { name: "Rajasthan Royals", primaryColor: "#254AA5", secondaryColor: "#E09B3D" },
    { name: "Punjab Kings", primaryColor: "#D20031", secondaryColor: "#FFFFFF" },
    { name: "Lucknow Super Giants", primaryColor: "#00A3E0", secondaryColor: "#FF8200" },
    { name: "Gujarat Titans", primaryColor: "#1C1C1C", secondaryColor: "#FFFFFF" }
];

btn.addEventListener('click', function(){
    var random = Math.floor(Math.random()*iplTeams.length);
    h2.innerText = `${iplTeams[random].name}`;
    h2.style.color = `${iplTeams[random].primaryColor}`;
    box.style.backgroundColor = `${iplTeams[random].secondaryColor}`;
});

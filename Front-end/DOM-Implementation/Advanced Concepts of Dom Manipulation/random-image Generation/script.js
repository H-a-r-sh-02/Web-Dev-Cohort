let btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let image = document.createElement('img'); 
    let x = Math.random()*90;
    let y = Math.random()*90;
    let rta = Math.random()*360;
    let images = [
        "./Source/facebook.png",
        "./Source/Heart Eyes Emoji.png",
        "./Source/in-love.png",
        "./Source/Pink Heart With Ribbon Emoji.png",
        "./Source/Two Pink Hearts Emoji.png",
        "./Source/Cat.png",
        "./Source/smiley.png",
        "./Source/Heart-Exclamation.png",
        "./Source/proud.png",
        "./Source/Hand-Over-Mouth.png",
        "./Source/Face-With-Tears.png",
        "./Source/emoji.png",
    ];
    let randomImage = Math.floor(Math.random()*images.length);
    console.log(randomImage)
    image.setAttribute('src',images[randomImage]);
    image.setAttribute('class','image');
    image.style.left = `${x}%`;
    image.style.top = `${y}%`;
    image.style.rotate = `${rta}deg`;

    document.body.appendChild(image);
});
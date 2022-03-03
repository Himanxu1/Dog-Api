let btn = document.getElementById('btn');
let image = document.getElementById('image');

let i=0;
btn.addEventListener('click',function(){
    fetch(" https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(result => {
     
        image.src = result.data.memes[i].url;
        i++;
    })
    .catch(err => console.log(err))
})
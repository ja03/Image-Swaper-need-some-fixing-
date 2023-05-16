const imgs= document.querySelectorAll("img")
imgs1 = Array.from(imgs)
for(let i =1 ; i<imgs1.length; i++){
    imgs1[i].addEventListener("click", function(){
        swap(this)
    })
}
function swap(img){
    var temp = img.src
    img.src= imgs1[0].src
    imgs1[0].src=temp
}

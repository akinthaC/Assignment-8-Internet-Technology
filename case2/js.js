var element =document.getElementsByTagName("div")
let arr =[]

document.getElementById("randomColor").addEventListener("click", function () {

    for (let i = 0; i <element.length; i++) {

        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        let randomColor1 = `rgb(${r}, ${g}, ${b})`;

        document.getElementsByTagName("div")[i].style.backgroundColor = randomColor1;
        arr[i]=randomColor1;

    }
})


setInterval(()=>{
    let lastIndex=arr.pop();
    arr.unshift(lastIndex);
    console.log(arr)

    for (let j = 0; j <arr.length; j++) {
        document.getElementsByTagName("div")[j].style.backgroundColor=arr[j];

    }

},3000)

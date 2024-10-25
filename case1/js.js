var element =document.getElementsByTagName("h2")
let arr =[]
var myInterval


for (let i = 0; i <element.length; i++) {
    var item=element[i];
    arr[i]=item.innerText;

}
document.getElementById("start").addEventListener("click", function () {
    myInterval = setInterval(() => {
        let lastIndex = arr.pop();
        arr.unshift(lastIndex);
        console.log(arr)

        for (let j = 0; j < arr.length; j++) {
            document.getElementsByTagName("h2")[j].innerText = arr[j];

        }

    }, 3000)
})



document.getElementById("end").addEventListener("click", function () {
    clearInterval(myInterval);

})
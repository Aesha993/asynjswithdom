const DEMO_URL="https://course-api.com/react-store-products"

function fetchData(DEMO_URL, callback){

 fetch(DEMO_URL).then((response) =>{
    
    return response.json()
}).then((data)=>{
    callback(data)
}).catch((error)=>{
    console.log("Error occured", error)
})
}

function handleData(data){
   

console.log(data[0]["name"])
heading2 = document.getElementById("heading2")
heading2.innerHTML = data[0]["name"]

console.log(data[0]["price"])
heading3 = document.getElementById("heading3")
heading3.innerHTML = data[0]["price"]

console.log(data[0]["id"])
abc = document.getElementById("abc")
abc.innerHTML = data[0]["id"]

console.log(data[0]["company"])
heading1 = document.getElementById("heading1")
heading1.innerHTML = data[0]["company"]

console.log(data[0]["description"])
xyz = document.getElementById("xyz")
xyz.innerHTML = data[0]["description"]

console.log(data[0]["category"])
conatin = document.getElementById("contain")
conatin.innerHTML = data[0]["category"]

console.log(data[0]["image"])
get = document.getElementById("get")
get.innerHTML = data[0]["image"]

console.log(data[0]["colors"])
head = document.getElementById("head")
head.innerHTML = data[0]["colors"]




}

fetchData(DEMO_URL, handleData)

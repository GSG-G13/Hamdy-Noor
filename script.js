let textContent =document.querySelector(".inpUserValue");
let descrption =document.querySelector(".descrption");
let bottomClick =document.querySelector(".sub");
let showingSpace =document.querySelector(".showResult");
let deletAll =document.querySelector(".delAll");
//creat list by local
function createList(valueArray,desValue,timeValue){

    //Box 
    let newBox = document.createElement("div");
    newBox.className="parentBox";
    //text content
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = valueArray;
 
    //descrption content
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = desValue;
    
    //get date
    let par = document.createElement("p");
    par.innerText=timeValue;

    //delete content
    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";
    //done 
    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    //edit
    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";

 
    //append 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);
    
}
// get values if exist and create elements
 if(localStorage.getItem("tpDoList")){
    let doArray = localStorage.getItem("tpDoList");
    doArray =JSON.parse(doArray);
    console.log(doArray);
    doArray.forEach((b)=>{
        console.log(b.title);
        console.log(b.desc);
        console.log(b.time);
        createList(b.title,b.desc,b.time)  ;
    })

  }

bottomClick.addEventListener("click",()=>{

    //Box 
    let newBox = document.createElement("div");
    newBox.className="parentBox";
    //text content
    let inputBtn = document.createElement("input");
    inputBtn.className="inputBtn";
    inputBtn.setAttribute('disabled', true);
    inputBtn.value = textContent.value;

    
    //descrption content
    let desBtn = document.createElement("input");
    desBtn.className="inputBtn";
    desBtn.setAttribute('disabled', true);
    desBtn.value = descrption.value;
    
    
    //get date
    let par = document.createElement("p");
    par.innerText=new Date();

    //delete content
    let deletBtn = document.createElement("button");
    deletBtn.className="delete";
    deletBtn.textContent="delete";
    //done 
    let doneBtn = document.createElement("button");
    doneBtn.className="done";
    doneBtn.textContent="done";

    //edit
    let editBtn = document.createElement("button");
    editBtn.className="edit";
    editBtn.textContent="edit";

 
    //append 
    newBox.appendChild(inputBtn);
    newBox.appendChild(desBtn);
    newBox.appendChild(deletBtn);
    newBox.appendChild(editBtn);
    newBox.appendChild(doneBtn);
    newBox.appendChild(par);
    showingSpace.appendChild(newBox);
    
    //to empty text
    textContent.value="";
    getArray();
})
document.addEventListener("click",(e)=>{
        if (e.target.className == "delete"){
            e.target.parentElement.remove(); 
        }
        if (e.target.className == "delAll"){
            showingSpace.innerHTML="";
        }
        if (e.target.className == "edit"){
            e.target.parentElement.firstChild.removeAttribute("disabled");
        }
        if (e.target.className == "done"){
            e.target.parentElement.firstChild.setAttribute('disabled', true);
    
        }
    })


    function getArray(){
         //set values in array
    let boxes = Array.from(document.querySelectorAll(".parentBox"))
    console.log("hello")
    console.log(boxes)

    let boxesArray =[];
    boxes.forEach((box)=>{
     boxesArray.push({"title": box.firstChild.value, "time":box.lastChild.innerText, "desc":box.childNodes[1].value });
    })
    localStorage.setItem("tpDoList",JSON.stringify(boxesArray));
    }
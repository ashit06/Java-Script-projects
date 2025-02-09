let boxes=document.querySelectorAll(".box");
let reset_button=document.getElementById("reset");
let toggle=document.getElementById("toggle");
let body=document.querySelector("body");
let h1=document.querySelector("h1");
let message=document.querySelector(".message")
let turn="0";
const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.textContent!="") return;
        box.textContent=turn;
        if(turn=="0") turn='X';
        else turn='0';
        checkwin();
    })
});
const checkwin = () => {
    for (let pattern of winpattern) {
        if (
            boxes[pattern[0]].textContent !== "" &&
            boxes[pattern[0]].textContent === boxes[pattern[1]].textContent &&
            boxes[pattern[1]].textContent === boxes[pattern[2]].textContent
        ) {
            console.log("Winner: " + boxes[pattern[0]].textContent);
            boxes.forEach((box)=>{
                    box.disabled=true;
            });
            showwinner(boxes[pattern[0]].textContent);
            return;
        }
    }
};
toggle.addEventListener("click",()=>{
    if(toggle.textContent=="Light"){
        toggle.textContent="Dark";
        body.classList.add("darkbody");
        body.classList.remove("body");
        boxes.forEach((box)=>{
            box.classList.add("darkbox");
            box.classList.remove("box");
        });
        toggle.classList.add("darkreset");
        toggle.classList.remove("reset");
        reset_button.classList.add("darkreset");
        reset_button.classList.remove("reset");
        h1.classList.add("darkh1");
        message.classList.add("darkmessage");
        message.classList.remove("message");
    }
    else{
        toggle.textContent="Light";
        body.classList.add("body");
        body.classList.remove("darkbody");
        boxes.forEach((box)=>{
            box.classList.add("box");
            box.classList.remove("darkbox");
        });
        toggle.classList.add("reset");
        toggle.classList.remove("darkreset");
        reset_button.classList.add("reset");
        reset_button.classList.remove("darkreset");
        h1.classList.remove("darkh1");
        message.classList.add("message");
        message.classList.remove("darkmessage");

        
    }
});
reset_button.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.textContent="";
        box.disabled=false;
        message.classList.add("hide");
    })
});

function showwinner(pos){
    
    message.innerText=`Congratulations winner is ${pos}`;
    message.classList.remove("hide");
}

const dragItem = Array.from(document.querySelectorAll("img"));  
const pGdiv = Array.from(document.querySelectorAll(".pGDiv"));
const player1 = Array.from(document.querySelectorAll(".player1"));
const player2 = Array.from(document.querySelectorAll(".player2"));
const player1Turn = document.querySelector("#player1");
const player2Turn = document.querySelector("#player2")

let dragItem2;
let dragoverElement,dragElement;
let turn = true;
let wincondition =[
    [3,4,5],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [2,5,8]
]

const changeColor = (v)=>{
    let classChanger = "change-color";
    pGdiv[v[0]].classList.add(classChanger);
    pGdiv[v[1]].classList.add(classChanger);
    pGdiv[v[2]].classList.add(classChanger);
}
const drop2 = (e)=>{
    e.target.append(dragItem2);
                e.preventDefault();
                turnfunction();
                checkWinner();
}
    

const checkWinner = ()=>{
  wincondition.forEach(
    (v)=>{
        let child1 = pGdiv[v[0]].children;
        let child2 = pGdiv[v[1]].children;
        let child3 = pGdiv[v[2]].children;
        
        if(child1.length > 0 && child2.length > 0 && child3.length){
            if(child1[0].classList.contains("player1") && child2[0].classList.contains("player1") && child3[0].classList.contains("player1")){
                console.log("Player1 Win");
                changeColor(v);
            }
            else if(child1[0].classList.contains("player2") && child2[0].classList.contains("player2") && child3[0].classList.contains("player2")){
                console.log("Player2 Win");
                changeColor(v);
            }

        }
        if(pGdiv[6].children.length>0 && pGdiv[7].children.length>0&& pGdiv[8].children.length>0){
            if(pGdiv[6].children[0].classList.contains("player1")&&pGdiv[6].children[0].classList.contains("player1")&&pGdiv[8].children[0].classList.contains("player1")){
                console.log("Player1 Win");
                pGdiv[6].classList.add("change-color");
                pGdiv[7].classList.add("change-color");
                pGdiv[8].classList.add("change-color");
            }
          
        }
        if(pGdiv[0].children.length>0 && pGdiv[1].children.length>0&& pGdiv[2].children.length>0){
            if(pGdiv[0].children[0].classList.contains("player2")&&pGdiv[1].children[0].classList.contains("player2")&&pGdiv[2].children[0].classList.contains("player2")){
                console.log("Player2 Win");
                pGdiv[0].classList.add("change-color");
                pGdiv[1].classList.add("change-color");
                pGdiv[2].classList.add("change-color");
            }
         
        }
    
    }
  )
}

const turnfunction = ()=>{
    if(turn){
        player1.forEach(
            (v)=>{
                v.setAttribute("draggable","false");
                
            }
        )
        player2.forEach(
            (v)=>{
                v.setAttribute("draggable","true");
                
            }
        )
            player2Turn.classList.add("change-color");
            if(player1Turn.classList.contains("change-color")){
                player1Turn.classList.remove("change-color");
            }
        turn = false;
    }
    else{
        player2.forEach(
            (v)=>{
                v.setAttribute("draggable","false");
                
            }
        )
        player1.forEach(
            (v)=>{
                v.setAttribute("draggable","true");
                
            }
        )
        player1Turn.classList.add("change-color");
        if(player2Turn.classList.contains("change-color")){
            player2Turn.classList.remove("change-color");
        }
        turn = true;
    }
}

const dragStart = (e)=>{

    dragItem2 = e.target;
    setTimeout(() => (dragItem2.className += ' hidden'), 0);

    dragElement = pGdiv.indexOf(e.target.parentElement);
    console.log(dragElement);

}

const dragend = (e)=>{
        e.preventDefault();
    e.target.classList.remove("hidden");
  
}

const dragover = (e)=>{

    e.preventDefault();
  
}



const drop = (e)=>{


if(e.target.children.length === 0 &&( e.target.classList.contains("player1") == false && e.target.classList.contains("player2")== false)){
    console.log("run");
    switch(dragElement){
        case 0:
            if(pGdiv.indexOf(e.target)==3||pGdiv.indexOf(e.target)==4||pGdiv.indexOf(e.target)==1){
            drop2(e);
                
            }
        break;
        case 1:
            if(pGdiv.indexOf(e.target)==0||pGdiv.indexOf(e.target)==2||pGdiv.indexOf(e.target)==4){
            drop2(e);
                
            }
        break;
        case 2:
            if(pGdiv.indexOf(e.target)==4||pGdiv.indexOf(e.target)==5||pGdiv.indexOf(e.target)==1){
            drop2(e);
                
            }
        break;
        case 3:
            if(pGdiv.indexOf(e.target)==0||pGdiv.indexOf(e.target)==6||pGdiv.indexOf(e.target)==4){
            drop2(e);
                
            }
        break;
        case 4:
            if(true){
            drop2(e);
                
            }
        break;
        case 5:
            if(pGdiv.indexOf(e.target)==8||pGdiv.indexOf(e.target)==2||pGdiv.indexOf(e.target)==4){
            drop2(e);
                
            }
        break;
        case 6:
            if(pGdiv.indexOf(e.target)==3||pGdiv.indexOf(e.target)==7||pGdiv.indexOf(e.target)==4){
            drop2(e);
                
            }
        break;
        case 7:
            if(pGdiv.indexOf(e.target)==6||pGdiv.indexOf(e.target)==8||pGdiv.indexOf(e.target)==4){
            drop2(e);
                
            }
        break;
        case 8:
            if(pGdiv.indexOf(e.target)==7||pGdiv.indexOf(e.target)==5||pGdiv.indexOf(e.target)==4){
            drop2(e);
                
            }
        break;
       
        
    }


}



}

const dragenter = (e)=>{

    e.preventDefault();
    dragoverElement = e.target;
  
}


pGdiv.forEach(
    (v)=>{
       
        v.addEventListener("dragover",dragover);
        v.addEventListener("dragenter",dragenter);

        v.addEventListener("drop",drop);
    }
)
dragItem.forEach(
    (dragItem)=>{
        dragItem.addEventListener("dragstart",dragStart);
        dragItem.addEventListener("dragend",dragend);
    }
)

turnfunction();


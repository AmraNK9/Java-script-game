const dragItem = Array.from(document.querySelectorAll("img"));  
const pGdiv = Array.from(document.querySelectorAll(".pGDiv"));
const player1 = Array.from(document.querySelectorAll(".player1"));
const player2 = Array.from(document.querySelectorAll(".player2"));

let dragItem2;
let dragoverElement;
let turn = true;
let wincondition =[
    [3,4,5],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [2,5,8]
]
    
console.log(pGdiv[3].children.length)
const checkWinner = ()=>{
  wincondition.forEach(
    (v)=>{
        let child1 = pGdiv[v[0]].children;
        let child2 = pGdiv[v[1]].children;
        let child3 = pGdiv[v[2]].children;
        
        if(child1.length > 0 && child2.length > 0 && child3.length){

            console.log('this is run');
            console.log(child1[0].classList.contains("player1") );
            console.log(child2[0].classList.contains("player1") );
            console.log(child3[0].classList.contains("player1") );
            if(child1[0].classList.contains("player1") && child2[0].classList.contains("player1") && child3[0].classList.contains("player1")){
                console.log("Player1 Win")
            }
            else if(child1[0].classList.contains("player2") && child2[0].classList.contains("player2") && child3[0].classList.contains("player2")){
                console.log("Player2 Win")
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
        turn = true;
    }
}

const dragStart = (e)=>{

    dragItem2 = e.target;
    setTimeout(() => (dragItem2.className += ' hidden'), 0);


}



const dragend = (e)=>{
        e.preventDefault();
    e.target.classList.remove("hidden");
  
}

const dragover = (e)=>{

    e.preventDefault();
  
}



const drop = (e)=>{


  e.target.append(dragItem2);
e.preventDefault();
turnfunction();
checkWinner();

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
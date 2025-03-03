// let draggedElement = null;

// document.querySelectorAll(".image").forEach((div) => {
//   div.addEventListener("dragstart", (e) => {
//     draggedElement = e.target;
//   });

//   div.addEventListener("dragover", (e) => {
//     e.preventDefault();
//   });

//   div.addEventListener("drop", (e) => {
//     e.preventDefault();
    
//     // Simple swap logic
//     if (draggedElement && draggedElement !== e.target) {
//       let temp = document.createElement("div"); // Temporary placeholder
//       e.target.replaceWith(temp);
//       draggedElement.replaceWith(e.target);
//       temp.replaceWith(draggedElement);
//     }
    
//     draggedElement = null;
//   });
// });


let dragElement=null;

document.querySelectorAll(".image").forEach((div)=>{
	div.addEventListener('dragstart', (e)=> {
		dragElement = e.target;
	})

	div.addEventListener('dragover', (e)=> {
		e.preventDefault();
	})

	div.addEventListener('drop', (e)=> {
		e.preventDefault();
		if(dragElement && dragElement !== e.target){
			let temp = document.createElement("div");
		    e.target.replaceWith(temp);
		    dragElement.replaceWith(e.target);
		    temp.replaceWith(dragElement);
		}
		dragElement=null;
	})
})


const modal = document.querySelector(".modal__questio");
const closeBtn=document.querySelector('.btn');
const answerElemnt = document.querySelector(".modal__answer");




modal.addEventListener('click', function(){
  // console.log('clicked');
  answerElemnt.style.display='flex'
})

closeBtn.addEventListener('click',function(){
answerElemnt.style.display='none'
})

// window.addEventListener('click', function(event){

//   if(event.target === answerElemnt) {
//     answerElemnt.style.display = "none";
//   }

// })


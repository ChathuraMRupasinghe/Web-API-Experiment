const cursorElm = document.getElementById('cursor');
let tmrID = null;
addEventListener('mousemove', (eventData)=>{
    if(tmrID != null){
        clearTimeout(tmrID);
        tmrID = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrID = setTimeout(()=>{
        cursorElm.style.opacity = 0;
    },2000);
    // console.log(eventData.screenX, eventData.screenY)
    // console.log(eventData.pageX, eventData.pageY)
});

document.body.addEventListener('mouseleave', ()=>{
    cursorElm.style.opacity = 0;

})
document.body.addEventListener('mouseenter', ()=>{
    cursorElm.style.opacity = 1;
})

//     setTimeout(()=>{
//         document.body.addEventListener('!mousemove', ()=>{
//         cursorElm.style.opacity = 0;
//     })
    
// },4000);
// document.body.addEventListener('mousemove', ()=>{
//     setTimeout(()=>{
//         cursorElm.style.opacity = 1;
//     },1500)
    
// })



// let x=0;

// const tmrid1 = setInterval(()=>{
//     console.log('print this..'+ x++);
// },500);

// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click', ()=> clearInterval(tmrid1))


// const tmrid1 = setTimeout(()=>{
//     console.log('bombe dooooon ..');
// },3500);

// const btnStopTimer1 = document.querySelector('#btnStopTimer1');
// btnStopTimer1.addEventListener('click',
//  ()=> {clearTimeout(tmrid1);
//  console.log('Nishkriya karaaa')
// });


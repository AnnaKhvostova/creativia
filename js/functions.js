function contactUs(btn,form,closeBtn){
    btn.addEventListener('click',()=>{
        form.classList.remove('display');
    });
closeBtn.addEventListener('click',()=>{
    form.classList.add('display');
})
}
// ---------about creativia------------------------------------------
function openTextInfo(parentElem, classBtnOpen,classBtnClose,classTextInfo){
const[...children]  = parentElem.children;

for(let li of children){
 
    const [...nodes]=li.children;

if(nodes.length>1){
const openBtn = li.querySelector(classBtnOpen);
const closeBtn = li.querySelector(classBtnClose);
const text =li.querySelector(classTextInfo);

openBtn.addEventListener('click',()=>{
    text.classList.toggle('display');
    openBtn.classList.toggle('display');
    closeBtn.classList.toggle('display');
})
closeBtn.addEventListener('click',()=>{
    text.classList.toggle('display');
    openBtn.classList.toggle('display');
    closeBtn.classList.toggle('display');
}
) 
}
}
}
// -----------our blog------------------------------------------------

function openBlogItems(parentElem,showBtnSelector, hideBtnSelector){
    const[...children]  = parentElem.children;
let index;
let length =children.length;
const showBtn = document.querySelector(showBtnSelector);
const hideBtn =document.querySelector(hideBtnSelector);
console.log(showBtn);

    showBtn.addEventListener('click',()=>{
 for(let li of children){
    if(li.matches('.display')){
        console.log(li.matches('.display'));
         console.log(li);
        li.classList.remove('display');
        index=children.indexOf(li);
        console.log(index);
        hideBtn.classList.remove('display');

        if(index===(length-1)){
            console.log('im here');
       showBtn.classList.add('display');}
     break;
    }
    }
    })


 hideBtn.addEventListener('click',()=>{
children[index].classList.add('display');
if(index>2){
  index--;  
  showBtn.classList.remove('display');
}
else{
    hideBtn.classList.add('display');
}

    })
}
// -----------VievMore---------------------------------------------
function viewMore(parentElem,selectorBtn){
    const[...children]  = parentElem.children;
    for(let li of children){
       
        const buttonShowMore = li.querySelector(selectorBtn);
        const hidenText = li.querySelector('.display');
        buttonShowMore.addEventListener('click',()=>{
            hidenText.classList.toggle('display');
        });
    }

}

// -----------Poster Change text------------------------------------------------------
function changePosterText(textsArray, btnLeftSelector,btnRightSelector, changeTextSelector){
    let index=0;
    const btnLeft = document.querySelector(btnLeftSelector);
    const btnRight = document.querySelector(btnRightSelector);
    let text = document.querySelector(changeTextSelector);
    btnLeft.addEventListener('click',()=>{
        index--;
        if(index<0){
            index=textsArray.length-1;
        }
    
text.textContent = textsArray[index];
    })
    btnRight.addEventListener('click',()=>{
        index++;
        if(index>=textsArray.length){
            index=0;
        }
        text.textContent = textsArray[index];
    });

}
//class display = display none
// ---------------------------------------------------------
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click',()=>{
    nav.classList.toggle('hide');
})

// -------------------send form---------------------------------
const contactBtn = document.getElementById('contact_btn');
const form = document.getElementById('form');
const closeFormBtn = document.getElementById('close-form');

contactUs(contactBtn,form,closeFormBtn);

const creativiaTextInfo=document.getElementById('creativiaTextInfo');
// -------------------Our blog-----------------------------------------
const blogItems=document.getElementById('blogItems');
console.log(blogItems);
openBlogItems( blogItems,'.fa-arrow-circle-down','.fa-arrow-circle-up','.blog-content-items__btn');
viewMore(blogItems,'.blog-content-items__btn');
// --------------------------------------------------------------------

openTextInfo(creativiaTextInfo,'.fa-plus-circle','.fa-minus-circle','.menu__text-info');

// ---------------Poster change text---------------------------------------------------------------

const textes=['Creativia is a unique and creative one page PSD template with clean and modern design . It can be customized easily to suit your wishes. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quisquam corporis.','Nothing special, without Lorem Ipsum... tell me smth about u', 
'Create your life by yourself and move...move...move...','Again..' ];
changePosterText(textes,'.fa-arrow-left','.fa-arrow-right','.poster__text');
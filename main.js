//add my comment to the comments div
let com_section = document.querySelector('.comments');
let rep_section = document.querySelector('.replies');
let submit_btns = document.querySelectorAll('.submit-btn');
let text_areas = document.querySelectorAll('#my-comment'); 
//alert function;
let alert_heading = document.querySelector('.success-msg');
let alert = (text,action) => {
    alert_heading.textContent = text;
    alert_heading.style.visibility = `visible`
    alert_heading.classList.add(`${action}`);
    setTimeout(() => {
        alert_heading.textContent = text;
        alert_heading.style.visibility = `hidden`;
        alert_heading.classList.remove(`${action}`);
    },4000);
}
//function to add the comment
let addComment = (e) => {
    e.preventDefault();
    let comment = text_areas[0].value;
    let my_comment = document.createElement('section');
        my_comment.classList.add('comment');
        my_comment.innerHTML = `<div class="img-nm">
    <img src="avatars/image-juliusomo.webp" alt="">
    <label for="name" class="name">juliusomo</label>
                </div>
            <div class="para-comment">
                <p>
                    ${comment}
                </p>
            </div>
            <div class="btns-reply">
                <div class="btn-container">
                    <button class="btn add">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <span class="count"></span>
                    <button class="btn minus">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                </div>
                <div>
                    <button class="btn delete-btn reply-btn"><i class="fa-solid fa-trash-can"></i>    Delete</button>
                    <button class="btn reply-btn"><i class="fa-solid fa-reply"></i>    Reply</button>
                </div>
            </div>`
            com_section.appendChild(my_comment);
            //deal with delete btn
            let delete_btn = my_comment.querySelector('.delete-btn');
            delete_btn.addEventListener('click',() => {
                com_section.removeChild(my_comment);
                alert(`comment deleted`,`red`);
            });
            //if the comment is empty
            if (comment === '') {
                alert('please add comment');
                my_comment.style.display ='none';
                my_comment.style.visibility = 'hidden';
            }
            alert(`Comment posted`,`green`);
}
//function to show modal
let show_box = () => {
    modal.showModal();
}
//add eventlistener to the form
submit_btns[0].addEventListener('click',addComment);
submit_btns[1].addEventListener('click',(e) => {
    e.preventDefault();
    let reply = text_areas[1].value;
    let my_reply = document.createElement('section');
        my_reply.classList.add('comment');
        my_reply.innerHTML = `<div class="img-nm">
    <img src="avatars/image-juliusomo.webp" alt="">
    <label for="name" class="name">juliusomo</label>
                </div>
            <div class="para-comment">
                <p>
                    ${reply}
                </p>
            </div>
            <div class="btns-reply">
                <div class="btn-container">
                    <button class="btn add">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                    <span class="count"></span>
                    <button class="btn minus">
                        <i class="fa-solid fa-minus"></i>
                    </button>
                </div>
                <div>
                    <button class="btn delete-btn reply-btn"><i class="fa-solid fa-trash-can"></i>    Delete</button>
                    <button class="btn reply-btn"><i class="fa-solid fa-reply"></i>    Reply</button>
                </div>
            </div>`
            rep_section.appendChild(my_reply);
    
            //deal with delete btn
            let delete_btn = my_reply.querySelector('.delete-btn');
            delete_btn.addEventListener('click',() => {
                rep_section.removeChild(my_reply);
            });

            //if reply is empty
            if (reply === '') {
                alert('please add a reply');
                my_reply.style.display ='none';
                my_reply.style.visibility = 'hidden';
            }

            modal.close();
            alert(`reply posted`,`green`);
});
//deal with reply btn
let reply_btns = document.querySelectorAll('.reply-btn');
let modal = document.querySelector('.modal')
reply_btns.forEach((reply_btn) => {
    reply_btn.addEventListener('click',show_box);
});


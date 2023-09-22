window.addEventListener('DOMContentLoaded',()=>{

    const imgAll = document.querySelectorAll('img');
    imgAll.forEach(item=>{
        item.addEventListener('click',()=>{
            const text = document.querySelector('#text');
            text.innerText= ' ';
            //get the container and image from DOM
            const container = document.querySelector('#viewImage');
            const img = document.querySelector('#img');
            img.src = item.src;
            img.classList.add('img-fluid');
            container.appendChild(img);

        })
    });

});
let formOpen = document.querySelector('.add-track')

let body = document.querySelector('.body')

formOpen.addEventListener('click', () => {
    body.insertAdjacentHTML('afterbegin', 
    `<div class="form-container">
        <div class="form-block">
            <button class="form__close">X</button>
            <form class="form_content">
                <input class="form-input" type="text" placeholder="name">
                <input class="form-input" type="text" placeholder="author">
                <input class="form-input" type="file" placeholder="track">
                <input type="submit" value="add">
            </form>
        </div>
    </div>`
    );

    let formBlock = document.querySelector('.form-container')

    formBlock.addEventListener('click', (e) => {
        if (e.target.className == 'form-container' || e.target.className == 'form__close')
        {
            formBlock.remove()
        }
    })
})

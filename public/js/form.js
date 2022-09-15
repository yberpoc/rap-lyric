let formOpen = document.querySelector('.top-panel__item')
let url = 'http://rap-lyric/popup-add-track';

let body = document.querySelector('.body')

formOpen.addEventListener('click', () => {
    /*body.insertAdjacentHTML('afterbegin',
    `<div class="form-container">
                <div class="form-block">
                    <button class="form__close">X</button>
                    <form class="form_content">
                        <h2 class="form_content__title">ADD TRACK</h2>
                        <input class="form-input" type="text" placeholder="name">
                        <input class="form-input" type="text" placeholder="author">
                        <div class="form_content__bottom-buttons">
                            <input class="form-input" type="file" placeholder="track">
                            <input class="form-input --submit" type="submit" value="add">
                        </div>
                    </form>
                </div>
            </div>`
    );*/
    formOpen.setAttribute('disabled', '')
    fetch(url)
        .then((response) => response.text())
        .then((data) => {
            body.insertAdjacentHTML('afterbegin', data)
            let formBlock = document.querySelector('.form-container')

            formBlock.addEventListener('click', (e) => {
                if (e.target.className == 'form-container' || e.target.className == 'form__close')
                {
                    formBlock.remove()
                    formOpen.removeAttribute('disabled', '')
                }
            })

            addTrack();
        })
})

function addTrack()
{
    let form = document.querySelector('.form_content');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let formData = new FormData(form);

        //console.log(formData.values())

        fetch('/add-track', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                let trackList = document.querySelector('.track-list')
                //console.log(data)

                trackList.insertAdjacentHTML('beforeend',
                    '<div id="'+ data.id + '" class="track-list__item">' +
                    '    <div class="track-list__item-name"> Kanye West - <span>' + data.name + '</span></div>\n' +
                    '     <div class="track-list__item-time">3:57</div>' +
                    '</div>'
                )
            })
    })
}

let formOpen = document.querySelector('.top-panel__item')

let url = '/popup-add-track';


let body = document.querySelector('.body')

formOpen.addEventListener('click', () => {
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
        fetch('/add-track', {
            method: 'POST',
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                let trackList = document.querySelector('.track-list')

                let elem = document.createElement('div')
                elem.id = data.id
                elem.classList.add('track-list__item')

                elem.addEventListener('click', () => selectTrack(data.id))

                elem.innerHTML = '<div class="track-list__item-name"> ' + data.author + ' - <span>' + data.name + '</span></div>\n' +
                    '     <div class="track-list__item-time">3:57</div>'

                trackList.appendChild(elem)
            })
    })
}

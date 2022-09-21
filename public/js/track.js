document.addEventListener('DOMContentLoaded', () => {

    let track = document.querySelectorAll('.track-list__item');
    let trackBlock = document.querySelectorAll('.track-list__item-block');
    track.forEach((item, index) => {
        item.addEventListener('click', () => selectTrack(item.id))


        item.addEventListener('mouseover', () => {
            let timeout = setTimeout(delBlock, 1000)

            item.addEventListener('mouseout', (e) => {
                clearTimeout(timeout)
            })
        })


        function delBlock()
        {
            let elem = document.createElement('div')
            elem.id = item.id
            elem.classList.add('track-list__item-del')

            elem.innerHTML = 'X'

            trackBlock[index].appendChild(elem)

            let delBlock = document.querySelector('.track-list__item-del')

            delBlock.addEventListener('click', () => {
                deleteTrack(delBlock.id)
                item.remove()
            })
            item.addEventListener('mouseout', (e) => {
                let timeoutDelBlock = setTimeout(removeDelBlock, 1000)
                delBlock.addEventListener('mouseover', () => {
                    clearTimeout(timeoutDelBlock)
                })
            })
            delBlock.addEventListener('mouseout', () => {
                delBlock.remove()
            })

        }

        function removeDelBlock()
        {
            let delBlock = document.querySelector('.track-list__item-del')
            delBlock.remove()
        }
    })

})

let activeIndex = -1;

function selectTrack(trackID)
{
    let track = [...document.querySelectorAll('.track-list__item')];
    let lyricBlock = document.querySelector('.left-bar__container')
    let title = document.querySelector('.left-bar__title')

    let url = '/track/' + trackID;

    if (activeIndex != trackID)
    {

        if (activeIndex > -1)
        {
            track.find(item => item.id == activeIndex).classList.remove('track-list__item-selected');
        }

        track.find(item => item.id == trackID).classList.add('track-list__item-selected');

        activeIndex = trackID

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                title.innerHTML = data.name;
                lyricBlock.innerHTML =
                    `
                    <audio controls id="player" class="audio-control">
                        <source src="http://rap-lyric/`+ data.track_file +`" type="audio/mp3">
                        Тег audio не поддерживается вашим браузером.
                    </audio>

                    <div class="left-bar__content">
                        <div class="left-bar__block block-en">
                            <h2>EN</h2>
                            <p>`+ data.en_lyric +`</p>
                        </div>
                        <div class="left-bar__block block-ru">
                            <h2>RU</h2>
                            <p>`+ data.ru_lyric +`</p>
                        </div>
                    </div>

                    `;
            })


    }
}

function deleteTrack(trackID)
{

    let url = '/del-track/' + trackID;
    console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
        })
}


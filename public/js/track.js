document.addEventListener('DOMContentLoaded', () => {

    let track = document.querySelectorAll('.track-list__item');
    track.forEach((item, index) => {
        item.addEventListener('click', () => selectTrack(item.id))
    })

})

let activeIndex = -1;

function selectTrack(trackID)
{
    let track = [...document.querySelectorAll('.track-list__item')];
    let lyricBlock = document.querySelector('.left-bar__content')
    let title = document.querySelector('.left-bar__title')


    let url = 'http://rap-lyric/track/' + trackID;

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
                    `<div class="left-bar__block block-en">
            <h2>EN</h2>
                <p>`+ data.en_lyric +`</p>
            </div>
            <div class="left-bar__block block-ru">
                <h2>RU</h2>
                <p>`+ data.ru_lyric +`</p>
            </div>`;
            })
    }
}


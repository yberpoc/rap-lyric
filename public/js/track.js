let track = document.querySelectorAll('.track-list__item');
let lyricBlock = document.querySelector('.left-bar__content')
let title = document.querySelector('.left-bar__title')

for (let i = 0; i < track.length; i++){
    track[i].addEventListener('click', () => {
        let trackID = track[i].id
        let url = '/track/' + trackID;

        console.log(trackID);
        for (let i = 0; i < track.length; i++){
            track[i].classList.remove('track-list__item-selected');
        }
        track[i].classList.add('track-list__item-selected');

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
    })
}

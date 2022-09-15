<div class="form-container">
    <div class="form-block">
        <button class="form__close">X</button>
        <form class="form_content">
            @csrf
            <h2 class="form_content__title">ADD TRACK</h2>
            <input class="form-input" type="text" name="name" placeholder="name">
            <input class="form-input" type="text" name="author" placeholder="author">
            <div class="form_content__bottom-buttons">
                <input class="form-input" type="file" name="track" placeholder="track">
                <input class="form-input --submit" type="submit" value="add">
            </div>
        </form>
    </div>
</div>

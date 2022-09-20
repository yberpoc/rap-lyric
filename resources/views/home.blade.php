@extends('layout/layout')

@section('title')
    RAP LYRIC
@endsection

@section('content')
{{--    {{dd($arResult)}}--}}
    <div class="wrapper">
        <div class="container">
            <div class="content">
                <div class="right-bar">
                    <div class="right-bar__top-block">
                        <h2 class="main_title">TRACK LIST</h2>
                        <input class="search__input" type="text" placeholder="track name or author">
                    </div>
                    <div class="track-list">
                        @foreach($arResult as $arItem)
                            <div class="track-list__item-block">
                                <div id="{{$arItem->id}}" class="track-list__item">
                                    <div class="track-list__item-name">{{$arItem->author}} - <span>{{$arItem->name}}</span></div>
                                    <div class="track-list__item-time">3:57</div>
                                </div>
                                @if($arItem->track_file !== '/storage/null')
                                    <embed src="http://rap-lyric/{{$arItem->track_file}}" autostart="true" hidden="true">
                                @endif
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="left-bar">
                    <div class="left-bar__top">
                        <h1 class="main_title left-bar__title">select track</h1>
                        <div class="left-bar__top-panel">
                            <button  title="add track" class="top-panel__item add-track">
                                <p class="top-panel__item--add-track">+</p>
                            </button>
                        </div>
                    </div>
                    <div class="left-bar__container">
                        <div class="left-bar__content">
                            <p>select track</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

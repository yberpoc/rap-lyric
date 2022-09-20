<?php

namespace App\Http\Controllers;

use App\Models\RapTrack;
use Faker\Core\File;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\StoreRapTrackRequest;
use App\Http\Requests\UpdateRapTrackRequest;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Expr\BinaryOp\Concat;

class RapTrackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $arResult = RapTrack::all();

        foreach ($arResult as $arItem)
        {
            $arItem->track_file = Storage::url($arItem->track_file);
        }
        return view('home', compact('arResult'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $path = 'null';
        if ($request->file('track') !== null && !empty($request->file('track')))
        {
            $path = Storage::putFileAs('public/tracks', $request->file('track')->path(), $request->file('track')->hashName());
        }

        RapTrack::create([
            'author' => $_POST['author'],
            'name' => $_POST['name'],
            'track_file' => $path,
            'en_lyric' => 'dsfdsfsdfsdfsfd',
            'ru_lyric' => 'ывавыаыаваываыаыв',
        ]);

        return json_decode(RapTrack::all()->last());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreRapTrackRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreRapTrackRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RapTrack  $rapTrack
     * @return \Illuminate\Http\Response
     */
    public function show(RapTrack $rapTrack)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RapTrack  $rapTrack
     * @return \Illuminate\Http\Response
     */
    public function edit(RapTrack $rapTrack)
    {
        return view('page_blocks.add-track-form');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateRapTrackRequest  $request
     * @param  \App\Models\RapTrack  $rapTrack
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateRapTrackRequest $request, RapTrack $rapTrack)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RapTrack  $rapTrack
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        RapTrack::destroy($id);
    }

    public function getTrackById($id)
    {
        $arResult = RapTrack::getTrackById($id);

        dd($arResult->track_file);

        echo json_encode(RapTrack::getTrackById($id));
    }
}

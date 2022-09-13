<?php

namespace App\Http\Controllers;

use App\Models\RapTrack;
use App\Http\Requests\StoreRapTrackRequest;
use App\Http\Requests\UpdateRapTrackRequest;
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

        return view('home', compact('arResult'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        //
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
    public function destroy(RapTrack $rapTrack)
    {
        //
    }

    public function getTrackById($id)
    {
        echo json_encode(RapTrack::getTrackById($id));
    }
}

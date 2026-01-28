<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class ArticleController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Web/Articles');
    }

    public function conditionBranching(): Response
    {
        return Inertia::render('Web/Articles/ConditionBranching');
    }
}

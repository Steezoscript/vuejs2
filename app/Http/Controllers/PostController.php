<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }
    
    public function get(Request $request)
    {
        $post = Post::find(1);
        return response()->json($post);
    }
    
    public function store(Request $request)
    {
        if(1 === 1) {
            // Sample authorization logic
            return response()->json("unauthorized");
        } else {
            $post = Post::create($request->all());
            return response()->json($post);
        }
    }
    
    public function delete($id)
    {
        if(1 === 1) {
            // Sample authorization logic
            return response()->json("unauthorized");
        } else {
            Post::destroy($id);
            return response()->json("ok");
        }
    }
}

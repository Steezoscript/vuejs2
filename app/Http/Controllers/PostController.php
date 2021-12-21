<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;

class PostController extends Controller
{
    public function index()
    {
        return view('posts');
    }
    
    public function get(Request $request)
    {
        $posts = Post::orderBy('created_at', 'desc')->get();
        return response()->json($posts);
    }
    
    public function store(Request $request)
    {
        $post = Post::create($request->all());
    
        return response()->json($post);
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

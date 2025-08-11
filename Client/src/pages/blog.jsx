import React from 'react'
import Navbar from '../components/allnavbar';
import Blogg from '../components/blogcard';
import Crdblog from '../components/cardblog';
import { useState } from 'react';
import { FaSearch } from "react-icons/fa"
const Blog = () => {
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    console.log(`Searching for: ${query}`);
  };
  return (
    <>
    <Navbar/>
    <div className="blog">
      <div className="blogsec">
        <h1>BLOG</h1>
      </div>
    </div>
    <div className="blgsec">
      <h3>HOME   / BLOG</h3>
    </div>
    <hr />
    <div className="hb">
      <div className="hb1">
      <Blogg/>
      </div>
      <hr />
    
    <div className="hb2">
    <input 
        type="text" 
        placeholder="Search..." 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <button onClick={handleSearch}><FaSearch/></button> 
      <div className="catagory">
        <h1>Categories</h1> 
        <hr className='hr' />
        <h4>Cooking recipe</h4>
        <hr className='hr' />
        <h4>Delicious foods</h4>
        <hr className='hr'/>
        <h4>Events Design</h4>
        <hr className='hr' />
        <h4>Restaurant Place</h4>
        <hr className='hr' />
      </div>
      <div className="popular">
        <h1>Most popular</h1>
       < Crdblog/>
      </div>
    </div>
  
    </div>
    </>
  )
}
export default Blog;

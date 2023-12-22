'use client'

import { useState, useEffect } from "react"

import PromptCard from "./PromptCard"

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map(post => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [allPosts, setAllPosts] = useState([])
  
  const [searchText, setSearchText] = useState('')
  const [searchTimeOut, setSearchTimeOut] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  
  const fetchPosts = async () => {
    const res = await fetch('/api/prompt', {
      next: { revalidate: 20 }
    })
    const data = await res.json()
    setAllPosts(data)
  }

  useEffect (() => {
    fetchPosts()
  }, [])
  
  const filteredPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i") //i flag for case-insensitive
    return allPosts.filter(item => 
      regex.test(item.creator.username) ||
      regex.test(item.post) ||
      regex.test(item.tag)
    )
  }

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeOut)
    setSearchText(e.target.value)

    //debound method
    setSearchTimeOut(
      setTimeout(() => {
        const searchResult = filteredPrompts(e.target.value)
        setSearchResults(searchResult)
      }, 300)
    )
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName)
    const searchResult = filteredPrompts(tagName)
    setSearchResults(searchResult)
  }
  

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input className="search_input peer" type="text" placeholder="Search for a tag or a username" value={searchText} onChange={handleSearchChange} required/>
      </form>

      {/*all posts*/}
      {searchText ? (
        <PromptCardList 
          data={searchResults} 
          handleTagClick={handleTagClick}
        /> 
      ) : (
        <PromptCardList 
          data={allPosts} 
          handleTagClick={handleTagClick}
        /> 
      )}
      
    </section>
  )
}

export default Feed
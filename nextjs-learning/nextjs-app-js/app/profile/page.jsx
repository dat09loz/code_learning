'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Profile from "@components/Profile"

const MyProfile = () => {
  const { data: session } = useSession()
  const router = useRouter()

  const [posts, setPosts] = useState([])

  //fetch all posts

  useEffect (() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`, {
        next: { revalidate: 20 }
      })
      const data = await res.json()

      setPosts(data)
    } 

    if (session?.user.id) fetchPosts()
  }, [])

  const handleEdit = async (post) => {
    router.push(`/update-prompt?id=${post._id}`)
  }

  const handleDelete = async (post) => {
    const hasComfirmed = confirm("Are you sure you want to delete this prompt?")

    if (hasComfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: 'DELETE',         
        })

        const filteredPosts = posts.filter((item) => item._id !== post._id) //filter the feed to not included the deleted posts
        setPosts(filteredPosts)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Profile 
      name={session?.user.name}
      desc="Welcome to your personalised profile page"
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )
}

export default MyProfile
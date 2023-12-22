'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"

import Profile from "@components/Profile"

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams()
  const username = searchParams.get("name")

  const [userPosts, setUserPosts] = useState([])

  //fetch all posts

  useEffect (() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params.id}/posts`, {
        next: { revalidate: 20 }
      })
      const data = await res.json()

      setUserPosts(data)
    } 

    if (params.id) fetchPosts()
  }, [])

  return (
    <Profile 
      name={username}
      desc={`Welcome to ${username}'s profile. Explore and be inspired by their prompts`}
      data={userPosts}
    />
  )
}

export default UserProfile
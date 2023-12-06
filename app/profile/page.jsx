'use client'
import { useEffect,useState } from "react"
import {useSession} from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"

 const MyProfile = () => {
  const{data:session}= useSession()
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log(data)
  
    };
    if(session?.user.id) fetchPosts();
  }, [session?.user.id]);
    const router = useRouter()
    const handleEdit=()=>{

    }
    const handleDelete=()=>{

    }
  return (
    <Profile
    name= "My"
    description = "welcome to your personalized profile page"
    data={posts}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
    />     
  )
}

export default MyProfile
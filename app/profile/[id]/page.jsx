'use client'
import { useEffect,useState } from "react"
import {useSession} from "next-auth/react"
import { useRouter,useSearchParams } from "next/navigation"
import Profile from "@components/Profile"

 const UserProfile = ({params}) => {
  const{data:session}= useSession()
  const [posts,setPosts] = useState([])
  const SearchParams = useSearchParams();
  const userName= SearchParams.get("name")
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();
      setPosts(data);
      console.log(data)
    };
    if(params?.id) fetchPosts();
  }, [params?.id]);


  return (
    <Profile
    name={userName}
    description = {`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
    data={posts}
    />     
  )
}

export default UserProfile
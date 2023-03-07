import React from "react";
import Comment from "./Comment";
import './comments.css'

const url = 'https://jsonplaceholder.typicode.com/comments?_limit=10'
type Reviews = {
    postId: number
    id: number
    name: string
    email: string
    body: string
}
export default function Reviews(){
    const [reviews, setReviews] = React.useState<Reviews[]>([]);

    async function getReviews(){
        const data = await fetch(url);
        const response = await data.json()
        setReviews(response)
    }
    React.useEffect(() => {
        getReviews()
    },[])

    if(reviews.length){
        return (
            <div className="comments-container">
                {reviews.map(comment => <Comment key={comment.id} name={comment.name} comment={comment.body} number={comment.id}/>)}
            </div>
        )
    } else {

        return (
            <div >Reviews was not received</div>
        )
    }
}
import Joke from "./components/Joke"
import Header from "./components/Header"

export default function App(){
  return(
    <>
      <Header />

      <Joke 
        setup=""
        punch=""
        upvote={0}
        downvote={0}
        isPun={false}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

      <Joke 
        setup="I stayed up all night to see where the sun went…"
        punch="...then it dawned on me."
        upvote={57}
        downvote={10}
        isPun={true}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

      <Joke 
        setup="I’d told a Chemistry joke..."
        punch="...but there was no reaction."
        upvote={98}
        downvote={11}
        isPun={false}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

      <Joke 
        setup="Why don’t scientists trust atoms?"
        punch="Becasue they make up everything"
        upvote={20}
        downvote={53}
        isPun={false}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

      <Joke 
        setup="I have a fear of speed bumps…"
        punch="but now I am slowly getting over it"
        upvote={12}
        downvote={10}
        isPun={false}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

      <Joke 
        setup="Why did the chicken join a band?"
        punch="Because it had the drumsticks."
        upvote={41}
        downvote={25}
        isPun={false}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

      <Joke 
        setup=""
        punch=""
        upvote={0}
        downvote={0}
        isPun={false}
        comments={[
          {"author": "", "text": "", "upvotes": 0, "downvotes":0}
        ]}
      />

    </>

  )
}
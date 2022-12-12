import BlogPost from "../BlogPost";

function App() {
  return (
    <BlogPost
      title= "My First Blog"
      author= "Ashraf Rahman"
      datePosted= "20/11/2019"
      content="This is my attempt at building a React blog, wish me luck"
      imageSrc="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      imageAlt="A couple of coders."
    />
  )
}

export default App;

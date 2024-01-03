

import './App.css'
import Blog from './Blog/Blog'
import Blogs from './Blogs/Blogs'

import Header from './Header/Header'


function App() {
 

  return (
    <>
     
     <Header></Header>

     <div className='md:flex md:justify-between px-4'>
      <Blogs></Blogs>
      <Blog></Blog>
     </div>
   
     
      
    </>
  )
}

export default App

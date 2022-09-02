import './App.css';
import PostBlog from './Component/DataManipulations/PostBlog';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateBlogs from './Component/DataManipulations/UpdateBlogs';
import DeleteBlogs from './Component/DataManipulations/DeleteBlogs'
import PageNotFound from './Component/WebContents/PageNotFound';
import AllBlogs from './Component/DataManipulations/AllBlogs'
import ContactUs from './Component/WebContents/ContactUs'
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Routes> 

              <Route path='/' element={<PostBlog/>} />

              <Route path='/update' element={<UpdateBlogs/>} />

              <Route path='/delete' element={<DeleteBlogs/>} />

              <Route path='/AllBlogs' element={<AllBlogs/>} />

              <Route path='/ContactUs' element={<ContactUs/>} />

              <Route path='*' element={<PageNotFound/>} />
            </Routes>
          </div>
        </BrowserRouter>
  )
}

export default App;

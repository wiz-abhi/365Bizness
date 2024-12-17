import React, { useState } from 'react';
import Container from '../components/layout/Container';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([
    {
      title: 'Business Transformation Strategies',
      excerpt: 'Learn about the latest strategies in business transformation...',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80',
      content: 'Detailed content about business transformation strategies...',
    },
    {
      title: 'Digital Innovation Trends',
      excerpt: 'Exploring the latest trends in digital innovation...',
      date: 'March 10, 2024',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      content: 'Here are the latest trends in digital innovation, including AI, cloud computing, and more...',
    },
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    excerpt: '',
    date: '',
    image: '',
    content: '',
  });

  const [isAddingPost, setIsAddingPost] = useState(false);
  const [openedPost, setOpenedPost] = useState(null);

  const addBlogPost = () => {
    if (newPost.title && newPost.excerpt && newPost.date && newPost.image && newPost.content) {
      setBlogPosts([...blogPosts, newPost]);
      setNewPost({ title: '', excerpt: '', date: '', image: '', content: '' }); // Clear input fields
      setIsAddingPost(false); // Close the form after adding a post
    } else {
      alert('Please fill out all fields.');
    }
  };

  const openBlogPost = (index) => {
    setOpenedPost(blogPosts[index]);
  };

  const closeBlogPost = () => {
    setOpenedPost(null);
  };

  return (
    <div className="bg-[#000066] py-16">
      <Container>
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-cyan-400">Latest Insights</h1>
          {/* Add Blog Button */}
          {!isAddingPost && (
            <button
              onClick={() => setIsAddingPost(true)}
              className="px-4 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-300"
            >
              Add Blog Post
            </button>
          )}
        </div>

        <div className="flex">
          {/* Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-[#000080] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openBlogPost(index)}
              >
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-cyan-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold mb-2 text-white">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Add Blog Form (Right side when isAddingPost is true) */}
          {isAddingPost && (
            <div className="w-1/4 bg-[#000080] p-8 rounded-lg ml-8">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6">Add a New Blog Post</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                  type="text"
                  placeholder="Excerpt"
                  value={newPost.excerpt}
                  onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                  className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                  type="date"
                  value={newPost.date}
                  onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
                  className="p-2 rounded bg-gray-800 text-white"
                />
                <input
                  type="url"
                  placeholder="Image URL"
                  value={newPost.image}
                  onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
                  className="p-2 rounded bg-gray-800 text-white"
                />
                <textarea
                  placeholder="Content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  className="p-2 rounded bg-gray-800 text-white col-span-2"
                />
              </div>
              <button
                onClick={addBlogPost}
                className="mt-6 px-4 py-2 bg-cyan-400 text-white rounded hover:bg-cyan-300"
              >
                Add Blog Post
              </button>
            </div>
          )}
        </div>
        
        {/* Blog Post Detailed View */}
        {openedPost && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
              <button
                onClick={closeBlogPost}
                className="text-cyan-400 mb-4 hover:text-cyan-300"
              >
                Close
              </button>
              <h2 className="text-3xl font-bold mb-4">{openedPost.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{openedPost.date}</p>
              <img
                src={openedPost.image}
                alt={openedPost.title}
                className="w-full h-96 object-cover mb-4"
              />
              <p className="text-gray-800">{openedPost.content}</p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Blog;

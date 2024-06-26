import BlogCard from './BlogCard';

const HomeMain = () => {
  return (
    <main>
      <section className='main-section'>
        <h2>Latest Post</h2>
        <div className='blog-posts'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <button className='view-more-btn'>View More Posts</button>
      </section>
    </main>
  )
}

export default HomeMain;

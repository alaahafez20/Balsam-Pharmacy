import React from 'react'
import Products from '../Products/Products';
import './Home.css'
import JobSection from '../JobSection/JobSection';
import BlogsSection from '../Blogs/BlogsSection';
import Testimonials from '../Testimonials/Testimonials';
import HeaderSlider from '../HeaderSlider/HeaderSlider';

const Home = () => {
  
  return (
    <div>
        <HeaderSlider/>

        <Products />
        <BlogsSection />
        <Testimonials />
        <JobSection />
      
    </div>
  )
}

export default Home

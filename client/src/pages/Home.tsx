import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedPlaces from '../components/home/FeaturedPlaces';
import FeaturedPackages from '../components/home/FeaturedPackages';
import GalleryPreview from '../components/home/GalleryPreview';
import Testimonials from '../components/home/Testimonials';
import BlogTeaser from '../components/home/BlogTeaser';
import AboutPreview from '../components/home/AboutPreview';
import CallToAction from '../components/home/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturedPlaces />
      <FeaturedPackages />
      <GalleryPreview />
      <Testimonials />
      <BlogTeaser />
      <AboutPreview />
      <CallToAction />
    </>
  );
};

export default Home;
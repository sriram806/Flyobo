import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, User } from 'lucide-react';
import { BlogPost } from '../../types';

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Hidden Beaches in Southeast Asia',
    excerpt: 'Discover secluded shorelines away from the tourist crowds, where pristine sands and crystal waters await.',
    date: '2025-03-15',
    author: 'Sophia Chen',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '2',
    title: 'A Food Lover\'s Guide to Italy',
    excerpt: 'From pasta in Rome to pizza in Naples, explore the diverse regional cuisines that make Italy a culinary paradise.',
    date: '2025-02-28',
    author: 'Marco Rossi',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '3',
    title: 'Sustainable Travel: How to Reduce Your Carbon Footprint',
    excerpt: 'Practical tips for eco-conscious travelers who want to see the world while preserving it for future generations.',
    date: '2025-02-10',
    author: 'Emma Watson',
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogTeaser: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-medium text-gray-900">Travel Inspiration</h2>
          <p className="text-gray-600 mt-2">Insights, guides, and stories from our travel experts</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="card group">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <CalendarDays size={14} className="mr-1" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center">
                    <User size={14} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/blog" className="btn btn-outline">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
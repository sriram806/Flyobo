import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays, User, Search, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';

// Mock data for blog posts
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Hidden Beaches in Southeast Asia',
    excerpt: 'Discover secluded shorelines away from the tourist crowds, where pristine sands and crystal waters await. From secret coves in Thailand to untouched islands in the Philippines.',
    date: '2025-03-15',
    author: 'Sophia Chen',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '2',
    title: 'A Food Lover\'s Guide to Italy',
    excerpt: 'From pasta in Rome to pizza in Naples, explore the diverse regional cuisines that make Italy a culinary paradise. Learn about traditional dishes and the best local eateries.',
    date: '2025-02-28',
    author: 'Marco Rossi',
    image: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '3',
    title: 'Sustainable Travel: How to Reduce Your Carbon Footprint',
    excerpt: 'Practical tips for eco-conscious travelers who want to see the world while preserving it for future generations. From transportation choices to accommodation options.',
    date: '2025-02-10',
    author: 'Emma Watson',
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    featured: true
  },
  {
    id: '4',
    title: 'African Safari: What to Know Before You Go',
    excerpt: 'Essential tips for planning your first safari adventure, from choosing the right season to packing the perfect gear. Get ready for the wildlife experience of a lifetime.',
    date: '2025-01-25',
    author: 'David Okafor',
    image: 'https://images.pexels.com/photos/259411/pexels-photo-259411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '5',
    title: 'The Art of Solo Travel: Finding Yourself on the Road',
    excerpt: 'Embrace the freedom of traveling alone and discover why it can be one of the most rewarding experiences of your life. Tips for safety, meeting people, and overcoming challenges.',
    date: '2025-01-15',
    author: 'Jessica Kim',
    image: 'https://images.pexels.com/photos/2744239/pexels-photo-2744239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '6',
    title: 'Island Hopping in Greece: A 2-Week Itinerary',
    excerpt: 'The perfect plan for exploring the Greek islands, from the popular Santorini and Mykonos to lesser-known gems like Naxos and Paros. Includes transport tips and accommodation recommendations.',
    date: '2024-12-20',
    author: 'Alex Papadopoulos',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '7',
    title: 'Photography Tips for Travel: Capturing Memories Like a Pro',
    excerpt: 'Learn how to take stunning travel photos with any camera. This guide covers composition, lighting, and editing techniques to elevate your travel photography.',
    date: '2024-12-05',
    author: 'Michael Zhang',
    image: 'https://images.pexels.com/photos/1122868/pexels-photo-1122868.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: '8',
    title: 'Budget Travel: See the World Without Breaking the Bank',
    excerpt: 'Discover strategies for affordable travel, from finding flight deals to accommodation hacks and eating like a local. Travel more for less with these practical money-saving tips.',
    date: '2024-11-18',
    author: 'Olivia Martinez',
    image: 'https://images.pexels.com/photos/2519212/pexels-photo-2519212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() === '') {
      setFilteredPosts(blogPosts);
      return;
    }
    
    const filtered = blogPosts.filter(
      (post) => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredPosts(filtered);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Travel Blog
          </h1>
          <p className="text-gray-600 max-w-3xl">
            Discover travel tips, destination guides, and stories from around the world. Our blog provides inspiration and practical advice for your next adventure.
          </p>
        </div>
        
        {/* Search */}
        <div className="max-w-xl mx-auto mb-12">
          <form onSubmit={handleSearch} className="flex">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="form-input pl-10 py-3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary ml-2">
              Search
            </button>
          </form>
        </div>
        
        {/* Featured Post */}
        {filteredPosts.length > 0 && filteredPosts[0].featured && (
          <div className="mb-12">
            <Link to={`/blog/${filteredPosts[0].id}`} className="group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl overflow-hidden bg-white shadow-lg">
                <div className="relative overflow-hidden h-full min-h-[300px]">
                  <img 
                    src={filteredPosts[0].image} 
                    alt={filteredPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <div className="flex items-center mr-4">
                      <CalendarDays size={14} className="mr-1" />
                      <span>{formatDate(filteredPosts[0].date)}</span>
                    </div>
                    <div className="flex items-center">
                      <User size={14} className="mr-1" />
                      <span>{filteredPosts[0].author}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-gray-900 mb-4 group-hover:text-primary transition-colors">
                    {filteredPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6">
                    {filteredPosts[0].excerpt}
                  </p>
                  
                  <span className="inline-flex items-center text-primary font-medium group-hover:underline">
                    Read Article <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}
        
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            // Skip the first post if it's featured and already displayed above
            filteredPosts.slice(filteredPosts[0].featured ? 1 : 0).map((post) => (
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
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <span className="text-primary font-medium inline-flex items-center group-hover:underline">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-600 text-lg mb-4">No articles found matching your search.</p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilteredPosts(blogPosts);
                }}
                className="btn btn-outline"
              >
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
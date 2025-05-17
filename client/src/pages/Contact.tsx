import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSuccess, setFormSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    console.log('Form submitted:', formData);
    // Show success message
    setFormSuccess(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSuccess(false);
    }, 5000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-serif font-medium text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions about our travel packages or need a custom itinerary? Our travel experts are here to help you plan your next adventure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Phone size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 mb-4">Our team is available Monday to Friday, 9am to 6pm.</p>
            <a href="tel:+1234567890" className="text-primary font-medium hover:underline">
              +1 (234) 567-8910
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">For general inquiries, bookings, or customized travel plans.</p>
            <a href="mailto:info@flyobo.com" className="text-primary font-medium hover:underline">
              info@flyobo.com
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Our main office is located in the heart of the city.</p>
            <p className="text-primary font-medium">
              123 Travel Street, Adventure City, AC 12345
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
              Send Us a Message
            </h2>
            
            {formSuccess && (
              <div className="bg-success/10 border border-success text-success p-4 rounded-lg mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Your message has been sent successfully. We'll get back to you soon!</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Package Booking</option>
                  <option value="custom">Custom Itinerary</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Business Partnership</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
          
          {/* Map & Information */}
          <div>
            <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">
              Our Offices
            </h2>
            
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 mb-6">
              {/* This would be replaced with an actual map component in a real app */}
              <div className="w-full h-full flex items-center justify-center bg-primary/20">
                <span className="text-gray-600">Map Placeholder - In a real app, this would show an interactive map</span>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Main Office - New York</h4>
                  <p className="text-gray-600">123 Travel Street, Adventure City, AC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">London Office</h4>
                  <p className="text-gray-600">456 Journey Lane, Voyager District, London, UK</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Singapore Office</h4>
                  <p className="text-gray-600">789 Discovery Road, Explorer Tower, Singapore</p>
                </div>
              </div>
            </div>
            
            <hr className="my-6 border-gray-200" />
            
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
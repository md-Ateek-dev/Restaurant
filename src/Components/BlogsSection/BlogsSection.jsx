import React, { useState, useRef } from "react";
import img1 from '../../assets/Images/Banner7.avif';
import img2 from '../../assets/Images/Banner2.avif';
import img3 from '../../assets/Images/Banner3.avif';
import img4 from '../../assets/Images/Banner4.avif';
import img5 from '../../assets/Images/Banner5.avif';
import img6 from '../../assets/Images/Banner6.avif';
import {
  Calendar,
  Clock,
  User,
  ChefHat,
  ArrowRight,
  Heart,
  MessageSquare,
  Share2,
  BookOpen,
  Star,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visiblePosts, setVisiblePosts] = useState(3);
  const sectionRef = useRef(null);

  const categories = [
    { name: "All", icon: BookOpen, count: 12 },
    { name: "Recipes", icon: ChefHat, count: 5 },
    { name: "Reviews", icon: Star, count: 3 },
    { name: "Events", icon: Users, count: 2 },
    { name: "Tips", icon: TrendingUp, count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Secret Behind Our Award-Winning Pasta Sauce",
      excerpt: "Discover the traditional family recipe that has been passed down through generations, featuring San Marzano tomatoes and fresh herbs.",
      category: "Recipes",
      author: "Chef Marco Rossi",
      date: "2024-08-25",
      readTime: "5 min read",
      image: img1,
      likes: 124,
      comments: 18,
      featured: true,
    },
    {
      id: 2,
      title: "Wine Pairing Guide: Perfect Matches for Italian Cuisine",
      excerpt: "Learn how to pair different wines with your favorite Italian dishes. From Chianti Classico to Prosecco, we cover all the essentials.",
      category: "Tips",
      author: "Sommelier Anna Verde",
      date: "2024-08-22",
      readTime: "8 min read",
      image: img2,
      likes: 89,
      comments: 12,
      featured: false,
    },
    {
      id: 3,
      title: "Customer Review: 'A Culinary Journey to Italy'",
      excerpt: "Read what our guests have to say about their dining experience at Bella Vista. This month's featured review comes from food critic James Wilson.",
      category: "Reviews",
      author: "Guest Relations Team",
      date: "2024-08-20",
      readTime: "3 min read",
      image: img3,
      likes: 67,
      comments: 8,
      featured: false,
    },
    {
      id: 4,
      title: "Upcoming: Wine Tasting Event - October 15th",
      excerpt: "Join us for an exclusive wine tasting featuring rare Italian vintages paired with artisanal appetizers prepared by our executive chef.",
      category: "Events",
      author: "Events Team",
      date: "2024-08-18",
      readTime: "4 min read",
      image: img4,
      likes: 156,
      comments: 23,
      featured: true,
    },
    {
      id: 5,
      title: "The Art of Making Perfect Risotto: A Master Class",
      excerpt: "Master the technique of creating creamy, perfectly textured risotto with tips from our head chef. Includes three signature variations.",
      category: "Recipes",
      author: "Chef Isabella Conti",
      date: "2024-08-15",
      readTime: "10 min read",
      image: img5,
      likes: 203,
      comments: 31,
      featured: false,
    },
    {
      id: 6,
      title: "Seasonal Menu: Autumn Flavors Now Available",
      excerpt: "Explore our new autumn menu featuring locally sourced ingredients, truffle dishes, and warming comfort foods perfect for the season.",
      category: "Reviews",
      author: "Executive Chef",
      date: "2024-08-12",
      readTime: "6 min read",
      image: img6,
      likes: 178,
      comments: 19,
      featured: false,
    },
  ];

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  const showLess = () => {
    setVisiblePosts(3);
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent">
            Culinary Stories & Insights
          </h2>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the passion behind every dish, explore authentic recipes, and stay updated with the latest culinary trends from our kitchen to yours.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.name;
            return (
              <button
                key={category.name}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setVisiblePosts(3);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                  ${isActive ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-200" : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-orange-100 hover:to-red-100 border border-gray-200 hover:border-orange-300"}
                `}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-600"}`} />
                {category.name}
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"}`}>
                  {category.count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedPosts.map((post, index) => {
            const isHovered = hoveredCard === post.id;
            const isFeatured = post.featured;
            return (
              <article
                key={post.id}
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer
                  ${isFeatured ? "ring-2 ring-orange-300 lg:col-span-2 lg:row-span-1" : ""}
                  ${isHovered ? "shadow-orange-200" : ""}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {isFeatured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </div>
                  </div>
                )}
                <div className="relative overflow-hidden h-48 lg:h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                  <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 transform ${isHovered ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-100 transition-colors">
                      <Heart className="w-4 h-4 text-red-500" />
                    </button>
                    <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors">
                      <Share2 className="w-4 h-4 text-blue-500" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1"><User className="w-4 h-4" /><span>{post.author}</span></div>
                    <div className="flex items-center gap-1"><Calendar className="w-4 h-4" /><span>{formatDate(post.date)}</span></div>
                    <div className="flex items-center gap-1"><Clock className="w-4 h-4" /><span>{post.readTime}</span></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1"><Heart className="w-4 h-4" /><span>{post.likes}</span></div>
                      <div className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /><span>{post.comments}</span></div>
                    </div>
                    <button className={`flex items-center gap-2 font-medium transition-all duration-300 transform hover:scale-105 ${isHovered ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}>
                      Read More
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="text-center">
          {visiblePosts < filteredPosts.length ? (
            <button
              onClick={loadMore}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-200"
            >
              Show More Articles
              <TrendingUp className="w-5 h-5" />
            </button>
          ) : (
            filteredPosts.length > 3 && (
              <button
                onClick={showLess}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gray-300 text-gray-800 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400"
              >
                Show Less
              </button>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

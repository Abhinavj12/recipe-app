"use client"

import { useState, useEffect } from "react"
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  ChefHat,
  Heart,
  Flame,
  Award,
  TrendingUp,
  BookOpen,
  Utensils,
  Globe,
  Eye,
  ThumbsUp,
  Plus,
  ArrowLeft,
  Menu,
  Home,
  Bell,
  Bookmark,
  Grid,
  List,
  Minus,
  CheckCircle2,
  Circle,
} from "lucide-react"

// ==== NAVIGATION HEADER COMPONENT ====
const NavigationHeader = ({ currentView, setCurrentView, user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                GourmetHub
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setCurrentView("home")}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                currentView === "home" ? "bg-orange-100 text-orange-600" : "text-gray-600 hover:text-orange-600"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentView("home")}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Recipes</span>
            </button>
            <button
              onClick={() => setCurrentView("home")}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Award className="w-4 h-4" />
              <span>Featured</span>
            </button>
            <button
              onClick={() => setCurrentView("home")}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Trending</span>
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>

            {user ? (
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="User"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
                <button onClick={() => setUser(null)} className="ml-2 text-xs text-gray-500 hover:text-gray-700">
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setUser({ name: "John Doe", email: "john@example.com" })}
                className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all transform hover:scale-105"
              >
                Sign In
              </button>
            )}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-orange-100">
          <div className="px-4 py-2 space-y-2">
            <button
              onClick={() => {
                setCurrentView("home")
                setIsMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-lg"
            >
              Recipes
            </button>
            <button
              onClick={() => {
                setCurrentView("home")
                setIsMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-lg"
            >
              Featured
            </button>
            <button
              onClick={() => {
                setCurrentView("home")
                setIsMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-orange-50 rounded-lg"
            >
              Trending
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

// ==== RECIPE CARD COMPONENTS ====
const FeaturedRecipeCard = ({ recipe, onSelect, isFavorite, onToggleFavorite }) => {
  const handleSelect = () => {
    onSelect(recipe)
  }

  return (
    <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-orange-100">
      <div className="relative h-64 overflow-hidden">
        <img
          src={recipe.image || "/placeholder.svg?height=256&width=400"}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full">
            FEATURED
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite(recipe.id)
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-all ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-red-500"
            }`}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{recipe.cookTime}m</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm">{recipe.rating}</span>
              </div>
            </div>
            <button
              onClick={handleSelect}
              className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all text-sm font-medium"
            >
              View Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TrendingRecipeCard = ({ recipe, onSelect, isFavorite, onToggleFavorite }) => {
  const handleSelect = () => {
    onSelect(recipe)
  }

  return (
    <div className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-orange-100">
      <div className="relative h-40 overflow-hidden">
        <img
          src={recipe.image || "/placeholder.svg?height=160&width=288"}
          alt={recipe.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <div className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-semibold rounded-full">
            <Flame className="w-3 h-3" />
            <span>TRENDING</span>
          </div>
        </div>
        <div className="absolute top-3 right-3">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite(recipe.id)
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-all ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-red-500"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{recipe.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookTime}m</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span>{recipe.rating}</span>
            </div>
          </div>
          <button
            onClick={handleSelect}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 transition-all text-sm font-medium"
          >
            Cook Now
          </button>
        </div>
      </div>
    </div>
  )
}

const RecipeCard = ({ recipe, onSelect, isFavorite, onToggleFavorite }) => {
  const handleSelect = () => {
    onSelect(recipe)
  }

  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer">
      <div className="relative h-48 overflow-hidden" onClick={handleSelect}>
        <img
          src={recipe.image || "/placeholder.svg?height=192&width=400"}
          alt={recipe.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
            {recipe.category}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onToggleFavorite(recipe.id)
            }}
            className={`p-2 rounded-full backdrop-blur-sm transition-all ${
              isFavorite ? "bg-red-500 text-white" : "bg-white/20 text-white hover:bg-red-500"
            }`}
          >
            <Heart className={`w-4 h-4 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleSelect}
            className="w-full py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all text-sm font-medium"
          >
            View Recipe
          </button>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3
            onClick={handleSelect}
            className="font-semibold text-gray-800 text-lg line-clamp-2 group-hover:text-orange-600 transition-colors cursor-pointer"
          >
            {recipe.title}
          </h3>
          <div className="flex items-center space-x-1 text-sm text-gray-500 ml-2">
            <Eye className="w-4 h-4" />
            <span>{(recipe.views / 1000).toFixed(1)}k</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{recipe.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{recipe.cookTime}m</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-700">{recipe.rating}</span>
            <span className="text-xs text-gray-500">({recipe.reviews})</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                recipe.difficulty === "Easy"
                  ? "bg-green-100 text-green-800"
                  : recipe.difficulty === "Medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
              }`}
            >
              {recipe.difficulty}
            </span>
            <span className="text-xs text-gray-500">{recipe.calories} cal</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <ThumbsUp className="w-4 h-4" />
            <span>{recipe.likes}</span>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1">
          {recipe.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const RecipeListItem = ({ recipe, onSelect, isFavorite, onToggleFavorite }) => {
  const handleSelect = () => {
    onSelect(recipe)
  }

  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
      onClick={handleSelect}
    >
      <div className="flex">
        <div className="relative w-48 h-32 flex-shrink-0">
          <img
            src={recipe.image || "/placeholder.svg?height=128&width=192"}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 bg-white/90 text-gray-800 text-xs font-semibold rounded-full">
              {recipe.category}
            </span>
          </div>
        </div>

        <div className="flex-1 p-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-semibold text-gray-800 text-lg hover:text-orange-600 transition-colors">
              {recipe.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleFavorite(recipe.id)
              }}
              className={`p-2 rounded-full transition-all ${
                isFavorite ? "bg-red-50 text-red-500" : "text-gray-400 hover:bg-red-50 hover:text-red-500"
              }`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
            </button>
          </div>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{recipe.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                <span>{recipe.cookTime}m</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-gray-500">
                <Users className="w-4 h-4" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-700">{recipe.rating}</span>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  recipe.difficulty === "Easy"
                    ? "bg-green-100 text-green-800"
                    : recipe.difficulty === "Medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                }`}
              >
                {recipe.difficulty}
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Eye className="w-4 h-4" />
                <span>{(recipe.views / 1000).toFixed(1)}k</span>
              </div>
              <div className="flex items-center space-x-1">
                <ThumbsUp className="w-4 h-4" />
                <span>{recipe.likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==== HOME VIEW COMPONENT ====
const HomeView = ({
  recipes,
  filteredRecipes,
  categories,
  searchTerm,
  setSearchTerm,
  activeFilters,
  handleFilterChange,
  clearFilters,
  viewMode,
  setViewMode,
  sortBy,
  setSortBy,
  onSelectRecipe,
  favorites,
  toggleFavorite,
  loading,
}) => {
  const [showFilters, setShowFilters] = useState(false)
  const featuredRecipes = recipes.filter((recipe) => recipe.featured)
  const trendingRecipes = recipes.filter((recipe) => recipe.trending)

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 to-red-600/90"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=400&fit=crop"
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Discover Amazing
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Recipes
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            From comfort food to gourmet cuisine, find your next culinary adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search recipes, ingredients, or cuisines..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-0 shadow-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-orange-300"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-8 py-4 backdrop-blur-sm text-white rounded-full transition-all flex items-center space-x-2 ${
                showFilters ? "bg-white/30" : "bg-white/20 hover:bg-white/30"
              }`}
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <Globe className="w-8 h-8 mr-3 text-orange-600" />
            Explore Cuisines
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleFilterChange("category", category.name)}
                className={`p-4 rounded-2xl border-2 transition-all transform hover:scale-105 ${
                  activeFilters.category === category.name
                    ? "border-orange-500 bg-orange-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-md"
                }`}
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-semibold text-gray-800 text-sm">{category.name}</h3>
                <p className="text-xs text-gray-500">{category.count} recipes</p>
              </button>
            ))}
          </div>
        </section>

        {/* Filters Panel */}
        {showFilters && (
          <section className="mb-8 p-6 bg-white rounded-2xl shadow-lg border border-orange-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">Advanced Filters</h3>
              <button onClick={clearFilters} className="text-orange-600 hover:text-orange-700 font-medium">
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <div className="space-y-2">
                  {["Easy", "Medium", "Hard"].map((level) => (
                    <button
                      key={level}
                      onClick={() => handleFilterChange("difficulty", level)}
                      className={`w-full p-2 rounded-lg text-left transition-colors ${
                        activeFilters.difficulty === level
                          ? "bg-orange-100 text-orange-700 border border-orange-300"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cooking Time Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Cooking Time</label>
                <div className="space-y-2">
                  {[
                    { key: "quick", label: "Quick (≤30 min)" },
                    { key: "medium", label: "Medium (30-60 min)" },
                    { key: "long", label: "Long (>60 min)" },
                  ].map((time) => (
                    <button
                      key={time.key}
                      onClick={() => handleFilterChange("time", time.key)}
                      className={`w-full p-2 rounded-lg text-left transition-colors ${
                        activeFilters.time === time.key
                          ? "bg-orange-100 text-orange-700 border border-orange-300"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <div className="space-y-2">
                  {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => handleFilterChange("rating", rating)}
                      className={`w-full p-2 rounded-lg text-left transition-colors flex items-center ${
                        activeFilters.rating === rating
                          ? "bg-orange-100 text-orange-700 border border-orange-300"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      {rating}+ stars
                    </button>
                  ))}
                </div>
              </div>

              {/* Dietary Preferences */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dietary</label>
                <div className="space-y-2">
                  {["Vegetarian", "Vegan", "Gluten-free", "Keto"].map((diet) => (
                    <button
                      key={diet}
                      onClick={() => handleFilterChange("dietary", diet)}
                      className={`w-full p-2 rounded-lg text-left transition-colors ${
                        activeFilters.dietary === diet
                          ? "bg-orange-100 text-orange-700 border border-orange-300"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {diet}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Featured Recipes */}
        {featuredRecipes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-orange-600" />
              Featured Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredRecipes.slice(0, 3).map((recipe) => (
                <FeaturedRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={onSelectRecipe}
                  isFavorite={favorites.includes(recipe.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* Trending Recipes */}
        {trendingRecipes.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
              <TrendingUp className="w-8 h-8 mr-3 text-orange-600" />
              Trending Now
            </h2>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {trendingRecipes.map((recipe) => (
                <TrendingRecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onSelect={onSelectRecipe}
                  isFavorite={favorites.includes(recipe.id)}
                  onToggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </section>
        )}

        {/* Main Recipe Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center">
              <Utensils className="w-8 h-8 mr-3 text-orange-600" />
              All Recipes
              <span className="ml-3 text-lg text-gray-500 font-normal">({filteredRecipes.length} recipes)</span>
            </h2>

            <div className="flex items-center space-x-4">
              {/* Sort Options */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
                <option value="quickest">Quickest</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? "bg-orange-500 text-white" : "bg-white text-gray-600"}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? "bg-orange-500 text-white" : "bg-white text-gray-600"}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded mb-4"></div>
                    <div className="flex space-x-2">
                      <div className="h-6 w-16 bg-gray-200 rounded"></div>
                      <div className="h-6 w-16 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRecipes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No recipes found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your search or filters</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div
              className={`${
                viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"
              }`}
            >
              {filteredRecipes.map((recipe) =>
                viewMode === "grid" ? (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ) : (
                  <RecipeListItem
                    key={recipe.id}
                    recipe={recipe}
                    onSelect={onSelectRecipe}
                    isFavorite={favorites.includes(recipe.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ),
              )}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

// ==== RECIPE DETAIL VIEW COMPONENT ====
const RecipeDetailView = ({ recipe, setCurrentView, favorites, toggleFavorite }) => {
  const [activeTab, setActiveTab] = useState("overview")
  const [servings, setServings] = useState(recipe.servings)
  const [checkedIngredients, setCheckedIngredients] = useState([])
  const [checkedInstructions, setCheckedInstructions] = useState([])

  const toggleIngredient = (index) => {
    setCheckedIngredients((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const toggleInstruction = (index) => {
    setCheckedInstructions((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const adjustServings = (newServings) => {
    if (newServings > 0 && newServings <= 20) {
      setServings(newServings)
    }
  }

  const isFavorite = favorites.includes(recipe.id)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={() => setCurrentView("home")}
        className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Recipes</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
            <img
              src={recipe.image || "/placeholder.svg?height=384&width=600"}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <div className="flex items-center space-x-2 mb-3">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">{recipe.category}</span>
                {recipe.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-sm">
                    Featured
                  </span>
                )}
                {recipe.trending && (
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm flex items-center space-x-1">
                    <Flame className="w-3 h-3" />
                    <span>Trending</span>
                  </span>
                )}
              </div>
              <h1 className="text-4xl font-bold mb-2">{recipe.title}</h1>
              <p className="text-lg opacity-90">{recipe.description}</p>
            </div>
          </div>

          {/* Recipe Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <Clock className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{recipe.cookTime}</div>
              <div className="text-sm text-gray-600">Minutes</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{servings}</div>
              <div className="text-sm text-gray-600">Servings</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2 fill-current" />
              <div className="text-2xl font-bold text-gray-800">{recipe.rating}</div>
              <div className="text-sm text-gray-600">{recipe.reviews} Reviews</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md text-center">
              <Flame className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-800">{recipe.calories}</div>
              <div className="text-sm text-gray-600">Calories</div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="flex border-b border-gray-200">
              {[
                { key: "overview", label: "Overview", icon: BookOpen },
                { key: "ingredients", label: "Ingredients", icon: Utensils },
                { key: "instructions", label: "Instructions", icon: ChefHat },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-4 px-6 transition-colors ${
                    activeTab === tab.key
                      ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                      : "text-gray-600 hover:text-orange-600"
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="p-6">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">About This Recipe</h3>
                    <p className="text-gray-600 leading-relaxed">{recipe.description}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {recipe.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Chef</h3>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-white font-bold">
                        {recipe.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium text-gray-800">{recipe.author}</div>
                        <div className="text-sm text-gray-500">Professional Chef</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "ingredients" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-gray-800">Ingredients</h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600">Servings:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => adjustServings(servings - 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{servings}</span>
                        <button
                          onClick={() => adjustServings(servings + 1)}
                          className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <button
                          onClick={() => toggleIngredient(index)}
                          className="text-orange-500 hover:text-orange-600"
                        >
                          {checkedIngredients.includes(index) ? (
                            <CheckCircle2 className="w-5 h-5 fill-current" />
                          ) : (
                            <Circle className="w-5 h-5" />
                          )}
                        </button>
                        <span
                          className={`flex-1 ${checkedIngredients.includes(index) ? "line-through text-gray-500" : "text-gray-800"}`}
                        >
                          {ingredient}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "instructions" && (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Instructions</h3>
                  <div className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <div key={index} className="flex space-x-4 p-4 rounded-lg hover:bg-gray-50">
                        <button
                          onClick={() => toggleInstruction(index)}
                          className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium hover:bg-orange-600 transition-colors"
                        >
                          {checkedInstructions.includes(index) ? "✓" : index + 1}
                        </button>
                        <p
                          className={`flex-1 leading-relaxed ${checkedInstructions.includes(index) ? "line-through text-gray-500" : "text-gray-800"}`}
                        >
                          {instruction}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            {/* Action Buttons */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all mb-3 ${
                  isFavorite
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gray-100 text-gray-700 hover:bg-red-50 hover:text-red-500"
                }`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                <span>{isFavorite ? "Remove from Favorites" : "Add to Favorites"}</span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all">
                <span>Start Cooking</span>
              </button>
            </div>

            {/* Nutrition Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Nutrition (per serving)</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Calories</span>
                  <span className="font-medium">{Math.round((recipe.calories / recipe.servings) * servings)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Protein</span>
                  <span className="font-medium">12g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbs</span>
                  <span className="font-medium">45g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fat</span>
                  <span className="font-medium">8g</span>
                </div>
              </div>
            </div>

            {/* Recipe Stats */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h4 className="font-semibold text-gray-800 mb-4">Recipe Stats</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Views</span>
                  </div>
                  <span className="font-medium">{(recipe.views / 1000).toFixed(1)}k</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Likes</span>
                  </div>
                  <span className="font-medium">{recipe.likes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">Rating</span>
                  </div>
                  <span className="font-medium">{recipe.rating}/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ==== MAIN APP COMPONENT ====
const App = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredRecipes, setFilteredRecipes] = useState([])
  const [categories, setCategories] = useState([])
  const [currentView, setCurrentView] = useState("home")
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState({
    category: "",
    difficulty: "",
    time: "",
    dietary: "",
    rating: 0,
  })
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("popular")

  // Sample data - in production, this would come from your backend
  useEffect(() => {
    const sampleRecipes = [
      {
        id: 1,
        title: "Truffle Risotto Supreme",
        description: "Luxurious creamy risotto with black truffle and parmesan",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
        category: "Italian",
        difficulty: "Hard",
        cookTime: 45,
        servings: 4,
        rating: 4.8,
        reviews: 234,
        calories: 420,
        ingredients: ["Arborio rice", "Black truffle", "Parmesan", "White wine", "Vegetable stock"],
        instructions: ["Heat stock", "Toast rice", "Add wine", "Add stock gradually", "Finish with truffle"],
        tags: ["Vegetarian", "Gluten-free", "Luxury"],
        author: "Chef Marco",
        views: 15420,
        likes: 892,
        featured: true,
        trending: true,
      },
      {
        id: 2,
        title: "Spicy Thai Basil Chicken",
        description: "Authentic pad kra pao with fresh basil and chilies",
        image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
        category: "Thai",
        difficulty: "Medium",
        cookTime: 20,
        servings: 2,
        rating: 4.6,
        reviews: 189,
        calories: 380,
        ingredients: ["Chicken breast", "Thai basil", "Chilies", "Fish sauce", "Garlic"],
        instructions: ["Prep ingredients", "Heat wok", "Cook chicken", "Add aromatics", "Finish with basil"],
        tags: ["Spicy", "Quick", "Protein-rich"],
        author: "Chef Siriporn",
        views: 12890,
        likes: 756,
        featured: false,
        trending: true,
      },
      {
        id: 3,
        title: "Moroccan Lamb Tagine",
        description: "Slow-cooked lamb with apricots and aromatic spices",
        image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
        category: "Moroccan",
        difficulty: "Medium",
        cookTime: 120,
        servings: 6,
        rating: 4.7,
        reviews: 156,
        calories: 450,
        ingredients: ["Lamb shoulder", "Dried apricots", "Cinnamon", "Ginger", "Onions"],
        instructions: ["Brown lamb", "Add spices", "Add liquid", "Slow cook", "Add apricots"],
        tags: ["Hearty", "Comfort food", "Traditional"],
        author: "Chef Fatima",
        views: 9840,
        likes: 623,
        featured: true,
        trending: false,
      },
      {
        id: 4,
        title: "Vegan Buddha Bowl",
        description: "Nutritious bowl with quinoa, roasted vegetables, and tahini dressing",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        category: "Healthy",
        difficulty: "Easy",
        cookTime: 30,
        servings: 2,
        rating: 4.5,
        reviews: 298,
        calories: 350,
        ingredients: ["Quinoa", "Sweet potato", "Chickpeas", "Tahini", "Kale"],
        instructions: ["Cook quinoa", "Roast vegetables", "Prepare dressing", "Assemble bowl", "Garnish"],
        tags: ["Vegan", "Healthy", "Colorful"],
        author: "Chef Emma",
        views: 18750,
        likes: 1124,
        featured: false,
        trending: true,
      },
      {
        id: 5,
        title: "French Coq au Vin",
        description: "Classic French chicken braised in red wine with mushrooms",
        image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop",
        category: "French",
        difficulty: "Hard",
        cookTime: 90,
        servings: 4,
        rating: 4.9,
        reviews: 87,
        calories: 520,
        ingredients: ["Chicken thighs", "Red wine", "Mushrooms", "Bacon", "Pearl onions"],
        instructions: ["Brown chicken", "Cook bacon", "Deglaze with wine", "Add vegetables", "Braise slowly"],
        tags: ["Classic", "Wine", "Elegant"],
        author: "Chef Pierre",
        views: 7650,
        likes: 445,
        featured: true,
        trending: false,
      },
      {
        id: 6,
        title: "Japanese Ramen Bowl",
        description: "Rich tonkotsu ramen with chashu pork and soft-boiled egg",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        category: "Japanese",
        difficulty: "Hard",
        cookTime: 180,
        servings: 2,
        rating: 4.8,
        reviews: 201,
        calories: 580,
        ingredients: ["Pork bones", "Ramen noodles", "Chashu pork", "Soft-boiled eggs", "Nori"],
        instructions: ["Make broth", "Prepare toppings", "Cook noodles", "Assemble bowl", "Garnish"],
        tags: ["Comfort food", "Authentic", "Umami"],
        author: "Chef Takeshi",
        views: 22100,
        likes: 1340,
        featured: false,
        trending: true,
      },
    ]

    const sampleCategories = [
      { name: "Italian", count: 45, color: "#e74c3c", icon: "🍝" },
      { name: "Thai", count: 32, color: "#f39c12", icon: "🌶️" },
      { name: "Moroccan", count: 18, color: "#9b59b6", icon: "🏺" },
      { name: "Healthy", count: 67, color: "#27ae60", icon: "🥗" },
      { name: "French", count: 28, color: "#3498db", icon: "🥖" },
      { name: "Japanese", count: 41, color: "#e67e22", icon: "🍜" },
      { name: "Mexican", count: 39, color: "#c0392b", icon: "🌮" },
      { name: "Indian", count: 52, color: "#f1c40f", icon: "🍛" },
    ]

    setTimeout(() => {
      setRecipes(sampleRecipes)
      setFilteredRecipes(sampleRecipes)
      setCategories(sampleCategories)
      setLoading(false)
    }, 1000)
  }, [])

  // Filter and search logic
  useEffect(() => {
    const filtered = recipes.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = !activeFilters.category || recipe.category === activeFilters.category
      const matchesDifficulty = !activeFilters.difficulty || recipe.difficulty === activeFilters.difficulty
      const matchesTime =
        !activeFilters.time ||
        (activeFilters.time === "quick" && recipe.cookTime <= 30) ||
        (activeFilters.time === "medium" && recipe.cookTime > 30 && recipe.cookTime <= 60) ||
        (activeFilters.time === "long" && recipe.cookTime > 60)
      const matchesRating = recipe.rating >= activeFilters.rating

      return matchesSearch && matchesCategory && matchesDifficulty && matchesTime && matchesRating
    })

    // Sort filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return b.likes - a.likes
        case "rating":
          return b.rating - a.rating
        case "newest":
          return b.id - a.id
        case "quickest":
          return a.cookTime - b.cookTime
        default:
          return 0
      }
    })

    setFilteredRecipes(filtered)
  }, [recipes, searchTerm, activeFilters, sortBy])

  const toggleFavorite = (recipeId) => {
    setFavorites((prev) => (prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]))
  }

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? "" : value,
    }))
  }

  const clearFilters = () => {
    setActiveFilters({
      category: "",
      difficulty: "",
      time: "",
      dietary: "",
      rating: 0,
    })
    setSearchTerm("")
  }

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe)
    setCurrentView("recipe")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <NavigationHeader currentView={currentView} setCurrentView={setCurrentView} user={user} setUser={setUser} />

      <main className="pt-20">
        {currentView === "home" && (
          <HomeView
            recipes={recipes}
            filteredRecipes={filteredRecipes}
            categories={categories}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            activeFilters={activeFilters}
            handleFilterChange={handleFilterChange}
            clearFilters={clearFilters}
            viewMode={viewMode}
            setViewMode={setViewMode}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onSelectRecipe={handleSelectRecipe}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            loading={loading}
          />
        )}

        {currentView === "recipe" && selectedRecipe && (
          <RecipeDetailView
            recipe={selectedRecipe}
            setCurrentView={setCurrentView}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </main>
    </div>
  )
}

export default App

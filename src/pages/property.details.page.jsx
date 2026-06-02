import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Bed, Bath, Square, Calendar, Heart, Share2, 
  Phone, Mail, ChevronLeft, ChevronRight,
  TrendingUp, DollarSign, Menu, X, Map
} from "lucide-react";
import { propertyService } from "../services/property.service";

export const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const data = await propertyService.getPropertyById(id);
        if (data) {
          const formattedProperty = propertyService.formatPropertyForDetails(data);
          setProperty(formattedProperty);
        } else {
          setError('Property not found');
        }
      } catch (err) {
        setError('Failed to load property details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#B3B3B3' }}>
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto" style={{ borderColor: '#2b2b2ba5' }}></div>
          <p className="mt-4" style={{ color: '#B3B3B3' }}>Loading property details...</p>
        </div>
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#D4D4D4' }}>
        <div className="text-center">
          <p className="text-lg" style={{ color: '#464646' }}>{error || 'Property not found'}</p>
        </div>
      </div>
    );
  }

  const tabs = ["Overview", "Location", "Property Info", "Schools", "Similar Homes"];

  return (
    <section className="relative min-h-screen" style={{ backgroundColor: '#D4D4D4' }}>
      {/* Image Gallery */}
      <div className="relative h-[60vh]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full h-full"
        >
          <img
            src={property.images[currentImage]}
            alt={property.address}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </motion.div>

        {/* Image Navigation */}
        <button
          onClick={() => setCurrentImage((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', backdropFilter: 'blur(12px)' }}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentImage((prev) => (prev === property.images.length - 1 ? 0 : prev + 1))}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full transition-colors"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#FFFFFF', backdropFilter: 'blur(12px)' }}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-sm" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#FFFFFF', backdropFilter: 'blur(12px)' }}>
          {currentImage + 1} / {property.images.length}
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button className="p-3 rounded-full transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', backdropFilter: 'blur(12px)' }}>
            <Heart className="w-5 h-5" />
          </button>
          <button className="p-3 rounded-full transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', backdropFilter: 'blur(12px)' }}>
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ 
              color: '#000000',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontWeight: 500,
              letterSpacing: '-0.03em'
            }}
          >
            {property.title}
          </h1>
          <p className="text-xl mb-4" style={{ color: '#a3a3a3' }}>{property.address}</p>
          <p className="text-lg mb-4" style={{ color: '#a3a3a3' }}>{property.city}, {property.state} {property.zip}</p>
          
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <p 
              className="text-4xl font-bold"
              style={{ 
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 500
              }}
            >
              {property.price}
            </p>
            <div className="flex flex-wrap gap-6" style={{ color: '#000000' }}>
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5" style={{ color: '#000000' }} />
                <span className="font-semibold">{property.beds}</span>
                <span style={{ color: '#000000' }}>Beds</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5" style={{ color: '#000000' }} />
                <span className="font-semibold">{property.baths}</span>
                <span style={{ color: '#000000' }}>Baths</span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="w-5 h-5" style={{ color: '#000000' }} />
                <span className="font-semibold">{property.sqft.toLocaleString()}</span>
                <span style={{ color: '#000000' }}>Sq. Ft.</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" style={{ color: '#3b82f6' }} />
                <span className="font-semibold">{property.pricePerSqft}</span>
                <span style={{ color: '#000000' }}>/ Sq. Ft.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="mb-8 sticky top-0 z-10" style={{ backgroundColor: '#F7E6CA', borderBottom: '1px solid #464646' }}>
          <div className="flex items-center gap-2 overflow-x-auto">
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" style={{ color: '#2b2b2ba5' }} /> : <Menu className="w-6 h-6" style={{ color: '#2b2b2ba5' }} />}
            </button>
            <div className={`flex gap-6 ${mobileMenuOpen ? 'flex-col' : 'hidden lg:flex'}`}>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab.toLowerCase().replace(' ', ''));
                    setMobileMenuOpen(false);
                  }}
                  className={`cursor-pointer pb-4 px-4 text-sm font-medium whitespace-nowrap transition-all duration-200 rounded-t-lg ${
                    activeTab === tab.toLowerCase().replace(' ', '')
                      ? "border-b-2"
                      : "hover:bg-[#E8D59E]/30"
                  }`}
                  style={{
                    color: activeTab === tab.toLowerCase().replace(' ', '') ? '#2b2b2ba5' : '#464646',
                    borderColor: activeTab === tab.toLowerCase().replace(' ', '') ? '#E8D59E' : 'transparent',
                    backgroundColor: activeTab === tab.toLowerCase().replace(' ', '') ? '#E8D59E' : 'transparent'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 
                    className="text-2xl font-bold mb-4"
                    style={{ 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Overview
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#000000' }}>{property.description}</p>
                </div>

                {/* Payment Calculator */}
                <div className="rounded-2xl p-6" style={{ backgroundColor: '#2b2b2ba5', border: '1px solid #464646' }}>
                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ 
                      color: '#F7E6CA',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Payment Calculator
                  </h3>
                  <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: '#464646', border: '1px solid #D4D4D4' }}>
                    <p 
                      className="text-3xl font-bold mb-2"
                      style={{ 
                        color: '#F7E6CA',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        fontWeight: 500
                      }}
                    >
                      $7,235 per month
                    </p>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>30 year fixed, 6.36% Interest</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#464646' }}>
                      <span style={{ color: '#D4D4D4' }}>Principal and Interest</span>
                      <span className="font-semibold" style={{ color: '#F7E6CA' }}>$5,422</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#464646' }}>
                      <span style={{ color: '#D4D4D4' }}>Property Taxes</span>
                      <span className="font-semibold" style={{ color: '#F7E6CA' }}>$1,064</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-lg" style={{ backgroundColor: '#464646' }}>
                      <span style={{ color: '#D4D4D4' }}>HOA Dues</span>
                      <span className="font-semibold" style={{ color: '#F7E6CA' }}>$750</span>
                    </div>
                  </div>
                  <button 
                    className="w-full mt-4 px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                    style={{ 
                      backgroundColor: '#E8D59E',
                      color: '#000000',
                      borderRadius: '10px'
                    }}
                  >
                    Get preapproved with Rocket Mortgage
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "location" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Location
                </h2>
                <div className="rounded-2xl h-96 flex items-center justify-center" style={{ backgroundColor: '#2b2b2ba5' }}>
                  <div className="text-center">
                    <Map className="w-16 h-16 mx-auto mb-4" style={{ color: '#F7E6CA' }} />
                    <p style={{ color: '#F7E6CA' }}>Interactive Map</p>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>{property.address}, {property.city}, {property.state}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "propertyinfo" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Property Details for {property.address}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Status</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.status}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>MLS #</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.mlsNumber}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Days on Market</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.daysOnMarket}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Taxes</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.taxes}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>HOA Fees</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.hoaFees}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Property Type</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.propertyType}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Year Built</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.yearBuilt}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Lot Size</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.lotSize}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>County</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.county}</p>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                    <p className="text-sm" style={{ color: '#D4D4D4' }}>Style</p>
                    <p className="font-semibold" style={{ color: '#F7E6CA' }}>No Pool/No Water</p>
                  </div>
                </div>

                <div>
                  <h3 
                    className="text-xl font-bold mb-4"
                    style={{ 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    Building Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                      <p className="text-sm" style={{ color: '#D4D4D4' }}>Stories</p>
                      <p className="font-semibold" style={{ color: '#F7E6CA' }}>1</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                      <p className="text-sm" style={{ color: '#D4D4D4' }}>Year Built</p>
                      <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.yearBuilt}</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                      <p className="text-sm" style={{ color: '#D4D4D4' }}>Lot Size</p>
                      <p className="font-semibold" style={{ color: '#F7E6CA' }}>{property.lotSize}</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                      <p className="text-sm" style={{ color: '#D4D4D4' }}>Design</p>
                      <p className="font-semibold" style={{ color: '#F7E6CA' }}>House</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}


            {activeTab === "schools" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Schools near {property.address}
                </h2>
                <p className="mb-6" style={{ color: '#000000' }}>This home is within {property.county}.</p>
                <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #464646' }}>
                  <table className="w-full">
                    <thead style={{ backgroundColor: '#2b2b2ba5a5' }}>
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Rating</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>School</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Grades</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Distance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {property.schools.map((school, index) => (
                        <tr key={index} style={{ borderTop: '1px solid #464646', backgroundColor: index % 2 === 0 ? '#FFFFFF' : '#F7E6CA' }}>
                          <td className="px-4 py-3">
                            <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#E8D59E', color: '#000000' }}>
                              {school.rating}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-medium" style={{ color: '#000000' }}>{school.name}</td>
                          <td className="px-4 py-3" style={{ color: '#000000' }}>{school.type}</td>
                          <td className="px-4 py-3" style={{ color: '#000000' }}>{school.grades}</td>
                          <td className="px-4 py-3" style={{ color: '#000000' }}>{school.distance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm" style={{ color: '#B3B3B3' }}>School ratings and boundaries are provided by GreatSchools.org and Pitney Bowes. This information should only be used as a reference.</p>
              </motion.div>
            )}

            {activeTab === "similarhomes" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 
                  className="text-2xl font-bold mb-4"
                  style={{ 
                    color: '#000000',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontWeight: 500
                  }}
                >
                  Similar Homes
                </h2>
                <p className="mb-6" style={{ color: '#000000' }}>Similar homes comparable in price, location and layout to {property.address}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {property.similarProperties.map((prop) => (
                    <div key={prop.id} className="rounded-xl overflow-hidden cursor-pointer transition-all" style={{ backgroundColor: '#FFFFFF', border: '1px solid #DDDDDD' }}>
                      <div className="aspect-[4/3] relative">
                        <img
                          src={prop.image}
                          alt={prop.address}
                          className="w-full h-full object-cover"
                        />
                        {prop.listedBy && (
                          <div className="absolute top-2 left-2 px-2 py-1 text-xs rounded" style={{ backgroundColor: '#2b2b2ba5', color: '#FFFFFF' }}>
                            Listed By {prop.listedBy}
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <p 
                          className="text-2xl font-bold mb-2"
                          style={{ 
                            color: '#000000',
                            fontFamily: 'system-ui, -apple-system, sans-serif',
                            fontWeight: 500
                          }}
                        >
                          {prop.price}
                        </p>
                        <p className="text-sm mb-3" style={{ color: '#000000' }}>{prop.address}</p>
                        <div className="flex items-center gap-4 text-sm" style={{ color: '#B3B3B3' }}>
                          <div className="flex items-center gap-1">
                            <Bed className="w-4 h-4" />
                            <span>{prop.beds}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-4 h-4" />
                            <span>{prop.baths}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Square className="w-4 h-4" />
                            <span>{prop.sqft.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>{prop.acres}</span>
                            <span>acres</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Agent Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#bfbfbf', border: '1px solid #464646' }}
            >
              <p className="text-sm mb-4" style={{ color: '#2b2b2ba5' }}>Listing Agent</p>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={property.agent.image}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 
                    className="font-bold"
                    style={{ 
                      color: '#000000',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                      fontWeight: 500
                    }}
                  >
                    {property.agent.name}
                  </h3>
                  <p className="text-sm" style={{ color: '#a3a3a3' }}>{property.agent.company}</p>
                  <p className="text-sm mt-1" style={{ color: '#1a1a1a' }}>P: {property.agent.phone}</p>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  className="w-full px-4 py-3 font-semibold transition-colors flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: '#E8D59E',
                    color: '#000000',
                    borderRadius: '10px'
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Agent
                </button>
                <button 
                  className="w-full px-4 py-3 font-medium transition-colors flex items-center justify-center gap-2"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    border: '1px solid #D4D4D4',
                    borderRadius: '10px'
                  }}
                >
                  <Mail className="w-4 h-4" />
                  Send Message
                </button>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#bfbfbf', border: '1px solid #464646' }}
            >
              <h3 
                className="font-bold mb-4"
                style={{ 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 500
                }}
              >
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button 
                  className="w-full px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: '#E8D59E',
                    color: '#000000',
                    borderRadius: '10px'
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Tour
                </button>
                <button 
                  className="w-full px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    border: '2px solid #D4D4D4',
                    borderRadius: '10px'
                  }}
                >
                  <DollarSign className="w-5 h-5" />
                  Get Mortgage Quote
                </button>
                <button 
                  className="w-full px-6 py-4 font-semibold transition-all duration-200 flex items-center justify-center gap-3"
                  style={{ 
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    border: '2px solid #D4D4D4',
                    borderRadius: '10px'
                  }}
                >
                  <TrendingUp className="w-5 h-5" />
                  Request Valuation
                </button>
              </div>
            </motion.div>

            {/* Explore Nearby */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-2xl p-6"
              style={{ backgroundColor: '#bfbfbf', border: '1px solid #464646' }}
            >
              <h3 
                className="font-bold mb-4"
                style={{ 
                  color: '#000000',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  fontWeight: 500
                }}
              >
                Explore Nearby Homes
              </h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:underline" style={{ color: '#000000' }}>Boca Falls Homes for Sale</a>
                <a href="#" className="block text-sm hover:underline" style={{ color: '#000000' }}>Boca Winds Homes for Sale</a>
                <a href="#" className="block text-sm hover:underline" style={{ color: '#000000' }}>Brookside Homes for Sale</a>
                <a href="#" className="block text-sm hover:underline" style={{ color: '#000000' }}>Parkland Homes for Sale</a>
                <a href="#" className="block text-sm hover:underline" style={{ color: '#000000' }}>Coral Springs Homes for Sale</a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Independent Property History Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ 
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 500
              }}
            >
              Property History for {property.address}
            </h2>
            <div className="rounded-lg overflow-hidden" style={{ border: '1px solid #D4D4D4' }}>
              <table className="w-full">
                <thead style={{ backgroundColor: '#2b2b2ba5' }}>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Date</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Event & Source</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Price</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold" style={{ color: '#F7E6CA' }}>Appreciation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderTop: '1px solid #D4D4D4', backgroundColor: '#FFFFFF' }}>
                    <td className="px-4 py-3" style={{ color: '#000000' }}>Apr 6, 2026</td>
                    <td className="px-4 py-3" style={{ color: '#000000' }}>Listed (Active)<br /><span className="text-sm" style={{ color: '#B3B3B3' }}>Beaches MLS #{property.mlsNumber}</span></td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#000000' }}>{property.price}</td>
                    <td className="px-4 py-3" style={{ color: '#B3B3B3' }}>—</td>
                  </tr>
                  <tr style={{ borderTop: '1px solid #D4D4D4', backgroundColor: '#F7E6CA' }}>
                    <td className="px-4 py-3" style={{ color: '#000000' }}>Jul 30, 2020</td>
                    <td className="px-4 py-3" style={{ color: '#000000' }}>Sold (Public Record)<br /><span className="text-sm" style={{ color: '#B3B3B3' }}>Public Record #674497901</span></td>
                    <td className="px-4 py-3 font-semibold" style={{ color: '#000000' }}>$664,400</td>
                    <td className="px-4 py-3" style={{ color: '#B3B3B3' }}>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Independent Public Records Section */}
          <div>
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ 
                color: '#000000',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontWeight: 500
              }}
            >
              Public Records for {property.address}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                <p className="text-sm" style={{ color: '#D4D4D4' }}>Taxable Value - Land</p>
                <p className="font-semibold" style={{ color: '#F7E6CA' }}>-</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                <p className="text-sm" style={{ color: '#D4D4D4' }}>Taxable Value - Additions</p>
                <p className="font-semibold" style={{ color: '#F7E6CA' }}>-</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                <p className="text-sm" style={{ color: '#D4D4D4' }}>Taxable Value - Total</p>
                <p className="font-semibold" style={{ color: '#F7E6CA' }}>-</p>
              </div>
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#2b2b2ba5' }}>
                <p className="text-sm" style={{ color: '#D4D4D4' }}>APN</p>
                <p className="font-semibold" style={{ color: '#F7E6CA' }}>47-41-30-02-1340</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

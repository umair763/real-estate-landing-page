const API_BASE_URL = 'http://localhost:3000';

// Helper function to handle json-server response format
const unwrapData = (data) => {
  // json-server returns data directly as an array, but if it's wrapped in an object with a 'properties' key, unwrap it
  if (data && data.properties && Array.isArray(data.properties)) {
    return data.properties;
  }
  // If data is already an array, return it
  if (Array.isArray(data)) {
    return data;
  }
  // Otherwise return empty array
  return [];
};

export const propertyService = {
  // Get all properties
  getAllProperties: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties`);
      if (!response.ok) throw new Error('Failed to fetch properties');
      const data = await response.json();
      return unwrapData(data);
    } catch (error) {
      console.error('Error fetching properties:', error);
      return [];
    }
  },

  // Get property by ID
  getPropertyById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties/${id}`);
      if (!response.ok) throw new Error('Failed to fetch property');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching property:', error);
      return null;
    }
  },

  // Get properties by category
  getPropertiesByCategory: async (category) => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties?category=${category}`);
      if (!response.ok) throw new Error('Failed to fetch properties by category');
      const data = await response.json();
      return unwrapData(data);
    } catch (error) {
      console.error('Error fetching properties by category:', error);
      return [];
    }
  },

  // Get featured properties
  getFeaturedProperties: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/properties?featured=true`);
      if (!response.ok) throw new Error('Failed to fetch featured properties');
      const data = await response.json();
      return unwrapData(data);
    } catch (error) {
      console.error('Error fetching featured properties:', error);
      return [];
    }
  },

  // Format price for display
  formatPrice: (price, category = 'buy') => {
    if (category === 'rent') {
      return `$${price.toLocaleString()}/mo`;
    }
    return `$${price.toLocaleString()}`;
  },

  // Format property data for UI components
  formatPropertyForCard: (property) => ({
    id: property.id,
    title: property.title,
    location: property.location,
    price: propertyService.formatPrice(property.price, property.category),
    beds: property.beds,
    baths: property.baths,
    sqft: property.sqft,
    image: property.image,
    verified: property.verified,
    featured: property.featured,
    category: property.category
  }),

  // Format property data for details page
  formatPropertyForDetails: (property) => ({
    ...property,
    price: propertyService.formatPrice(property.price, property.category),
    pricePerSqft: `$${property.pricePerSqft}`,
    taxes: `$${property.taxes.toLocaleString()} / year`,
    hoaFees: `$${property.hoaFees.toLocaleString()} / month`,
    similarProperties: propertyService.getSimilarProperties(property)
  }),

  // Get similar properties (excluding current property)
  getSimilarProperties: (currentProperty) => {
    // This would typically be an API call, but for now we'll return empty
    // In a real app, you'd fetch similar properties based on location, price range, etc.
    // The currentProperty parameter would be used to filter out the current property
    // and find similar ones based on criteria like location, price, beds, baths, etc.
    console.log('Finding similar properties for:', currentProperty.id);
    return [];
  }
};

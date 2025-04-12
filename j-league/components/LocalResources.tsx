import React, { useState } from 'react';
import { MapPin, Phone, Globe, Clock } from 'lucide-react';

interface LocalResourcesProps {
  topic: string;
  location: string;
  onComplete: () => void;
}

function LocalResources({ topic, location, onComplete }: LocalResourcesProps) {
  const [resources] = useState([
    {
      name: 'Legal Aid Society',
      type: 'Legal Clinic',
      address: '123 Main St, City, State',
      phone: '(555) 123-4567',
      website: 'www.legalaid.org',
      hours: 'Mon-Fri: 9AM-5PM',
      distance: '2.3 miles'
    },
    {
      name: 'Community Law Center',
      type: 'Non-Profit Organization',
      address: '456 Oak Ave, City, State',
      phone: '(555) 987-6543',
      website: 'www.communitylawcenter.org',
      hours: 'Mon-Thu: 10AM-6PM',
      distance: '3.1 miles'
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-gray-900">Local Legal Resources</h2>
        <p className="mt-2 text-sm text-gray-600">
          Legal resources and support services near you
        </p>
      </div>

      <div className="space-y-4">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm p-4 border border-gray-100"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {resource.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium">{resource.type}</p>
            
            <div className="mt-3 space-y-2">
              <div className="flex items-center text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                <span className="flex-1">{resource.address}</span>
                <span className="ml-2 text-xs text-blue-600">
                  ({resource.distance})
                </span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Phone className="h-4 w-4 mr-2 text-gray-400" />
                <a href={`tel:${resource.phone}`} className="hover:text-blue-600">
                  {resource.phone}
                </a>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Globe className="h-4 w-4 mr-2 text-gray-400" />
                <a
                  href={`https://${resource.website}`}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {resource.website}
                </a>
              </div>
              
              <div className="flex items-center text-sm text-gray-600">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <span>{resource.hours}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-4">
        <button
          onClick={onComplete}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Continue to Action Steps
        </button>
      </div>
    </div>
  );
}

export default LocalResources;
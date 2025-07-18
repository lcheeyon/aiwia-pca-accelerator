
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-aiwia-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/8c862949-ea8c-434b-abb1-8edc26aa2707.png"
                alt="AIWIA Consultancy Logo"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Accelerate Responsible Artificial Intelligence Adoption with embedded data Privacy, 
              Cybersecurity and Agile (PCA) process management framework.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>111 North Bridge Road, #20-05</p>
              <p>Peninsular Plaza, Singapore 179098</p>
              <p>UEN: 202530684N</p>
              <p className="mt-2">© 2025 AIWIA Consultancy. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-aiwia-green transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-aiwia-green transition-colors">About</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-aiwia-green transition-colors">News</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-aiwia-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: info@aiwia.app</li>
              <li>Website: aiwia.app</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

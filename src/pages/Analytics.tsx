
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import StarFieldCanvas from '@/components/StarField';
import AnalyticsDashboard from '@/components/AnalyticsDashboard';
import VisitorTracker from '@/components/VisitorTracker';

const Analytics = () => {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <VisitorTracker />
      <StarFieldCanvas />
      
      {/* Header */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="text-cosmic-cyan hover:text-white"
            >
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold gradient-text mb-8">
              Analytics Dashboard
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Track visitor engagement and portfolio performance in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Dashboard */}
      <section className="relative">
        <div className="max-w-7xl mx-auto">
          <AnalyticsDashboard />
        </div>
      </section>
    </div>
  );
};

export default Analytics;

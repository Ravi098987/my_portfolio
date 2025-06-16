
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Users, Clock, Globe } from 'lucide-react';

interface VisitorData {
  timestamp: string;
  userAgent: string;
  referrer: string;
  pathname: string;
  sessionId: string;
}

const AnalyticsDashboard = () => {
  const [visitors, setVisitors] = useState<VisitorData[]>([]);
  const [stats, setStats] = useState({
    totalVisits: 0,
    uniqueVisitors: 0,
    topPages: [] as { page: string; count: number }[],
    recentVisits: [] as VisitorData[]
  });

  useEffect(() => {
    const loadVisitorData = () => {
      const visitorLogs = JSON.parse(localStorage.getItem('visitor_logs') || '[]');
      setVisitors(visitorLogs);

      // Calculate stats
      const uniqueSessions = new Set(visitorLogs.map((v: VisitorData) => v.sessionId));
      const pageCount: Record<string, number> = {};
      
      visitorLogs.forEach((visitor: VisitorData) => {
        pageCount[visitor.pathname] = (pageCount[visitor.pathname] || 0) + 1;
      });

      const topPages = Object.entries(pageCount)
        .map(([page, count]) => ({ page, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);

      const recentVisits = visitorLogs
        .sort((a: VisitorData, b: VisitorData) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 10);

      setStats({
        totalVisits: visitorLogs.length,
        uniqueVisitors: uniqueSessions.size,
        topPages,
        recentVisits
      });
    };

    loadVisitorData();
    
    // Update every 10 seconds
    const interval = setInterval(loadVisitorData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalVisits}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.uniqueVisitors}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pages Tracked</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.topPages.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Session</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {localStorage.getItem('visitor_session_id') ? '1' : '0'}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.topPages.map((page, index) => (
                <div key={page.page} className="flex justify-between items-center">
                  <span className="text-sm">{page.page}</span>
                  <Badge variant="secondary">{page.count} visits</Badge>
                </div>
              ))}
              {stats.topPages.length === 0 && (
                <p className="text-sm text-gray-500">No page data available yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Visits</CardTitle>
            <CardDescription>Latest visitor activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {stats.recentVisits.map((visit, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <div>
                    <div className="font-medium">{visit.pathname}</div>
                    <div className="text-gray-500 text-xs">
                      {new Date(visit.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {visit.sessionId.slice(0, 8)}...
                  </Badge>
                </div>
              ))}
              {stats.recentVisits.length === 0 && (
                <p className="text-sm text-gray-500">No recent visits</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

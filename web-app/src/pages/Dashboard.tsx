import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DayOfWeekPerformanceChart from "@/components/DayOfWeekPerformanceChart";
import HeartRateScoreCorrelationChart from "@/components/HeartRateScoreCorrelationChart";

const Dashboard = () => {
  // In a real app, this data would come from processing the uploaded CSV files
  // For now, we'll use mock data
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate data processing delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-navy-900 mb-2">
              Training Performance Dashboard
            </h1>
            <p className="text-navy-600">
              Analysis of officer performance data based on heart rate and
              MANTIS accuracy metrics.
            </p>
          </div>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-64">
              <div className="w-12 h-12 rounded-full border-4 border-navy-200 border-t-navy-600 animate-spin"></div>
              <p className="mt-4 text-navy-700">Processing data...</p>
            </div>
          ) : (
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Detailed Analysis</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="shadow-md">
                    <CardHeader className="bg-navy-50 rounded-t-lg">
                      <CardTitle className="text-navy-900">
                        Performance by Day of Week
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <DayOfWeekPerformanceChart />
                    </CardContent>
                  </Card>
                  <Card className="shadow-md">
                    <CardHeader className="bg-navy-50 rounded-t-lg">
                      <CardTitle className="text-navy-900">
                        Heart Rate vs. Score Correlation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <HeartRateScoreCorrelationChart />
                    </CardContent>
                  </Card>
                </div>
                <Card className="shadow-md">
                  <CardHeader className="bg-navy-50 rounded-t-lg">
                    <CardTitle className="text-navy-900">
                      Key Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <h3 className="font-medium text-green-800 mb-1">
                          Optimal Training Days
                        </h3>
                        <p className="text-green-700">
                          Based on the data, Wednesday and Thursday training
                          sessions show the highest average performance scores.
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <h3 className="font-medium text-blue-800 mb-1">
                          Heart Rate Correlation
                        </h3>
                        <p className="text-blue-700">
                          Officers tend to perform best when their heart rate is
                          in the 120-140 BPM range, suggesting optimal arousal
                          levels for accuracy.
                        </p>
                      </div>
                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <h3 className="font-medium text-amber-800 mb-1">
                          Improvement Opportunity
                        </h3>
                        <p className="text-amber-700">
                          Monday training sessions show the lowest performance.
                          Consider scheduling more focused, lower-intensity
                          sessions on Mondays.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="details">
                <Card className="shadow-md">
                  <CardHeader className="bg-navy-50 rounded-t-lg">
                    <CardTitle className="text-navy-900">
                      Detailed Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-700 mb-4">
                      Detailed analysis of individual officer performance
                      metrics and session data.
                    </p>
                    <div className="border rounded-lg overflow-hidden">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-navy-100">
                            <th className="text-left p-3 border-b">Day</th>
                            <th className="text-left p-3 border-b">
                              Avg. Score
                            </th>
                            <th className="text-left p-3 border-b">
                              Avg. Heart Rate
                            </th>
                            <th className="text-left p-3 border-b">
                              Session Count
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Monday</td>
                            <td className="p-3 border-b">72.4</td>
                            <td className="p-3 border-b">135 BPM</td>
                            <td className="p-3 border-b">12</td>
                          </tr>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Tuesday</td>
                            <td className="p-3 border-b">78.1</td>
                            <td className="p-3 border-b">128 BPM</td>
                            <td className="p-3 border-b">15</td>
                          </tr>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Wednesday</td>
                            <td className="p-3 border-b">85.3</td>
                            <td className="p-3 border-b">132 BPM</td>
                            <td className="p-3 border-b">18</td>
                          </tr>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Thursday</td>
                            <td className="p-3 border-b">83.7</td>
                            <td className="p-3 border-b">129 BPM</td>
                            <td className="p-3 border-b">16</td>
                          </tr>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Friday</td>
                            <td className="p-3 border-b">79.2</td>
                            <td className="p-3 border-b">138 BPM</td>
                            <td className="p-3 border-b">14</td>
                          </tr>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Saturday</td>
                            <td className="p-3 border-b">76.8</td>
                            <td className="p-3 border-b">142 BPM</td>
                            <td className="p-3 border-b">8</td>
                          </tr>
                          <tr className="hover:bg-navy-50">
                            <td className="p-3 border-b">Sunday</td>
                            <td className="p-3 border-b">74.5</td>
                            <td className="p-3 border-b">140 BPM</td>
                            <td className="p-3 border-b">5</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          )}
        </div>
      </main>
      <footer className="bg-navy-50 py-6 border-t border-navy-100 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/lovable-uploads/f880bba1-6d3b-4789-8237-cc9a760a3f99.png"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-navy-900 font-medium">
                Pulse Precision Police
              </span>
            </div>
            <div className="text-navy-600 text-sm">
              © {new Date().getFullYear()} Pulse Precision Police. All rights
              reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;

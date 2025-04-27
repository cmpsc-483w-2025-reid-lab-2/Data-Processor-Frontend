import { useState } from "react";
import Navbar from "@/components/Navbar";
import FileUploader from "@/components/FileUploader";
import { Button } from "@/components/ui/button";
import { Activity, Target } from "lucide-react";
import { toast } from "sonner";
import { uploadTrainingData } from "@/lib/api/upload";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [heartRateFile, setHeartRateFile] = useState<File | null>(null);
  const [mantisFile, setMantisFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleHeartRateUpload = (file: File) => {
    setHeartRateFile(file);
  };

  const handleMantisUpload = (file: File) => {
    setMantisFile(file);
  };

  const handleAnalyze = async () => {
    if (!mantisFile) {
      toast.error("Please upload the MANTIS CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("mantisFile", mantisFile);

    try {
      const res = await fetch(
        "https://reid-lab2-backend.onrender.com/api/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success("MANTIS session uploaded successfully");
        navigate("/Dashboard");
      } else {
        toast.error(data.error || "Upload failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error during upload.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Optimize Police Training Through Data Analysis
            </h1>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Upload your officer heart rate and MANTIS system data to identify
              patterns and improve training effectiveness.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            <FileUploader
              title="MANTIS Data"
              description="Upload CSV files from the MANTIS accuracy tracking system"
              icon={<Target className="h-5 w-5 text-navy-700" />}
              onFileUpload={handleMantisUpload}
            />
          </div>

          <div className="text-center">
            <Button
              className="bg-navy-700 hover:bg-navy-800 text-white px-8 py-6 text-lg"
              onClick={handleAnalyze}
              disabled={!mantisFile}
            >
              Analyze Data
            </Button>

            <p className="mt-4 text-sm text-navy-500">
              Data is processed securely and confidentially
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-navy-50 py-6 border-t border-navy-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src="/lovable-uploads/f880bba1-6d3b-4789-8237-cc9a760a3f99.png"
                alt="Logo"
                className="h-8 w-8 mr-2"
              />
              <span className="text-navy-900 font-medium">
                Situational Awareness Tool
              </span>
            </div>
            <div className="text-navy-600 text-sm">
              © {new Date().getFullYear()} Situational Awareness Tool. All
              rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

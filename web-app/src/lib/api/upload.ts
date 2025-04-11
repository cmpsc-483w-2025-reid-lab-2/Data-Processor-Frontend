export const uploadTrainingData = async (
    heartRateFile: File,
    mantisFile: File
  ): Promise<{ success: boolean; message: string }> => {
    const formData = new FormData();
    formData.append("heartRateFile", heartRateFile);
    formData.append("mantisFile", mantisFile);
  
    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
  
    const data = await res.json();
  
    return {
      success: res.ok,
      message: data.message || data.error || "Unknown response",
    };
  };
  
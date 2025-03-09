"use client";

import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Badge, FileText } from "lucide-react";
import React from "react";

function pages() {
  const handleDownloadLegals = async () => {
    const response = await fetch(
      "/files/Legal Agreements-20250309T034859Z-001.zip"
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Legal Agreement"; // Specify the name for the downloaded file
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url); // Clean up
  };

  const handleDownloadCurriculum = async () => {
    const response = await fetch("/files/Program Structure (1).pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Curriculum"; // Specify the name for the downloaded file
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url); // Clean up
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-20 justify-center p-5 min-h-dvh font-exo max-w-4xl mx-auto">
        <div className="flex flex-col">
          <h4 className="text-xl md:text-3xl lg:text-6xl font-semibold text-white">
            Resources and Agreement
          </h4>
          <p className="text-sm md:text-lg">
            Find all necessary resources and legal agreements to understand how
            The Hive Incubator supports you.
          </p>
        </div>
        <div className="flex w-full flex-col md:flex-row justify-between items-center gap-4">
          <div
            className="flex gap-8 bg-gradient-to-b from-black to-gold-foreground/50 p-5 border border-gold items-center cursor-pointer"
            onClick={handleDownloadCurriculum}
          >
            <div className="flex flex-col gap-3">
              <h4 className="text-lg">Curriculum</h4>
              <p className="text-xs">Download the Curriculum</p>
            </div>
            <FileText />
          </div>
          <div
            className="flex gap-8 bg-gradient-to-b from-black to-gold-foreground/50 p-5 border border-gold items-center cursor-pointer"
            onClick={handleDownloadLegals}
          >
            <div className="flex flex-col gap-3">
              <h4 className="text-lg">Legal Agreement</h4>
              <p className="text-xs">Download the document</p>
            </div>
            <Badge />
          </div>
        </div>
      </div>
      <FAQ />
      <div className="pt-8 container">
        <Footer />
      </div>
    </div>
  );
}

export default pages;

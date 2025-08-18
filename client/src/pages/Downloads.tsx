
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Downloads() {
  const downloadItems = [
    {
      title: "Elfijr Contractors Catalogue",
      description: "Comprehensive catalogue of our contracting services and past projects",
      pdfUrl: "/downloads/catalogue.pdf"
    },
    {
      title: "Elfijr Contractors Profile",
      description: "Detailed company profile showcasing our expertise and achievements",
      pdfUrl: "/downloads/profile.pdf"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#004080] mb-8">Downloads</h1>
        <div className="grid gap-6">
          {downloadItems.map((item) => (
            <Card key={item.title} className="overflow-hidden border border-[#004080]/10">
              <CardContent className="p-6">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#004080] mb-2">{item.title}</h2>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-[#004080] text-[#004080] hover:bg-[#004080] hover:text-white"
                    onClick={() => window.open(item.pdfUrl, '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

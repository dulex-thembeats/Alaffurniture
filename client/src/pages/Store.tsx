
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";

export default function Store() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <ShoppingBag className="mx-auto h-24 w-24 text-[#E39D1A]" />
        </div>
        <Card className="overflow-hidden border border-[#004080]/10">
          <CardContent className="p-12">
            <h1 className="text-4xl font-bold text-[#004080] mb-4">Store Coming Soon</h1>
            <p className="text-muted-foreground text-lg">
              We're working hard to bring you our online store. Stay tuned for updates!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

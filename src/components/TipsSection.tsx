import { Card } from "@/components/ui/card";
import { Lightbulb, Clock, Sparkles } from "lucide-react";

interface TipsSectionProps {
  makeAhead: string[];
  presentation: string[];
  proTips: string[];
}

export const TipsSection = ({ makeAhead, presentation, proTips }: TipsSectionProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Make-Ahead Tips</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {makeAhead.map((tip, index) => (
            <li key={index} className="leading-relaxed">• {tip}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-secondary" />
          <h3 className="font-semibold text-foreground">Presentation</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {presentation.map((tip, index) => (
            <li key={index} className="leading-relaxed">• {tip}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-card to-muted/20">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">Pro Tips</h3>
        </div>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {proTips.map((tip, index) => (
            <li key={index} className="leading-relaxed">• {tip}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

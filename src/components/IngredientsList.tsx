import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

interface IngredientsListProps {
  sections: {
    title: string;
    items: string[];
  }[];
}

export const IngredientsList = ({ sections }: IngredientsListProps) => {
  return (
    <Card className="p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Ingredients</h2>
      <div className="space-y-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-4 text-primary">{section.title}</h3>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Card>
  );
};

import { Clock, Users, ChefHat } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RecipeHeaderProps {
  title: string;
  description: string;
  servings: number;
  prepTime: string;
  cookTime: string;
  allergyInfo: string[];
}

export const RecipeHeader = ({
  title,
  description,
  servings,
  prepTime,
  cookTime,
  allergyInfo,
}: RecipeHeaderProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-6 py-6 border-y border-border">
        <div className="flex items-center gap-3">
          <Users className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Serves</p>
            <p className="font-semibold text-foreground">{servings} guests</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Prep Time</p>
            <p className="font-semibold text-foreground">{prepTime}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ChefHat className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm text-muted-foreground">Cook Time</p>
            <p className="font-semibold text-foreground">{cookTime}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {allergyInfo.map((allergy, index) => (
          <Badge key={index} variant="secondary" className="text-sm">
            {allergy}
          </Badge>
        ))}
      </div>
    </div>
  );
};

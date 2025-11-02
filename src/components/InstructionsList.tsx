import { Card } from "@/components/ui/card";

interface InstructionsListProps {
  steps: string[];
}

export const InstructionsList = ({ steps }: InstructionsListProps) => {
  return (
    <Card className="p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Instructions</h2>
      <ol className="space-y-6">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
              {index + 1}
            </span>
            <p className="text-foreground pt-1 flex-1">{step}</p>
          </li>
        ))}
      </ol>
    </Card>
  );
};

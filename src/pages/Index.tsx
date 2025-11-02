import { RecipeHeader } from "@/components/RecipeHeader";
import { IngredientsList } from "@/components/IngredientsList";
import { InstructionsList } from "@/components/InstructionsList";
import { TipsSection } from "@/components/TipsSection";
import heroImage from "@/assets/hero-dish.jpg";

const Index = () => {
  const ingredientSections = [
    {
      title: "For the Herb-Crusted Pork",
      items: [
        "4 lbs (1.8kg) pork tenderloin (2-3 tenderloins)",
        "1/4 cup fresh parsley",
        "1/4 cup fresh basil",
        "2 tablespoons fresh rosemary",
        "8 cloves garlic",
        "1/3 cup olive oil",
        "2 tablespoons Dijon mustard (gluten-free)",
        "Salt and black pepper to taste",
      ],
    },
    {
      title: "For the Crispy Potatoes",
      items: [
        "5 lbs baby potatoes (halved)",
        "1/4 cup olive oil",
        "4 cloves garlic (minced)",
        "2 tablespoons fresh thyme",
        "Salt and pepper to taste",
      ],
    },
    {
      title: "For the Tomato Confit",
      items: [
        "3 lbs cherry or grape tomatoes",
        "1/2 cup olive oil",
        "6 cloves garlic (sliced)",
        "Fresh basil leaves",
        "1 tablespoon balsamic vinegar",
        "Salt and sugar to taste",
      ],
    },
  ];

  const instructions = [
    "Prepare the herb paste: In your blender, combine parsley, basil, rosemary, garlic, olive oil, Dijon mustard, salt, and pepper. Blend until smooth. This can be done up to 2 days ahead.",
    "Marinate the pork: Rub the herb paste all over the pork tenderloins. Cover and refrigerate for at least 2 hours, or overnight for best flavor.",
    "Prepare potatoes: Toss halved potatoes with olive oil, minced garlic, thyme, salt, and pepper. You can prep these 4 hours ahead and keep refrigerated.",
    "Make tomato confit (can be done 1 day ahead): In a microwave-safe dish, combine tomatoes, olive oil, sliced garlic, and salt. Microwave on medium power for 8-10 minutes until tomatoes are soft and releasing juices. Add basil, balsamic vinegar, and a pinch of sugar. Set aside.",
    "Cook the pork (45 minutes before serving): Preheat air fryer to 375°F (190°C). Working in batches, air fry pork tenderloins for 20-25 minutes, flipping halfway through, until internal temperature reaches 145°F (63°C). Let rest for 10 minutes before slicing.",
    "Cook the potatoes: While pork is resting, air fry potatoes in batches at 400°F (200°C) for 15-18 minutes, shaking basket halfway through, until golden and crispy.",
    "Warm the tomato confit: Reheat in microwave for 2-3 minutes until warm.",
    "Assembly: Slice pork into medallions. On a large serving platter, arrange pork slices in the center, surround with crispy potatoes, and spoon tomato confit over and around. Garnish with fresh herbs.",
  ];

  const makeAheadTips = [
    "Herb paste can be made 2 days ahead",
    "Marinate pork overnight for deeper flavor",
    "Tomato confit can be made 1 day ahead and reheated",
    "Prep and season potatoes 4 hours ahead, keep refrigerated",
  ];

  const presentationTips = [
    "Use a large wooden board or white platter for elegant presentation",
    "Slice pork on a slight diagonal for professional look",
    "Drizzle extra herb oil over the dish before serving",
    "Garnish with fresh herb sprigs and edible flowers if available",
  ];

  const proTips = [
    "Cook in batches to avoid overcrowding the air fryer",
    "Use a meat thermometer for perfect doneness every time",
    "Let pork rest 10 minutes to retain juices",
    "Double the herb paste recipe - guests will want extra!",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={heroImage}
          alt="Herb-crusted pork with crispy potatoes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 pb-20">
          {/* Header */}
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-[var(--shadow-warm)]">
            <RecipeHeader
              title="Mediterranean Herb-Crusted Pork with Crispy Potatoes & Tomato Confit"
              description="An elegant, crowd-pleasing main course that's completely safe for guests with shellfish and gluten allergies. This dish combines tender, herb-infused pork with golden crispy potatoes and sweet roasted tomatoes - all prepared using your air fryer and microwave!"
              servings={20}
              prepTime="30 mins"
              cookTime="45 mins"
              allergyInfo={[
                "Shrimp-Free",
                "Crab-Free",
                "Gluten-Free",
                "Shellfish-Free",
              ]}
            />
          </div>

          {/* Ingredients & Instructions */}
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <IngredientsList sections={ingredientSections} />
            </div>
            <div className="lg:col-span-3">
              <InstructionsList steps={instructions} />
            </div>
          </div>

          {/* Tips Section */}
          <TipsSection
            makeAhead={makeAheadTips}
            presentation={presentationTips}
            proTips={proTips}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;

import { Card } from "@/components/ui/card"
import { Smartphone, Tablet, Headphones, Cable } from "lucide-react"

export function PhoneCategories() {
  const categories = [
    { name: "စမတ်ဖုန်း", icon: Smartphone, count: "120+" },
    { name: "တက်ဘလက်", icon: Tablet, count: "45+" },
    { name: "နားကြပ်", icon: Headphones, count: "80+" },
    { name: "အပိုပစ္စည်း", icon: Cable, count: "200+" },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center text-foreground">အမျိုးအစားများ</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="p-4 hover:shadow-lg transition-shadow cursor-pointer bg-card border-border"
          >
            <div className="text-center space-y-2">
              <category.icon className="h-8 w-8 mx-auto text-primary" />
              <h3 className="font-semibold text-card-foreground">{category.name}</h3>
              <p className="text-sm text-muted-foreground">{category.count}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

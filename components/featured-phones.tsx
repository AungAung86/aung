import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export function FeaturedPhones() {
  const phones = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "1,200,000 ကျပ်",
      originalPrice: "1,350,000 ကျပ်",
      image: "/iphone-15-pro.png",
      rating: 4.8,
      reviews: 124,
      badge: "အရောင်းရဆုံး",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: "950,000 ကျပ်",
      originalPrice: "1,100,000 ကျပ်",
      image: "/samsung-galaxy-s24-smartphone.png",
      rating: 4.6,
      reviews: 89,
      badge: "အသစ်",
    },
    {
      id: 3,
      name: "Xiaomi 14",
      price: "650,000 ကျပ်",
      originalPrice: "750,000 ကျပ်",
      image: "/xiaomi-14-smartphone.png",
      rating: 4.5,
      reviews: 67,
      badge: "လျှော့စျေး",
    },
    {
      id: 4,
      name: "OPPO Find X7",
      price: "800,000 ကျပ်",
      originalPrice: "900,000 ကျပ်",
      image: "/oppo-find-x7-smartphone.png",
      rating: 4.4,
      reviews: 45,
      badge: "ရေပန်းစား",
    },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center text-foreground">ထူးခြားသောဖုန်းများ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phones.map((phone) => (
          <Card key={phone.id} className="overflow-hidden hover:shadow-xl transition-shadow bg-card border-border">
            <div className="relative">
              <img src={phone.image || "/placeholder.svg"} alt={phone.name} className="w-full h-48 object-cover" />
              <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">{phone.badge}</Badge>
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="font-semibold text-lg text-card-foreground text-balance">{phone.name}</h3>

              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{phone.rating}</span>
                <span className="text-sm text-muted-foreground">({phone.reviews})</span>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-primary">{phone.price}</span>
                </div>
                <span className="text-sm text-muted-foreground line-through">{phone.originalPrice}</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">ဝယ်ယူရန်</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export interface Product {
  id: string;
  name: string;
  description: string;
  model?: string;
  price: number;
  image: string;
  category: 'bongs' | 'sedas' | 'dixavadores' | 'outros' | 'caixas-misteriosas';
  mysteryType?: 'bronze' | 'prata' | 'ouro';
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onShowDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onShowDetails }: ProductCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-premium transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <div onClick={() => onShowDetails(product)}>
        <div className="aspect-square overflow-hidden bg-soft">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <CardContent className="p-4">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2">
            {product.name}
          </h3>
          
          {product.model && (
            <p className="text-sm text-muted-foreground mb-2">
              Modelo: {product.model}
            </p>
          )}
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            
            <Button 
              variant="cart" 
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              className="hover:scale-105"
            >
              Adicionar
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
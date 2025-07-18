import { X } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Product } from "./ProductCard";

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ product, isOpen, onClose, onAddToCart }: ProductModalProps) {
  if (!isOpen || !product) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-auto animate-scale-in shadow-premium">
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hover:bg-accent"
        >
          <X className="h-4 w-4" />
        </Button>
        
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="aspect-square md:aspect-auto">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Details */}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {product.name}
              </h2>
              
              {product.model && (
                <p className="text-muted-foreground mb-3">
                  <span className="font-medium">Modelo:</span> {product.model}
                </p>
              )}
              
              <p className="text-foreground mb-6 leading-relaxed">
                {product.description}
              </p>
              
              {product.mysteryType && (
                <div className="mb-4 p-3 bg-soft rounded-lg">
                  <p className="text-sm font-medium text-foreground">
                    Caixa Misteriosa {product.mysteryType.charAt(0).toUpperCase() + product.mysteryType.slice(1)}
                  </p>
                </div>
              )}
              
              <div className="space-y-4">
                <div className="text-3xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </div>
                
                <Button 
                  variant="premium" 
                  size="lg"
                  onClick={() => {
                    onAddToCart(product);
                    onClose();
                  }}
                  className="w-full"
                >
                  Adicionar à Sacola
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
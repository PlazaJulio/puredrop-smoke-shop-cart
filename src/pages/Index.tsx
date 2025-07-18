import { useState } from "react";
import { Header } from "@/components/Header";
import { ProductCard, Product } from "@/components/ProductCard";
import { ProductModal } from "@/components/ProductModal";
import { CartSidebar, CartItem } from "@/components/CartSidebar";
import { ProductFilter, FilterCategory } from "@/components/ProductFilter";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-image.jpg";
import { MessageCircle, MapPin, Phone, Instagram } from "lucide-react";

const Index = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('todos');
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado à sua sacola.`,
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;

    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalFormatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(total);

    let message = `🛍️ *Pedido Puredrop Tabacaria*\n\n`;
    
    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      const itemTotalFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(itemTotal);
      
      message += `📦 ${item.name}\n`;
      if (item.model) message += `   Modelo: ${item.model}\n`;
      message += `   Qtd: ${item.quantity}x - ${itemTotalFormatted}\n\n`;
    });

    message += `💰 *Total: ${totalFormatted}*\n\n`;
    message += `📍 Retirada na loja em Marília/SP`;

    const whatsappUrl = `https://wa.me/5514999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const showProductDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const filteredProducts = products.filter(product => {
    if (activeFilter === 'todos') return true;
    return product.category === activeFilter;
  });

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleWhatsApp = () => {
    window.open('https://wa.me/5514999999999', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItemsCount={cartItemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            PUREDROP
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in">
            Tabacaria Premium em Marília/SP
          </p>
          <Button 
            variant="premium" 
            size="lg"
            onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            className="animate-scale-in"
          >
            Explorar Produtos
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-soft">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8">Sobre a Puredrop</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A Puredrop é uma tabacaria premium localizada em Marília, São Paulo. 
              Oferecemos produtos de alta qualidade, selecionados cuidadosamente para 
              proporcionar a melhor experiência aos nossos clientes. Nossa missão é 
              democratizar o acesso a produtos premium com atendimento personalizado 
              e preços justos.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">Q</span>
                </div>
                <h3 className="font-semibold mb-2">Qualidade</h3>
                <p className="text-sm text-muted-foreground">Produtos selecionados rigorosamente</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">A</span>
                </div>
                <h3 className="font-semibold mb-2">Atendimento</h3>
                <p className="text-sm text-muted-foreground">Suporte personalizado e especializado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-background">C</span>
                </div>
                <h3 className="font-semibold mb-2">Confiança</h3>
                <p className="text-sm text-muted-foreground">Transparência em todos os processos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Nossos Produtos
          </h2>
          
          <ProductFilter 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
                onShowDetails={showProductDetails}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-soft">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Entre em Contato
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Endereço</p>
                    <p className="text-muted-foreground">Marília, São Paulo</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Telefone</p>
                    <p className="text-muted-foreground">(14) 9999-9999</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-muted-foreground">Atendimento personalizado</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Instagram className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-muted-foreground">@puredrop</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
              <p className="text-muted-foreground mb-6">
                Entre em contato conosco pelo WhatsApp para dúvidas, 
                pedidos ou informações sobre nossos produtos.
              </p>
              
              <Button 
                variant="premium" 
                size="lg"
                onClick={handleWhatsApp}
                className="w-full"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={addToCart}
      />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;

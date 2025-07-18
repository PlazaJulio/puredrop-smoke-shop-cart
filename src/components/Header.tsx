import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => scrollToSection("home")}
          className="text-2xl font-bold text-foreground cursor-pointer hover:opacity-80 transition-opacity"
        >
          PUREDROP
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Produtos
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-foreground hover:text-primary transition-colors"
          >
            Contatos
          </button>
        </nav>

        {/* Cart Icon */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onCartClick}
          className="relative hover:scale-105 transition-transform"
        >
          <ShoppingBag className="h-5 w-5" />
          {cartItemsCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-foreground text-background text-xs rounded-full h-5 w-5 flex items-center justify-center animate-scale-in">
              {cartItemsCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  );
}
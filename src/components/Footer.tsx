import { Instagram, Facebook, MessageCircle, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5514999999999', '_blank');
  };

  const handleSocialClick = (platform: string) => {
    // Placeholder URLs - substituir pelos links reais
    const urls = {
      instagram: 'https://instagram.com/puredrop',
      facebook: 'https://facebook.com/puredrop'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };

  return (
    <footer className="bg-gradient-premium text-premium-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">PUREDROP</h3>
            <p className="text-premium-foreground/80 text-sm leading-relaxed">
              Tabacaria localizada em Marília/SP, oferecendo produtos de qualidade 
              para uma experiência única.
            </p>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Marília, São Paulo</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>(14) 9999-9999</span>
              </div>
              <Button
                variant="minimal"
                size="sm"
                onClick={handleWhatsApp}
                className="text-premium-foreground border-premium-foreground/30 hover:bg-premium-foreground hover:text-premium"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('instagram')}
                className="text-premium-foreground hover:bg-premium-foreground/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('facebook')}
                className="text-premium-foreground hover:bg-premium-foreground/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Informações Legais */}
          <div>
            <h4 className="font-semibold mb-4">Informações</h4>
            <div className="space-y-2 text-sm text-premium-foreground/80">
              <p>Produtos para maiores de 18 anos</p>
              <p>Uso responsável</p>
              <p>Termos de Serviço</p>
            </div>
          </div>
        </div>

        <div className="border-t border-premium-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-premium-foreground/80">
            © 2024 Puredrop Tabacaria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
import { Product } from "@/components/ProductCard";
import productBong1 from "@/assets/product-bong-1.jpg";
import productSedas1 from "@/assets/product-sedas-1.jpg";
import productGrinder1 from "@/assets/product-grinder-1.jpg";
import productMysteryBox from "@/assets/product-mystery-box.jpg";

export const products: Product[] = [
  // Bongs
  {
    id: "bong-001",
    name: "Bong Glass Premium",
    description: "Bong de vidro borossilicato de alta qualidade com design elegante e funcional. Perfeito para uma experiência suave.",
    model: "GP-2024",
    price: 189.90,
    image: productBong1,
    category: "bongs"
  },
  {
    id: "bong-002",
    name: "Bong Mini Compact",
    description: "Bong compacto e discreto, ideal para uso doméstico. Construção em vidro resistente.",
    model: "MC-2024",
    price: 129.90,
    image: productBong1,
    category: "bongs"
  },
  {
    id: "bong-003",
    name: "Bong Artesanal Deluxe",
    description: "Peça artesanal única com decorações especiais. Vidro temperado de alta qualidade.",
    model: "AD-2024",
    price: 349.90,
    image: productBong1,
    category: "bongs"
  },

  // Sedas
  {
    id: "sedas-001",
    name: "Sedas OCB Premium",
    description: "Sedas de alta qualidade com papel ultra fino. Queima uniforme e sabor neutro.",
    price: 8.90,
    image: productSedas1,
    category: "sedas"
  },
  {
    id: "sedas-002",
    name: "Sedas Raw Organic",
    description: "Sedas orgânicas não branqueadas. Papel natural para uma experiência autêntica.",
    price: 12.90,
    image: productSedas1,
    category: "sedas"
  },
  {
    id: "sedas-003",
    name: "Sedas King Size Brown",
    description: "Sedas tamanho grande em papel marrom natural. Perfeitas para sessões longas.",
    price: 15.90,
    image: productSedas1,
    category: "sedas"
  },

  // Dixavadores
  {
    id: "grinder-001",
    name: "Dixavador Alumínio 4 Partes",
    description: "Dixavador profissional em alumínio anodizado com 4 compartimentos e tela coletora.",
    model: "AL-4P",
    price: 89.90,
    image: productGrinder1,
    category: "dixavadores"
  },
  {
    id: "grinder-002",
    name: "Dixavador Pocket Size",
    description: "Dixavador compacto e portátil. Ideal para levar em viagens.",
    model: "PS-2024",
    price: 45.90,
    image: productGrinder1,
    category: "dixavadores"
  },
  {
    id: "grinder-003",
    name: "Dixavador Premium Titanium",
    description: "Dixavador de alta qualidade com revestimento de titânio. Durabilidade superior.",
    model: "PT-2024",
    price: 159.90,
    image: productGrinder1,
    category: "dixavadores"
  },

  // Outros produtos
  {
    id: "outros-001",
    name: "Isqueiro Zippo Original",
    description: "Isqueiro Zippo clássico com garantia vitalícia. Design atemporal e resistente.",
    price: 179.90,
    image: productGrinder1,
    category: "outros"
  },
  {
    id: "outros-002",
    name: "Piteira de Vidro Colorida",
    description: "Piteira de vidro borossilicato com design colorido. Fácil limpeza e uso.",
    price: 25.90,
    image: productGrinder1,
    category: "outros"
  },
  {
    id: "outros-003",
    name: "Bandeja Rolling Tray",
    description: "Bandeja em metal com bordas elevadas. Perfeita para preparação.",
    price: 39.90,
    image: productGrinder1,
    category: "outros"
  },

  // Caixas Misteriosas
  {
    id: "mystery-bronze",
    name: "Caixa Misteriosa Bronze",
    description: "Seleção surpresa de produtos básicos da nossa loja. Valor mínimo garantido de R$ 80.",
    price: 59.90,
    image: productMysteryBox,
    category: "caixas-misteriosas",
    mysteryType: "bronze"
  },
  {
    id: "mystery-prata",
    name: "Caixa Misteriosa Prata",
    description: "Seleção premium de produtos exclusivos. Valor mínimo garantido de R$ 150.",
    price: 99.90,
    image: productMysteryBox,
    category: "caixas-misteriosas",
    mysteryType: "prata"
  },
  {
    id: "mystery-ouro",
    name: "Caixa Misteriosa Ouro",
    description: "Seleção VIP com os melhores produtos da nossa loja. Valor mínimo garantido de R$ 250.",
    price: 159.90,
    image: productMysteryBox,
    category: "caixas-misteriosas",
    mysteryType: "ouro"
  },
];
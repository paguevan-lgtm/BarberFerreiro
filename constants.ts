import { Scissors, Zap, Ruler, Star, Coffee, User } from 'lucide-react';
import { Service, Testimonial, LocationInfo, OperatingHours } from './types';

export const NAV_LINKS = [
  { name: 'Início', href: '#home' },
  { name: 'A Experiência', href: '#about' },
  { name: 'Serviços', href: '#services' },
  { name: 'Unidades', href: '#locations' },
  { name: 'Depoimentos', href: '#testimonials' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Corte Moderno',
    price: 'R$ 50,00',
    description: 'Degradê, navalhado ou social. Acabamento premium com massagem capilar.',
    icon: Scissors,
  },
  {
    id: '2',
    name: 'Barba Terapia',
    price: 'R$ 40,00',
    description: 'Toalha quente, esfoliação e hidratação com óleos essenciais.',
    icon: User,
  },
  {
    id: '3',
    name: 'Combo Completo',
    price: 'R$ 80,00',
    description: 'Corte + Barba + Sobrancelha. O pacote completo para o homem moderno.',
    icon: Star,
  },
  {
    id: '4',
    name: 'Pezinho / Acabamento',
    price: 'R$ 20,00',
    description: 'Manutenção do contorno e limpeza dos pelos do pescoço.',
    icon: Ruler,
  },
  {
    id: '5',
    name: 'Platinado / Luzes',
    price: 'R$ 120,00',
    description: 'Descoloração segura e matização para o tom perfeito.',
    icon: Zap,
  },
  {
    id: '6',
    name: 'Dia do Noivo',
    price: 'A consultar',
    description: 'Serviço exclusivo com bebidas e atendimento preferencial.',
    icon: Coffee,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Eduardo',
    role: 'Empresário',
    content: 'A melhor barbearia da cidade! O atendimento é impecável e o ambiente muito acolhedor. Recomendo o serviço de barba terapia.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=150&h=150',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rafael Silva',
    role: 'Advogado',
    content: 'Profissionais de altíssima qualidade. O corte sempre fica exatamente como eu peço. A unidade da Vila Maria é top.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150',
    rating: 5,
  },
  {
    id: '3',
    name: 'Lucas Ferreira',
    role: 'Designer',
    content: 'Ambiente moderno e agradável. O sistema de agendamento funciona muito bem e nunca atrasam. Nota 10!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fit=crop&w=150&h=150',
    rating: 5,
  },
];

export const LOCATIONS: LocationInfo[] = [
  {
    id: '1',
    name: 'Unidade Vila Maria',
    address: 'R. Curuçá, 1084 - Vila Maria, São Paulo - SP',
    phone: '(11) 99999-9999',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=R.+Curuçá,+1084+-+Vila+Maria,+São+Paulo+-+SP',
    // Imagem confiável de barbearia
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Unidade República',
    address: 'Av. São João, 1312 - República, São Paulo - SP',
    phone: '(11) 98888-8888',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Av.+São+João,+1312+-+República,+São+Paulo+-+SP',
    // Imagem Corrigida: Interior de Barbearia Vintage Real (Cadeiras de couro e espelhos)
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1000&auto=format&fit=crop',
  },
];

export const OPERATING_HOURS: OperatingHours[] = [
  { day: 'Segunda a Sexta', hours: '09:00 - 20:00' },
  { day: 'Sábado', hours: '09:00 - 18:00' },
  { day: 'Domingo', hours: 'Fechado' },
];

export const WHATSAPP_LINK = "https://wa.me/5511999999999";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Clock, Scissors, User, Calendar, CheckCircle, ChevronLeft } from 'lucide-react';
import { LOCATIONS, SERVICES } from '../constants';
import { Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVAILABLE_TIMES = [
  '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
];

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0); 
  
  const [formData, setFormData] = useState({
    unit: '',
    time: '',
    name: '',
    obs: ''
  });

  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleNext = () => {
    if (step < 3) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const toggleService = (service: Service) => {
    if (selectedServices.find(s => s.id === service.id)) {
      setSelectedServices(prev => prev.filter(s => s.id !== service.id));
    } else {
      setSelectedServices(prev => [...prev, service]);
    }
  };

  const getNumericPrice = (priceStr: string) => {
    if (priceStr.toLowerCase().includes('consultar')) return 0;
    return parseFloat(priceStr.replace('R$', '').replace('.', '').replace(',', '.').trim()) || 0;
  };

  const getTotalPrice = () => {
    const total = selectedServices.reduce((acc, curr) => acc + getNumericPrice(curr.price), 0);
    const hasConsultation = selectedServices.some(s => s.price.toLowerCase().includes('consultar'));
    
    if (total === 0 && hasConsultation) return 'A consultar';
    
    const formattedTotal = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return hasConsultation ? `${formattedTotal} + Consultar` : formattedTotal;
  };

  const handleSendToWhatsApp = () => {
    const selectedLocation = LOCATIONS.find(l => l.name === formData.unit);
    const phoneNumber = selectedLocation?.phone.replace(/\D/g, '') || '5513996033433';

    // Formatação elegante da lista de serviços com emojis
    const servicesList = selectedServices.map(s => `  🔹 *${s.name}*`).join('%0A');
    const total = getTotalPrice();

    // Mensagem padronizada e profissional
    const message = `✂️ *SOLICITAÇÃO DE AGENDAMENTO* ✂️%0A` +
      `*FERREIRO BARBER SHOP*%0A` +
      `________________________________%0A%0A` +
      `👤 *CLIENTE:* ${formData.name.toUpperCase()}%0A` +
      `📍 *UNIDADE:* ${formData.unit}%0A` +
      `⏰ *HORÁRIO:* ${formData.time}%0A%0A` +
      `💈 *SERVIÇOS SELECIONADOS:*%0A${servicesList}%0A%0A` +
      `💰 *TOTAL ESTIMADO:* ${total}%0A` +
      `________________________________%0A%0A` +
      `📝 *OBSERVAÇÕES:*%0A${formData.obs || 'Nenhuma observação informada.'}%0A%0A` +
      `_Por favor, confirme a disponibilidade deste horário._`;

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    onClose();
  };

  const resetForm = () => {
    setStep(1);
    setDirection(0);
    setFormData({ unit: '', time: '', name: '', obs: '' });
    setSelectedServices([]);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setTimeout(resetForm, 500);
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#121212] w-full max-w-md rounded-[2rem] shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden flex flex-col max-h-[90vh]"
          >
            <div className="px-6 pt-6 pb-4 bg-[#121212] z-20 relative">
              <div className="flex justify-between items-center mb-6">
                 <div className="flex flex-col">
                    <span className="text-xs font-bold text-gold-500 tracking-widest uppercase mb-1">Agendamento</span>
                    <h2 className="text-xl font-display font-bold text-white">
                      {step === 1 && "Selecione a Unidade"}
                      {step === 2 && "Escolha o Horário"}
                      {step === 3 && "Serviços e Dados"}
                    </h2>
                 </div>
                 <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 hover:text-red-500 transition-all">
                   <X size={16} />
                 </button>
              </div>

              <div className="flex items-center gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex-1 h-1 rounded-full bg-dark-800 overflow-hidden relative">
                    <motion.div 
                      initial={false}
                      animate={{ 
                        x: step >= i ? '0%' : '-100%',
                        backgroundColor: step >= i ? '#D4AF37' : '#252525'
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      className="absolute inset-0 w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar relative px-6 py-2">
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="space-y-4 py-2"
                  >
                    {LOCATIONS.map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => {
                          setFormData({ ...formData, unit: loc.name });
                          handleNext();
                        }}
                        className={`w-full group relative overflow-hidden rounded-2xl border transition-all duration-300 text-left p-1 ${
                           formData.unit === loc.name 
                            ? 'border-gold-500 bg-gold-500/5' 
                            : 'border-white/5 bg-dark-800 hover:bg-dark-700'
                        }`}
                      >
                         <div className="relative flex items-center p-4 gap-4 z-10">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-colors ${
                                formData.unit === loc.name ? 'bg-gold-500 text-black' : 'bg-dark-900 text-gold-500 border border-white/5'
                            }`}>
                                <MapPin size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className={`font-bold text-lg ${formData.unit === loc.name ? 'text-gold-500' : 'text-white'}`}>
                                    {loc.name}
                                </h3>
                                <p className="text-sm text-gray-400 truncate">{loc.address}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                formData.unit === loc.name ? 'border-gold-500' : 'border-gray-600 group-hover:border-gold-500/50'
                            }`}>
                                {formData.unit === loc.name && <div className="w-3 h-3 rounded-full bg-gold-500" />}
                            </div>
                         </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="py-2"
                  >
                    <div className="bg-dark-800/50 rounded-xl p-4 border border-white/5 mb-6 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                         <div className="bg-gold-500/10 p-2 rounded-lg text-gold-500">
                           <MapPin size={18} />
                         </div>
                         <div>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Unidade Selecionada</p>
                            <p className="text-white font-bold text-sm">{formData.unit}</p>
                         </div>
                       </div>
                       <button onClick={handleBack} className="text-xs text-gold-500 font-bold hover:underline">Alterar</button>
                    </div>

                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                       <Clock size={18} className="text-gold-500" />
                       Horários Disponíveis
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-3">
                      {AVAILABLE_TIMES.map((time) => (
                        <button
                          key={time}
                          onClick={() => {
                            setFormData({ ...formData, time: time });
                            handleNext();
                          }}
                          className={`py-3 rounded-xl text-sm font-bold border transition-all duration-200 relative overflow-hidden ${
                            formData.time === time
                              ? 'bg-gold-500 text-dark-900 border-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.3)]'
                              : 'bg-dark-800 text-gray-300 border-white/5 hover:border-gold-500/30 hover:bg-dark-700'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="space-y-6 py-2 pb-24"
                  >
                    <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        <div className="shrink-0 bg-dark-800/50 border border-white/5 rounded-lg px-3 py-2 flex items-center gap-2">
                            <MapPin size={14} className="text-gold-500" />
                            <span className="text-xs text-gray-300">{formData.unit}</span>
                        </div>
                        <div className="shrink-0 bg-dark-800/50 border border-white/5 rounded-lg px-3 py-2 flex items-center gap-2">
                            <Clock size={14} className="text-gold-500" />
                            <span className="text-xs text-gray-300">{formData.time}</span>
                        </div>
                         <button onClick={() => setStep(1)} className="shrink-0 text-xs text-gold-500 font-bold px-2 py-2">
                            Editar
                        </button>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-3">
                          <label className="text-sm font-bold text-white">Selecione os Serviços</label>
                          <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                             {selectedServices.length} selecionado(s)
                          </span>
                        </div>
                        
                        <div className="space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-1">
                            {SERVICES.map((s) => {
                                const isSelected = selectedServices.some(sel => sel.id === s.id);
                                return (
                                  <div 
                                      key={s.id}
                                      onClick={() => toggleService(s)}
                                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                                          isSelected 
                                          ? 'bg-gold-500/10 border-gold-500' 
                                          : 'bg-dark-800 border-white/5 hover:bg-dark-700'
                                      }`}
                                  >
                                      <div className="flex items-center gap-3">
                                          <div className={`p-2 rounded-lg transition-colors ${isSelected ? 'bg-gold-500 text-dark-900' : 'bg-dark-900 text-gray-400'}`}>
                                              {s.icon ? <s.icon size={16} /> : <Scissors size={16} />}
                                          </div>
                                          <div>
                                              <p className={`text-sm font-bold transition-colors ${isSelected ? 'text-white' : 'text-gray-300'}`}>{s.name}</p>
                                          </div>
                                      </div>
                                      <div className="flex items-center gap-3">
                                        <span className={`text-sm font-bold ${isSelected ? 'text-gold-500' : 'text-gray-400'}`}>{s.price}</span>
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-gold-500 border-gold-500' : 'border-gray-600'}`}>
                                            {isSelected && <CheckCircle size={14} className="text-black" />}
                                        </div>
                                      </div>
                                  </div>
                                );
                            })}
                        </div>
                        
                        {selectedServices.length > 0 && (
                          <div className="mt-4 p-3 bg-white/5 rounded-xl flex justify-between items-center border border-white/5">
                             <span className="text-sm text-gray-400">Total Estimado</span>
                             <span className="text-lg font-bold text-gold-500">{getTotalPrice()}</span>
                          </div>
                        )}
                    </div>

                    <div className="space-y-4 pt-2">
                        <div>
                            <label className="block text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Seus Dados</label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-gold-500 transition-colors w-5 h-5" />
                                <input 
                                    type="text" 
                                    placeholder="Seu Nome Completo"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    className="w-full bg-dark-800 border border-white/10 text-white rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        <div className="relative group">
                             <div className="absolute left-4 top-4 text-gray-500 group-focus-within:text-gold-500 transition-colors">
                                 <Calendar size={20} />
                             </div>
                            <textarea 
                                rows={2}
                                placeholder="Observações (opcional)"
                                value={formData.obs}
                                onChange={(e) => setFormData({...formData, obs: e.target.value})}
                                className="w-full bg-dark-800 border border-white/10 text-white rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all resize-none placeholder:text-gray-600"
                            />
                        </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-6 bg-[#121212] border-t border-white/5 z-20">
                {step === 1 && (
                     <p className="text-center text-gray-500 text-sm">Selecione uma unidade para continuar</p>
                )}
                {step === 2 && (
                    <div className="flex gap-3">
                        <button onClick={handleBack} className="px-6 py-4 rounded-xl font-bold text-gray-400 hover:text-white bg-dark-800 hover:bg-dark-700 transition-colors">
                            Voltar
                        </button>
                         <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                             Selecione um horário
                         </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="flex gap-3">
                        <button onClick={handleBack} className="px-6 py-4 rounded-xl font-bold text-gray-400 hover:text-white bg-dark-800 hover:bg-dark-700 transition-colors">
                            <ChevronLeft />
                        </button>
                        <button
                            disabled={selectedServices.length === 0 || !formData.name}
                            onClick={handleSendToWhatsApp}
                            className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transform active:scale-95"
                        >
                            <span>Confirmar Agendamento</span>
                            <CheckCircle size={20} />
                        </button>
                    </div>
                )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
import React from 'react';
import { TrendingUp, Monitor, Truck, PersonStanding, UtensilsCrossed, Bot, PhoneCall, Puzzle, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: TrendingUp,
    title: "Online Hoarding Booking",
    description: "Instantly book hoardings anywhere. Our platform shows per-day price, peak sessions, and customer retention rates for every location."
  },
  {
    icon: Monitor,
    title: "Premium LED Wall Displays",
    description: "Capture attention in the most rushed market areas and high-traffic zones with our vibrant digital displays."
  },
  {
    icon: Truck,
    title: "Mobile Advertisement",
    description: "Our mobile ad vans visit every corner of your city, from busy streets to the last corner village, ensuring maximum reach."
  },
  {
    icon: PersonStanding,
    title: "Hyper-Local LED Walkers",
    description: "Target customers on foot. Our LED walkers navigate every corner and narrow street, bringing your ad directly to the people."
  },
  {
    icon: UtensilsCrossed,
    title: "Elite Menu Advertising",
    description: "Place your brand on menus at top-notch hotels, restaurants, and cafes using our partner, Qruzine.com. Target clients by purchasing power."
  },
  {
    icon: Bot,
    title: "AI-Driven Social Campaigns",
    description: "We run your social ads and land customers on a custom AI WhatsApp chatbot, building relations and boosting retention 24/7."
  },
  {
    icon: PhoneCall,
    title: "On-Demand Customer Care",
    description: "Get a professional customer care team for your brand without hiring full-time staff. Pay us on a per-call basis."
  },
  {
    icon: Puzzle,
    title: "Tailor-Made Solutions",
    description: "Have a unique challenge? We build completely custom-made advertising solutions tailored to your exact business needs."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white/90 p-8">
      <div className="max-w-8xl mx-auto">
        <div className="bg-neutral-900 rounded-3xl p-8 md:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-3 italic">Our Services</h2>
              <p className="text-neutral-400 text-sm md:text-base max-w-md">
                A Complete Advertising Arsenal — Explore our complete suite of advertising solutions, designed to give your brand a monopolistic advantage.
              </p>
            </div>
            <button className="mt-4 md:mt-0 flex items-center gap-2 px-5 py-2.5 border border-[#F5E6D3] text-[#F5E6D3] rounded-full text-sm hover:bg-[#F5E6D3] hover:text-black transition-all duration-300 w-fit">
              Get Started
              <span><ChevronRight size={18} /></span>
            </button>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-neutral-800 rounded-2xl p-6 hover:bg-neutral-700 transition-all duration-300 group cursor-pointer flex flex-col h-full min-h-64"
                >
                  <div className="w-12 h-12 bg-neutral-700 rounded-xl flex items-center justify-center mb-4 group-hover:bg-neutral-600 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-[#F5E6D3]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">{service.description}</p>
                  <div className="mt-auto">
                    <p className="text-amber-200 text-xs mb-3 cursor-pointer hover:underline">What's included in service?</p>
                    <button className="flex items-center gap-2 px-4 py-2 border border-[#F5E6D3] text-[#F5E6D3] rounded-full text-xs hover:bg-[#F5E6D3] hover:text-black hover:scale-110 transition-all duration-300">
                      Learn More
                      <span><ChevronRight size={18} /></span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
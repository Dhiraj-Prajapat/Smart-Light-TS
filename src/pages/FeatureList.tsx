import { Lightbulb, Shield, Activity, AlertTriangle, Gauge, LineChart, LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  text: string;
}

export default function FeatureList() {
  const features: Feature[] = [
    { icon: Lightbulb, text: "Saves on power consumption & related costs" },
    { icon: Activity, text: "Lowers downtimes" },
    { icon: AlertTriangle, text: "Detects power thefts." },
    { icon: Gauge, text: "Ensures smart monitoring and control of the street light infrastructure." },
    { icon: LineChart, text: "Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc." },
    { icon: Shield, text: "Ensures security in the neighborhood" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl mt-10">
      <h1 className="text-2xl md:text-3xl font-normal text-center mb-24" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <span className="block mb-2">The platform assists city managers</span>
        <span>on multiple fronts</span>
      </h1>

      <div className="flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col content-center relative text-left max-w-72 py-10 px-6">
              <div className="w-8 h-8 flex-shrink-0">
                <item.icon className="w-full h-full text-blue-200" strokeWidth={1.5} />
              </div>
              <p className="text-xl text-gray-900">{item.text}</p>
              {index % 2 === 0 && index < features.length && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-transparent sm:bg-gray-200" />
              )}
              {index < features.length && (
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

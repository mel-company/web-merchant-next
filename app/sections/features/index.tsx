import { Truck, ShieldCheck, Headset } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "شحن سريع",
    description: "توصيل سريع ومجاني للطلبات التي تزيد عن 100 د.ع",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "جودة مضمونة",
    description: "جميع منتجاتنا أصلية 100% ومشمولة بالضمان",
  },
  {
    icon: <Headset className="w-10 h-10 text-primary" />,
    title: "دعم متواصل",
    description: "فريق خدمة العملاء جاهز لمساعدتكم على مدار الساعة",
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-base-200 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="mb-4 bg-base-100 p-4 rounded-full shadow-sm">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-base-content">
              {feature.title}
            </h3>
            <p className="text-base-content/70">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

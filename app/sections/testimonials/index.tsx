import { Star } from "lucide-react";

const testimonials = [
  {
    name: "مروة سالم",
    role: "مهندسة ديكور",
    content:
      "اللوحات الفنية في هذا المتجر أضافت لمسة سحرية على تصاميمي. جودة الألوان والتفاصيل مذهلة حقاً وتعكس ذوقاً فنياً رفيعاً.",
    rating: 5,
  },
  {
    name: "كريم العلي",
    role: "جامع تحف فنية",
    content:
      "أبحث دائماً عن أعمال فنية أصلية وهذا المتجر فاق توقعاتي. اللوحة التي اقتنيتها قطعة فنية فريدة بكل ما تعنيه الكلمة.",
    rating: 5,
  },
  {
    name: "نادية حسن",
    role: "مديرة معرض",
    content:
      "تنوع الأساليب الفنية هنا رائع. من التجريدي إلى الكلاسيكي، وجدت القطعة المثالية لمدخل منزلي. التغليف كان احترافياً للغاية.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-base-200 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-base-content">
            آراء عملائنا
          </h2>
          <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
            نعتز بثقتكم ونسعى دائماً لتقديم الأفضل. إليكم بعض تجارب عملائنا
            المميزين.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-base-100 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary text-primary-content w-12 h-12 flex items-center justify-center rounded-full text-2xl font-serif">
                "
              </div>
              <div className="flex gap-1 mb-4 text-warning">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-base-content/80 mb-6 text-lg leading-relaxed">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4 border-t border-base-content/10 pt-4">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-12">
                    <span className="text-xl">{testimonial.name[0]}</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-base-content">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-base-content/60">
                    {testimonial.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

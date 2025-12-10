import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full pt-4 min-h-[90vh] flex items-center bg-base-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="flex flex-col items-start text-right gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4">
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm animate-fade-in-up">
              فن وإبداع
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-base-content leading-tight">
              لوحات <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                تحكي قصتك
              </span>
            </h1>
            <p className="text-lg md:text-xl text-base-content/70 max-w-lg leading-relaxed">
              اكتشف عالماً من الألوان والإحساس. لوحات فنية فريدة ورسومات أصلية
              تضفي روحاً وحياة على مساحتك الخاصة.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <button className="btn btn-primary btn-lg rounded-full px-10 text-primary-content shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all">
              تصفح المعرض
            </button>
            <button className="btn btn-outline btn-lg rounded-full px-10 hover:bg-base-content hover:text-base-100 transition-all">
              عن الفنان
            </button>
          </div>

          <div className="flex items-center gap-8 mt-4 border-t border-base-content/10 pt-8 w-full">
            <div>
              <p className="text-3xl font-bold text-base-content">200+</p>
              <p className="text-sm text-base-content/60">لوحة فنية</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-base-content">50+</p>
              <p className="text-sm text-base-content/60">معرض حصري</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl order-1 lg:order-2 group">
          <Image
            src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=2000&auto=format&fit=crop"
            alt="Art Gallery Display"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
          {/* Floating Card */}
          <div className="absolute bottom-8 right-8 bg-base-100/90 backdrop-blur-md p-6 rounded-3xl shadow-lg max-w-xs animate-bounce-slow hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                🎨
              </div>
              <div>
                <p className="font-bold text-base-content">عمل يدوي</p>
                <p className="text-sm text-base-content/60">
                  ألوان زيتية أصلية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

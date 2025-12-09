const NewsletterSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="bg-primary text-primary-content rounded-[3rem] p-8 md:p-16 text-center relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold">
            انظم لقائمتنا البريدية
          </h2>
          <p className="text-primary-content/80 text-lg">
            كن أول من يعرف عن مجموعاتنا الجديدة والعروض الحصرية. اشترك الآن
            واحصل على خصم 10% على طلبك الأول.
          </p>

          <form className="w-full flex flex-col md:flex-row gap-4 mt-4">
            <input
              type="email"
              placeholder="بريدك الالكتروني"
              className="input input-lg flex-1 bg-white/10 text-white placeholder:text-white/60 border-white/20 focus:bg-white/20 focus:border-white"
            />
            <button className="btn btn-lg btn-secondary text-secondary-content border-none px-8">
              اشتراك
            </button>
          </form>

          <p className="text-xs opacity-60 mt-4">
            عبر اشتراكك أنت توافق على سياسة الخصوصية والشروط والأحكام.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;

import Image from "next/image";

const artworks = [
  {
    // Large Focal Piece (Left)
    src: "https://i.pinimg.com/1200x/35/01/c7/3501c74d3dba0bfd237217ad4e35ee5a.jpg",
    alt: "Abstract Golden Texture",
    className: "md:col-span-2 md:row-span-2",
    delay: "delay-0",
  },
  {
    // Tall Piece (Right)
    src: "https://i.pinimg.com/1200x/16/2d/b3/162db3b99173f4c891cca559a1868dfc.jpg",
    alt: "Abstract Earthy Vertical",
    className: "md:col-span-1 md:row-span-2",
    delay: "delay-100",
  },
  {
    // Small Detail 1 (Center Top)
    src: "https://i.pinimg.com/1200x/ab/29/e1/ab29e1141e232120bca9a60f5e05a27d.jpg",
    alt: "Soft Textured Brushstrokes",
    className: "md:col-span-1 md:row-span-1",
    delay: "delay-200",
  },
  {
    // Small Detail 2 (Center Bottom)
    src: "https://i.pinimg.com/1200x/16/43/ce/1643cece38ade44119051c5c8b6237b5.jpg",
    alt: "Minimalist Lines",
    className: "md:col-span-1 md:row-span-1",
    delay: "delay-300",
  },
  {
    // Wide Piece (Bottom)
    src: "https://i.pinimg.com/736x/30/9c/85/309c855434e2e13b1934ec3dd6567e50.jpg",
    alt: "Modern Gallery Wide",
    className: "md:col-span-2 md:row-span-1",
    delay: "delay-400",
  },
  {
    // Another Square (Bottom Right)
    src: "https://i.pinimg.com/1200x/7e/6a/f2/7e6af2bae9de5505cf62f161edb194c3.jpg",
    alt: "Classic Portrait Abstract",
    className: "md:col-span-2 md:row-span-1",
    delay: "delay-500",
  },
];

const GallerySection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-base-content relative inline-block">
          معرض الفنون
          <span className="absolute -bottom-2 right-0 w-1/2 h-1 bg-primary rounded-full"></span>
        </h2>
        <p className="text-base-content/70 text-lg max-w-2xl mx-auto mt-4">
          نظرة مقربة على دقة التفاصيل وجمال الإبداع في مجموعتنا المختارة.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {artworks.map((art, index) => (
          <div
            key={index}
            className={`relative rounded-3xl overflow-hidden group ${art.className} animate-fade-in-up ${art.delay}`}
          >
            <Image
              src={art.src}
              alt={art.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 group-hover:bg-black/40 transition-colors duration-300" />

            {/* Hover Content */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                عرض التفاصيل
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="btn btn-outline btn-lg rounded-full px-12 border-base-content/20 hover:bg-base-content hover:text-base-100">
          مشاهدة كل الأعمال
        </button>
      </div>
    </section>
  );
};

export default GallerySection;

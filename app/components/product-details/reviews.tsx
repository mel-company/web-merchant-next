"use client";

import { Star } from "lucide-react";
import Image from "next/image";

// Mock Reviews Data
const MOCK_REVIEWS = [
  {
    id: 1,
    user: "سارة محمد",
    avatar: "https://i.pravatar.cc/150?u=sara",
    rating: 5,
    date: "منذ يومين",
    comment:
      "اللوحة جميلة جداً وجودة الطباعة ممتازة. التغليف كان رائع والوصول سريع.",
  },
  {
    id: 2,
    user: "عبدالله العتيبي",
    avatar: "https://i.pravatar.cc/150?u=abdullah",
    rating: 4,
    date: "منذ أسبوع",
    comment:
      "جميلة ولكن تمنيت لو كان هناك خيارات أكثر للإطارات. لكن بشكل عام راضي عن المنتج.",
  },
  {
    id: 3,
    user: "نورة القحطاني",
    avatar: "https://i.pravatar.cc/150?u=nora",
    rating: 5,
    date: "منذ أسبوعين",
    comment: "رائعة وتضيف لمسة فخامة للمكان. الألوان مطابقة للصورة تماماً.",
  },
  {
    id: 4,
    user: "فهد الدوسري",
    avatar: "https://i.pravatar.cc/150?u=fahad",
    rating: 5,
    date: "منذ شهر",
    comment: "تجربة شراء ممتازة من الموقع وحتى الاستلام. شكراً لكم.",
  },
];

const ProductReviews = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-base-content mb-2">
            آراء العملاء
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex text-orange-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <span className="font-bold text-base-content">4.8</span>
            <span className="text-sm text-base-content/60">
              بناءً على 24 تقييم
            </span>
          </div>
        </div>

        {/* Optional: Add review button */}
        <button className="btn btn-outline btn-sm">أضف تقييمك</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {MOCK_REVIEWS.map((review) => (
          <div
            key={review.id}
            className="card bg-base-100 shadow-sm border border-base-200"
          >
            <div className="card-body p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="avatar placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full w-10">
                      {review.avatar ? (
                        <Image
                          src={review.avatar}
                          alt={review.user}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <span className="text-xs">
                          {review.user.substring(0, 1)}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.user}</h4>
                    <span className="text-xs text-base-content/50">
                      {review.date}
                    </span>
                  </div>
                </div>
                <div className="flex text-orange-400 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? "fill-current"
                          : "text-base-300 fill-base-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-base-content/80 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductReviews;

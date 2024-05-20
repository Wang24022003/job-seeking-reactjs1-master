import React from "react";

const FeedbackCarousel = () => {
  return (
    <section className="feedback-container">
      <div className="h1 text-center imt-12 imt-lg-16 imb-6 imb-lg-8">
        Khách hàng nói gì về chúng tôi?
      </div>
      <div
        className="carousel slide"
        data-bs-interval="8000"
        data-bs-pause="hover"
        data-bs-ride="carousel"
        data-employer-landing-target="carouselContainer"
        id="feedbacks-carousel"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active carousel-item-start"
            data-controller="employer-landing"
            data-slide-index-desktop="0"
          >
            <div className="d-flex carousel-item-wrapper">
              <div className="item ime-3 p-4 border-radius-large border-solid bg-white normal-text">
                <div className="feedback-content paragraph">
                  <p className="paragraph">
                    Chúng tôi đã tuyển dụng được nhiều ứng viên đủ tiêu chuẩn
                    thông qua các tin đăng tuyển dụng trên ITviec. ITviec cực kỳ
                    chuyên nghiệp, hữu ích và thân thiện trong việc thu hút nhân
                    tài trong lĩnh vực IT. Thật tuyệt vời khi được làm việc cùng
                    đội ngũ chăm sóc khách hàng của ITviec
                  </p>
                </div>
                <div className="d-lg-flex justify-content-lg-between ipt-lg-8">
                  <div>
                    <h3 className="red-text author">Ms. Đoàn Ái Nương</h3>
                    <p className="position text-rich-grey paragraph">
                      HR Manager | BBV Vietnam
                    </p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://itviec.com/nha-tuyen-dung/bbv-vietnam"
                    >
                      <picture>
                        <source
                          data-srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/images.png"
                          srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/images.png"
                        />
                        <img
                          alt="bbv Vietnam Vietnam Small Logo"
                          className="border-solid box-shadow-normal border-radius-normal bg-white lazyloaded"
                          data-controller="lazyload"
                          data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a9d835d302ad9f096170a85b9d142ff095a42b9d/images.png"
                          size="65x65"
                          src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a9d835d302ad9f096170a85b9d142ff095a42b9d/images.png"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
              <div className="item ims-3 p-4 border-radius-large border-solid bg-white normal-text">
                <div className="feedback-content paragraph">
                  <p className="paragraph">
                    ITviec là một trong những cộng đồng IT lớn nhất Việt Nam và
                    là trang web đáng tin cậy cho các công ty IT. Đối với các
                    kênh tuyển dụng nhằm tiếp cận các ứng viên chủ động, thì
                    ITviec là có lượng ứng viên khá chất lượng giúp DEK đạt kết
                    quả tuyển dụng nhanh chóng.
                  </p>
                </div>
                <div className="d-lg-flex justify-content-lg-between ipt-lg-8">
                  <div className="feedback-author-wrapper">
                    <h3 className="red-text author">Ms. Ánh Trinh</h3>
                    <p className="position text-rich-grey paragraph">
                      Talent Acquisition Lead | DEK technologies Vietnam
                    </p>
                  </div>
                  <div>
                    <a
                      target="_blank"
                      href="https://itviec.com/nha-tuyen-dung/dek-technologies"
                    >
                      <picture>
                        <source
                          data-srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/DEK-anEndavaCompany-Dark%20(2).png"
                          srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/DEK-anEndavaCompany-Dark%20(2).png"
                        />
                        <img
                          alt="dek-technologies"
                          className="border-solid box-shadow-normal border-radius-normal bg-white lazyloaded"
                          data-controller="lazyload"
                          data-src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a9d835d302ad9f096170a85b9d142ff095a42b9d/images.png"
                          size="65x65"
                          src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RTNKbGMybDZaVjloYm1SZmNHRmtXd2RwUm1sRyIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--a9d835d302ad9f096170a85b9d142ff095a42b9d/images.png"
                        />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add additional carousel items here */}
        </div>
        <button
          className="carousel-control-prev carousel-button"
          data-bs-target="#feedbacks-carousel"
          role="button"
          type="button"
          data-bs-slide="prev"
        >
          <span aria-hidden="true" className="carousel-control-prev-icon" />
          <span className="sr-only visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next carousel-button"
          data-bs-target="#feedbacks-carousel"
          role="button"
          type="button"
          data-bs-slide="next"
        >
          <span aria-hidden="true" className="carousel-control-next-icon" />
          <span className="sr-only visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default FeedbackCarousel;

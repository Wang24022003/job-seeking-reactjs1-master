import React, { useState, useEffect } from "react";

const feedbacks = [
  {
    content: "Chúng tôi đã tuyển dụng được nhiều ứng viên đủ tiêu chuẩn...",
    author: "Ms. Đoàn Ái Nương",
    position: "HR Manager | BBV Vietnam",
    link: "https://itviec.com/nha-tuyen-dung/bbv-vietnam",
    imgSrc:
      "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/images.png",
  },
  {
    content: "ITviec là một trong những cộng đồng IT lớn nhất Việt Nam...",
    author: "Ms. Ánh Trinh",
    position: "Talent Acquisition Lead | DEK technologies Vietnam",
    link: "https://itviec.com/nha-tuyen-dung/dek-technologies",
    imgSrc:
      "https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMkZHUGc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--66c4982be85ebf7ffab2649aec630744bd4ec47c/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/DEK-anEndavaCompany-Dark%20(2).png",
  },
  // Add other feedbacks here...
];

const FeedbackCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  return (
    <section className="feedback-container">
      <div className="h1 text-center imt-12 imt-lg-16 imb-6 imb-lg-8">
        Khách hàng nói gì về chúng tôi?
      </div>
      <div className="carousel slide" id="feedbacks-carousel">
        <div className="carousel-inner">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <div className="d-flex carousel-item-wrapper">
                <div className="item ime-3 p-4 border-radius-large border-solid bg-white normal-text">
                  <div className="feedback-content paragraph">
                    <p className="paragraph">{feedback.content}</p>
                  </div>
                  <div className="d-lg-flex justify-content-lg-between ipt-lg-8">
                    <div>
                      <h3 className="red-text author">{feedback.author}</h3>
                      <p className="position text-rich-grey paragraph">
                        {feedback.position}
                      </p>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={feedback.link}
                      >
                        <img
                          alt={`${feedback.author} Small Logo`}
                          className="border-solid box-shadow-normal border-radius-normal bg-white"
                          src={feedback.imgSrc}
                          width="65"
                          height="65"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center align-items-center imt-lg-8">
          <button
            className="carousel-control-prev p-4 bg-white"
            onClick={handlePrev}
          >
            <span className="d-flex align-items-center text-rich-grey">
              <svg className="feather-icon icon-xl">
                <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#chevron-left"></use>
              </svg>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <span className="mx-3 normal-text text-rich-grey d-inline-flex">
            <span>{activeIndex + 1}</span>/{feedbacks.length}
          </span>
          <button
            className="carousel-control-next p-4 bg-white"
            onClick={handleNext}
          >
            <span className="d-flex align-items-center text-rich-grey">
              <svg className="feather-icon icon-xl">
                <use href="https://itviec.com/assets/feather-icons-sprite-520cd3770a1002f7c87bd1ba253464228ad112abb4c34d81c8cda9f937487a49.svg#chevron-right"></use>
              </svg>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCarousel;

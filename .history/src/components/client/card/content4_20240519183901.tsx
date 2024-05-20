import React from "react";
import styles from "styles/content3.module.scss";

const HighValue = () => {
  return (
    <section className={styles.feedbackContainer}>
      <div
        className={`${styles.h1} ${styles.textCenter} ${styles.imt12} ${styles.imtLg16} ${styles.imb6} ${styles.imbLg8}`}
      >
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
            className={`carousel-item active`}
            data-controller="employer-landing"
            data-slide-index-desktop="0"
          >
            <div className="d-flex carousel-item-wrapper">
              <div
                className={`item ${styles.ime3} p-4 ${styles.borderRadiusLarge} ${styles.borderSolid} ${styles.bgWhite} ${styles.normalText}`}
              >
                <div
                  className={`${styles.feedbackContent} ${styles.paragraph}`}
                >
                  <p className={styles.paragraph}>
                    Chúng tôi đã tuyển dụng được nhiều ứng viên đủ tiêu chuẩn
                    thông qua các tin đăng tuyển dụng trên ITviec. ITviec cực kỳ
                    chuyên nghiệp, hữu ích và thân thiện trong việc thu hút nhân
                    tài trong lĩnh vực IT. Thật tuyệt vời khi được làm việc cùng
                    đội ngũ chăm sóc khách hàng của ITviec.
                  </p>
                </div>
                <div
                  className={`d-lg-flex justify-content-lg-between ${styles.iptLg8}`}
                >
                  <div>
                    <h3 className={`${styles.redText} ${styles.author}`}>
                      Ms. Đoàn Ái Nương
                    </h3>
                    <p
                      className={`${styles.position} ${styles.textRichGrey} ${styles.paragraph}`}
                    >
                      HR Manager | BBV Vietnam
                    </p>
                  </div>
                  <div>
                    <a target="_blank" href="/nha-tuyen-dung/bbv-vietnam">
                      <picture>
                        <source
                          data-srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/images.png"
                          srcset="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd0h3R3c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--7749aafc422a6324a4f11966b871f1aa0503fc67/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBPZ2wzWldKd09oTnlaWE5wZW1WZllXNWtYM0JoWkZzSGFVWnBSZz09IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--869b7c60a82e5139be9920420fe05da8a838e38c/images.png"
                        />
                        <img
                          alt="bbv Vietnam Vietnam Small Logo"
                          className={`${styles.borderSolid} ${styles.boxShadowNormal} ${styles.borderRadiusNormal} ${styles.bgWhite} ls-is-cached lazyloaded`}
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
              {/* Add more feedback items here following the same pattern */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighValue;

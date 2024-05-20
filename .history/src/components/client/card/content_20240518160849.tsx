import React from 'react';

const HireTheBestITSection = () => {
  return (
    <section className="hire-the-best-it-container bg-gradient-search">
      <div className="icontainer d-lg-flex align-items-center flex-row-reverse ipx-5 ipy-16 ipy-lg-30">
        <div className="flex-1 ips-lg-20">
          <img alt="hide-the-best-it" className="w-100" src="https://itviec.com/assets/employer_landing/hire-the-best-it-15-95d4b6df6293a405cd77c094b8c7eb5dcc99cf8711f5b47751c841cfa51023a0.png" />
        </div>
        <div className="flex-1 text-it-white left-box">
          <div className="left-box-content">
            <h1 className="lg-title imt-8">
              Tuyển dụng Nhân tài IT tại Việt Nam cùng ITviec
            </h1>
            <p className="normal-text imt-6 imb-12 parapraph">
              Với hiểu biết sâu sắc về lĩnh vực IT và các kỹ năng chuyên môn, chúng tôi có thể giúp bạn tiếp cận và tuyển dụng những ứng viên IT tốt nhất.
            </p>
            <button className="ibtn ibtn-lg ibtn-primary w-100 contact-now-btn" data-action="click->employer-landing#handleScrollToForm click->employer-landing#addDataLayerHeadline">
              Liên hệ ngay
            </button>
            <div className="d-flex flex-column paragraph flex-lg-row align-items-center imt-8">
              <p className="text-dark-grey ime-1">
                Đã có tài khoản Khách hàng?
              </p>
              <a className="text-it-white text-decoration-underline" target="_blank" href="/customer/login">Đăng nhập</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTheBestITSection;

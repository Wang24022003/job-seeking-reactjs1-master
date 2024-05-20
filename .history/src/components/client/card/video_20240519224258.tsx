import React from "react";

const ExciteITSection = () => {
  return (
    <section className="excite-it-container d-lg-flex">
      <img
        className="d-none d-lg-block excite-it-bg-image"
        src="https://itviec.com/assets/employer_landing/excite-it-desktop-fe99e865fc04408bfbd6498fbdce1ef69751457aa611844494747812c6479aa4.svg"
        alt="Excite IT Background Image"
      />
      <div className="icontainer ipx-5 d-lg-flex align-items-center z-2 ipt-16 ipt-lg-0 w-100 excite-it-content-wrapper imy-lg-30">
        <div className="excite-content text-it-white">
          <div className="lg-title fw-700">
            Sẵn sàng Hứng Khởi ngành IT tại Việt Nam với Tuyển Dụng "Chất"
          </div>
          <p className="paragraph ipt-6">
            Khởi đầu từ năm 2013, sứ mệnh của ITviec chính là luôn hướng đến
            tuyển dụng "chất" ngành IT. Chúng tôi giúp nhân sự ngành IT thăng
            tiến sự nghiệp, giúp doanh nghiệp tìm được những ứng viên tuyệt vời.
            Hãy cùng chúng tôi hứng khởi ngành IT tại Việt Nam với tuyển dụng
            "Chất"!
          </p>
        </div>
        <div className="video-box excite-video ips-lg-12 ipt-lg-0 imt-12 imt-lg-0">
          <iframe
            title="Excite IT Video"
            frameBorder="0"
            src="https://www.youtube.com/embed/iRL0gIHFAgQ"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ExciteITSection;

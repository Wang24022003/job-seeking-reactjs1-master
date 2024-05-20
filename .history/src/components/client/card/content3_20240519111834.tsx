import React from 'react';

function HighValueServicesContainer() {
  return (
    <section className="hight-value-services-container ipx-5 ipy-16 ipy-lg-30">
      <div className="icontainer">
        <div className="h1 lg-title text-it-white text-center">
          Dịch vụ chất lượng cao dành cho Nhà tuyển dụng IT
        </div>
        <div className="bg-white flex-box-wrapper ipy-6 ips-lg-12 ipe-lg-12 mt-4 imt-lg-12 ipx-6 ipt-lg-12 ipb-lg-13">
          <div className="d-lg-flex flex-row-reverse align-items-lg-center">
            <div className="d-lg-flex justify-content-center flex-1">
              <img className="w-100 large-pic" src="https://itviec.com/assets/employer_landing/job-posting-15-30ceaa97f37fd97afb7dabc2c5ef6fe5702b78faf0c3da8aedb5d7d64b274a54.png" alt="Job Posting" />
            </div>
            <div className="flex-1">
              <div className="h1 ipy-4 ipy-lg-0">
                Đăng tin tuyển dụng
              </div>
              <p className="normal-text parapraph text-rich-grey imt-lg-4">
                Đăng tuyển vị trí công việc IT, dễ dàng quản lý hồ sơ ứng viên với giao diện trực quan, đội ngũ hỗ trợ, và công cụ mạnh mẽ từ ITviec
              </p>
              <div className="imt-8 d-lg-flex">
                <div className="job-posting-content-box p-3 imb-4 ime-lg-4 flex-1 d-flex">
                  <img src="https://itviec.com/assets/employer_landing/opportunities-a53edbeb973cfeaa459e920b7a4562354aa02a1c83a53150cf8ebf17aaa7ce57.svg" alt="Opportunities" />
                  <p className="parapraph imt-4 ims-4">
                    Gia tăng cơ hội để tiếp cận ứng viên IT chất lượng từ ITviec
                  </p>
                </div>
                <div className="job-posting-content-box p-3 flex-1 d-flex">
                  <img src="https://itviec.com/assets/employer_landing/right-skill-be1892ff9d11b80aeab90527abe6b19cfb855ab95fbcc9b7bc75c89184353bfd.svg" alt="Right Skill" />
                  <p className="parapraph imt-4 ims-4">
                    Thu hút ứng viên phù hợp với yêu cầu về kỹ năng IT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Các phần còn lại tương tự */}
        {/* Phần này bị cắt để giảm độ dài */}
      </div>
    </section>
  );
}

export default HighValueServicesContainer;

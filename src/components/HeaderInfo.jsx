import React from 'react';

const HeaderInfo = () => {
  return (
    <div className='container-fluid header-bg'>
      <div className="container py-2 d-flex justify-content-end gap-5 ">
        <p className="mb-0"><i class="fa-solid fa-clock"></i> 24/7</p>
        <p className="mb-0"><i class="fa-solid fa-location-dot"></i> Glendale, 1027 Ruberta Ave</p>
        <p className="mb-0"><i class="fa-solid fa-phone"></i> +(1) 818 858 7103</p>
      </div>
    </div>
  );
};

export default HeaderInfo;

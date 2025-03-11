import React from "react";

const servicesData = [
  {
    category: "Cooling",
    services: [
      { img: "/game-icons_auto-repair.svg", title: "AC Repair" },
      { img: "/eos-icons_action-chains-outlined.svg", title: "AC Installation" },
      { img: "/carbon_license-maintenance-draft.svg", title: "AC Maintenance" }
    ],
    iconColor: "text-primary"
  },
  {
    category: "Heating",
    services: [
      { img: "/material-symbols-light_tire-repair.svg", title: "Heating Repair" },
      { img: "/mdi_heating-coil.svg", title: "Heating Installation" },
      { img: "/cbi_air-source-heating.svg", title: "Heating Maintenance" }
    ],
    iconColor: "text-warning"
  }
];

const Services = () => {
  return (
    <div className="container py-5">
      {servicesData.map((section, index) => (
        <div key={index}>
          <h3 className="fw-bold text-dark pt-4 mb-4">{section.category}</h3>
          <div className="row g-4">
            {section.services.map((service, i) => (
              <div className="col-md-4" key={i}>
                <div className="card p-4 shadow-sm border-0 text-center">
                  {/* Icon (Separate Row) */}
                  <div className="mb-3">
                    <img
                      src={service.img}
                      alt="Service Icon"
                      height="60"
                      className={`${section.iconColor}`}
                    />
                  </div>

                  {/* Title & Description */}
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                    vulputate libero et velit interdum.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

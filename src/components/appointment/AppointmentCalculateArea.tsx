"use client";
import React, { useState, useRef } from "react";
import NiceSelect from "@/ui/NiceSelect";

const AppointmentCalculateArea = () => {
  const selectHandler = (e: any) => { };
  const [selectedSpecialization, setSelectedSpecialization] = useState("1");
  const [selectedDoctor, setSelectedDoctor] = useState("0");
  const inputRef = useRef<HTMLInputElement>(null);

  const openDatePicker = () => {
    if (inputRef.current) {
      inputRef.current.showPicker?.(); 
      inputRef.current.focus();       
    }
  };

  const doctorList: { [key: string]: { value: string; text: string }[] } = {
    "1": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "2": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "3": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "4": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "5": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "6": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "7": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "8": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "9": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "10": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "11": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "12": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "13": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "14": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "15": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "16": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "17": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "18": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "19": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "20": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "21": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "22": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
    "23": [
      { value: "0", text: "Select Doctor" },
      { value: "1", text: "Dr. Avinash Kumar(1002)" },
    ],
  };


  const specializationOptions = [
    { value: "0", text: "Select Specialist" },
    { value: "1", text: "Obstetrics and gynaecology" },
    { value: "2", text: "Orthopaedic Surgeon" },
    { value: "3", text: "Cardiologist" },
    { value: "4", text: "Paediatrician" },
    { value: "5", text: "Pulmonologist" },
    { value: "6", text: "Cardiothoracic Surgeon" },
    { value: "7", text: "Dermatology" },
    { value: "8", text: "Endocrinologists" },
    { value: "9", text: "Gastroenterologists" },
    { value: "10", text: "Nephrologists" },
    { value: "11", text: "Neurologists" },
    { value: "12", text: "Oncologists" },
    { value: "13", text: "Psychiatrists" },
    { value: "14", text: "Radiologists" },
    { value: "15", text: "Rheumatologists" },
    { value: "16", text: "Urology" },
    { value: "17", text: "General Medicine" },
    { value: "18", text: "Audiologist" },
    { value: "19", text: "Ophthalmologists" },
    { value: "20", text: "Dentist" },
    { value: "21", text: "Neuroradiology" },
    { value: "22", text: "Dermatologists" },
    { value: "23", text: "Cardiologists" },
  ];

  const handleSpecializationChange = (selected: { value: string; text: string }) => {
    setSelectedSpecialization(selected.value);
    setSelectedDoctor("0"); // reset doctor on specialization change
  };

  const handleDoctorChange = (selected: { value: string; text: string }) => {
    setSelectedDoctor(selected.value);
  };
  return (
    <>
      <section
        className="appointment-area appointment-area-3 pos-rel pt-115 pb-120"
        style={{
          backgroundImage: `url(/assets/img/appoinment/appointment-bg.jpg)`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8">
              <div className="calculate-box white-bg">
                <div className="calculate-content">
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="about-title news-letter-title mb-70">
                        <h5 className="pink-color">Appointment</h5>
                        <h1>Book Appointment</h1>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      {/* <label className="form-label">Specialist</label> */}
                      <NiceSelect
                        className="select_style"
                        options={specializationOptions}
                        defaultCurrent={0}
                        onChange={handleSpecializationChange}
                        name="specialization"
                        placeholder=""
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      {/* <label className="form-label">Doctor</label> */}
                      <NiceSelect
                        key={selectedSpecialization}
                        className="select_style"
                        options={
                          selectedSpecialization === ""
                            ? [{ value: "", text: "Select Doctor" }]
                            : doctorList[selectedSpecialization] || [{ value: "", text: "Select Doctor" }]
                        }
                        defaultCurrent={0}
                        onChange={handleDoctorChange}
                        name=""
                        placeholder=""
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      {/* <label className="form-label">Shift</label> */}
                      <NiceSelect
                        className="select_style"
                        options={
                          selectedDoctor && selectedDoctor !== "0"
                            ? [
                              { value: "", text: "Select Shift" },
                              { value: "morning", text: "Morning" },
                              { value: "evening", text: "Evening" }
                            ]
                            : [{ value: "", text: "Select Shift" }]

                        }
                        defaultCurrent={0}
                        onChange={(selected) => console.log("Shift:", selected)}
                        name="shift"
                        placeholder=""
                      />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6">
                      <NiceSelect
                        className="select_style"
                        options={[
                          { value: "", text: "Live Consultation" },
                          { value: "yes", text: "Yes" },
                          { value: "no", text: "No" },
                        ]}
                        defaultCurrent={0}
                        onChange={(selected) => console.log("Live:", selected)}
                        name="live"
                        placeholder="Live Consultation"
                      />
                    </div>
                    {/* <div className="col-xl-6 col-lg-6 col-md-6">
                      <form
                        className="calculate-form appointment-form-3 mb-20"
                        action="#"
                      >
                        <input type="text" placeholder="Your Phone number" />
                        <i className="fas fa-phone"></i>
                      </form>
                    </div> */}
                    <div className="col-xl-12 col-lg-6 col-md-6">
                      <form
                        className="calculate-form appointment-form-3 mb-20"
                        action="#"
                      >
                        <input
                          type="date"
                          ref={inputRef}
                          placeholder="Select date"
                          className="form-control"
                        />
                        <i
                          className="far fa-calendar"
                          onClick={openDatePicker}
                          style={{ cursor: "pointer" }}
                        ></i>
                      </form>
                    </div>
                    {/* <div className="col-xl-6 col-lg-6 col-md-6">
                      <form
                        className="calculate-form appointment-form-3 mb-20"
                        onSubmit={e => e.preventDefault()}
                      >
                        <input type="text" placeholder="Add time" />
                        <i className="far fa-clock"></i>
                      </form>
                    </div> */}
                    <div className="col-xl-12">
                      <form
                        className="calculate-form appointment-form-3 mb-20"
                        action="#"
                      >
                        <textarea
                          name="Special request"
                          cols={30}
                          rows={10}
                          placeholder="Special request"
                        ></textarea>
                        <i className="far fa-edit"></i>
                        <a href="#" className="primary_btn btn mt-40">
                          submit query
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentCalculateArea;

"use client";
import React, { useState, useRef } from "react";
import NiceSelect from "@/ui/NiceSelect";
import Swal from 'sweetalert2';

const AppointmentCalculateArea = () => {
  const selectHandler = (e: any) => { };
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [specializationError, setSpecializationError] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctorError, setDoctorError] = useState(false);

  const [selectedShift, setSelectedShift] = useState("");
  const [shiftError, setShiftError] = useState(false);

  const [liveConsultation, setLiveConsultation] = useState("");
  const [liveError, setLiveError] = useState(false);

  const [appointmentDate, setAppointmentDate] = useState("");
  const [dateError, setDateError] = useState(false);

  const [request, setRequest] = useState("");
  const [requestError, setRequestError] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;
    if (!selectedSpecialization || selectedSpecialization === "0") {
      setSpecializationError(true);
      hasError = true;
    }

    if (!selectedDoctor || selectedDoctor === "0") {
      setDoctorError(true);
      hasError = true;
    }

    if (!selectedShift) {
      setShiftError(true);
      hasError = true;
    }

    if (!liveConsultation) {
      setLiveError(true);
      hasError = true;
    }

    if (!appointmentDate) {
      setDateError(true);
      hasError = true;
    }

    if (!request.trim()) {
      setRequestError(true);
      hasError = true;
    }

    if (hasError) return;

    const formData = {
      specialization: selectedSpecialization,
      doctor: selectedDoctor,
      shift: selectedShift,
      live: liveConsultation,
      date: appointmentDate,
      request,
    };

    try {
      const res = await fetch("/app/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire("Success!", "Appointment submitted successfully.", "success");
        // Reset
        setSelectedSpecialization("");
        setSelectedDoctor("");
        setSelectedShift("");
        setLiveConsultation("");
        setAppointmentDate("");
        setRequest("");

        // Clear errors
        setSpecializationError(false);
        setDoctorError(false);
        setShiftError(false);
        setLiveError(false);
        setDateError(false);
        setRequestError(false);
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
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
                        <h5 className="blue-color">Appointment</h5>
                        <h1>Book Appointment</h1>
                      </div>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <NiceSelect
                          className={`select_style ${specializationError ? 'error' : ''}`}
                          options={specializationOptions}
                          value={selectedSpecialization}
                          defaultCurrent={0}
                          onChange={(selected) => {
                            setSelectedSpecialization(selected.value);
                            setSpecializationError(false);
                            setSelectedDoctor("");
                          }}
                          name="specialization"
                          placeholder=""
                        />
                        {specializationError && (
                          <p className="text-danger">Please select a specialization.</p>
                        )}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <NiceSelect
                          key={selectedSpecialization}
                          className={`select_style ${doctorError ? 'error' : ''}`}
                          options={
                            selectedSpecialization === ""
                              ? [{ value: "", text: "Select Doctor" }]
                              : doctorList[selectedSpecialization] || [{ value: "", text: "Select Doctor" }]
                          }
                          value={selectedDoctor}
                          defaultCurrent={0}
                          onChange={(selected) => {setSelectedDoctor(selected.value); setDoctorError(false);}}
                          name="doctor"
                          placeholder=""
                        />
                        {doctorError && <p className="text-danger">Please select a doctor.</p>}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <NiceSelect
                            className={`select_style ${shiftError ? 'error' : ''}`}
                          options={
                            selectedDoctor && selectedDoctor !== "0"
                              ? [
                                { value: "", text: "Select Shift" },
                                { value: "morning", text: "Morning" },
                                { value: "evening", text: "Evening" }
                              ]
                              : [{ value: "", text: "Select Shift" }]
                          }
                          value={selectedShift}
                          defaultCurrent={0}
                          onChange={(selected) => {setSelectedShift(selected.value); setShiftError(false);}}
                          name="shift"
                          placeholder=""
                        />
                        {shiftError && <p className="text-danger">Please select a shift.</p>}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <NiceSelect
                         className={`select_style ${liveError ? 'error' : ''}`}
                          options={[
                            { value: "", text: "Live Consultation" },
                            { value: "yes", text: "Yes" },
                            { value: "no", text: "No" },
                          ]}
                          value={liveConsultation} 
                          defaultCurrent={0}
                          onChange={(selected) => {setLiveConsultation(selected.value); setLiveError(false);}}
                          name="live"
                          placeholder="Live Consultation"
                        />
                        {liveError && <p className="text-danger">Please select live consultation preference.</p>}
                      </div>
                      <div className="col-xl-12">
                        <div className="calculate-form appointment-form-3 mb-20">
                          <input
                            type="date"
                            ref={inputRef}
                            placeholder="Select date"
                            className="form-control"
                            onChange={(e) => {setAppointmentDate(e.target.value); setDateError(false);}}
                            value={appointmentDate} 
                          />
                          <i
                            className="far fa-calendar"
                            onClick={openDatePicker}
                            style={{ cursor: "pointer" }}
                          ></i>
                          {dateError && <p className="text-danger">Please select a date.</p>}
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="calculate-form appointment-form-3 mb-20">
                          <textarea
                            name="Special request"
                            cols={30}
                            rows={10}
                            value={request}
                            placeholder="Special request"
                            onChange={(e) => {setRequest(e.target.value); setRequestError(false);}}
                          ></textarea>
                          <i className="far fa-edit"></i>
                          {requestError && <p className="text-danger">Please enter a special request.</p>}
                          <button type="submit" className="primary_btn btn mt-40">
                            Submit Query
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6">
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
                        <a onClick={handleSubmit} className="primary_btn btn mt-40">
                          submit query
                        </a>
                      </form>
                    </div>
                  </div> */}
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

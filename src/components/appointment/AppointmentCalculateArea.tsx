"use client";
import React, { useState, useRef } from "react";
import NiceSelect from "@/ui/NiceSelect";
import Swal from 'sweetalert2';

const AppointmentCalculateArea = () => {
  const selectHandler = (e: any) => { };
  const [loading, setLoading] = useState(false);
  const [resetCounter, setResetCounter] = useState(0);

  const [selectedSpecialization, setSelectedSpecialization] = useState("0");
  const [specializationError, setSpecializationError] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState("0");
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

  const doctorList: { [key: string]: { value: string; text: string, disabled: boolean }[] } = {
    "1": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "2": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "3": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "4": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "5": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "6": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "7": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "8": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "9": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "10": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "11": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "12": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "13": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "14": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "15": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "16": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "17": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "18": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "19": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "20": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "21": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "22": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
    "23": [
      { value: "0", text: "Select Doctor", disabled: true },
      { value: "1", text: "Dr. Avinash Kumar(1002)", disabled: false },
    ],
  };


  const specializationOptions = [
    { value: "0", text: "Select Specialist", disabled: true },
    { value: "1", text: "Obstetrics and gynaecology", disabled: false },
    { value: "2", text: "Orthopaedic Surgeon", disabled: false },
    { value: "3", text: "Cardiologist", disabled: false },
    { value: "4", text: "Paediatrician", disabled: false },
    { value: "5", text: "Pulmonologist", disabled: false },
    { value: "6", text: "Cardiothoracic Surgeon", disabled: false },
    { value: "7", text: "Dermatology", disabled: false },
    { value: "8", text: "Endocrinologists", disabled: false },
    { value: "9", text: "Gastroenterologists", disabled: false },
    { value: "10", text: "Nephrologists", disabled: false },
    { value: "11", text: "Neurologists", disabled: false },
    { value: "12", text: "Oncologists", disabled: false },
    { value: "13", text: "Psychiatrists", disabled: false },
    { value: "14", text: "Radiologists", disabled: false },
    { value: "15", text: "Rheumatologists", disabled: false },
    { value: "16", text: "Urology", disabled: false },
    { value: "17", text: "General Medicine", disabled: false },
    { value: "18", text: "Audiologist", disabled: false },
    { value: "19", text: "Ophthalmologists", disabled: false },
    { value: "20", text: "Dentist", disabled: false },
    { value: "21", text: "Neuroradiology", disabled: false },
    { value: "22", text: "Dermatologists", disabled: false },
    { value: "23", text: "Cardiologists", disabled: false },
  ];

  const handleSpecializationChange = (selected: { value: string; text: string }) => {
    setSelectedSpecialization(selected.value);
    setSelectedDoctor("0"); // reset doctor on specialization change
  };

  const handleDoctorChange = (selected: { value: string; text: string }) => {
    setSelectedDoctor(selected.value);
  };
  const getSpecialistText = (value: string) => {
    return specializationOptions.find(item => item.value === value)?.text || "N/A";
  };
  const getDoctorText = (doctorValue: string) => {
    const list = doctorList[selectedSpecialization] || [];
    const match = list.find(doc => doc.value === doctorValue);
    return match ? match.text : "";
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
      specialization: getSpecialistText(selectedSpecialization),
      doctor: getDoctorText(selectedDoctor),
      shift: selectedShift,
      live: liveConsultation,
      date: appointmentDate,
      request: request,
    };

    setLoading(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        Swal.fire("Success!", "Appointment submitted successfully.", "success");
        // Reset
        setSelectedSpecialization("");
        setResetCounter(prev => prev + 1);
        setSelectedDoctor("0");
        setSelectedShift("0");
        setLiveConsultation("0");
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
    finally {
      setLoading(false); // Stop loader
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
                          key={resetCounter}
                          className={`select_style ${specializationError ? 'error' : ''}`}
                          options={specializationOptions}
                          value={selectedSpecialization}
                          defaultCurrent={0}
                          onChange={(selected) => {
                            if (selected.disabled) return;
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
                              ? [{ value: "", text: "Select Doctor", disabled: false }]
                              : doctorList[selectedSpecialization] || [{ value: "", text: "Select Doctor", disabled: false }]
                          }
                          value={selectedDoctor}
                          defaultCurrent={0}
                          onChange={(selected) => { if (selected.disabled) return; setSelectedDoctor(selected.value); setDoctorError(false); }}
                          name="doctor"
                          placeholder=""
                        />
                        {doctorError && <p className="text-danger">Please select a doctor.</p>}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <NiceSelect
                          key={selectedShift || "shift-default"} // This resets when selectedShift is reset
                          className={`select_style ${shiftError ? 'error' : ''}`}
                          options={
                            selectedDoctor && selectedDoctor !== "0"
                              ? [
                                { value: "0", text: "Select Shift", disabled: true },
                                { value: "morning", text: "Morning", disabled: false },
                                { value: "evening", text: "Evening", disabled: false },
                              ]
                              : [{ value: "", text: "Select Shift", disabled: false }]
                          }
                          value={selectedShift}
                          defaultCurrent={0}
                          onChange={(selected) => { setSelectedShift(selected.value); setShiftError(false); }}
                          name="shift"
                          placeholder=""
                        />
                        {shiftError && <p className="text-danger">Please select a shift.</p>}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <NiceSelect
                          key={liveConsultation || "live-default"}
                          className={`select_style ${liveError ? 'error' : ''}`}
                          options={[
                            { value: "0", text: "Live Consultation", disabled: false },
                            { value: "yes", text: "Yes", disabled: false },
                            { value: "no", text: "No", disabled: false },
                          ]}
                          value={liveConsultation}
                          defaultCurrent={0}
                          onChange={(selected) => { setLiveConsultation(selected.value); setLiveError(false); }}
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
                            className="form-control mb-3"
                            onChange={(e) => { setAppointmentDate(e.target.value); setDateError(false); }}
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
                            className="mb-3"
                            placeholder="Special request"
                            onChange={(e) => { setRequest(e.target.value); setRequestError(false); }}
                          ></textarea>
                          <i className="far fa-edit"></i>
                          {requestError && <p className="text-danger">Please enter a special request.</p>}
                          <button type="submit" className="primary_btn btn mt-40" disabled={loading}>
                            {loading && (
                              <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            )}
                            {loading ? "Submitting..." : "Submit Query"}
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

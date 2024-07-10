import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import "./details.css";
import Hdots from "./H-dots";
import axios from "axios";
import { getBasicAuthHeader } from "./Utils/auth";
import LineChart from "./chart";
import respiratory from "../assets/respiratory.png";
import temperature from "../assets/temperature.png";
import heart from "../assets/Heart.png";
import Insurance from "../assets/Insurance.png";
import Gender from "../assets/Female.png";
import Calender from "../assets/BirthIcon.png";
import Contact from "../assets/PhoneIcon.png";
import { GoDownload } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

const Details = () => {
  const [patients, setPatients] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: getBasicAuthHeader(),
            },
          }
        );

        const data = response.data;
        setPatients(data);
        if (data.length > 0) {
          const defaultValue = data[3];
          setSelectedPatient(defaultValue);
          setChartData(defaultValue?.diagnosis_history);
        }
        // console.log(selectedPatient);
        console.log(data);
      } catch (error) {
        console.error("Error fetching patients: ", error);
      }
    };
    fetchPatients();
  }, []);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setChartData(patient.diagnosis_history);
  };
  return (
    <div>
      <div className="wrapper">
        <div className=" patients">
          <div className="top">
            <div className="profiling">Patients</div>
            <div>
              <IoSearch width={100} height={100} />
            </div>
          </div>
          <div className="topper">
            {patients.map((patients, index) => (
              <div className="top1">
                <div
                  className="person "
                  key={index}
                  onClick={() => handlePatientClick(patients)}>
                  <img
                    src={patients.profile_picture}
                    alt={""}
                    width={40}
                    height={40}
                    className=" "></img>
                  <div className="profile">
                    <span className="doctor-name ">{patients.name}</span> <br />
                    <span className="title">
                      {patients.gender}, {patients.age}{" "}
                    </span>
                  </div>
                </div>
                <div>
                  <Hdots />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="chart">
          <div className="graph">
            <LineChart data={chartData} />

            <div className="readings">
              <div className="respiratory">
                <div>
                  <img src={respiratory} width={50} alt="" />
                </div>
                <p>
                  Respiratory rate
                  <br />
                  <span>
                    <strong>20 bpm</strong>
                  </span>
                </p>

                <p>Normal</p>
              </div>
              <div className="temp">
                <div>
                  <img src={temperature} width={50} alt="" />
                </div>
                <p>
                  Temperature <br />
                  <span>
                    <strong>98.6 &deg;F</strong>
                  </span>
                </p>
                <p>Normal</p>
              </div>
              <div className="heart">
                <div>
                  <img src={heart} width={50} alt="" />
                </div>
                <p>
                  Heart rate
                  <br />
                  <span>
                    <strong>78 bpm</strong>
                  </span>
                </p>
                <div className="below">
                  <IoMdArrowDropdown size={20} />
                  <span>Lower than average</span>
                </div>
              </div>
            </div>
          </div>
          <div className="dcontainer">
            <div className="dList">Diagnotic List</div>
            <div className="ditems">
              <div>Problem/ Diagnosis</div>
              <div>Description</div>
              <div> Status </div>
            </div>
            {selectedPatient &&
              selectedPatient.diagnostic_list &&
              selectedPatient.diagnostic_list.map((items, index) => (
                <div className="Itemlist" key={index}>
                  <div className="listed">{items.name}</div>
                  <div className="listed">{items.description}</div>
                  <div className="listed">{items.status} </div>
                </div>
              ))}
          </div>
        </div>
        <div className="lastcont">
          <div className="Profilecontent">
            <div className="pic">
              <div className="pic2">
                <img
                  src={selectedPatient.profile_picture}
                  alt=""
                  width={100}
                  height={100}
                />{" "}
                <br />
                <div className="Nom">{selectedPatient.name} </div>
              </div>
            </div>
            <div className="persons ">
              <img
                src={Calender}
                alt={""}
                width={40}
                height={40}
                className=" "></img>
              <div className="profile">
                <span className="title ">Date of Birth</span> <br />
                <span className="doctor-name">
                  {selectedPatient.date_of_birth &&
                    new Date(selectedPatient.date_of_birth).toLocaleDateString(
                      "en-US",
                      { month: "long", day: "numeric", year: "numeric" }
                    )}
                </span>
              </div>
            </div>
            <div className="persons ">
              <img
                src={Gender}
                alt={""}
                width={40}
                height={40}
                className=" "></img>
              <div className="profile">
                <span className="title ">Gender</span> <br />
                <span className="doctor-name">{selectedPatient.gender}</span>
              </div>
            </div>
            <div className="persons ">
              <img
                src={Contact}
                alt={""}
                width={40}
                height={40}
                className=" "></img>
              <div className="profile">
                <span className="title ">Contact Info</span> <br />
                <span className="doctor-name">
                  {selectedPatient.phone_number}
                </span>
              </div>
            </div>
            <div className="persons ">
              <img
                src={Contact}
                alt={""}
                width={40}
                height={40}
                className=" "></img>
              <div className="profile">
                <span className="title ">Emergency Contacts</span> <br />
                <span className="doctor-name">
                  {selectedPatient.emergency_contact}
                </span>
              </div>
            </div>
            <div className="persons ">
              <img
                src={Insurance}
                alt={""}
                width={40}
                height={40}
                className=" "></img>
              <div className="profile">
                <span className="title ">Insurance Provider</span> <br />
                <span className="doctor-name">
                  {selectedPatient.insurance_type}
                </span>
              </div>
            </div>
            <div className="btn">
              <button>Show All Information</button>
            </div>
          </div>

          <div className="closing">
            <div className="result">Lab Results</div>
            {selectedPatient &&
              selectedPatient.lab_results &&
              selectedPatient.lab_results.map((info, index) => (
                <div className="Dlisting " key={index}>
                  <p>{info} </p>
                  <GoDownload />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

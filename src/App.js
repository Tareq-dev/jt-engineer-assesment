import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const [carService, setCarService] = useState([]);
  const [carName, setCarName] = useState("");

  const handleBill = () => {
    console.log(carName);
    console.log(carService);
  };

  const car = [
    {
      carName: "hatchback",
      service: [
        {
          serviceCode: "BS01",
          serviceName: "BasicServicing",
          serviceFee: 2000,
        },
        {
          serviceCode: "EF01",
          serviceName: "EngineFixing",
          serviceFee: 5000,
        },
        {
          serviceCode: "CF01",
          serviceName: "ClutchFixing",
          serviceFee: 2000,
        },
        { serviceCode: "BF01", serviceName: "BrakeFixing", serviceFee: 1000 },
        { serviceCode: "GF01", serviceName: "GearFixing", serviceFee: 3000 },
      ],
    },

    {
      carName: "sedan",
      service: [
        {
          serviceCode: "BS01",
          serviceName: "BasicServicing",
          serviceFee: 4000,
        },
        {
          serviceCode: "EF01",
          serviceName: "EngineFixing",
          serviceFee: 8000,
        },
        {
          serviceCode: "CF01",
          serviceName: "ClutchFixing",
          serviceFee: 4000,
        },
        { serviceCode: "BF01", serviceName: "BrakeFixing", serviceFee: 1500 },
        { serviceCode: "GF01", serviceName: "GearFixing", serviceFee: 6000 },
      ],
    },

    {
      carName: "suv",
      service: [
        {
          serviceCode: "BS01",
          serviceName: "BasicServicing",
          serviceFee: 5000,
        },
        {
          serviceCode: "EF01",
          serviceName: "EngineFixing",
          serviceFee: 10000,
        },
        {
          serviceCode: "CF01",
          serviceName: "ClutchFixing",
          serviceFee: 6000,
        },
        { serviceCode: "BF01", serviceName: "BrakeFixing", serviceFee: 2500 },
        { serviceCode: "GF01", serviceName: "GearFixing", serviceFee: 8000 },
      ],
    },
  ];

  const carH = car.find((f) => f.carName === "hatchback");
  // console.log(carH);
  const carHService = carH.service;
  //serviceCode
  const servCode = "CF01";
  const serviceMap = carHService.find((f) => f.serviceCode === servCode);

  const price = serviceMap.serviceFee;
  // console.log(price);
  return (
    <div className="App my-10">
      <div className="p-10">
        <h1 className="text-2xl pb-10">Our Car Service</h1>
        <table className="w-full border">
          <thead>
            <tr>
              <th>Service Code </th>
              <th>Service</th>
              <th>Hatchback </th>
              <th>Sedan</th>
              <th>SUV</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <th>BS01</th>
              <td>Basic Servicing</td>
              <td>₹ 2000</td>
              <td>₹ 4000 </td>
              <td>₹ 5000 </td>
            </tr>
            <tr>
              <th>EF01 </th>
              <td>Engine Fixing</td>
              <td>₹ 5000</td>
              <td>₹ 8000</td>
              <td> ₹ 10000</td>
            </tr>
            <tr>
              <th>CF01 </th>
              <td>Clutch Fixing </td>
              <td>₹ 2000</td>
              <td>₹ 4000</td>
              <td> ₹ 6000</td>
            </tr>
            <tr>
              <th>BF01 </th>
              <td>Brake Fixing </td>
              <td>₹ 1000</td>
              <td>₹ 1500 </td>
              <td>₹ 2500</td>
            </tr>
            <tr>
              <th>GF01 </th>
              <td>Gear Fixing </td>
              <td>₹ 3000</td>
              <td>₹ 6000 </td>
              <td>₹ 8000 </td>
            </tr>
          </tbody>
        </table>
        <div className=" py-4">
          <p className="pb-3">Select car:</p>
          <select
            className="select select-info w-full max-w-xs"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
          >
            <option defaultValue>Select Type of Car</option>
            <option>Hatchback</option>
            <option>Sedan</option>
            <option>SUV</option>
          </select>
        </div>
        {/* <div className="">
          <p className="pb-3">Select Service:</p>
          <select
            
            value={carService}
            onChange={(e) => setCarService(e.target.value)}
          >
            <option defaultValue>
              Select Service Code
            </option>
            <option>BS01</option>
            <option>ES01</option>
            <option>CS01</option>
            <option>FS01</option>
            <option>GS01</option>
          </select>
        </div> */}
        <div className="flex justify-center w-full">
          <Multiselect
            isObject={false}
            onRemove={(e) =>setCarService(e)}
            onSelect={(e) => setCarService(e)}
            options={[
              "BS01",
              "ES01",
              "CS01",
              "FS01",
              "GS01",
            ]}
          />
        </div>

        <button
          className="bg-blue-300 px-6 py-1 mt-5 rounded-md cursor-pointer"
          onClick={handleBill}
          type=""
        >
          Bill
        </button>
      </div>
    </div>
  );
}

export default App;

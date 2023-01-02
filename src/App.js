import Multiselect from "multiselect-react-dropdown";
import { useState } from "react";
import "./App.css";

function App() {
  const [carService, setCarService] = useState([]);
  const [carName, setCarName] = useState("");
  const [service, setService] = useState("");

  const handleBill = () => {
    const car = carName.toLowerCase();
    const selectedCar = carData.find((f) => f.carName === car);

    const items = selectedCar.service;
    const filteredItems = items.filter((item) =>
      carService.includes(item.serviceCode)
    );
    setService(filteredItems);
   
  };


  // const totalPrice = service.reduce((a, c) => a + c.serviceFee, 0);
  const carData = [
    {
      carName: "hatchback",
      service: [
        {
          serviceCode: "BS01",
          serviceName: "Basic Servicing",
          serviceFee: 2000,
        },
        {
          serviceCode: "EF01",
          serviceName: "Engine Fixing",
          serviceFee: 5000,
        },
        { serviceCode: "CF01", serviceName: "Clutch Fixing", serviceFee: 2000 },
        { serviceCode: "BF01", serviceName: "Brake Fixing", serviceFee: 1000 },
        { serviceCode: "GF01", serviceName: "GearFixing", serviceFee: 3000 },
      ],
    },

    {
      carName: "sedan",
      service: [
        {
          serviceCode: "BS01",
          serviceName: "Basic Servicing",
          serviceFee: 4000,
        },
        {
          serviceCode: "EF01",
          serviceName: "Engine Fixing",
          serviceFee: 8000,
        },
        {
          serviceCode: "CF01",
          serviceName: "Clutch Fixing",
          serviceFee: 4000,
        },
        { serviceCode: "BF01", serviceName: "Brake Fixing", serviceFee: 1500 },
        { serviceCode: "GF01", serviceName: "Gear Fixing", serviceFee: 6000 },
      ],
    },

    {
      carName: "suv",
      service: [
        {
          serviceCode: "BS01",
          serviceName: "Basic Servicing",
          serviceFee: 5000,
        },
        {
          serviceCode: "EF01",
          serviceName: "Engine Fixing",
          serviceFee: 10000,
        },
        {
          serviceCode: "CF01",
          serviceName: "Clutch Fixing",
          serviceFee: 6000,
        },
        { serviceCode: "BF01", serviceName: "Brake Fixing", serviceFee: 2500 },
        { serviceCode: "GF01", serviceName: "Gear Fixing", serviceFee: 8000 },
      ],
    },
  ];

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

        <div className="flex justify-center w-full">
          <Multiselect
            isObject={false}
            onRemove={(e) => setCarService(e)}
            onSelect={(e) => setCarService(e)}
            options={["BS01", "EF01", "CF01", "BF01", "GF01"]}
          />
        </div>

        <button
          className="bg-blue-300 px-6 py-1 mt-5 rounded-md cursor-pointer"
          onClick={handleBill}
          type=""
        >
          Bill
        </button>

        {service.length ? (
          <div className="py-5">
            {service.map((s) => (
              <ul s={s} key={s.serviceCode}>
                <li className="italic">
                  Charges for {s.serviceName} : {s.serviceFee} ₹
                </li>
              </ul>
            ))}
          </div>
        ) : (
          ""
        )}
        <hr />
        <p className="italic font-bold">Total Price : {totalPrice} ₹</p>
        {totalPrice > 10000 ? (
          <p>
            A complimentary cleaning was provided because of your bill more than
            10,000 ₹
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;

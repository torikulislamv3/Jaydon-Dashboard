import { Chart as ChartJS, ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const Dashboard = () => {
  const donutData = {
    labels: ["Asia", "Europe", "America", "Others"],
    datasets: [
      {
        label: "Downloads",
        data: [45, 25, 20, 10],
        backgroundColor: ["#4CAF50", "#FF9800", "#2196F3", "#FF5722"],
        hoverOffset: 4,
      }
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Asia",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#4CAF50",
        fill: false,
      },
      {
        label: "America",
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: "#FF9800",
        fill: false,
      },
    ],
  };

  return (
    <div className="flex bg-gray-100 h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg">
        <div className="p-6 text-lg font-bold">Logo</div>
        <ul className="mt-6">
          <li className="p-4 hover:bg-gray-200 cursor-pointer">Overview</li>
          <li className="p-4 hover:bg-gray-200 cursor-pointer">Management</li>
          <li className="p-4 hover:bg-gray-200 cursor-pointer">Mail</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-200 to-green-400 p-6 rounded-lg flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Welcome back 👋 Jaydon Frankie</h1>
            <p className="text-gray-700">If you are going to use a passage of Lorem Ipsum...</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">Go Now</button>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/150"
              alt="illustration"
              className="h-24"
            />
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-6 mt-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-gray-600">Total Active Users</h3>
            <p className="text-3xl font-bold">18,765</p>
            <p className="text-green-500">+2.6%</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-gray-600">Total Installed</h3>
            <p className="text-3xl font-bold">4,876</p>
            <p className="text-green-500">+0.2%</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-gray-600">Total Downloads</h3>
            <p className="text-3xl font-bold">678</p>
            <p className="text-red-500">-0.1%</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-gray-600">Current Download</h3>
            <Doughnut data={donutData} />
          </div>
          <div className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-gray-600">Area Installed</h3>
            <Line data={lineData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import api from "../../api";
import type { IRecipes } from "../../types";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutCharts = () => {
  const [recipes, setRecipes] = useState<IRecipes[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [pagination, setPagination] = useState(0);
  useEffect(() => {
    setLoading(true);
    api
      .get(`/recipes?limit=5&skip=${pagination * 5}`)
      .then((res) => {
        const items = res.data.recipes || res.data;
        setRecipes(items);
      })
      .catch((err) => {
        console.error("API xatolik:", err);
        setError("Ma'lumotlarni olishda xatolik yuz berdi");
      })
      .finally(() => setLoading(false));
  }, [pagination]);
  console.log(recipes);

  const titles = recipes.map((recipe) => recipe.name);
  const count = recipes.map((recipe) => recipe.reviewCount || 0);

  const data = {
    labels: titles,
    datasets: [
      {
        label: "Review Count",
        data: count,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (loading)
    return (
      <p className="text-center content-center">
        Yuklanmoqda... <span className="loader"></span>
      </p>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div>
      <div className="mx-auto max-h-[500px] max-w-[500px] mt-10">
        <Doughnut data={data} className="mx-auto h-full w-full" />
      </div>
      <div className="flex justify-center gap-2 text-white font-medium my-5">
        <button
          disabled={pagination <= 0}
          className={`w-[150px] h-[35px] rounded duration-300
    ${
      pagination <= 0
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
    }
  `}
          onClick={() => setPagination(pagination - 1)}
        >
          Prev
        </button>
        <button
          className="w-[150px] h-[35px] rounded bg-blue-500 hover:bg-blue-700 cursor-pointer duration-300"
          onClick={() => setPagination(pagination + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DoughnutCharts;

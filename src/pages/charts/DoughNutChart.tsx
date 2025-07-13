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

  useEffect(() => {
    setLoading(true);
    api
      .get("/recipes?limit=5")
      .then((res) => {
        const items = res.data.recipes || res.data;
        setRecipes(items);
      })
      .catch((err) => {
        // console.error("API xatolik:", err);
        setError("Ma'lumotlarni olishda xatolik yuz berdi");
      })
      .finally(() => setLoading(false));
  }, []);
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

  if (loading) return <p className="text-center">Yuklanmoqda...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutCharts;

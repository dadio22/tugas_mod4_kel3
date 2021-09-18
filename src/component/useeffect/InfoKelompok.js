import { useEffect, useState } from "react";
//import "./infokelompok.css";

export default function InfoKelompok() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const alldata = [
      {
        nama: "Dadio Satriotomo",
        nim: "21120118140102",
      },
      {
        nama: "Yisrel Indrawan",
        nim: "21120118130082",
      },
    ];
    setData(alldata);
  }, []);

  return (
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Anggota Kelompok</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
    
        <div class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          
          </div>
          {data.map((item) => (
          <div class="mt-4 flex justify-between">
            <div>
              <p class="mt-1 text-sm text-gray-500">
                {item.nama}<br/>
                {item.nim}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
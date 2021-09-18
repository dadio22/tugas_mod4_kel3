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
    
        <div class="group">
          {data.map((item) => (
          <div class="mt-4">
            <div>
              <p class="mt-6 px-8 text-gray-500">
                <br/><br/>{item.nama}<br/>
                {item.nim}<br/>
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
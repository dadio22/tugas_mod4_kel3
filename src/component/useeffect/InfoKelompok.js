import { useEffect, useState } from "react";

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
    <div>
      {data.map((item) => (
        <div>
          <p>{item.nama}</p>
          <p>{item.nim}</p>
        </div>
      ))}
    </div>
  );
}

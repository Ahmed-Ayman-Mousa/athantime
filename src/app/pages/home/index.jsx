import { useState } from "react";
import "./index.scss";

function Home() {
  const [cities, setCites] = useState({
    en: ["Cairo", "Alexandria", "Aswan"],
    ar: ["القاهرة", "الإسكندرية", "أسوان"],
  });
  /**
   * to get and save the information from user
   */
  const handleSubmit = () => {
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const calc_method = document.getElementById("calc_method").value;

    console.log(country, city, calc_method);
    localStorage.setItem("country", country);
    localStorage.setItem("city", city);
    localStorage.setItem("calc_method", calc_method);
  };
  return (
    <form onSubmit={handleSubmit} id="form">
      <div>
        <label>الدولة</label>
        <select
          id="country"
          onChange={() => {
            if (document.getElementById("country").value === "Egypt") {
              setCites({
                en: ["Cairo", "Alexandria", "Aswan"],
                ar: ["القاهرة", "الإسكندرية", "أسوان"],
              });
            } else if (
              document.getElementById("country").value === "Saudi%20Arabia"
            ) {
              setCites({
                en: ["Medina", "Mecca", "Riyadh"],
                ar: ["المدينة المنورة", "مكه المكرمة", "الرياض"],
              });
            } else {
              setCites({
                en: ["Doha", "Ghuwayriyah", "Rayan"],
                ar: ["الدوحة", "الغويرية", "الريان"],
              });
            }
          }}
        >
          <option value="Egypt">مصر</option>
          <option value="Saudi%20Arabia">السعودية</option>
          <option value="Qatar">قطر</option>
        </select>
      </div>
      <div className="space"></div>
      <div>
        <label>المدينه</label>
        <select id="city">
          <option value={cities.en[0]}>{cities.ar[0]}</option>
          <option value={cities.en[1]}>{cities.ar[1]}</option>
          <option value={cities.en[2]}>{cities.ar[2]}</option>
        </select>
      </div>
      <div className="space"></div>
      <div>
        <label>طريقه الحساب</label>
        <div className="space"></div>
        <select id="calc_method">
          <option value="1">جامعة العلوم الإسلامية ، كراتشي</option>
          <option value="2">الجمعية الإسلامية لأمريكا الشمالية</option>
          <option value="3">رابطة العالم الإسلامي</option>
          <option value="4">جامعة أم القرى بمكة المكرمة</option>
          <option value="5">الهيئة المصرية العامة للمساحة</option>
          <option value="6">معهد الجيوفيزياء بجامعة طهران</option>
          <option value="7">منطقة الخليج</option>
          <option value="8">الكويت</option>
          <option value="9">قطر</option>
          <option value="10">دولة قطر</option>
          <option value="11">مجلس سنغافورة الإسلامي الديني ، سنغافورة</option>
          <option value="12">تركيا</option>
          <option value="13">الإدارة الروحية لمسلمي روسيا</option>
          <option value="14">لجنة مراقبة القمر في جميع أنحاء العالم</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Home;

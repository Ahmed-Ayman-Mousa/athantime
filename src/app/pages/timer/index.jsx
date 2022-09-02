import { useEffect } from "react";
import convertTime from "./coverttime";
import timeDiff from "./timediff";
import "./index.scss";

function Timer() {
  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/calendarByCity?city=${localStorage.getItem(
        "city"
      )}&country=${localStorage.getItem(
        "country"
      )}&method=${localStorage.getItem("calc_method")}&month=${
        new Date().getMonth() + 1
      }&year=${new Date().getFullYear()}`
    )
      .then((response) => response.json())
      .then((jsondata) => {
        const prays = [
          [
            "Fajr",
            convertTime(jsondata.data[new Date().getDate() - 1].timings.Fajr),
          ],
          [
            "Sunrise",
            convertTime(
              jsondata.data[new Date().getDate() - 1].timings.Sunrise
            ),
          ],
          [
            "Dhuhr",
            convertTime(jsondata.data[new Date().getDate() - 1].timings.Dhuhr),
          ],
          [
            "Asr",
            convertTime(jsondata.data[new Date().getDate() - 1].timings.Asr),
          ],
          [
            "Maghrib",
            convertTime(
              jsondata.data[new Date().getDate() - 1].timings.Maghrib
            ),
          ],
          [
            "Isha",
            convertTime(jsondata.data[new Date().getDate() - 1].timings.Isha),
          ],
        ];

        // put time inside <p> element
        for (let i = 0; i < prays.length; i++) {
          document
            .querySelector(".prays")
            .getElementsByTagName("p")
            .item(i).innerHTML = prays[i][0] + ": " + prays[i][1];
        }

        /*******************************************************************/

        const praysMillisecondsList = [
          {
            data: new Date(
              `08/06/2015 ${
                jsondata.data[new Date().getDate() - 1].timings.Sunrise.split(
                  " "
                )[0]
              }:00`
            ).getTime(),
            prayName: "Sunrise",
          },
          {
            data: new Date(
              `08/06/2015 ${
                jsondata.data[new Date().getDate() - 1].timings.Dhuhr.split(
                  " "
                )[0]
              }:00`
            ).getTime(),
            prayName: "Dhuhr",
          },
          {
            data: new Date(
              `08/06/2015 ${
                jsondata.data[new Date().getDate() - 1].timings.Asr.split(
                  " "
                )[0]
              }:00`
            ).getTime(),
            prayName: "Asr",
          },
          {
            data: new Date(
              `08/06/2015 ${
                jsondata.data[new Date().getDate() - 1].timings.Maghrib.split(
                  " "
                )[0]
              }:00`
            ).getTime(),
            prayName: "Maghrib",
          },
          {
            data: new Date(
              `08/06/2015 ${
                jsondata.data[new Date().getDate() - 1].timings.Isha.split(
                  " "
                )[0]
              }:00`
            ).getTime(),
            prayName: "Isha",
          },
          {
            data: new Date(
              `08/${new Date().getHours() > 12 ? "07" : "06"}/2015 ${
                jsondata.data[new Date().getDate() - 1].timings.Fajr.split(
                  " "
                )[0]
              }:00`
            ).getTime(),
            prayName: "Fajr",
          },
        ];

        const nowMilliseconds = new Date(
          `08/06/2015 ${new Date().getHours()}:${new Date().getMinutes()}:00`
        ).getTime();
        for (let i = 0; i < praysMillisecondsList.length; i++) {
          if (praysMillisecondsList[i].data > nowMilliseconds) {
            document.querySelector("#nextpray").innerHTML = `Next Pray ${
              praysMillisecondsList[i].prayName
            }: ${timeDiff(praysMillisecondsList[i].data)}`;
            setInterval(() => {
              document.querySelector("#nextpray").innerHTML = `Next Pray ${
                praysMillisecondsList[i].prayName
              }: ${timeDiff(praysMillisecondsList[i].data)}`;
            }, 60000);
            break;
          }
        }
      });
  }, []);
  return (
    <>
      <div id="nextpray"></div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="space"></div>
      <div className="prays">
        <p></p>
        <div className="space"></div>
        <p></p>
        <div className="space"></div>
        <p></p>
        <div className="space"></div>
        <p></p>
        <div className="space"></div>
        <p></p>
        <div className="space"></div>
        <p></p>
      </div>
      <button
        id="change"
        onClick={() => {
          localStorage.clear();
          localStorage.setItem(
            "theme",
            document.querySelector("html").getAttribute("theme")
          );
          window.location.reload();
        }}
      >
        Change Data
      </button>
    </>
  );
}

export default Timer;

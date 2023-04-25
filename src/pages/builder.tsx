// import Base from "../layouts/Base";
// import React from "react";
// // import use state
// import { useState, useRef } from "react";

// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";

// export default function Home() {
//   // Set current date to state
//   const [currentDate, setCurrentDate] = useState();

//   // state for view
//   const [activeView, setActiveView] = React.useState("dayGridMonth");
//   const calendarRef = React.useRef(null);

//   const handleDateClick = (arg) => {
//     // get date from click
//     const date = arg.dateStr;

//     getCalendarApi().gotoDate(date);
//     getCalendarApi().changeView("timeGridDay");
//     // remove class from 'cal_back_btn'
//     document.querySelector(".cal_back_btn").classList.remove("temp-hide");
//     document.querySelector(".modal_cal").classList.remove("MonthView");
//     document.querySelector(".modal_cal").classList.add("DayView");
//     getCalendarApi().updateSize();
//   };

//   const getCalendarApi = () => {
//     const { current } = calendarRef;
//     return current?.getApi();
//   };

//   const handleBackBtn = () => {
//     getCalendarApi().changeView("dayGridMonth");
//     document.querySelector(".cal_back_btn").classList.add("temp-hide");
//     document.querySelector(".modal_cal").classList.add("MonthView");
//     document.querySelector(".modal_cal").classList.remove("DayView");
//     // resize calendar
//     getCalendarApi().updateSize();
//   };

//   return (
//     <Base>
//       <button
//         onClick={() =>
//           setActiveView((previous) =>
//             previous === "dayGridMonth" ? "timeGridDay" : "dayGridMonth"
//           )
//         }
//       ></button>
//       <section className="cal_module">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-5 left">
//               <h2>form</h2>
//             </div>
//             <div className="col-md-7 right">
//               <div className="modal_cal MonthView">
//                 <FullCalendar
//                   //   themeSystem="bootstrap"
//                   ref={calendarRef}
//                   plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//                   initialView="dayGridMonth"
//                   initialDate="2023-04-20"
//                   dateClick={handleDateClick}
//                   businessHours={[
//                     // specify an array instead
//                     {
//                       daysOfWeek: [1, 2, 3], // Monday, Tuesday, Wednesday
//                       startTime: "08:00", // 8am
//                       endTime: "18:00", // 6pm
//                     },
//                     {
//                       daysOfWeek: [4, 5], // Thursday, Friday
//                       startTime: "10:00", // 10am
//                       endTime: "16:00", // 4pm
//                     },
//                   ]}
//                   events={[
//                     {
//                       title: "event 1",
//                       date: "2023-04-17",
//                       //   envent length

//                       duration: "02:00:00",
//                     },
//                     { title: "event 2", date: "2023-04-18" },
//                   ]}
//                 />
//                 {/* back button  */}
//                 <button
//                   className="cal_back_btn temp-hide"
//                   onClick={handleBackBtn}
//                 >
//                   <i className="fc-icon fc-icon-chevron-left"></i> back
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Base>
//   );
// }

import userAvater from "../image/istockphoto-1446934118-612x612.jpg";
import avater from "../image/pexels-photo-1130626.jpeg";
import avater1 from "../image/pexels-photo-1130624.jpeg";
import avater2 from "../image/pexels-photo-977796.jpeg";
import avater3 from "../image/pexels-photo-733500.jpeg";
import avater4 from "../image/pexels-photo-1036620.webp";
import avater5 from "../image/pexels-photo-3769021.webp";
import avater0 from "../image/down-arrow-icon-480x512-4enkcnra.png";


function Intern() {
  const internsBasicInfo = [
    {
      names: "Amadi Chidubem",
      pictures: userAvater,
      shedule: "My Schedule",
      courses: "Courses.",
      student: "Student",
      reporting: "Reporting",
      messages: "Messages",
      grades: "grades",
    },
  ];

  const internsDetailedInfo = [
    {
      id: 1,
      name: "Name",
      picture: avater0,
      group: "Group",
      homework: "Home Work",
      attendance: "Attendance",
      projects: "Projects",
      score: "Score",
    },
    {
      id: 2,
      name: "Jane Smith",
      picture: avater,
      group: "Fullstack",
      homework: 9,
      attendance: 10,
      projects: 4,
      score: 74,
    },
    {
      id: 3,
      name: "Lucia Ford",
      picture: avater1,
      group: "Designe 12",
      homework: 11,
      attendance: 11,
      projects: 6,
      score: 88,
    },
    {
      id: 4,
      name: "Victor Rose",
      picture: avater2,
      group: "Front-End 16",
      homework: 7,
      attendance: 10,
      projects: 4,
      score: 63,
    },
    {
      id: 5,
      name: "Billy Hampper",
      picture: avater3,
      group: "IT Bootcamp",
      homework: 10,
      attendance: 12,
      projects: 5,
      score: 92,
    },
    {
      id: 6,
      name: "Erica Santi",
      picture: avater4,
      group: "Designe 11",
      homework: 9,
      attendance: 16,
      projects: 4,
      score: 75,
    },
    {
      id: 7,
      name: "Kim Brown",
      picture: avater5,
      group: "Front-End 12",
      homework: 15,
      attendance: 15,
      projects: 7,
      score: 94,
    },
  ];

  return (
    <div className="parent-div">
      <div className="App">
        <header>
          <h1>Interns Management</h1>
          <p>
            student &nbsp; <i class="fa-solid fa-greater-than"></i> &nbsp;
            journal
          </p>
          <div className="bell">
            <i class="fa-solid fa-bell"></i>
          </div>
        </header>

        <main>
          {/* Display interns basic info */}
          <div className="intern-basic-info">
            {internsBasicInfo.map((intern) => (
              <div key={intern.names}>
                <div className="IMAGE-CONTAINER">
                  <img src={intern.pictures} className="IMAGE" alt="intern" />
                </div>
                <div className="intern-info">
                  <h2>{intern.names}</h2>
                  <p>
                    <a href="#">
                      <i class="fa-solid fa-briefcase"></i> &nbsp;
                      {intern.shedule}
                    </a>
                  </p>
                  <p>
                    <a href="#"><i class="fa-solid fa-book"></i> &nbsp; {intern.courses}</a>
                  </p>
                  <p>
                    <a href="#"> <i class="fa-solid fa-user-group"></i> &nbsp; {intern.student}</a>
                  </p>
                  <p>
                    <a href="#"> <i class="fa-regular fa-square-check"></i> &nbsp; {intern.grades}</a>
                  </p>
                  <p>
                    <a href="#">
                      {" "}
                      <i class="fa-solid fa-font-awesome"></i> &nbsp;{" "}
                      {intern.reporting}
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      {" "}
                      <i class="fa-solid fa-envelope"></i> &nbsp;{" "}
                      {intern.messages}
                    </a>
                  </p>
                </div>
              </div>
            ))}
            <div className="settings">
              <p>
                <a href="#">Setting</a>
              </p>
              <button className="btn">Log Out</button>
            </div>
          </div>
         {/* Display interns detailed info */}
         <div className="intern-detailed-info">
                        <button className="BTN">Search</button>
                        <section className="interns-list">
                            {internsDetailedInfo.map(intern => (
                                <div className="intern-card" id={`intern-${intern.id}`} key={intern.id}>
                                    <img src={intern.picture} alt="intern"/>
                                    <div className="intern-card-2">
                                        <h2 className="group"><a href="#">{intern.name}</a></h2> 
                                        <p className="group"><a href="#">{intern.group}</a></p>
                                        <p className="group"><a href="#">{intern.homework}</a></p>
                                        <p className="group"><a href="#">{intern.attendance}</a></p>
                                        <p className="group"><a href="#">{intern.projects}</a></p>
                                        <p className="group"><a href="#">{intern.score}</a></p>
                                    </div>
                                </div>
                            ))}
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Intern;

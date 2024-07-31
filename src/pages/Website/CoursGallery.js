import main from "../../assets/video/الحلقة 1.mp4";
import main2 from "../../assets/video/الحلقة  2.mp4";
import main3 from "../../assets/video/الحلقة 3.mp4";
import main4 from "../../assets/video/الحلقة 4.mp4";
import main5 from "../../assets/video/الحلقة 5.mp4";
import main6 from "../../assets/video/الحلقة 6.mp4";
import Video from "./Video";

export default function CoursGallery() {
  let mainVideo = document.querySelector(".main-video video");
  let videoList = document.querySelectorAll(".video-list .vid");
  let titleVideo = document.querySelector(".main-video .title");
    const handelVideo = () => {
        videoList.forEach((video) => {
            video.addEventListener("click", () => {
                console.log("yes")
                videoList.forEach((vid) => {
                    vid.classList.remove("active");
                    video.classList.add("active");
                    if (video.classList.contains("active")) {
                        let sr = video.children[0].getAttribute("src");
                        mainVideo.src = sr;
                        let text = video.children[1].innerHTML;
                        titleVideo.innerHTML = text;
                    }
                });
            });
        });
    }
  return (
    <div className="gallery">
      <div className="main-video">
        <div className="video">
          <video src={main} controls autoplay></video>
          <h3 className="title">
            كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من
            البداية الى الاحتراف الحلقة 1.mp4
          </h3>
        </div>
      </div>
      <div className="video-list">
        <div className="vid active ">
          <video src={main} muted></video>
          <h3 className="title">
            كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من
            البداية الى الاحتراف الحلقة 1.mp4
          </h3>
        </div>
              <Video video={main2} title={" كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من البداية للاحتراف الحلقة 2"} handelVideo={handelVideo} />
              <Video video={main3} title={" كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من البداية للاحتراف الحلقة 3"} handelVideo={handelVideo} />
              <Video video={main4} title={" كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من البداية للاحتراف الحلقة 4"} handelVideo={handelVideo} />
              <Video video={main5} title={" كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من البداية للاحتراف الحلقة 5"} handelVideo={handelVideo} />
              <Video video={main6} title={" كورس شامل لتعلم اللغة الانجليزية من الصفر للمبتدئين كورس كامل من البداية للاحتراف الحلقة 6"} handelVideo={handelVideo} />

      </div>
    </div>
  );
}

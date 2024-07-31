export default function Video({video, title, handelVideo}) {
  return (
    <div className="vid" onClick={handelVideo}>
      <video src={video} muted></video>
      <h3 className="title">
        {title}
      </h3>
    </div>
  );
}

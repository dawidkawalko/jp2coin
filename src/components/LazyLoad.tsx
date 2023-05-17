import handleViewport from "react-in-viewport";
import "./LazyLoad.css";

const Block = (props: any) => {
  const { inViewport, forwardedRef, enterCount } = props;
  if (inViewport && enterCount === 1) {
    return (
      <div ref={forwardedRef}>
        <div className="container">
          <div
            className="try"
            style={{ backgroundColor: "teal", height: "20vh" }}
          >
            <span>Wanna Send goods to your loved ones?</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div ref={forwardedRef}>
      <div className="container">
        <div
          className="try-static"
          style={{ backgroundColor: "teal", height: "20vh" }}
        >
          <span>Wanna Send goods to your loved ones?</span>
        </div>
      </div>
    </div>
  );
};

const ViewportBlock = handleViewport(Block /** options: {}, config: {} **/);

const LazyLoad = () => (
  <div>
    <div style={{ height: "100vh" }}>
      <h2>Scroll down to make component in viewport</h2>
    </div>
    <ViewportBlock
      onEnterViewport={() => console.log("enter")}
      onLeaveViewport={() => console.log("leave")}
    />
  </div>
);

export default LazyLoad;

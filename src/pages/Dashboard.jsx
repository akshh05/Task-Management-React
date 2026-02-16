import { FlexBox } from "../components/FlexBox"
import { UpcomingTasks } from "../components/UpcomingTasks"
import Info from "../components/Info";

function Dashboard() {
  return ( 
    <>
    <Info title="Hi, Akshaya" description="You have 3 pending tasks"/>
    <div className="dash"> 
      <FlexBox />
      <div className="uptask"><UpcomingTasks/></div>
      </div>
      </>
  );
}

export default Dashboard

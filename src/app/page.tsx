import DragCarousel from "./parts/cardcaro";
import Clutchcontent from "./parts/clutch";
import Costcontent from "./parts/cost";
import ManageIT from "./parts/firstcomp";
import Howwedo from "./parts/how";
import Navbar from "./parts/navbar";
import Tribute from "./parts/tribute";
import Solving from "./parts/wedo";
import Bringing from "./parts/weuse";
import Whatwedo from "./parts/whatdo";
import Wherewe from "./parts/wheredo";

export default function Home(){
  return(

      <div className="flex flex-col justify-start">
    <Navbar/>

    <ManageIT/>

    <Clutchcontent/>

    <Whatwedo/>

    <Costcontent/>

    <Howwedo/>

    <Solving/>

    <Bringing/>

    <Wherewe/>

    <Tribute/>
    

    </div>

  );
}
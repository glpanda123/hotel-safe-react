import { useSelector } from "react-redux";
import { HotelSafeState } from "../store";
import "./SafeDisplay.css";

const SafeDisplay: React.FC = () => {
  // const pin = useSelector((state: RootState) => state.safe.pin);
  const locked: boolean = useSelector(
    (state: HotelSafeState) => state.safe.locked
  );
  // const input = useSelector((state: RootState) => state.safe.input);

  return (
    <div className={`safe-display ${locked ? "locked" : "unlocked"}`}>
      <div>{locked && "INVALID"}</div>
    </div>
  );
};

export default SafeDisplay;

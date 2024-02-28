import { useDispatch, useSelector } from "react-redux";
import { HotelSafeState } from "../store";
import {
  clearInput,
  lockSafe,
  setInput,
  unlockSafe,
} from "../store/slices/hotelSafeSlice";
import "./Keypad.css";

const Keypad: React.FC = () => {
  const dispatch = useDispatch();
  const locked: boolean = useSelector(
    (state: HotelSafeState) => state.safe.locked
  );
  const pin: string = useSelector((state: HotelSafeState) => state.safe.pin);
  const input: string = useSelector(
    (state: HotelSafeState) => state.safe.input
  );

  const handleKeyPress = (digit: string) =>
    input.length < 4 && dispatch(setInput(digit));

  const handleEnter = () => {
    if (!locked && input.length === 4) {
      dispatch(lockSafe());
    }
  };

  const handleClear = () => dispatch(clearInput());

  const handleUnlock = () =>
    dispatch(locked && pin === input ? unlockSafe() : clearInput());

  return (
    <div className="keypad">
      <div className="row">
        <button onClick={() => handleKeyPress("1")}>1</button>
        <button onClick={() => handleKeyPress("2")}>2</button>
        <button onClick={() => handleKeyPress("3")}>3</button>
      </div>
      <div className="row">
        <button onClick={() => handleKeyPress("4")}>4</button>
        <button onClick={() => handleKeyPress("5")}>5</button>
        <button onClick={() => handleKeyPress("6")}>6</button>
      </div>
      <div className="row">
        <button onClick={() => handleKeyPress("7")}>7</button>
        <button onClick={() => handleKeyPress("8")}>8</button>
        <button onClick={() => handleKeyPress("9")}>9</button>
      </div>
      <div className="row">
        <button onClick={handleClear}>CLR</button>
        <button onClick={() => handleKeyPress("0")}>0</button>
        <button onClick={locked ? handleUnlock : handleEnter}>Enter</button>
      </div>
    </div>
  );
};

export default Keypad;

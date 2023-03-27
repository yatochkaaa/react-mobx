import { observer } from "mobx-react-lite";
import "./counter.css";
import counter from "../../store/counter";

const Counter: React.FC = observer(() => {
  return (
    <div className="counter">
      {counter.total}
      <div className="btns">
        <button className="btn" onClick={() => counter.increment()}>
          +
        </button>
        <button className="btn" onClick={() => counter.deccrement()}>
          -
        </button>
      </div>
    </div>
  );
});

export default Counter;

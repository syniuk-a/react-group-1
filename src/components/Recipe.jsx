import { TfiAlarmClock } from "react-icons/tfi"

export const Recipe = ({ recipe: { name, time, servings, calories } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <div>
        <div>
          <TfiAlarmClock />
          <p>{time} mins</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{servings} servings</p>
        </div>
        <div>
          <span>Icon</span>
          <p>{calories} calories</p>
        </div>
      </div>
    </div>
  );
};
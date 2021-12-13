import React from "react";
import { MdDelete } from "react-icons/md";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToTop, removeFromList } from "../redux/actions/ListAction";

const SingleTask = ({ taskDetails, index }) => {
  const dispatch = useDispatch();
  const { task, id, classId, favorite } = taskDetails;
  const className = `task-list__item task-list__item--${classId}`;
  console.log(taskDetails);
  return (
    <li className={className}>
      <p>
        {index + 1}. {task}
      </p>
      <div className="buttons">
        <MdDelete
          onClick={() => dispatch(removeFromList(id))}
          className="task-list__item--btn "
        />
        {favorite ? (
          <AiFillStar
            onClick={() => dispatch(addToTop(taskDetails))}
            className="task-list__item--btn"
          />
        ) : (
          <AiOutlineStar
            onClick={() => dispatch(addToTop(taskDetails))}
            className="task-list__item--btn"
          />
        )}
      </div>
    </li>
  );
};

export default SingleTask;

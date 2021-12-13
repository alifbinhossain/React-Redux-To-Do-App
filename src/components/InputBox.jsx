import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addToList } from "../redux/actions/ListAction";

const InputBox = () => {
  const dispatch = useDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const taskDetails = {
      task: data.task,
      id: Math.round(Math.random() * 1000000000),
      classId: Math.ceil(Math.random() * 5),
    };
    dispatch(addToList(taskDetails));
    reset();
  };

  return (
    <>
      <form className="input-box" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-box__input"
          placeholder="Your Task"
          type="text"
          {...register("task", { required: true })}
        />
        <button submit className="input-box__btn">
          Add
        </button>
      </form>

      {errors.task?.type === "required" && (
        <span className="text-error">Please write your task</span>
      )}
    </>
  );
};

export default InputBox;

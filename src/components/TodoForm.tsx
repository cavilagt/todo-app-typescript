import React from "react";
import { useForm } from "react-hook-form";
import { NewTodo } from "../types/State";

type ComponentProps = {
  formTitle: string,
  onSubmit: ( data:NewTodo ) => void;
};

export const TodoForm:React.FunctionComponent< ComponentProps > = ({ formTitle="", onSubmit }) => {
  const { handleSubmit, register, formState: { errors } } = useForm<NewTodo>();

  return (
    <form className={`ui form ${ errors? 'error': '' }`} onSubmit={ handleSubmit( onSubmit )}>
      <h2>{ formTitle }</h2>
      <div className={`field ${ errors.title? 'error': '' }`}>
        <label htmlFor="title">Title</label>
        <input type="text" { ...register("title" , { required:true })} />
        {errors.title && <label>The title is required</label>}
      </div>
      
      <div className={`field ${ errors.description? 'error': '' }`}>
        <label htmlFor="description">Description</label>
        <textarea { ...register("description" , { required:true })} />
        {errors.description && <label className="inline field error">The description is required</label>}
      </div>
      <button className="ui button primary" type="submit">Create todo</button>
    </form>
  );
};

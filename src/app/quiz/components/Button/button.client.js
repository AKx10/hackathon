'use client';

const Button = ({ onClickFunction, title = "title" }) => {
  return (
    <div className="flex p-2 bg-blue-800 flex-1">
      <button onClick={onClickFunction} className="btn btn-primary">{title}</button>
    </div>
  );
};

export default Button;

import React from 'react';

export default function Reserinput(props) {
  const { title, type, id, onChange, value, name } = props;

  return (
    <>
      <label>{title}</label>
      {type === "textarea" ? (
        <textarea id={id} onChange={onChange} value={value} name={name} rows="4"></textarea>
      ) : (
        <input type={type} id={id} onChange={onChange} value={value} name={name} />
      )}
    </>
  );
}


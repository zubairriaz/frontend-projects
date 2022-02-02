import React, { useEffect, useRef, useState } from "react";

export const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li>{guest}</li>
        ))}
      </ul>
      <input ref={inputRef} value={name} onChange={onChange}></input>
      <button onClick={onClick}>Add Guests</button>
    </div>
  );
};

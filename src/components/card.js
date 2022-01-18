import React, { useState } from "react";
import { people } from "./birth-info";

const Card = () => {
  const [persons, setPersons] = useState(people);
  const [numBirthday, setNumBirthday] = useState(0);
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = `${dd}/${mm}/${yyyy}`;

  const calculateBirthdays = () => {
    console.log(persons);
    for (let i = 0; i < persons.length(); i++) {
      let birthday = persons[i].birthday;
      console.log(birthday);
      if (today.slice(0, 6) === birthday.slice(0, 6)) {
        setNumBirthday(numBirthday + 1);
      }
      return <></>;
    }
  };

  return (
    <>
      <section className="container">
        <h3>
          {calculateBirthdays} {numBirthday} birthdays today
        </h3>
        ;
        {persons.map((person) => {
          const { id, name, birthday } = person;
          const age = yyyy - parseInt(birthday.slice(6));
          return (
            <>
              {today.slice(0, 6) === birthday.slice(0, 6) ? (
                <article key={id} className="person">
                  {/* <p style={{ fontWeight: "bold" }}>{name}</p> */}
                  <h4>{name}</h4>
                  <p>{age} years</p>
                </article>
              ) : (
                <article></article>
              )}
            </>
          );
        })}
        <button
          className="btn"
          onClick={() => {
            setPersons([]);
          }}
        >
          Clear All
        </button>
      </section>
    </>
  );
};

export default Card;

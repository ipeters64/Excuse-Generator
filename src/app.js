/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGen();
  });
  console.log("hello");
};

let excuseGen = () => {
  let pronoun = ["The ", "A "];
  let subject = ["dog ", "cat ", "stranger ", "friend ", "homeless man "];
  let verb = ["ate ", "stole ", "ran away with my ", "peed on ", "chewed on "];
  let item = ["homework ", "assignment ", "notes "];
  let place = ["at my home ", "in my yard ", "in my garden "];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let subjectIndex = Math.floor(Math.random() * subject.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let itemIndex = Math.floor(Math.random() * item.length);
  let placeIndex = Math.floor(Math.random() * place.length);

  return (
    pronoun[pronounIndex] +
    "" +
    subject[subjectIndex] +
    "" +
    verb[verbIndex] +
    "" +
    item[itemIndex] +
    "" +
    place[placeIndex]
  );
};

import { Data } from "./data";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("formPayment") as HTMLFormElement;
  const errorMessage = document.getElementById("errorMessage");

  form!.addEventListener("submit", (e) => {
    e.preventDefault();
    
  });
});
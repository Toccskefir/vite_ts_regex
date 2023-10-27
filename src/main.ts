import { Data } from "./data";

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("formPayment") as HTMLFormElement;
  const errorMessage = document.getElementById("errorMessage");

  form!.addEventListener("submit", (e) => {
    e.preventDefault();
    const fullName: string = (document.getElementById("fullName") as HTMLInputElement).value;
    const country: string = (document.getElementById("country") as HTMLInputElement).value;
    const city: string = (document.getElementById("city") as HTMLInputElement).value;
    const street: string = (document.getElementById("street") as HTMLInputElement).value;
    const postcode: string = (document.getElementById("postcode") as HTMLInputElement).value;
    const bankcardNumber: string = (document.getElementById("bankcardNumber") as HTMLInputElement).value;
    const checkcode: string = (document.getElementById("checkcode") as HTMLInputElement).value;
    const bankcardName: string = (document.getElementById("bankcardName") as HTMLInputElement).value;

    try {
      const data: Data = new Data(fullName, country, city, street, postcode, bankcardNumber, checkcode, bankcardName);
      errorMessage!.style.color = 'green';
      errorMessage!.textContent = "Sikeres fizetés";
      form.reset();
    } catch (e) {
      if (e instanceof Error) {
        errorMessage!.style.color = 'red';
        errorMessage!.textContent = e.message;
      }
    }
  });
});
export class Data {
    //Regular expressions
    private regexText = /^[a-z ]+$/i;
    private regexStreet = /^[a-z 0-9]+$/i;
    private regexPostcode = /^[A-Z0-9]+$/;
    private regexBankcardNumber = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}$/;
    private regexCheckcode = /^[0-9]{3}$/;

    //Constructor
    constructor(public fullName: string,
                public country: string,
                public city: string,
                public street: string,
                public postcode: string,
                public bankcardNumber: string,
                public checkcode: string,
                public bankcardName: string) {
                    if(!this.regexText.test(fullName)) {
                        throw Error("Érvénytelen név formátum!");
                    } else if (!this.regexText.test(country)) {
                        throw Error("Érvénytelen ország formátum!");
                    } else if (!this.regexText.test(city)) {
                        throw Error("Érvénytelen város formátum!");
                    } else if (!this.regexStreet.test(street)) {
                        throw Error("Érvénytelen utca, házszám formátum!");
                    } else if (!this.regexPostcode.test(postcode)) {
                        throw Error("Érvénytelen irányítószám formátum!");
                    } else if (!this.regexBankcardNumber.test(bankcardNumber)) {
                        throw Error("Érvénytelen bankkártya szám formátum! (helyes formátum: xxxx-xxxx-xxxx-xxxx)");
                    } else if (!this.regexCheckcode.test(checkcode)) {
                        throw Error("Érvénytelen ellenőrző kód formátum!");
                    } else if (!this.regexText.test(bankcardName)) {
                        throw Error("Érvénytelen bankkártyára írt név formátum!");
                    }
                }
}
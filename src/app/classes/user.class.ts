export default class User {
  firstName: string;
  name: string;
  birthDate: number;
  street: string;
  zipCode: string;
  mail: string;
  city: string;
  phone: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : '';
    this.name = obj ? obj.name : '';
    this.birthDate = obj ? obj.birthDate : '';
    this.street = obj ? obj.street : '';
    this.zipCode = obj ? obj.zipCode : '';
    this.mail = obj ? obj.mail : '';
    this.city = obj ? obj.city : '';
    this.phone = obj ? obj.phone : '';
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      name: this.name,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      mail: this.mail,
      city: this.city,
      phone: this.phone,
    };
  }
}

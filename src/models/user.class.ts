export class User {
  firstName: string = '';
  lastName: string = '';
  birthdate: number | null = null;
  gender: string = '';
  country: string = '';
  city: string = '';
  zipCode: number | null = null;
  streetAndHouseNumber: string = '';

  constructor(obj?: any) {
    if (obj) {
      this.firstName = obj ? obj.firstName : '';
      this.lastName = obj ? obj.lastName : '';
      this.birthdate = obj ? obj.birthdate : null;
      this.gender = obj ? obj.gender : '';
      this.country = obj ? obj.country : '';
      this.city = obj ? obj.city : '';
      this.zipCode = obj ? obj.zipCode : null;
      this.streetAndHouseNumber = obj ? obj.streetAndHouseNumber : '';
    }
  }
}

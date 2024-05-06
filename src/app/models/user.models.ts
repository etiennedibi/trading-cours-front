export class User {
  id!: number;
  nom_complet!: string;
  telephone!: number;
  password!: string;
  password_confirmation!: string;
  more_info?:  string;
  is_active: number = 0;
}

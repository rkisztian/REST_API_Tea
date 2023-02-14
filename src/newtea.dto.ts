import { IsInt, IsDefined, IsOptional, Min } from 'class-validator';

export default class NewTeaDto {
  @IsDefined({ message: 'A tea tipusának megadása kötelező' })
  tipus: string;

  @IsDefined({ message: 'Az íz megadása kötelező' })
  iz: string;

  @Min(100)
  @IsInt({ message: 'Az ár egészszámnak kell lenne' })
  ar: string;

  @IsOptional()
  id: number;
}

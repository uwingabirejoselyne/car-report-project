import {
  IsEmail,
  IsString,
  IsOptional,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
export class createUserUpdate {
  @IsOptional()
  @IsEmail({}, { message: 'Invalid email format' })
  readonly email: string;

  @IsOptional()
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(6, { message: 'Password should be at least 6 characters long' })
  readonly password: string;
}

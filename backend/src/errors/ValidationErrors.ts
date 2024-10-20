import { HttpStatusCode } from 'axios';
import BaseError from './BaseErrors';


export class ValidationErrors extends BaseError {
  constructor(errors: unknown) {
    super(HttpStatusCode.UnprocessableEntity);
    this.name = 'UNPROCESSABLE_ENTITY';
    this.message = 'Something went wrong, please try again later';
    this.constraints = errors;
  }
}

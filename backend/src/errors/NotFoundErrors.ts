import { HttpStatusCode } from 'axios';
import BaseError from './BaseErrors';


export class NotFoundErrors extends BaseError {
  constructor() {
    super(HttpStatusCode.NotFound);
    this.name = 'NOT_FOUND';
    this.message = 'The data you\'re looking for is not exists.';
  }
}

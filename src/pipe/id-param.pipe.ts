import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class IdParamPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value.split(',').map(Number);
  }
}

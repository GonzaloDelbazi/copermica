import { Injectable } from '@angular/core';
import {
  IEntidadBaseConId,
  ComisionGrupo
} from '../interfaces/comision-respone';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseCrudService<IEntidadBaseConId> {
  abstract callHttp(value: string): string;
  async crudMethods(value: string) {
    const valor = await this.callHttp(value);
    console.log(valor);
  }
}
export class Children<T> extends BaseCrudService<ComisionGrupo<T>> {
  private url = 'http://www.example.com/comisiongrupo';
  callHttp(value: string): string {
    return `${this.url}/${value}`;
  }

}
const array = ['get', 'post', 'put', 'update'];
let myChildrenInstance = new Children();
for (let method of array) {
  myChildrenInstance.crudMethods(method.toUpperCase());
}

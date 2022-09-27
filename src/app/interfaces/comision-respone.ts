export interface ComisionGeneral {

}

export interface ComisionGrupo<T> extends IEntidadBaseConId<T> {
    comisionesGenerales: ComisionGeneral[];
    nombre: string;
    descripcion?: string;
}

export interface IEntidadBaseConId<T> {
    Id:     T;
}
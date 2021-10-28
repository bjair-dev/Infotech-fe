export interface ProductModelServer {
  id: Number;
  nombre: String;
  categoria: String;
  descripcion: String;
  image: String;
  precio: Number;
  quantity: Number;
  images: String;
  imagedes: String;
  Marca: String;
  Producto: String;
  Memoria: String;
  Almacenamiento: String;
  Pantalla: String;
  Sistema: String;
} 


export interface serverResponse  {
  count: number;
  products: ProductModelServer[]
};

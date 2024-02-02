import { Product } from './../products/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { catchError, map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  products: Product[] = []

  baseUrl = "http://localhost:8080/lojas/cadastrar"
  ListarUrl = "http://localhost:8080/lojas/Listar"
  ListarId = "http://localhost:8080/lojas/selecionarpeloid"
  UptadeId = "http://localhost:8080/lojas/atualizar"
  DeletebyId = "http://localhost:8080/lojas/deletarpeloid"
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-success'] : ['msg-error']
    })
  }

  Create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(e => this.erroHandler(e))
      )
  }
  erroHandler(e: any): Observable<any> {
    this.showMessage('Ocrreu um erro!', true);
    return EMPTY;
  }

  readById(id: number): Observable<Product> {
    const url = `${this.ListarId}/${id}`
    return this.http.get<Product>(url)
  }
  uptade(Product: Product): Observable<Product> {
    const url = `${this.UptadeId}/${Product.id}`

    return this.http.put<Product>(url, Product)
  }
  delete(Product: Product): Observable<Product> {
    const url = `${this.DeletebyId}/${Product.id}`

    return this.http.delete<Product>(url)
  }

  Read(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      return merge(
        observableOf(this.http.get<Product[]>(this.ListarUrl).subscribe(products => this.products = products)),
        this.paginator.page,
        this.sort.sortChange
      )
        .pipe(map(() => this.getPagedData(this.getSortedData([...this.products]))));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }
  disconnect(): void { }


  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }
  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.nameproduct, b.nameproduct, isAsc);
        case 'id':
          return compare((a.id !== undefined ? +a.id : 0), (b.id !== undefined ? +b.id : 0), isAsc);
        case 'amount': return compare(a.amount, b.amount, isAsc);
        case 'value': return compare(+a.value, +b.value, isAsc);
        default: return 0;
      }
    });
  }

}
/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);


}





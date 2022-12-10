import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MUebles } from 'src/app/interfaces/muebles';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';



const listMuebles: MUebles[] = [
{ nombre: 'Silla', descripcion: 'Madera', dim: 'Alto', color: 'Cafe', materialesId: '1'},
{ nombre: 'Mesa', descripcion: 'Metal', dim: 'Alto', color: 'Cafe', materialesId: '2'},
{ nombre: 'Escritorio', descripcion: 'Madera', dim: 'Alto', color: 'Rojo', materialesId: '3'},
{ nombre: 'Mesa de noche', descripcion: 'Metal', dim: 'Alto', color: 'Amarillo', materialesId: '4'},
{ nombre: 'Sillon', descripcion: 'Madera', dim: 'Alto', color: 'Cafe', materialesId: '5'},
{ nombre: 'Cama', descripcion: 'Metal', dim: 'Alto', color: 'Rojo', materialesId: '6'},
{ nombre: 'Ropero', descripcion: 'Madera', dim: 'Alto', color: 'Azul', materialesId: '7'},
{ nombre: 'Estanteria', descripcion: 'Metal', dim: 'Alto', color: 'Rojo', materialesId: '8'},


];

@Component({
  selector: 'app-listado-muebles',
  templateUrl: './listado-muebles.component.html',
  styleUrls: ['./listado-muebles.component.css']
})
export class ListadoMueblesComponent implements OnInit, AfterViewInit  {
  displayedColumns: string[] = ['nombre', 'descripcion', 'dim', 'color' , 'materialesId', 'acciones'];
  dataSource = new MatTableDataSource<MUebles>(listMuebles);


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por Pagina'
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {UserserviceService} from '../../userservice.service';
import {Hcp} from '../../models/User';
import {HcpDialogComponent} from './hcp-dialog/hcp-dialog.component';

@Component({
  selector: 'app-hcp-user-list',
  templateUrl: './hcp-user-list.component.html',
  styleUrls: ['./hcp-user-list.component.scss'],
})

export class HcpUserComponent implements OnInit  {
  @ViewChild(MatTable, { static: true }) table: MatTable<any> = Object.create(null);
  searchText: any;
  displayedColumns: string[] = ['FirstName', 'Email', 'CreateDate', 'action'];

  dataSource = new MatTableDataSource<Hcp>([]);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator = Object.create(null);

  constructor(public dialog: MatDialog, private userService: UserserviceService) {}

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  // tslint:disable-next-line - Disables all
  addRowData(row_obj: Hcp): void {
    // @ts-ignore
    this.dataSource.data.splice(0, 0, {
      hcpId: row_obj.hcpId,
      firstName: row_obj.firstName,
      email: row_obj.email,
      registrationDate: row_obj.registrationDate,
      action: ''
    });
    this.table.renderRows();
  }

  ngOnInit(): void {
  this.getUnApprovedHcpList();
  }

  update(approve: string, element: Hcp): void {
    element.action = approve;
    const dialogRef = this.dialog.open(HcpDialogComponent, {
      data: element,
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getUnApprovedHcpList();
    });
  }

  private getUnApprovedHcpList(): void {
    this.userService.getUnApprovedList().subscribe((res: Hcp[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
    });
  }
}

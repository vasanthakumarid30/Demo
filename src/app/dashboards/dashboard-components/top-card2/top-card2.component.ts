import {Component, OnInit} from '@angular/core';
import {DashboardCounts} from '../../../models/User';
import {UserserviceService} from '../../../userservice.service';

@Component({
  selector: 'app-top-card2',
  templateUrl: './top-card2.component.html',
  styleUrls: ['./top-card2.component.scss'],
})
export class TopCard2Component implements OnInit{
  counts: DashboardCounts | undefined;
  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.userService.getDashboardCount().subscribe((res: DashboardCounts | undefined) => {
      this.counts = res;
    });
  }
}

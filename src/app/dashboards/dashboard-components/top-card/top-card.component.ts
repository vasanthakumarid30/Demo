import {Component, OnInit} from '@angular/core';
import {UserserviceService} from '../../../userservice.service';
import {DashboardCounts} from '../../../models/User';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss'],
})
export class TopCardComponent implements OnInit{
  counts: DashboardCounts | undefined;
  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.userService.getDashboardCount().subscribe((res: DashboardCounts | undefined) => {
        this.counts = res;
    });
  }
}

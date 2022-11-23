import { Component, OnInit } from '@angular/core';

import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

import { Observable } from 'rxjs';
import { LoadDataService } from '../load-data.service';
import { AdminUnit } from '../adminUnit';

@Component({
  selector: 'app-depart-list',
  templateUrl: './depart-list.component.html',
  styleUrls: ['./depart-list.component.scss']
})
export class DepartListComponent implements OnInit{
  departements: any = [];
  treeControl = new NestedTreeControl<AdminUnit>(node => node.children);
  dataSource = new MatTreeNestedDataSource<AdminUnit>();
  
  constructor(private loadData: LoadDataService) {}

  departements_init(){
    this.departements = this.loadData.getData();
    this.dataSource.data = this.departements;
    console.log(this.departements);
  }

  hasChild = (_: number, node: AdminUnit) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
    this.departements_init();
  }
}
/*
@Component({
  selector: 'tree-nested-overview-example',
  templateUrl: 'tree-nested-overview-example.html',
  styleUrls: ['tree-nested-overview-example.css'],
})
export class TreeNestedOverviewExample {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}*/
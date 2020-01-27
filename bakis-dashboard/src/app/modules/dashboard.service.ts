import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor() {}

  bigChart() {
    return [
      {
        name: "asia",
        data: [502, 635, 889, 947, 1402, 3634, 5268]
      },
      {
        name: "namie",
        data: [10, 635, 889, 947, 1402, 3634, 5268]
      },
      {
        name: "as",
        data: [502, 1022, 889, 947, 1402, 3634, 5268]
      },
      {
        name: "asda",
        data: [502, 1515, 889, 947, 1402, 3634, 5268]
      },
      {
        name: "dddddd",
        data: [502, 30, 889, 947, 1402, 3634, 5268]
      }
    ];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [
      {
        name: "Chrome",
        y: 61.41,
        sliced: true,
        selected: true
      },
      {
        name: "Internet Explorer",
        y: 11.84
      },
      {
        name: "Firefox",
        y: 10.85
      },
      {
        name: "Edge",
        y: 4.67
      },
      {
        name: "Safari",
        y: 4.18
      },
      {
        name: "Sogou Explorer",
        y: 1.64
      },
      {
        name: "Opera",
        y: 1.6
      },
      {
        name: "QQ",
        y: 1.2
      },
      {
        name: "Other",
        y: 2.61
      }
    ];
  }
}

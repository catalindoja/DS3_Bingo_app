import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bingo-board',
  templateUrl: './bingo-board.component.html',
  styleUrls: ['./bingo-board.component.css']
})
export class BingoBoardComponent implements OnInit {
  // 5x5 Bingo board with hardcoded tasks
  tasks: string[][] = [
    ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'],
    ['Task 6', 'Task 7', 'Task 8', 'Task 9', 'Task 10'],
    ['Task 11', 'Task 12', 'Task 13', 'Task 14', 'Task 15'],
    ['Task 16', 'Task 17', 'Task 18', 'Task 19', 'Task 20'],
    ['Task 21', 'Task 22', 'Task 23', 'Task 24', 'Task 25']
  ];
  

  // Array to track which tasks are completed (boolean matrix)
  completedTasks: boolean[][] = Array.from({ length: 5 }, () => Array(5).fill(false));

  // Simulated selected color for a player (for now, hardcoded to 'lightblue')
  selectedColor: string = 'lightblue';

  constructor() {}

  ngOnInit(): void {}

  // Function to mark a task as completed (row, col will give us the task location)
  markTaskAsCompleted(row: number, col: number): void {
    // Toggle the task's completion status
    this.completedTasks[row][col] = !this.completedTasks[row][col];
  }
}

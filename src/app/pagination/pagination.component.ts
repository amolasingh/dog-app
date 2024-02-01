// pagination.component.ts
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {

    @Input() currentPage: number = 1;
    @Input() pageSize: number = 10;
    @Input() totalItems: number = 0;
    @Input() totalPages: number = 0;
    @Input() breeds: any = [];

    @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

    ngOnInit(): void {
        this.totalPages = Math.ceil(this.totalItems / this.pageSize);
    }

    onPrev(): void {
        if (this.currentPage > 1) {
            this.currentPage = this.currentPage - 1;
            this.pageChange.emit(this.currentPage);
        }
    }

    onNext(): void {
        if (this.currentPage < this.totalPages) {
            this.currentPage = this.currentPage + 1;
            this.pageChange.emit(this.currentPage);
        }
    }
}

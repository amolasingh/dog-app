import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA, OnInit } from "@angular/core";
import { BreedListService } from "./breedList.service";
import { MatPaginatorModule } from "@angular/material/paginator";
import { NgForOf } from "@angular/common";
import { PaginationComponent } from "../pagination/pagination.component";

@Component({
    selector: 'breed-list',
    standalone: true,
    imports: [MatPaginatorModule, NgForOf, PaginationComponent],
    providers: [BreedListService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    templateUrl: './breedList.component.html',
})
export class BreedListComponent implements OnInit {

    breedList: string[] = [];
    totalPages: number = 0;
    pageSize = 10;
    currentPage = 1;
    currentBreeds: any = [];

    constructor(private breedListService: BreedListService) {}

    ngOnInit() {
        this.getBreedList();
    }

    getBreedList(): void {
        this.breedListService.getAllBreedsData().subscribe( breeds => {
            if (breeds !== undefined) {
                this.breedList = breeds;
                this.totalPages = breeds.length;
                this.currentBreeds = this.breedList[0];
            }
        });
    }

    onPageChange(page: number): void {
        console.log(page);
        this.currentBreeds = this.breedList[page];
    }
}
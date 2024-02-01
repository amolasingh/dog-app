import { Component, OnInit } from "@angular/core";
import { BreedDetailService } from "./breedDetail.service";
import { CommonModule } from "@angular/common";
import { BreedListService } from "../breedList/breedList.service";

@Component({
    selector: 'breed-detail',
    standalone: true,
    providers: [BreedListService],
    imports: [CommonModule],
    templateUrl: './breedDetail.component.html',
})
export class BreedDetailComponent implements OnInit {
    breedDetail: string[] = [];
    breedName: string = "";

    constructor(private breedDetailService: BreedDetailService) {}

    ngOnInit(): void {
        this.getBreedDetail();
    }

    getBreedDetail(): void {
        this.breedName = "Hound";
        this.breedDetailService.getBreedDetail().subscribe( detail => this.breedDetail = detail );
    }

}
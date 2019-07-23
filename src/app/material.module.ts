import { NgModule } from '@angular/core';
import {
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatTooltipModule,
    MatSelectModule,
    MatTableModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatSelectModule,
        MatTableModule,
        CdkTableModule
    ],
    exports: [
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatSelectModule,
        MatTableModule,
        CdkTableModule
    ]
})
export class MaterialModule {}

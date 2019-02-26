import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule, MatFormFieldControl, MatFormFieldModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatNativeDateModule,MatSidenavModule } from '@angular/material';
import { MatCardModule} from '@angular/material/card';
import { MatBadgeModule} from '@angular/material/badge';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerInput} from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material';
import { NativeDateAdapter } from '@angular/material';


import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppSidenavListComponent } from './app-sidenav-list/app-sidenav-list.component';


@NgModule({
  declarations: [
    // AppLayoutComponent, 
    // AppHeaderComponent, 
    // AppSidenavListComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCardModule,
    MatBadgeModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    NgxMaterialTimepickerModule,
    AmazingTimePickerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    ToastrModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    
  ],
  exports: [
    // AppLayoutComponent, 
    // AppHeaderComponent, 
    // AppSidenavListComponent,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCardModule,
    MatBadgeModule,
    MatRadioModule,
    MatDatepickerModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    NgxMaterialTimepickerModule,
    AmazingTimePickerModule,
    MatGridListModule,
    MatFormFieldModule,
    MatDialogModule,
    ToastrModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
  ],
})
export class MaterialModule {}


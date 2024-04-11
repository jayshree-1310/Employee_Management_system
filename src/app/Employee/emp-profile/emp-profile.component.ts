import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive, RouterOutlet ,Router} from '@angular/router';
import { EmployeeService } from '../../core/employee-service.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { EditUserPopupComponent } from '../../Common/edit-user-popup/edit-user-popup.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from '../../core/auth.service';
@Component({
  selector: 'app-emp-profile',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    MatButtonModule,
  ],
  templateUrl: './emp-profile.component.html',
  styleUrl: './emp-profile.component.css',
})
export class EmpProfileComponent implements OnInit {
  employee: any;
  sanitizer: DomSanitizer = inject(DomSanitizer);

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployeeByEmail(localStorage.getItem('email'))
      .subscribe((data) => {
        this.employee = data;
      });
  }
  getImageUrl(): SafeUrl {
    // Extracting image type from base64 string
    const typeMatch = this.employee.image.match(
      /^data:(image\/[a-z]+);base64,/i
    );

    if (typeMatch && typeMatch.length > 1) {
      const imageType = typeMatch[1];
      return this.sanitizer.bypassSecurityTrustUrl(
        'data:' + imageType + ';base64,' + this.employee.image
      );
    } else {
      return this.sanitizer.bypassSecurityTrustUrl(
        'data:image/png;base64,' + this.employee.image
      );
    }
    return ''; // Or provide a placeholder image
  }
  editUser(element: any) {
    const _editUserPopup = this.dialog.open(EditUserPopupComponent, {
      width: '50%',
      enterAnimationDuration: '350ms',
      exitAnimationDuration: '350ms',
      data: {
        data: element,
      },
    });
    _editUserPopup.afterClosed().subscribe((updatedProfile) => {
      if (updatedProfile) {
        
        element = updatedProfile;
        
        
      }
    });
  }
  
  
}

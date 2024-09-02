import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HomeService } from '../../_services/home.service';

@Component({
  selector: 'app-magasin-details',
  templateUrl: './magasin-details.component.html',
  styleUrls: ['./magasin-details.component.scss']
})
export class MagasinDetailsComponent implements OnInit {
  // MISE A JOUR FIxiNG
  Magasin = new FormGroup({
    nom: new FormControl(''),
    adresse: new FormControl(''),
    reference: new FormControl('')
  })
  constructor(
    private service : HomeService ,
    
  ) { }
  public data!: number;
  ngOnInit(): void {
    if (this.data){
      this.service.getUnique('magasin','getById',this.data).subscribe({
        next: (reponse: any) => {
          console.log('res : ', reponse)
      }
    })
      
    }
  }

}
// etudiant = new Etudiant
//   constructor(private dialog : MatDialog,private etudiantServices:EtudiantService,private router:Router,@Inject (MAT_DIALOG_DATA) public data : number) {}

//   ngOnInit() {
//     if (this.data) {
//       this.etudiantServices.getByid_etudiant(this.data).subscribe(
//         dataa => {
//           this.etudiant = dataa;
//           console.log(this.etudiant);
//         }, err => {
//           console.log(err);
//         }
//       )
//     }
//     this.listeEtudiants()
//   }

//   listeEtudiants(){
//     this.etudiantServices.listeEtudiant().subscribe(data=>{
//       console.log(data);
//     })
//   }

//   onModifier(){
//     this.etudiantServices.update_etudiant(this.etudiant).subscribe(data=>{
//      console.log(data);
     
//      // this.listeEtudiants()
//       this.dialog.closeAll()
//          })
//   }

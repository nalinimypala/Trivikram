import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-matissue',
  standalone: true,
  imports: [ CommonModule,FormsModule ],
  templateUrl: './matissue.component.html',
  styleUrl: './matissue.component.css'
})
export class MatissueComponent {
  // Variables for form fields
  baseDate: string = '';
  movementType: string = '';
  goodRecipient: string = '';
  receivingStorLoc: string = '';
  plant: string = '';

  // Control the visibility of subfields
  showSubFields: boolean = false;
  
   // Array to hold table data
   items: Array<any> = [
    {
      material: 'Material-1',
      quantity: 10,
      unit: 'kg',
      plant: 'Plant-1',
      storageLoc: 'Storage-1',
      batch: 'Batch-001',
    },
    {
      material: 'Material-2',
      quantity: 15,
      unit: 'pcs',
      plant: 'Plant-2',
      storageLoc: 'Storage-2',
      batch: 'Batch-002',
    },
    {
      material: 'Material-3',
      quantity: 20,
      unit: 'ltr',
      plant: 'Plant-3',
      storageLoc: 'Storage-3',
      batch: 'Batch-003',
    },
    { quantity: 0, unit: '', sku: '', plant: '' },
    { quantity: 0, unit: '', sku: '', plant: '' },
  ];
  
  
selectedMaterial: any=null;
 showDetailsIndex: number | null = null;

  // Method to display the details table
  showDetailsTable(index: number): void {
    this.showDetailsIndex = index;
  }

  //  Method to close the details table
   closeDetailsTable(): void {
    this.showDetailsIndex = null;
   }
  
   // Method to add a new row to the table
   addRow(): void {
    this.items.push({
      material: '',
      quantity: null,
      unit: '',
      plant: '',
      storageLoc: '',
      batch: '',
    });
  }
 // Called when MovementType input changes
 updateSubFieldsAndTable() {
  // Show subfields when MovementType is filled
  this.showSubFields = !!this.movementType;

  // Update subfields and table values based on MovementType
  const prefilledMaterial = this.movementType + '-Material';
  const prefilledPlant = this.movementType + '-Plant';

  this.items.forEach(item => {
    if (!item.material) item.material = prefilledMaterial;
    if (!item.plant) item.plant = prefilledPlant;
  });

  // Set GoodRecipient and other subfields dynamically
  this.goodRecipient = this.movementType + '-Recipient';
}
// Method to delete a specific row
deleteItem(index: number): void {
  this.items.splice(index, 1); 
  this.logItems();// Remove item from array by index
}
logReceivingStorLoc(): void {
  console.log('ReceivingStor.Loc:', this.receivingStorLoc);
}
logItems(): void {
  console.log('Items:', this.items);
}

// Method to add a new item row to the table
  addItem(): void {
    this.items.push({
      material: this.movementType + '-Material',
      quantity: null,
      unit: '',
      plant: this.movementType + '-Plant',
      storageLoc: '',
      batch: ''
    });
  }
}



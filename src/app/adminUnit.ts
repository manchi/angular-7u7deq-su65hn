export interface AdminUnit {
    id: number;
    name: string;
    kind: string;
    children?: AdminUnit[];
  }

  /*
  "id": 3, "name": "Ain", "kind": "FRDEPA", "code": "01", "children":
  children?: FoodNode[];
  */
export class RoleDto {
  id: string;
  name: string;

  updateId(id: string) {
    this.id = id;
  }
}
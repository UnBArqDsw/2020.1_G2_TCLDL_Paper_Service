import { UserRole } from '@domain/value_object/RoleUserValueObject';
import * as typeorm from 'typeorm';
import { UserAdapter } from './UserAdapter';

const roles = new UserRole();
describe('User adapter', () => {
  const sut = new UserAdapter({
    id: 'valid_id',
    name: 'valid_name',
    lastName: 'valid_lastName',
    email: 'valid_email',
    password: 'valid_password',
    role: roles.roleCollab(),
    createdAt: 'valid_date',
    updatedAt: 'valid_date',

  });

  describe('when user is instanciated', () => {
    beforeAll(() => {
      jest.spyOn(typeorm, 'Entity');
      jest.spyOn(typeorm, 'PrimaryColumn');
      jest.spyOn(typeorm, 'Column');
    });

    it('should return a user', () => {
      expect(sut).toEqual(
        {
          id: 'valid_id',
          name: 'valid_name',
          lastName: 'valid_lastName',
          email: 'valid_email',
          password: 'valid_password',
          role: 'valid_role',
          createdAt: 'valid_date',
          updatedAt: 'valid_date',
        },
      );
    });
  });
});

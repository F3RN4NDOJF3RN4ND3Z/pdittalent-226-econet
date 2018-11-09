class CreateContactos < ActiveRecord::Migration[5.2]
  def change
    create_table :contactos do |t|
      t.String :nombre
      t.String :telefono
      t.String :email

      t.timestamps
    end
  end
end

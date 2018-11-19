class CreateContactos < ActiveRecord::Migration[5.2]
  def change
    create_table :contactos do |t|
      t.string :nombre
      t.string :telefono
      t.string :email

      t.timestamps
    end
  end
end

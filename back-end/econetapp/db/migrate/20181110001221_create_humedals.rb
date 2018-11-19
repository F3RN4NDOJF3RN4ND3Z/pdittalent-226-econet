class CreateHumedals < ActiveRecord::Migration[5.2]
  def change
    create_table :humedals do |t|
      t.string :nombre
      t.string :direccion
      t.string :ubicacion
      t.text :descripcion
      t.string :horario_atencion
      t.references :contacto, foreign_key: true

      t.timestamps
    end
  end
end

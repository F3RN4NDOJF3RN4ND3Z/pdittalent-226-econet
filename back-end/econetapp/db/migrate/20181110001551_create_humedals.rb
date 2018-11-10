class CreateHumedals < ActiveRecord::Migration[5.2]
  def change
    create_table :humedals do |t|
      t.String :nombre
      t.String :direccion
      t.String :ubicacion
      t.Text :descripcion
      t.String :horario_atencion
      t.references :contacto, foreign_key: true

      t.timestamps
    end
  end
end

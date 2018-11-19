class CreateEventos < ActiveRecord::Migration[5.2]
  def change
    create_table :eventos do |t|
      t.text :descripcion
      t.string :url_imagen
      t.string :organizador
      t.string :horario
      t.references :contacto, foreign_key: true
      t.references :humedal, foreign_key: true

      t.timestamps
    end
  end
end

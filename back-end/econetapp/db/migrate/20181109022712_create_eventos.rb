class CreateEventos < ActiveRecord::Migration[5.2]
  def change
    create_table :eventos do |t|
      t.text :descripcion
      t.Integer :id_humedal
      t.String :url_imagen
      t.String :organizador
      t.String :horario
      t.Integer :id_contacto

      t.timestamps
    end
  end
end

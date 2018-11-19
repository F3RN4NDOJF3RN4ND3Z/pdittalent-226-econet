class CreateFotosHumedals < ActiveRecord::Migration[5.2]
  def change
    create_table :fotos_humedals do |t|
      t.string :url_imagen
      t.boolean :esPrincipal
      t.references :humedal, foreign_key: true

      t.timestamps
    end
  end
end

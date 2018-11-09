class CreateFotos < ActiveRecord::Migration[5.2]
  def change
    create_table :fotos do |t|
      t.String :url_imagen
      t.String :id_humedal

      t.timestamps
    end
  end
end

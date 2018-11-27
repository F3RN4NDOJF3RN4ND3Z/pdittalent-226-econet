class CreateDenuncia < ActiveRecord::Migration[5.2]
  def change
    create_table :denuncia do |t|
      t.string :observaciones
      t.string :estado
      t.references :humedal, foreign_key: true
      t.references :usuario, foreign_key: true

      t.timestamps
    end
  end
end

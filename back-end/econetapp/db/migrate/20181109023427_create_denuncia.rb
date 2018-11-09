class CreateDenuncia < ActiveRecord::Migration[5.2]
  def change
    create_table :denuncia do |t|
      t.String :observaciones
      t.String :estado
      t.Integer :id_humedal
      t.Integer :id_usuario

      t.timestamps
    end
  end
end

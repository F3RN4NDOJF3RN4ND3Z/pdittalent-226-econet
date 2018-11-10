class CreateSuscripcionesHumedals < ActiveRecord::Migration[5.2]
  def change
    create_table :suscripciones_humedals do |t|
      t.references :usuario, foreign_key: true
      t.references :humedal, foreign_key: true

      t.timestamps
    end
  end
end

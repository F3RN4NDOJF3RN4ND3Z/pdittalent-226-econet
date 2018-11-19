class CreateUsuarios < ActiveRecord::Migration[5.2]
  def change
    create_table :usuarios do |t|
      t.string :nombre
      t.string :email
      t.string :url_imagen

      t.timestamps
    end
  end
end

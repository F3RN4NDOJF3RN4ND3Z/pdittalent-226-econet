class CreateUsuarios < ActiveRecord::Migration[5.2]
  def change
    create_table :usuarios do |t|
      t.String :nombre
      t.String :email
      t.String :url_imagen

      t.timestamps
    end
  end
end

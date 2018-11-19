class Humedal < ApplicationRecord
  belongs_to :contacto
  has_many :eventos, dependent: :destroy
  has_many :denuncias, dependent: :destroy
  has_many :fotos_humedals, dependent: :destroy

end

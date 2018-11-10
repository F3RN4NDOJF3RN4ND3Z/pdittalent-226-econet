class Humedal < ApplicationRecord
  belongs_to :contacto
  has_many :eventos, dependent: :destroy
  has_many :denuncias, dependent: :destroy
  has_many :fotos, dependent: :destroy
  has_many :suscripciones_humedales: :destroy
end

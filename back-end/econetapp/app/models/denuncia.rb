class Denuncia < ApplicationRecord
  has_and_belongs_to_many :humedal, required: true
  has_and_belongs_to_many :usuario, required: true
end

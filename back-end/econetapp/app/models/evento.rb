class Evento < ApplicationRecord
  has_and_belongs_to_many :contactos
  has_and_belongs_to_many :humedals
end

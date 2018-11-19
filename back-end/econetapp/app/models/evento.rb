class Evento < ApplicationRecord
  has_many_and_belongs_to :contactos
  has_many_and_belongs_to :humedals
end

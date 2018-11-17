class Contacto < ApplicationRecord
    has_one :humedals, dependant: :destroy
    has_many :eventos, dependant: :destroy
end

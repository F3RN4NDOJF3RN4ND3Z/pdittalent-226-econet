class Contacto < ApplicationRecord
    has_one :humedals, dependent: :destroy
    has_many :eventos, dependent: :destroy
end

class Contacto < ApplicationRecord
    has_one :humedal, dependant: :destroy
end

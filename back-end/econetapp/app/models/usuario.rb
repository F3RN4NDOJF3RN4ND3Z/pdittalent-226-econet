class Usuario < ApplicationRecord
    has_many :denuncias, dependent: :destroy
    has_many :suscripciones_humedals, dependent: :destroy
end

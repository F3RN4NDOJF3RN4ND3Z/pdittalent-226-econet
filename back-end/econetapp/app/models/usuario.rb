class Usuario < ApplicationRecord
    has_many :denuncia, dependent: :destroy
    has_many :suscripciones_humedals, dependent: :destroy
end

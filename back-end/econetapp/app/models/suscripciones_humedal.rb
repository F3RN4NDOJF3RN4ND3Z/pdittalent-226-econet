class SuscripcionesHumedal < ApplicationRecord
  belongs_to :usuario
  belongs_to :humedal
end

class Denuncia < ApplicationRecord
  has_and_belongs_to_many :humedals, required: true
  has_and_belongs_to_many :usuarios, required: true
end

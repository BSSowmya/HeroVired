class Property < ApplicationRecord
    validates :propname, presence: true,length: {minimum: 1,maximum: 100}
    validates :city, presence: true,length: {minimum: 1,maximum: 50}
    validates :country, presence: true,length: {minimum: 1,maximum: 100}
    validates :address, presence: true,length: {minimum: 1,maximum: 200}
    validates :rating, presence: true,length: {minimum: 1,maximum: 20}
    
end
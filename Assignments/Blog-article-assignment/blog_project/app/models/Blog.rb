class Blog < ApplicationRecord
    validates :blogtittle, presence: true,length:{minimum: 2,maximum: 80}
    validates :blogarticle, presence: true,length:{minimum: 2,maximum: 5000}
    validates :blogimg, presence: true

end

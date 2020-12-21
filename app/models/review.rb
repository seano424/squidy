class Review < ApplicationRecord
  validates :content, presence: true
  validates :content, length: { minimum: 15 }
  belongs_to :user
  belongs_to :place
end

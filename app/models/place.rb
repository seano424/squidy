class Place < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address? && :latitude?
  acts_as_votable
  has_many :reviews, dependent: :destroy
  validates :address, uniqueness: { scope: :name }

  def latitude?
    self.latitude.nil?
  end
end

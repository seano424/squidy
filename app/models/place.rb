class Place < ApplicationRecord
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address? && :latitude.nil?
  acts_as_votable
end

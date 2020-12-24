require 'faker'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

places = [
  {longitude: 20.633171, latitude: -87.071665, name: "Café Choux Choux", address:  "Avenida 20, Playa del Carmen, Quintana Roo 77720, Mexico"},
  {longitude: 20.635353, latitude: -87.071644, name: "Bajo Café", address:  "Calle 30 Norte, Playa del Carmen, Quintana Roo 77720, Mexico"},
  {longitude: 20.635335, latitude: -87.071756, name: "Cafe Orange", address:  "Calle 30, Playa del Carmen, Quintana Roo 77720, Mexico"},
  {longitude: 20.62921475, latitude: -87.07088525, name: "Starbucks", address:  "5ta Av., Playa del Carmen, Quintana Roo 77710, Mexico"},
  {longitude: 20.636614, latitude: -87.06662, name: "NEST Coworking Space", address:  "Av. 10, Mz. 150 Lt 18, Col. Zazil-Ha, Playa del Carmen"}
]

puts "destroying places"
Place.destroy_all
puts "creating places"
places.each do |place|
  Place.create({
    name: place[:name],
    address: place[:address],
    longitude: place[:longitude],
    latitude: place[:latitude]
  })
end
puts "Finished creating places..."

users = [
  {username: "boop", email: "boop@boop.com", password: 123456},
  {username: "ilovesquidi", email: "squidi@squidi.com", password: 123456},
  {username: "ilovesquiditoo", email: "woop@woop.com", password: 123456},
]

puts "destroying users..."
User.destroy_all 
puts "creating users"
users.each do |user|
  User.create!(
    {
      username: user[:username],
      email: user[:email],
      password: user[:password]
    }
  )
end
puts "users created"

reviews = []

samples = [
  "Great place to work. They have lots of tables and the atmosphere is on point.",
  "Would recommend! Lovely staff and great spot to get some work done.",
  "Pretty decent spot if you're okay with loud noise. The wifi is good though and they have cheap food."
]

100.times do
  reviews << Faker::Restaurant.review
end
puts "Creating all reviews"
reviews.uniq!.each do |review|
  Review.create!(
    {
      user_id: User.all.sample.id,
      place_id: Place.all.sample.id,
      content: "#{samples.sample} #{review}",
      wifi: [true, false].sample,
      charging_ports: [true, false].sample,
      food: [true, false].sample
    }
  )
end
puts "Finished creating reviews"
puts "Seeding finished"

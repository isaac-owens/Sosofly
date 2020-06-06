# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(id: 15, username: "test1", email: "test@test.com", gender: "male", birthdate: "1988-10-05", password: "hunter2")

hip_hop = Playlist.create(title: "90's Hip-Hop", creator_id: 15)
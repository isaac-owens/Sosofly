# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri-s3'

User.delete_all
Playlist.delete_all
Track.delete_all



demo_user = User.create(username: "UserDemo", email: "test123@test.com", gender: "non-binary", birthdate: "1988-10-05", password: "hunter2")

# PLAYLISTS

hip_hop = Playlist.create(title: "90's Hip-Hop", description: "The hippest of the hop and hoppest of the hip", creator_id: demo_user.id)

jazz = Playlist.create(title: "Smooth Jazz", description: "Hello Mellow Yellow Fellow", creator_id: demo_user.id)


# HIP HOP TRACKS

all_that = Track.create(title: "All That")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-allthat.mp3')
all_that.track_file.attach(io: file, filename: 'bendound-allthat.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: all_that.id)

bad_ass = Track.create(title: "Bad Ass")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-badass.mp3')
bad_ass.track_file.attach(io: file, filename: 'bendound-badass.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: bad_ass.id)

downtown = Track.create(title: "Downtown")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-downtown.mp3')
downtown.track_file.attach(io: file, filename: 'bendound-downtown.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: downtown.id)

dreams = Track.create(title: "Dreams")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-dreams.mp3')
dreams.track_file.attach(io: file, filename: 'bendound-dreams.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: dreams.id)

dubstep = Track.create(title: "Dub Step")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-dubstep.mp3')
dubstep.track_file.attach(io: file, filename: 'bendound-dubstep.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: dubstep.id)

endless_motion = Track.create(title: "Endless Motion")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-endlessmotion.mp3')
endless_motion.track_file.attach(io: file, filename: 'bendound-endlessmotion.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: endless_motion.id)

erf = Track.create(title: "E.R.F.")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-erf.mp3')
erf.track_file.attach(io: file, filename: 'bendound-erf.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: erf.id)

funky_suspense = Track.create(title: "Funky Suspense")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-funkysuspense.mp3')
funky_suspense.track_file.attach(io: file, filename: 'bendound-funkysuspense.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: funky_suspense.id)

groovy_hiphop = Track.create(title: "Groovy Hip-Hop")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-groovyhiphop.mp3')
groovy_hiphop.track_file.attach(io: file, filename: 'bendound-groovyhiphop.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: groovy_hiphop.id)


# JAZZ TRACKS

hip_jazz = Track.create(title: "Hip Jazz")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-hipjazz.mp3')
hip_jazz.track_file.attach(io: file, filename: 'bendound-hipjazz.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: hip_jazz.id)

moose = Track.create(title: "Moose")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-moose.mp3')
moose.track_file.attach(io: file, filename: 'bendound-moose.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: moose.id)

retrosoul = Track.create(title: "Retro Soul")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-retrosoul.mp3')
retrosoul.track_file.attach(io: file, filename: 'bendound-retrosoul.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: retrosoul.id)

sexy = Track.create(title: "Sexy")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-sexy.mp3')
sexy.track_file.attach(io: file, filename: 'bendound-sexy.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: sexy.id)

summer = Track.create(title: "Summer")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-summer.mp3')
summer.track_file.attach(io: file, filename: 'bendound-summer.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: summer.id)


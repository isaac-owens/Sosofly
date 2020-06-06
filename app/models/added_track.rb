# == Schema Information
#
# Table name: added_tracks
#
#  id          :bigint           not null, primary key
#  playlist_id :integer          not null
#  track_id    :integer          not null
#
class AddedTrack < ApplicationRecord
  belongs_to :playlist
  belongs_to :track
end

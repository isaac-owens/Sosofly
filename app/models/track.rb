# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Track < ApplicationRecord
  validates :title, presence: true

  has_one_attached :track_file

  has_many :added_tracks


  has_many :playlists, 
    through: :added_tracks
end
